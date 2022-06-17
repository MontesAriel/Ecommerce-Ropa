import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const Navbar = () => {

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
                                        Inicio
                                </Button>
                            </li>
                            <li>
                                <Button variant='none'
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                >
                                        Productos
                                </Button>
                            </li>
                            <li>
                                <Button variant='none'
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                >
                                        Contacto
                                </Button>
                            </li>
                            <li>
                                <Button variant='none'
                                disableRipple
                                style={{backgroundColor: 'transparent'}} 
                                >
                                        Preguntas Frecuentes
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <Button color="inherit"
                    disableRipple
                    style={{backgroundColor: 'transparent'}} 
                        >Login
                    </Button>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;