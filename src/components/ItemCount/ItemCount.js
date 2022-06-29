import './ItemCount.css'
import { Button } from '@mui/material';

const ItemCount = ({cantidad, setCantidad}) => {
    
    

    const removeCount = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addCount = () => {
        if(cantidad < 2) {
            setCantidad(cantidad + 1)
        }
    }
    return(
        
        <div className='contador'>
                <Button
                    onClick={removeCount}
                    variant='none'
                    style={{backgroundColor: 'transparent'}}               
                    >
                         -
                </Button>

                <p>{cantidad}</p>

                <Button 
                    onClick={addCount}
                    variant='none'
                    style={{backgroundColor: 'transparent'}}
                >
                         +
                </Button>
            </div>

    )
}

export default ItemCount