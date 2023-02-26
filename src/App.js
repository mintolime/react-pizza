import './scss/app.scss';
import Categories from './components/Categories';
import React from 'react';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import PizzaSkeleton from './components/PizzaSkeleton';

// import pizzas from './assets/pizzas.json';

function App() {
  const [pizzas, setpizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63fabf852027a45d8d5b2850.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setpizzas(res);
        setIsLoading(false);
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
            {isLoading
              ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas.map((data) => <PizzaBlock key={data.id} {...data} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
