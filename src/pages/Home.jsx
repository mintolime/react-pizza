import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';

function Home() {
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
    window.scrollTo(0, 0);
  }, []);

  return (
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
  );
}

export default Home;
