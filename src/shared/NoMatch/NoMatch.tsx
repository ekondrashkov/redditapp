import React from 'react';
import { useLocation } from 'react-router-dom';
import { Text, EColor } from '../Text';
import styles from './nomatch.css';

export function NoMatch() {
  const location = useLocation();

  return (
    <div className={styles.noMatchWrapper}>
      <img src="https://www.redditstatic.com/reddit404e.png" alt="404" />
      <Text mobileSize={12} size={20} color={EColor.grey99}>
        Страница <code>{location.pathname}</code> не найдена...
      </Text>
    </div>
  );
}
