import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  author?: string;
  iconImg?: string;
}

export function UserLink({ author, iconImg }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={iconImg} />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
