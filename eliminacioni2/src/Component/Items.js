import React from 'react'
import {Link} from 'react-router-dom'

function Item({ product }) {

    const {id, title, price, description, images, deleteItem, editItem } = product;

    return (
        <div className="product-item">
            <h1>Proizvod</h1>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <img src={images} />
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={() => editItem}>Edit Product</button>
            <button onClick={() => deleteItem(id)}>Delete</button>
        </div>
    )
}

export default Item