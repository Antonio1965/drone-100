import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemDetail1 from './ItemDetail1';

const ItemDetailContainer1 = () => {
	///ARRAY DE ITEMS
	const itemsArray = [
        {
            id:1,
            name: 'Drone-1',
            productType: 'Drone especiales 2021',
            price: 15000,
            rating: 4,
            image: 'https://cadenaser00.epimg.net/ser/imagenes/2017/11/30/ciencia/1512057326_099663_1512057419_noticia_normal.jpg',
            description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",
    
        },
        {
            id:2,
            name: 'Drone sport',
            productType: 'Drone-2020',
            price: 11000,
            rating: 4,
            image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200_amp/public/media/image/2018/12/consejos-guia-comprar-dron_3.jpg?itok=D0-ZOt4b',
            description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",
    
        },
        {
            id:3,
            name: 'Drone-Acuatis',
            productType: 'Drone especiales acuaticos-2021',
            price: 25000,
            rating: 4,
            image: 'https://th.bing.com/th/id/OIP.xsKYJ5zq2I4jMp-AEM_3dQHaEj?pid=ImgDet&rs=1',
            description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",
    
        },
        {
            id:4,
            name: 'Drone-TIII',
            productType: 'Drone- 2019',
            price: 9000,
            rating: 2,
            image: 'https://th.bing.com/th/id/OIP.OJmNws6ZPuPdBWPVSOT-qQHaE8?pid=ImgDet&rs=1',
            description:  "Imágenes gratis de Drones. Imágenes relacionadas: drone paisaje robot volador quadrocopter tecnología vista aérea cámara bordón drones.",
    
        },










		// {
		// 	id: 1,
		// 	title: 'Mesa alquímica',
		// 	img: './img/alquimia.webp',
		// 	category: 1,
		// 	price: 1600,
		// 	stock: 16
		// },
		// {
		// 	id: 2,
		// 	title: 'Mesa de trabajo',
		// 	img: './img/mesa.webp',
		// 	category: 1,
		// 	price: 800,
		// 	stock: 64
		// },
		// {
		// 	id: 3,
		// 	title: 'Nave de ladrillos',
		// 	img: './img/ladrillos.webp',
		// 	category: 2,
		// 	price: 1700,
		// 	stock: 23
		// },
		// {
		// 	id: 4,
		// 	title: 'Lámpara animales',
		// 	img: './img/lampara.webp',
		// 	category: 2,
		// 	price: 2400,
		// 	stock: 14
		// }
	];

	///GUARDO EN UN ESTADO EL ITEM A MOSTRAR
	const [ itemToDisplay, setItemToDisplay ] = useState();

	///OBTENGO LOS PARAMETROS DE LA URL
	const { id: idParams } = useParams();

	///OBTENGO Y FILTRO EL ARRAY DE ITEMS PARA QUE ME TRAIGA EL QUE TENGO QUE MOSTRAR
	const getSelectedItem = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(itemsArray.find((item) => item.id.toString() === idParams));
			}, 4000);
		});
	};

	///HAGO UN USEEFFECT PARA QUE CAMBIE SEGUN CAMBIA EL ITEM
	useEffect(
		() => {
			setItemToDisplay(); ///SACO EL ANTERIOR
			getSelectedItem().then((result) => setItemToDisplay(result));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ idParams ]
	); ///CADA VEZ QUE CAMBIA IDPARAMS, SE EJECUTA

	///FINALMENTE RETORNO ITEMDETAIL
	return !itemToDisplay ? <Loader /> : <ItemDetail1 itemToDisplay={itemToDisplay} />;
};

export default ItemDetailContainer1;