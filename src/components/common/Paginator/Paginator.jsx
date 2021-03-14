import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';
let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = pagesCount / portionSize;
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && <button className={styles.prev} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
      <div>
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((page) => {
            return (
              <span
                className={ cn({ [styles.selectedPage] : currentPage === page}, styles.pageNumber)}
                key={page}
                onClick={() => {
                  onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
      </div>
      {portionCount > portionNumber && <button className={styles.next} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
  );
};

export default Paginator;