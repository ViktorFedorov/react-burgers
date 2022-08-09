import React from 'react';
import styles from './header-link.module.css'

const HeaderLink = ({icon, children, textClass}) => {
  return (
    <a href='/' className={styles.link}>
      {icon}
      <div className={`ml-2 ${textClass}`}>{children}</div>
    </a>
  );
};

export default HeaderLink;