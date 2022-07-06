import CardItem from '../Card/Card';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/FirebaseConfig';




const CardList = () => {


    const [ products, setProducts ] = useState([])
    const { category } = useParams()

   

    useEffect( () => {
        setProducts([])
        getProducts().then((productos) => {
            category ? filterByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    

    const getProducts = async() => {
        const productSnapshot = await getDocs(collection(db, "productos"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        return productList;
        
    }


    const filterByCategory = (array, category) => {
        
        return array.map( (data) => {
            if(data.category === category) {
                return setProducts(products => [...products, data])
            }
        })
    }

    return (
       
        <Container>
            <Grid container >
                {
                    products.map( ({title, price, image, id, stock}) => {
                        return (


                            <Grid item md={4} key={id}>
                                <CardItem title={title} price={price} image={image} stock={stock} id={id} />
                            </Grid>


                        )
                    })
                }
            </Grid>
        </Container>

    )
}

export default CardList;