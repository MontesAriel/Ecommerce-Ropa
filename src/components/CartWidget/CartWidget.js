import './CartWidget.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const CartWidget = () => {

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const { cartListItems } = useContext(CartContext)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const goToCart = () => {
      navigate('/cart')
      
    }
    
    return (
      <div>
        <ShoppingCartIcon
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div>

              {cartListItems.length === 0 && (
              <p>No hay productos agregados.</p>
              )}
          {cartListItems.map( ({data}, index) => {
              return(
                <div key={index}>
                    <div className='cart-container'>
                        <div className='cart-img'>
                            <img src={`/${data.image}`}></img>
                        </div>

                        <div className='cart-info'>
                            <p>{data.title}</p>
                            <span>${data.price}</span>
                        </div>

                        <Button className='cart-icon'>
                            <DeleteIcon color='success' />
                        </Button>
                    </div>
                    <Button 
                        className='finalizar-compra'
                        color='success'
                        onClick={goToCart}
                    >
                       Terminar Compra
                    </Button>
                </div>
              )
          })}
          
          </div>
        </Menu>
      </div>
    )
}

export default CartWidget;