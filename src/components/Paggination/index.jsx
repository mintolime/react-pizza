import React from 'react';
import styles from './Paggination.module.scss';

function Paggination() {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено 😔 </h1>
      <p className={styles.decription}>К сожалению данная страница отсутствует...</p>
    </div>
  );
}

export default Paggination;
