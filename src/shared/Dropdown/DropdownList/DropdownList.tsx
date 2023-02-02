import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownlist.css';

interface IDropdownListProps {
  children: React.ReactNode;
  id?: string;
}

export function DropdownList({ children, id }: IDropdownListProps ) {
  const dropdownRoot = document.querySelector(`#dropdown-${id}`);
  if (!dropdownRoot) return null;

  return ReactDOM.createPortal ((
    <div className={styles.list} >
      {children}
    </div>), dropdownRoot
  );
}
