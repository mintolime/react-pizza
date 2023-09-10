import React from 'react';
// import axios from 'axios';
import { useSelector } from 'react-redux';

import { selectFilter, setCategoryId, setPageCount } from '../redux/slices/filterSlice';
import Paggination from '../components/Paggination';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzasSlice';
import { useAppDispatch } from '../redux/store';

function Home() {
  const dispatch = useAppDispatch();

  const { categoryId, sort, pageCount,searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  // console.log(searchValue)

  const onChangeCategory = (id:number) => {
    dispatch(setCategoryId(id));
  };
  const onChangePagination = (num: number) => {
    // console.log(pageCount);
    dispatch(setPageCount(num));
  };

  const getPizzas = () => {
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        categoryId,
        sort,
        searchValue,
        pageCount,
        search,
      }),
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort, searchValue, pageCount]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading' ? (
          [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
        ) : status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка...</h2>
            <p >Не удалось загрузить пицки 😔 </p>
          </div>
        ) : (
          items.map((data:any) => <PizzaBlock key={data.id} {...data} />)
        )}
      </div>
      <Paggination pageCount={pageCount} onChangePage={onChangePagination} />
    </div>
  );
}

export default Home;
