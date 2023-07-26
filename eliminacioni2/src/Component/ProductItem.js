import React from 'react'
import {Link} from 'react-router-dom'
import './ProductItem.css';

function ProductItem({ product, deleteItem }) {

    const {id, title, price, description, images } = product;

    const truncateTitle = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
      };

    return (
        <> 
            <div className="product-item">
                <h3>{truncateTitle(title, 26)}</h3>
                <img src={product.thumbnail} />
                <p>Price: ${price}</p>
                <p>Description: {description}</p>
                <div className='button-container'>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                    <Link to={`/product/edit/${product.id}`}>Edit Product</Link>
                    <button onClick={() => deleteItem(id)}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem