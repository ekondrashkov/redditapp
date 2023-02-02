import React from 'react';
import { CommentAnswerButton } from './CommentAnswerButton';
import styles from './commentcontrols.css';
import { CommentKarmaCounter } from './CommentKarmaCounter';
import { CommentShareButton } from './CommentShareButton';
import { DangerButton } from './DangerButton';

interface ICommentControls {
  author?: string;
  ups?: number;
  isOpen?: () => void;
}

export function CommentControls({ author, ups, isOpen }: ICommentControls) {
  return (
    <div className={styles.controls}>
      <CommentKarmaCounter ups={ups} />
      <CommentAnswerButton isOpen={isOpen} />
      <div className={styles.actions}>
        <CommentShareButton />
        <DangerButton />
      </div>
    </div>
  );
}
