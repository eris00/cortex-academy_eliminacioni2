import { React, useContext } from 'react'
import { ProductContext } from '../Context'

function TestComp() {

    const { items, addItem } = useContext(ProductContext);

    const itemT = {
        brand: "ErisBrand",
        category: "ErisCategory",
        description: "Eris Sutkovic desc",
        discountPercentage: 50.22,
        id: 216,
        images: ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
        price: 200,
        rating: 10.00,
        stock:22,
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        title: "developer"
      }



  return (

    <button onClick={() => {addItem(itemT)}}>press</button>
    
  )
}

export default TestComp