import React, { useEffect, useRef, useState } from 'react';
import { UserLink } from '../../../CardsList/Card/TextContent/UserLink';
import { Form } from '../../Form';
import styles from './comment.css';
import { CommentControls } from './CommentControls';

interface IComment {
  author?: string;
  iconImg?: string;
  created?: number;
  subreddit?: string;
  commentText?: string;
  ups?: number;
}

export function Comment({ author, iconImg, created, subreddit, commentText, ups }: IComment) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  }

  const refText = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if(isFormOpen) {
      refText.current?.focus();
      if (refText.current) {
        refText.current.textContent = author ? author : '';
      }
    }
  }, [isFormOpen])

  return (
    <li className={styles.wrapper} >
      <div className={styles.commentHeader}>
        <span className={styles.tag}>{subreddit}</span>
        <div className={styles.postData}>
          <UserLink author={author} iconImg={iconImg} />
          <span className={styles.createdAt}>
            {created} часа назад
          </span>
        </div>
      </div>
      <p className={styles.text}>{commentText}</p>
      <CommentControls author={author} ups={ups} isOpen={handleClick}/>

      {isFormOpen && <Form refLink={refText} />}
    </li>
  );
}
