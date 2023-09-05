import React from 'react';
type CategoriesProps = {
  value: number;
  onChangeCategory:any;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
