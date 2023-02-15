import React from "react";
import styles from './Content.module.scss';

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const Content: React.FC<ContentProps> = ({ children, ...rest }) => (
  <div className={styles.contentContainer} {...rest}>
    {children}
  </div>
);