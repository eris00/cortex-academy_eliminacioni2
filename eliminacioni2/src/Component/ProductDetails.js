import React, { useContext } from 'react'
import { useParams  } from 'react-router-dom';
import { ProductContext } from '../Context';

function ProductDetails() {

  const { id } = useParams();
  const { items } = useContext(ProductContext);
  const product = items.find(item => item.id == id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <> 
      <h1>Item Details</h1>
      <div>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Discount Percentage: {product.discountPercentage}</p>
        <p>ID: {product.id}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <img src={product.thumbnail} alt="Thumbnail" />
        <p>Title: {product.title}</p>
      </div>
    </>
  )
}

export default ProductDetails