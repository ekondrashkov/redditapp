import classNames from 'classnames';
import React from 'react';
import styles from './break.css';

type IBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = 'mobile' | 'tablet' | 'desctop';

interface IBreakProps {
  size: IBreakSize;
  mobileSize?: IBreakSize;
  tabletSize?: IBreakSize;
  desctopSize?: IBreakSize;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    tabletSize,
    desctopSize,
  } = props;

  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desctop_s${desctopSize}`]]: desctopSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
      )}
    />
  );
}
