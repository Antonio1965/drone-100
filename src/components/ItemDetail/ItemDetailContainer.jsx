import { useState, useEffect } from 'react';
// import { ItemList } from './ItemList';
import { products } from "../../product-data";
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  
    const [listItems, setListItems ] = useState([]);
    
    const{id:idParams} = useParams();

    const getSelectedItems = () => {
    return new Promise ((resolve, rejet)=>{
        setTimeout(()=>{
        resolve(products.find((item) => item.id.toString() === idParams));
    },4000);
    
    });
};   
    useEffect(() => {
             getSelectedItems().then((resolve) => setListItems(resolve));
        },
        [ idParams ]

    ); 


     return !listItems ? <Loader/> : <ItemDetail listItems={listItems}/>;
        
};