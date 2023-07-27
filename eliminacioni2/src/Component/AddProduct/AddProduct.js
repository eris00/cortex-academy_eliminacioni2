import React, { useState, useContext  } from 'react';
import { ProductContext } from '../../Context'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';

  function AddProduct () {

    const { addItem } = useContext(ProductContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
      brand: '',
      category: '',
      description: '',
      discountPercentage: '',
      images: [],
      price: '',
      rating: '',
      stock: '',
      thumbnail: '',
      title: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (formData.brand.trim().length === 0 || formData.category.trim().length === 0 || formData.description.trim().length === 0 || formData.discountPercentage.trim().length === 0 || formData.price.trim().length === 0 || formData.rating.trim().length === 0 || formData.stock.trim().length === 0 || formData.title.trim().length === 0) {
        return;
      }

      addItem(formData);
      setFormData({brand: '',
      category: '',
      description: '',
      discountPercentage: '',
      images: [],
      price: '',
      rating: '',
      stock: '',
      thumbnail: '',
      title: ''})
      navigate('/');
    };


  return (
    <AddProductForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
  )
}


export default AddProduct