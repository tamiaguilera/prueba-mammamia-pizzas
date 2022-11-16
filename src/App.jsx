import { Form } from 'react-router-dom'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './views/Home.jsx'
import Pizza from './views/pizza.jsx'
import Cart from './views/Cart.jsx'
import Payment from './views/Payment.jsx'
import NotFound from './views/NotFound'



function App() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])


  const globalState = {menu, cart}

  useEffect(()=> {
    fetch('/pizzas.json')
      .then((res)=> res.json())
      .then((json)=> {
        setMenu(json)
        console.log(json)
      })
      .catch((error)=> console.log(error))
  }, [])
  
  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/"element={ <Home /> } ></Route>
          <Route path='/pizza/:id'element={ <Pizza /> } ></Route>
          <Route path='/carrito'element={ <Cart /> } ></Route>
          <Route path='/pagar'element={ <Payment /> } ></Route>
          <Route path='*' element={ <NotFound /> } ></Route>

        </Routes>

        <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
}

export default App;
