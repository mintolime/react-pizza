import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setPageCount } from '../redux/slices/filterSlice';
import Paggination from '../components/Paggination';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';

function Home({ searchValue }) {
  const { categoryId, sort, pageCount } = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  const onChangePagination = (num) => {
    dispatch(setPageCount(num))
  }
  
  const [pizzas, setpizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [isNumderPage, setIsNumderPage] = React.useState(1);


  React.useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `&search=${searchValue}` : '';

    axios.get(`https://63fabf852027a45d8d5b2850.mockapi.io/items?page=${pageCount}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sort.sortProperty}&order=desc${search}`).then(res => {
        setpizzas(res.data);
        setIsLoading(false);
      })

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, pageCount]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort
        // value={activeSort}
        // onChangeSort={(id) => {
        //   setActiveSort(id);
        // }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((data) => <PizzaBlock key={data.id} {...data} />)}
      </div>
      <Paggination
        pageCount={pageCount}
        onChangePage={onChangePagination}
      />
    </div>
  );
}

export default Home;
