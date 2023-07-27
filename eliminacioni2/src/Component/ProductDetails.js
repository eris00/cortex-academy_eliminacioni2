import React, { useContext, useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom';
import { ProductContext } from '../Context';
import './ProductDetails.css';

function ProductDetails() {

  const { id } = useParams();
  const { items } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = items.find(item => item.id == id);
    setProduct(foundProduct)
  }, [items, id])

  // const product = items.find(item => item.id == id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <> 
      <h1>{product.title}</h1>
      <div className='container'>
      <img src={product.thumbnail} alt="Thumbnail" />
        <div className='information'>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Discount Percentage:</strong> {product.discountPercentage}</p>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Title:</strong> {product.title}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetails