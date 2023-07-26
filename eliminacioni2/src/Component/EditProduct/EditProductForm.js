import React from 'react'
import './EditProductForm.css';

function EditProductForm({handleSubmit, handleChange, newProductData}) {



  return (
    <>
        <div className='form-container'>
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
        </div>
    </>
  )
}

export default EditProductForm