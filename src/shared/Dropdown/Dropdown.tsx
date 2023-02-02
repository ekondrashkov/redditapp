import React from 'react';
import styles from './dropdown.css';
import { DropdownList } from './DropdownList';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  isOpen?: boolean;
}

export function Dropdown({ button, children, id, isOpen }: IDropdownProps) {
  return (
    <div className={styles.container}>
      <div>
        {button}
      </div>

      <div className={styles.listContainer} id={`dropdown-${id}`} />
      {isOpen && (
        <DropdownList children={children} id={id} />
      )}
    </div>
  );
}
