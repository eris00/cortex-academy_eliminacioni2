import React, { useState, useContext  } from 'react';
import { ProductContext } from '../../Context'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';

  function AddProduct () {

    const { items, setItems, addItem } = useContext(ProductContext);
    const navigate = useNavigate();

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
      navigate('/');
    };


  return (

    <> 
    
    <Link to="/">Go back</Link>

    <AddProductForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>


    </>
  )
}


export default AddProduct