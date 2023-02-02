import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICard {
  author?: string;
  title?: string;
  ups?: number;
  url?: string;
  thumbnail?: string;
  created?: number;
  iconImg?: string;
  id: string;
  comments?: number;
  subreddit: string;
}

export function Card({
  author,
  title,
  ups,
  url,
  thumbnail,
  created,
  iconImg,
  id,
  comments,
  subreddit
 }: ICard) {
  return (
    <li className={styles.card} >
      <TextContent author={author} created={created} title={title} url={url} iconImg={iconImg} />
      <Preview thumbnail={thumbnail} />
      <Menu postId={id} />
      <Controls ups={ups} id={id} comments={comments} />
    </li>
  );
}
