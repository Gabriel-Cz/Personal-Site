import React from "react";
import styles from './Navbar.module.scss';

interface ContentProps {
  children: React.ReactNode;
}

const Navbar: React.FC<ContentProps> = ({ children }) => (
  <div className={styles.navbarContainer}>
    {children}
  </div>
);

export { Navbar };