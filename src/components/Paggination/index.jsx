import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paggination.module.scss';

function Paggination({ onChangePage }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(evt) => onChangePage(evt.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
}

export default Paggination;
