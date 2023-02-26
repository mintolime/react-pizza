import './scss/app.scss';
import Categories from './components/Categories';
import React from 'react';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

// import pizzas from './assets/pizzas.json';

function App() {
  const [pizzas, setpizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63fabf852027a45d8d5b2850.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setpizzas(res);
        console.log(res)
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((data) => (
              <PizzaBlock key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
