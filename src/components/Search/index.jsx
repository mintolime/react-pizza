import React from 'react';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

function Search() {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  return (
    <div className={styles.root}>
    <img className={styles.search} src="img/search_icon.svg" alt="search logo" />
      <img className={styles.clear} src="img/clear_icon.svg" alt="clear logo" onClick={()=>{setSearchValue('')}} />
    <input
    value={searchValue}
      className={styles.input}
      placeholder="Поиск пиццы..."
      onChange={(evt) => setSearchValue(evt.target.value)}
    />
    </div>
   
  );
}

export default Search;
