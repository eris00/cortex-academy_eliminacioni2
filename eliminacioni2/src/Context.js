import React, { createContext, useState, useEffect } from "react";

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

    //   logovanje itema
    useEffect(() => {
        console.log(items);
    }, [items]);

    // CRUD funkcije

    const addItem = (product) => {
        setItems([...items, product]);
      };

    return (
        <ProductContext.Provider value={{ items, addItem }}>
            {children}
        </ProductContext.Provider>
    );


}

export { ProductProvider, ProductContext };