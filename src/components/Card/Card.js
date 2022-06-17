
import './Card.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const CardItem = ({ image, title, price }) => {
    return (
        <div className='div-container'>
             <Card sx={{ maxWidth: 500, height:600 }} className="card-container">
                <CardMedia
                    component="img"
                    height="450"
                    image={`./${image}`}
                    alt="Zapatillas Nike Airforce"
                    className='img-container'
                />
                <CardContent className="title-card">
                    <span>{title}</span>
                </CardContent>
                <CardActions className='price-container'>
                        <span>$ {price}</span>
                        <Button size="small" variant='contained'>Detalle</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardItem;