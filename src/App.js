
import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFoundPage/index';
import { Routes, Route } from 'react-router-dom/dist';


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </div>
  );
}

export default App;
