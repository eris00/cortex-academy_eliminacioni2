import React from 'react'
import {Link} from 'react-router-dom'

function Item({ product, deleteItem }) {

    const {id, title, price, description, images } = product;

    return (
        <div className="product-item">
            <h1>Proizvod</h1>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <img src={images} />
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button>Edit Product</button>
            <button onClick={() => deleteItem(id)}>Delete</button>
        </div>
    )
}

export default Item