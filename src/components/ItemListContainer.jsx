import { useState } from 'react';
import { ItemList } from './ItemList';
import { products } from "../product-data";

export const ItemListContainer = () => {;
  
    const product = products.product;
    const [listItems, setListItems ] = useState([]);
    
    // useEffect(() => {
    //     getItems()
    //     .then((resolse)=> setListItems(resolse))
        
    // }, [])
    
console.log(products);
const getItems = () => {
    return new Promise ((resolve, rejet)=>{
    setTimeout(()=>{
        resolve(products)
    },2000
    )})
}
getItems()
.then((resolse) => setListItems(resolse))

// console.log(products);
    return (
        <>
        <ItemList items={listItems}/>
        </>
    )
  

    // return (
    //     <>
    //        <ItemList/>
    //     </>
    // )
}
