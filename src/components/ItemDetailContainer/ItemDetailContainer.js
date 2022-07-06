import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos, { producto } from "../../utils/productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/FirebaseConfig";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [ product, setProduct ] = useState({})
    const navigate = useNavigate()

    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(producto)
    //         }, 2000)
    //     }) 
    // }

    useEffect ( () => {
        
        getProduct()
        .then( (prod) => {
            console.log(prod)
            setProduct(prod)
        })
        // if(productFilter){
        //     setProduct(productFilter)
        // } else {
        //     navigate('/NotFound')
        // }
    },[id])

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product
    }

    const productFilter = productos.find( (product) => {
        return product.id == id;
    })

    return (
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer;