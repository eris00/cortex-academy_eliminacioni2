import { React, useContext, useState } from 'react'
import { ProductContext } from '../Context'
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {

    const { items, deleteItem, editItem } = useContext(ProductContext);
    const [counter, setCounter] = useState(9);

    if (items.length === 0) {
      return <div>Loading...</div>;
    }

  const slicedItems = items.slice(0, counter);

  const handleLoadMore = () => {
    setCounter(prevCounter => prevCounter + 9);
  };

  return (
    <div className='product-list-wrapper'>
      <h1>Available Products</h1>
      <div className='product-list-container'>
        {slicedItems.map(item => (
          <ProductItem className='singleItem' key={item.id} product={item} deleteItem={deleteItem} editItem={editItem} />
        ))}
      </div>

      {counter < items.length && (
        <button className='loadmore-btn' onClick={handleLoadMore}>Load more</button>
      )}

      
    </div>
  )

}

export default ProductList