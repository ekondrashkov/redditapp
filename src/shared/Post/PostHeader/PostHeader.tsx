import React from 'react';
import { BackIcon } from '../../icons/BackIcon';
import { DropdownOpen } from '../../icons/DropdownOpen';
import { Text, EColor } from '../../Text';
import styles from './postheader.css';

interface IPostHeader {
  id?: string;
}

export function PostHeader({id}: IPostHeader) {
  return (
    <div className={styles.postHeader}>
      <button className={styles.navButton} id={`backButton-${id}`}>
        <BackIcon />
      </button>
      <Text mobileSize={10} size={10} color={EColor.white}>
        100% проголосовали
      </Text>
      <button className={styles.navButton}>
        <DropdownOpen />
      </button>
    </div>
  );
}
