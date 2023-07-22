import { React, useContext, useState } from 'react'
import { ProductContext } from '../Context'
import Item from './Items';


function TestComp() {

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
    <>
      {slicedItems.map(item => (
        <Item className='singleItem' key={item.id} product={item} deleteItem={deleteItem} editItem={editItem} />
      ))}

      {counter < items.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}

    </>
  )
}

export default TestComp