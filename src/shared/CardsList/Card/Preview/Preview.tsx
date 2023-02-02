import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  thumbnail?: string;
}

export function Preview({ thumbnail }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img src={thumbnail} alt="Image" className={styles.previewImg}/>
    </div>
  );
}
