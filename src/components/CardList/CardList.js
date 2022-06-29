import CardItem from '../Card/Card';
import { Container, Grid } from '@mui/material';


const CardList = ({ products }) => {

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