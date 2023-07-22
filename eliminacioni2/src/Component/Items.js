import React from 'react'
import ItemDetails from './ItemDetails';

function Item({ product }) {

    const { id, title, price, description, images, deleteItem, editItem } = product;

    return (
        <div className="product-item">
            <h1>Proizvod</h1>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <img src={images} />
            <button>View Details</button>
            <button onClick={(id) => editItem}>EditProduct</button>
            <button onClick={(id) => deleteItem}>Delete</button>
        </div>
    )
}

export default Item