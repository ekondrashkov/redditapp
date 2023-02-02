import React from 'react';
import styles from './menuitemslist.css';
import { EColor, Text } from '../../../../Text';
import { EIcon, Icon } from '../../../../Icon';
import { Link } from 'react-router-dom';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {

  return (
    <ul className={styles.menuItemslist}>
      <Link to={`/posts/${postId}`} className={styles.menuItemHide}>
        <Icon name={EIcon.Comments} size={14} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>
          Комментарии
        </Text>
      </Link>

      <div className={styles.dividerHide}></div>

      <li className={styles.menuItemHide} onClick={() => console.log(postId)}>
        <Icon name={EIcon.Share} size={14} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>
          Поделиться
        </Text>
      </li>

      <div className={styles.dividerHide}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcon.Block} size={14} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItemHide} onClick={() => console.log(postId)}>
        <Icon name={EIcon.Save} size={14} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={styles.dividerHide}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcon.Warning} size={16} />
        <Text mobileSize={12} size={14} color={EColor.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}

