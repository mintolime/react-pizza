import React from 'react';
import styles from './Search.module.scss';

function Search() {
  return <input className={styles.root} placeholder="Поиск пиццы..." />;
}

export default Search;
