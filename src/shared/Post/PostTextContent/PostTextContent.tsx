import React from 'react';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import styles from './posttextcontent.css';

interface IPostTextContentProps {
  author?: string;
  created?: number;
  title?: string;
  iconImg?: string;
  subreddit: string;
}

export function PostTextContent({ author, created, title, iconImg, subreddit }: IPostTextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} iconImg={iconImg} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {created} часа назад
        </span>
        <span className={styles.tag}>{subreddit}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
