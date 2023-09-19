import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import VegItem from './components/VegItem';
import NonVegItem from './components/NonVegItem';

const App = () => {
  return (
    <div className=' bg-orange-100 '>
      <div className=' bg-yellow-800 '>
        <Navbar />
      </div>

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/veg' element={<VegItem />} />
        <Route path='/nonveg' element={<NonVegItem />} />
      </Routes>
    </div>
  )
}

export default App;

