import React from 'react';
import styles from './commentslist.css';
import { Comment } from './Comment/Comment';
import { useCommentsData } from '../../../hooks/useCommentsData';

interface ICommentForm {
  id: string;
  subreddit: string;
}

interface IComment {
  author?: string;
  iconImg?: string;
  created?: number;
  subreddit?: string;
  commentText?: string;
  id?: string;
  ups?: number;
}

export function CommentsList({ id, subreddit }: ICommentForm ) {
  let [commentsData] = useCommentsData({id, subreddit});

  return (
    <div className={styles.list}>
      {
        commentsData?.map((comment: IComment) => (
          <Comment author={comment.author} iconImg={comment.iconImg} created={comment.created} subreddit={comment.subreddit} commentText={comment.commentText} ups={comment.ups} key={comment.id} />
        ))
      }
    </div>
  );
}
