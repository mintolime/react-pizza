import React from 'react';

import Paggination from '../components/Paggination';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';

function Home({ searchValue }) {
  const [pizzas, setpizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [isNumderPage, setIsNumderPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://63fabf852027a45d8d5b2850.mockapi.io/items?page=${isNumderPage}&limit=4&${
        activeCategory > 0 ? `category=${activeCategory}` : ''
      }&sortBy=${activeSort.sortProperty}&order=desc${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setpizzas(res);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, searchValue, isNumderPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={activeCategory}
          onChangeCategory={(id) => {
            setActiveCategory(id);
          }}
        />
        <Sort
          value={activeSort}
          onChangeSort={(id) => {
            setActiveSort(id);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((data) => <PizzaBlock key={data.id} {...data} />)}
      </div>
      <Paggination
        onChangePage={(num) => {
          setIsNumderPage(num);
        }}
      />
    </div>
  );
}

export default Home;
