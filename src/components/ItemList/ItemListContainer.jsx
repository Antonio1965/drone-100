import { useState } from 'react';
import { ItemList } from './ItemList';
import { products } from "../../product-data";
import Loader from '../Loader/Loader';

export const ItemListContainer = () => {;
  
    // const product = products.product;
    const [listItems, setListItems ] = useState([]);
    
    console.log(products);

    const getItems = () => {
    return new Promise ((resolve, rejet)=>{
        setTimeout(()=>{
        resolve(products)
    },2000
    )})
    };

    getItems()
    .then((resolse) => setListItems(resolse))

    return !listItems.length ? <Loader/> : <ItemList items={listItems}/> 

};
