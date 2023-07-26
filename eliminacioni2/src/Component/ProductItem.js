import React from 'react'
import {Link} from 'react-router-dom'

function ProductItem({ product, deleteItem, editItem }) {

    const {id, title, price, description, images } = product;

    return (
        <div className="product-item">
            <h1>Proizvod</h1>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <img src={images[0]} />
            <Link to={`/product/${product.id}`}>View Details</Link>
            <Link to={`/product/edit/${product.id}`}>Edit Product</Link>
            <button onClick={() => deleteItem(id)}>Delete</button>
        </div>
    )
}

export default ProductItem