import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Paggination.module.scss';

type PagginationProps = {
	pageCount: number;
	currentPage: number;
	onChangePage: (page: number) => void;
};

const Paggination: React.FC<PagginationProps> = ({
	pageCount,
	currentPage,
	onChangePage,
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= pageCount) {
			onChangePage(page);
			const queryParams = new URLSearchParams(location.search);
			queryParams.set('page', page.toString());
			navigate({ search: queryParams.toString() });
		}
	};

	const renderPages = () => {
		const pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(
				<li
					key={i}
					className={`${styles.pageItem} ${
						currentPage === i ? styles.selected : ''
					}`}
					onClick={() => handlePageChange(i)}
				>
					<a className={styles.pageLink}>{i}</a>
				</li>
			);
		}
		return pages;
	};

	return (
		<ul className={styles.root}>
			<li
				className={`${styles.pageItem} ${
					currentPage === 1 ? styles.disabled : ''
				}`}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				<div className={styles.pageLink}>&lt;</div>
			</li>
			{renderPages()}
			<li
				className={`${styles.pageItem} ${
					currentPage === pageCount ? styles.disabled : ''
				}`}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				<div className={styles.pageLink}>&gt;</div>
			</li>
		</ul>
	);
};

export default Paggination;
