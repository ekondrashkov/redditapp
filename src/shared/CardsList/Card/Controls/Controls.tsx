import React from 'react';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlsProps {
  ups?: number;
  comments?: number;
  id: string;
}

export function Controls({ups, comments, id }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter ups={ups}/>
      <CommentsButton comments={comments} id={id} />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
