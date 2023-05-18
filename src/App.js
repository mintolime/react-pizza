import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFoundPage/index';
import { Routes, Route } from 'react-router-dom/dist';
import { store } from './redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice'

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {/* <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
