import React from 'react';
import styles from './closebutton.css';

interface ICloseButton {
  id: string;
}

export function CloseButton({id}: ICloseButton) {
  return (
    <button className={styles.closeButton} id={`closeButton-${id}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.8521 0L26.0001 1.14809L1.89013 25.2581L0.742033 24.11L24.8521 0Z" fill="#ADADAD"/>
        <path d="M26 24.1101L24.8519 25.2582L0.741889 1.14818L1.88998 8.81026e-05L26 24.1101Z" fill="#ADADAD"/>
      </svg>
    </button>
  );
}
