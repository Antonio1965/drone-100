import React from 'react';
import { StyledItemDetail } from './ItemDetailStyles';
import {Counter} from '../Counter/Counter';

const ItemDetail1 = ({ itemToDisplay: item }) => {
	return (
		<StyledItemDetail>
			<img src={'' + item.image} alt={item.name} />
			<div className="container">
				<h1>{item.name}</h1>
				<p>${item.price}</p>
				<Counter initial={1} stock={item.stock} />
				<button>COMPRAR</button>
			</div>
		</StyledItemDetail>
	);
};

export default ItemDetail1;