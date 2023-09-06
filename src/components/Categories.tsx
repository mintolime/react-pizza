import React from 'react';
import { categories } from '../config/ categories';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  
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
