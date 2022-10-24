import React from "react";
import styles from "./NavElement.module.scss";

export type NavElementProps = {
  to: string;
  isExternal?: boolean;
  label: string;
}

const NavElement: React.FC<NavElementProps> = ({ to, label, isExternal }) => (
  <a
    target={(isExternal ? '_self' : '_blank')}
    href={to}
    rel="noreferrer"
    className={styles.navElement}
  >
    {label}
  </a>
);

NavElement.defaultProps = {
  isExternal: false
}

export { NavElement };