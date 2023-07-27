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
            placeholder="*Brand"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="*Category"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="*Description"
          />
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
            placeholder="*Discount Percentage"
          />
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="Image"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="*Price"
          />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="*Rating"
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="*Stock"
          />
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Thumbnail"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="*Title"
          />

          <button type="submit">Add Product</button>
        </form>
    </div>
    </>
  )
}

export default AddProductForm