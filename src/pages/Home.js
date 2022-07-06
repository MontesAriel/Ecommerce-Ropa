import CardList from "../components/CardList/CardList";
import { useState, useEffect } from 'react';
import productos from '../utils/productsMock'
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";

const Home = () => {

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
    
        })
  
    }, [])


    return (
        <>
            <Carrousel />
            <h2 style={{fontSize:40, color:"white"}}>Productos Destacados</h2>
            <CardList products={products} />
            <Footer />
        </>
    )
}

export default Home;

