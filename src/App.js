import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Questions from './pages/Questions';
import Products from './pages/Products'
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import  ThemeProvider  from './components/context/ThemeContext';
import { CartProvider } from './components/context/CartContext';
import Cart from './pages/Cart';

function App() {
  

  return (
    <div className="App"> 

      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contacto' element={ <Contact />} />
                <Route path='/productos' element={ <Products />} />
                <Route path='/producto/:id' element={<Detail />} />
                <Route path='/cart' element={<Cart />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes>  
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
      
     
    </div>
  );
}

export default App;
