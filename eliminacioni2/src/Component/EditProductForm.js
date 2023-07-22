import { React, useState, useContext } from 'react'
import { ProductContext } from "../Context";
import { Link, useParams  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditProductForm() {

    const { id } = useParams();
    const { items, editItem } = useContext(ProductContext);
    const product = items.find(item => item.id == id);
    const navigate = useNavigate();

    const [newProductData, setNewProductData] = useState(product);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editItem(product.id, newProductData);
        navigate('/');
    };

  return (
    <>
        <Link to="/">Go back</Link>

        <form onSubmit={handleSubmit}>
            <label>
                Naziv:
                <input type="text" name="title" value={newProductData.title} onChange={handleChange} />
            </label>
            <label>
                Cijena:
                <input type="number" name="price" value={newProductData.price} onChange={handleChange} />
            </label>
            <label>
                Opis:
                <textarea name="description" value={newProductData.description} onChange={handleChange} />
            </label>
            <button type="submit">Edit Product</button>
        </form>

    </>

  )
}

export default EditProductForm