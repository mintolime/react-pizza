import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h2>Ничего не найдено 😔 </h2>
      <p className={styles.decription}>К сожалению данная страница отсутствует...</p>
    </div>
  );
}

export default NotFound;
