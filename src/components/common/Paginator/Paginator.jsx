import React from 'react';
import styles from './Paginator.module.css';

let Paginator = (props) => {
  debugger;
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page && styles.selectedPage}
            onClick={() => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;