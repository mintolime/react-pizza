import React from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((data, i) => (
          <li
            key={i}
            onClick={() => {
              onChangeCategory(i);
            }}
            className={value === i ? 'active' : ''}>
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
