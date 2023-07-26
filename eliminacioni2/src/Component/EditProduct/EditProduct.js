import { React, useState, useContext } from 'react'
import { ProductContext } from "../../Context";
import { useParams  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EditProductForm from './EditProductForm';


function EditProduct() {

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

    if (!newProductData) {
      return <div>Loading...</div>;
    }
  

  return (
    <>

      <EditProductForm handleSubmit={handleSubmit} handleChange={handleChange} newProductData={newProductData} />

    </>

  )
}

export default EditProduct