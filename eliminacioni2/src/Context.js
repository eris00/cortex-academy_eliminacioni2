import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = 'https://dummyjson.com';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItems = async () => {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            const data = await response.json();
            setItems(data.products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getItems();
      }, []);

    // //   logovanje itema
    // useEffect(() = > {
    //     console.log(items);
    // }, [items]);

    // CRUD funkcije

    const addItem = (product) => {

        const newProduct = { ...product, id: uuidv4() };

        fetch(`${BASE_URL}/products/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Proizvod uspješno dodan:", data);
            setItems([...items, product]);
          })
          .catch((error) => {
            console.error("Greška :", error);
          });
      };

    const deleteItem = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        });
        const data = await response.json();
        console.log("Deleted item ID:", data.id);
        // Ažuriranje state-a nakon brisanja proizvoda, na primer:
        setItems(items.filter(item => item.id !== id));
    } catch (error) {
        console.error('Error deleting product:', error);
    }
    }

    const editItem = (productId, newData) => {
        fetch(`${BASE_URL}/products/${productId}`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then((data)  => {
            // Ovde možete ažurirati items u centralnom store-u sa novim podacima proizvoda
            // Na primer, možete kreirati novu listu items sa ažuriranim proizvodom i postaviti je u state
            const updatedItems = items.map(item => {
                if (item.id === productId) {
                    return { ...item, ...newData };
                }
                return item;
            });
            setItems(updatedItems);
        });
    };

    return (
        <ProductContext.Provider value={{ items, setItems, addItem, deleteItem, editItem }}>
            {children}
        </ProductContext.Provider>
    );


}

export { ProductProvider, ProductContext };