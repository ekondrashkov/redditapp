import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, WarningIcon, BackIcon } from '../icons/Index';

export enum EIcon {
  Block = 'BlockIcon',
  Warning = 'WarningIcon',
  Comments = 'CommentsIcon',
  Share = 'ShareIcon',
  Save = 'SaveIcon',
  Back = 'BackIcon',
}

type TSizes = 12 | 14 | 15 | 16 | 20;

interface IIconProps {
  name: EIcon;
  size: TSizes;
}

export function Icon({ name, size }: IIconProps ) {
  const classes = classNames(styles[`svg${size}`]);
  let IconComponent = null;

  switch (name) {
    case 'BlockIcon':
      IconComponent = <BlockIcon />;
      break;
    case 'WarningIcon':
      IconComponent = <WarningIcon />;
      break;
    case 'CommentsIcon':
      IconComponent = <CommentsIcon />;
      break;
    case 'ShareIcon':
      IconComponent = <ShareIcon />;
      break;
    case 'SaveIcon':
      IconComponent = <SaveIcon />;
      break;
    case 'BackIcon':
      IconComponent = <BackIcon />;
      break;
  }

  return (
    <div className={classes}>
      {IconComponent}
    </div>
  )
}
