import React from 'react';
import styles from './title.css';

interface ITitleProps {
  title?: string;
  url?: string;
}

export function Title({ url, title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <a href={url} className={styles.postLink} >{title}</a>
    </h2>
  );
}
