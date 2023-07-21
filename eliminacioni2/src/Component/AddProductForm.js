import React, { useState  } from 'react';
// import { ProductContext } from '../Context'

// const { items, setItems } = useContext(ProductContext);

  const AddProductForm = () => {
    const productInfo = {
      brand: '',
      category: '',
      description: '',
      discountPercentage: 0,
      id: 0,
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      thumbnail: '',
      title: ''
    };

    const [product, setProduct] = useState(productInfo);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Product submitted:', product);
      // setItems(productInfo);
    };

  return (
    <div>AddProduct</div>
  )
}


export default AddProduct