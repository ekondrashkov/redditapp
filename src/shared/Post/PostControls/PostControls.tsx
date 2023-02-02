import React from 'react';
import { PostClaimBtn } from './PostClaimBtn';
import { PostCommentsButton } from './PostCommentsButton';
import styles from './postcontrols.css';
import { PostHideBtn } from './PostHideBtn';
import { PostKarmaCounter } from './PostKarmaCounter';
import { PostSaveBtn } from './PostSaveBtn';
import { PostShareBtn } from './PostShareBtn';

interface IPostControls {
  ups?: number;
  comments?: number;
}

export function PostControls({ ups, comments }: IPostControls) {
  return (
    <div className={styles.controls}>
      <PostKarmaCounter ups={ups}/>
      <PostCommentsButton comments={comments} />
      <div className={styles.actions}>
        <PostShareBtn />
        <PostHideBtn />
        <PostSaveBtn />
        <PostClaimBtn />
      </div>
      <span className={styles.votes}>67% проголосовали</span>
    </div>
  );
}
