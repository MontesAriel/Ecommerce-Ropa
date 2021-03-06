import CardList from "../components/CardList/CardList";
import { useState, useEffect } from 'react';
import productos from '../utils/productsMock'
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Products = () => {

    const [ products, setProducts ] = useState([])

 
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        }) 
    }
    useEffect( () => {
        getProducts()
        .then( (response) => {
            console.log("Respuesta promesa: ", response)
            setProducts(response)
        })
        .catch((err) => {
            console.log("Fallo la llamada.")
        })
        .finally( () => {
            LoaderComponent()
        })
  
    }, [])
    return (
        <>
            <CardList products={products} />
        </>
    )
}

export default Products;