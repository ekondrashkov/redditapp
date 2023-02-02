import React from 'react';
import { KarmaDown } from '../../../../../CardsList/Card/Controls/KarmaCounter/KarmaDown';
import { KarmaUp } from '../../../../../CardsList/Card/Controls/KarmaCounter/KarmaUp';
import styles from './commentkarmacounter.css';

interface IKarmaProps {
  ups?: number;
}

export function CommentKarmaCounter({ ups }: IKarmaProps) {
  return (
    <div className={styles.karmaCounter}>
      <KarmaUp />
        <span className={styles.karmaValue}>{ups}</span>
      <KarmaDown />
    </div>
  );
}
