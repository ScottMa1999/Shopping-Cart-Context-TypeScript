import './App.css'

// Router Setup
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { NavBar } from './components/NavBar'
import { Home } from './components/page/Home'
import { Store } from './components/page/Store'
import { About } from './components/page/About'
import { ShoppingCart } from './components/ShopingCart'

// Shopping Cart Context
import { ShoppingCartContextProvider } from './context/ShoppingCartConext'

function App() {

  return (
    <section className='App'>
      <ShoppingCartContextProvider>
        <BrowserRouter>
          <NavBar />
          <section className='home-cart'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='store' element={<Store />} />
              <Route path='about' element={<About />} />
            </Routes>
            <ShoppingCart />
          </section>
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </section>
  )
}

export default App
