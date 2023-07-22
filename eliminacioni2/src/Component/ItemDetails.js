import React, { useContext } from 'react'
import { Link, useParams  } from 'react-router-dom';
import { ProductContext } from '../Context';

function ItemDetails() {

  const { id } = useParams();

  const { items } = useContext(ProductContext);

  const product = items.find(item => item.id == id);


  return (
    <> 
      <Link to="/">Go back</Link>
      <div>ItemDetails</div>
      <div>
        <h2>Product Details</h2>
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

export default ItemDetails