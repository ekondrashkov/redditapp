import React from 'react';
import styles from './dangerbutton.css';

export function DangerButton() {
  return (
    <button className={styles.dangerButton}>
      <svg className={styles.dangerButtonImgMob} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
        <path d="M4 14H16L10 4L4 14ZM10.5455 12.4211H9.45455V11.3684H10.5455V12.4211ZM10.5455 10.3158H9.45455V8.21053H10.5455V10.3158Z" fill="white"/>
      </svg>
      <svg className={styles.dangerButtonImgDesc} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" fill="#999999"/>
      </svg>
      <span className={styles.dangerText}>Пожаловаться</span>
    </button>
  );
}
