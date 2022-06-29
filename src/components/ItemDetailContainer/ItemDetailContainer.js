import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos, { producto } from "../../utils/productsMock";
import { useParams, useNavigate } from "react-router-dom";

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
        // getItem()
        // .then( (res) => {
        //     console.log(res)
        //     setProduct(res)
        // })
        if(productFilter){
            setProduct(productFilter)
        } else {
            navigate('/NotFound')
        }
    },[id])

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