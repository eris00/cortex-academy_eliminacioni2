import React, { useState, useContext  } from 'react';
import { ProductContext } from '../Context'
import {Link} from 'react-router-dom'

  function AddProductForm () {

    const { items, setItems, addItem } = useContext(ProductContext);

    const [formData, setFormData] = useState ({
      brand: '',
      category: '',
      description: '',
      discountPercentage: 0,
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      thumbnail: '',
      title: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(formData);
      setFormData({brand: '',
      category: '',
      description: '',
      discountPercentage: 0,
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      thumbnail: '',
      title: ''})
    };


  return (

    <> 

    
    <Link to="/">Go back</Link>

    <h2>Add product</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        placeholder="Brand"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="discountPercentage"
        value={formData.discountPercentage}
        onChange={handleChange}
        placeholder="discountPercentage"
      />
      <input
        type="text"
        name="images"
        value={formData.images}
        onChange={handleChange}
        placeholder="images"
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="price"
      />
      <input
        type="text"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="rating"
      />
      <input
        type="text"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="stock"
      />
      <input
        type="text"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        placeholder="thumbnail"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
      />

      <button type="submit">Add Product</button>
    </form>
    </>
  )
}


export default AddProductForm