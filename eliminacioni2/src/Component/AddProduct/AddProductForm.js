import React from 'react'
import './AddProductForm.css'

function AddProductForm({handleSubmit, handleChange, formData}) {

  return (
    <>
      <div className='form-container'>
        <h2>Add product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
            placeholder="discountPercentage"
          />
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="images"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="price"
          />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="rating"
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="stock"
          />
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="thumbnail"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
          />

          <button type="submit">Add Product</button>
        </form>
    </div>
    </>
  )
}

export default AddProductForm