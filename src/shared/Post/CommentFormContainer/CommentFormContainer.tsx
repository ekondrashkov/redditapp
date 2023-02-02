import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentStore';
import { IRootReducer } from '../../../store/store';
import { CommentForm } from '../CommentForm';

interface ICommentFormContainer {
  id: string;
  subreddit: string;
}

export function CommentFormContainer({ id, subreddit }: ICommentFormContainer) {
  const value = useSelector<IRootReducer, string>(state => state.commentReducer.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  return (
    <CommentForm
      id={id}
      subreddit={subreddit}
      value={value}
      onChange={handleChange}
    />
  );
}
