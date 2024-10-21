
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDeatil';
import Cart from './pages/Cart';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cartItem,setCartItem]= useState([]);
  console.log("--------cartItem-------",cartItem)
  return (
    <div className="App">
     
     <Router>
      <div>
     <ToastContainer theme='dark' position='top-center'/>
      <Header cartItem={cartItem}/>
      <Routes>
      <Route path="/"  element={ <Home />}/>
      <Route path="/search"  element={ <Home />}/>
      <Route path="/product/:id"  element={ <ProductDetail cartItem={cartItem} setCartItem={setCartItem}/>}/>
      <Route path="/cart"  element={ <Cart cartItem={cartItem} setCartItem={setCartItem}/>}/>
      </Routes>
      </div>   
      
     </Router>
     <Footer/>  
    </div>
  );
}

export default App;
