import { React, useContext, useState } from 'react'
import { ProductContext } from '../Context'
import Item from './Items';

function TestComp() {

    const { items, addItem, deleteItem, editItem } = useContext(ProductContext);

    const [counter, setCounter] = useState(9);

  

    // Prikaz Loading spinnera ako su items prazan niz
    if (items.length === 0) {
      return <div>Loading spinner...</div>;
    }

    // Izdvajanje prvih 9 elemenata
  const slicedItems = items.slice(0, counter);

  const handleLoadMore = () => {
    setCounter(prevCounter => prevCounter + 9);
  };


  return (
    <>
      {slicedItems.map(item => (
        <Item key={item.id} product={item} deleteItem={deleteItem} />
      ))}

      {counter < items.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}

    </>
  )
}

export default TestComp