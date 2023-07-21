import { React, useState, useContext } from 'react'
import { ProductContext } from "../Context";

function EditProductForm({ product }) {

    const { editItem } = useContext(ProductContext);
    const [newProductData, setNewProductData] = useState(product);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pozivamo editProduct funkciju da ažurira proizvod
        editItem(product.id, newProductData);
    };

  return (

    <form onSubmit={handleSubmit}>
    <label>
        Naziv:
        <input type="text" name="title" value={newProductData.title} onChange={handleChange} />
    </label>
    <label>
        Cijena:
        <input type="number" name="price" value={newProductData.price} onChange={handleChange} />
    </label>
    <label>
        Opis:
        <textarea name="description" value={newProductData.description} onChange={handleChange} />
    </label>
    <button type="submit">Edit Product</button>
</form>

  )
}

export default EditProductForm