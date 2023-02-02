import React from 'react';
import styles from './karmacounter.css';
import { KarmaDown } from './KarmaDown';
import { KarmaUp } from './KarmaUp';

interface IKarmaCounter {
  ups?: number;
}

export function KarmaCounter({ ups }: IKarmaCounter) {
  return (
    <div className={styles.karmaCounter}>
      <KarmaUp />
        <span className={styles.karmaValue}>{ups}</span>
      <KarmaDown />
    </div>
  );
}
