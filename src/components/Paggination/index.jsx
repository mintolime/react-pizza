import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paggination.module.scss';

function Paggination({ pageCount,onChangePage }) {
// console.log({pageCount})
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(evt) => onChangePage(evt.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="< "
      forcePage={pageCount - 1}
      renderOnZeroPageCount={null}
    />
  );
}

export default Paggination;
