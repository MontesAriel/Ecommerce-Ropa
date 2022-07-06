
import './Card.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const CardItem = ({ image, title, price, id, stock }) => {
    
    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`div-container ${darkTheme ? 'dark-container' : ''}`} >
             <Card sx={{ maxWidth: 500, height:620 }} className={`card-container ${darkTheme ? 'dark-container-card' : ''}`}>
                <CardMedia
                    component="img"
                    height="450"
                    image={`/${image}`}
                    alt="Zapatillas Nike Airforce"
                    className='img-card'
                />
                
                <CardContent className={`title-card ${darkTheme ? 'dark-title' : ''}`}>
                    <span>{title}</span>
                </CardContent>
                <CardActions className={`price-container ${darkTheme ? 'dark-price' : ''}`}>
                        <span>$ {price}</span>

                    

                        <Button size="small" variant='contained' color='success' className={`${darkTheme ? 'dark-button' : ''}`}>
                           <Link to={`/producto/${id}`}>Comprar</Link> 
                        </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardItem;