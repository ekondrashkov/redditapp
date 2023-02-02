import React, { useState } from 'react';
import { MenuIcon } from '../../../icons/MenuIcon';
import { Dropdown } from '../../../Dropdown';
import { EColor, Text } from '../../../Text';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList';

interface IMenu {
  postId: string;
}

export function Menu( { postId }: IMenu ) {
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton} onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}>
          <MenuIcon />
        </button>
      } id={postId} isOpen={isDropdownOpen}>
        <div className={styles.dropdown}>
          <MenuItemsList postId={postId} />
          <button className={styles.closeButton} onClick={() => {setIsDropdownOpen(false)}}>
            <Text mobileSize={12} size={14} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
