import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paggination.module.scss';
type PagginationProps = { pageCount: number; onChangePage: (page: number) => void; }

const Paggination: React.FC<PagginationProps> = ({ pageCount, onChangePage }) => {

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
