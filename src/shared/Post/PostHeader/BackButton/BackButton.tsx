import React from 'react';
import styles from './backbutton.css';

interface IBackButton {
  id: string;
}

export function BackButton({id}: IBackButton) {
  return (
    <button id={`backButton-${id}`}>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.721924 7.71069L8.00976 0.710693L8.72192 1.46863L2.22319 7.71069L8.72192 13.9528L8.00976 14.7107L0.721924 7.71069Z" fill="white"/>
        <path d="M-3.37049e-07 7.71084L8.02785 5.49622e-05L9.42482 1.4868L2.94484 7.71084L9.42482 13.9349L8.02785 15.4216L-3.37049e-07 7.71084ZM7.9914 14.0001L8.01877 13.9709L1.50126 7.71084L8.01877 1.45075L7.99141 1.42163L1.44358 7.71084L7.9914 14.0001Z" fill="white"/>
        <rect x="2.72192" y="6.71069" width="14" height="2" fill="white"/>
      </svg>
    </button>
  );
}
