import React from "react";
import styles from './Content.module.scss';

interface ContentProps {
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children }) => (
  <div className={styles.contentContainer}>
    {children}
  </div>
);

export { Content };