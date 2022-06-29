import './ItemDetail.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import  CartContext  from '../context/CartContext'


const ItemDetail = ({data}) => {
    
    const { addProductToCart } = useContext(CartContext)

    const [ color, setColor ]= useState('#2e7d32')
    const [cantidad, setCantidad] = useState(1)


    return(
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>

        <Grid item xs={6}>
            <img src={`/${data.image}`}></img>
        </Grid>
        <Grid item xs >
            <h2>{data.title}</h2>
            <h4>Talles</h4>
            <ButtonGroup variant="contained" color='success' className='button-talle'>
                
                <Button  onClick={()=>setColor(!color)}
                 style={{background:color ? '#333':'#2e7d32'}}>
                     39
                </Button>
                <Button onClick={()=>setColor(!color)}
                 style={{background:color ? '#333':'#2e7d32'}}>
                     39.5
                </Button>
                <Button onClick={()=>setColor(!color)}
                 style={{background:color ? '#333':'#2e7d32'}}>
                     40
                </Button>
                <Button onClick={()=>setColor(!color)}
                 style={{background:color ? '#333':'#2e7d32'}}>
                     41
                </Button>
            </ButtonGroup>

            <div>
                <h4>Color</h4>
                <div className='container-color'>
                    <button className='container-color-blue'></button>
                    <button className='container-color-black'></button> 
                </div>
            </div>
            
                <h4>Descripción</h4>
                <li>{data.description}</li>

            <p>${data.price}</p>

            <span className='span-cuotas'>3 cuotas sin interés de ${data.price / 3}</span>

            <ItemCount
                cantidad={cantidad} 
                setCantidad={setCantidad} 
            />


            <div className='grid-text'>
                <Button 
                size="small" 
                variant='contained' 
                color='success'
                onClick={() => addProductToCart({data})}
                >
                    Agregar al Carrito
                </Button>
            </div>
        </Grid>
      </Grid>
    </Box>
        </div>
    )
}

export default ItemDetail;