import React from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

function Search({ searchValue, setSearchValue }) {
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef()
  //правильное обращение к дом элементам лучше делать через ref
  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500),[]
  )

  return (
    <div className={styles.root}>
      <img className={styles.search} src="img/search_icon.svg" alt="search logo" />
      <img className={styles.clear} src="img/clear_icon.svg" alt="clear logo" onClick={onClickClear} />
      <input
        ref={inputRef}
        value={value}
        className={styles.input}
        placeholder="Поиск пиццы..."
        onChange={(evt) => {
          updateSearchValue((evt.target.value))
          setValue(evt.target.value)
        }}
      />
    </div>

  );
}

export default Search;
