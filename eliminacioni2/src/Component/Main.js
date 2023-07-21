import { React, useContext, useState } from 'react'
import { ProductContext } from '../Context'
import ItemDetail from './Items';

function TestComp() {

    const { items, addItem, deleteItem, editItem } = useContext(ProductContext);

    const [counter, setCounter] = useState(9);

    console.log(items);

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
        <ItemDetail key={item.id} product={item} />
      ))}

      {counter < items.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}

    </>
  )
}

export default TestComp