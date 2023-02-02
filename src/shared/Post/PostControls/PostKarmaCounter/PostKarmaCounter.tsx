import React from 'react';
import { KarmaDown } from '../../../CardsList/Card/Controls/KarmaCounter/KarmaDown';
import { KarmaUp } from '../../../CardsList/Card/Controls/KarmaCounter/KarmaUp';
import styles from './postkarmacounter.css';

interface IPostKarmaCounter {
  ups?: number;
}

export function PostKarmaCounter({ ups }: IPostKarmaCounter) {
  return (
    <div className={styles.karmaCounter}>
      <KarmaUp />
        <span className={styles.karmaValue}>{ups}</span>
      <KarmaDown />
    </div>
  );
}
