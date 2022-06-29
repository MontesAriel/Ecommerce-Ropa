import './Navbar.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import CartWidget from '../CartWidget/CartWidget'
import CustomizedSwitches from './ThemeSwitch/ThemeSwitch'


const Navbar = () => {

    const [open, setOpen] = useState(false)
  
    const handleClose = () => {
      setOpen(false)
    }

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

      
    return (
       
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Toolbar className='nav-container'>
        
                    <div> 
                        <h1>Clothing Style</h1>
                    </div>

                    <div className='li-container'>
                        <ul>
                            <li>
                                <Button variant='none' 
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                >
                                    <Link to='/'>
                                        Inicio
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant='none'
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                >
                                    <Link to='/productos'>
                                        Productos
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant='none'
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                >
                                    <Link to='/contacto'>
                                        Contacto
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant='none'
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                onClick={() => setOpen(true)}
                                >
                                    <Link to='/preguntas-frecuentes'>
                                    Preguntas Frecuentes
                                    </Link>
                                </Button>
                                <Modal handleClose={handleClose} open={open}>
                                    <span>Preguntas Frecuentes</span>
                                </Modal>
                            </li>
                        </ul>
                    </div>

                    <CustomizedSwitches className="background-switch" />

                    <Button color="inherit"
                    disableRipple
                    style={{backgroundColor: 'transparent'}} 
                        >
                           <CartWidget />
                    </Button>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;