import CardItem from '../Card/Card';
import { Container, Grid } from '@mui/material';


const CardList = () => {
    return (
       
        <Container>
            <Grid container >
            <Grid item md={4}>
                <CardItem title={"Zapatillas Nike Airforce"} price={32000} image={"air.png"} />
            </Grid>

            <Grid item md={4}>
                <CardItem title={"Zapatillas Nike Blazer"} price={28000} image={"blazer.png"} />
            </Grid>

            <Grid item md={4}>
                <CardItem title={"Zapatillas Vans Old Skool"} price={14000} image={"vans.jpg"} />
            </Grid>
            </Grid>
        </Container>

    )
}

export default CardList;