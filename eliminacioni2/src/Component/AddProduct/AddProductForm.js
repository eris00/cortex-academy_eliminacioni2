import React from 'react'

function AddProductForm({handleSubmit, handleChange, formData}) {
  return (
    <>
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
        type="text"
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
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="price"
      />
      <input
        type="text"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="rating"
      />
      <input
        type="text"
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
    </>
  )
}

export default AddProductForm