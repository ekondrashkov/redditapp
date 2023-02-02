import React from 'react';
import styles from './postssort.css';

export function PostsSort() {
  return (
    <div className={styles.sortBy}>
      <span className={styles.sortByText}>Сортировать по:
        <span className={styles.sortBySelect}> Лучшие</span>
      </span>
    </div>
  );
}
