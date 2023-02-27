import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home'
import NotFound from './pages/NotFoundPage/index';

// import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      {/* <NotFound /> */}
      <div className="content"></div>
    </div>
  );
}

export default App;
