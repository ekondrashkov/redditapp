import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  author?: string;
  created?: number;
  title?: string;
  url?: string;
  iconImg?: string;
}

export function TextContent({ author, created, title, url, iconImg }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} iconImg={iconImg} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created} часа назад
        </span>
      </div>
      <Title title={title} url={url} />
    </div>
  );
}
