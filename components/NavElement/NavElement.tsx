import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavElement.module.scss";

export type NavElementProps = {
  to: string;
  isExternal?: boolean;
  label: string;
}

const NavElement: React.FC<NavElementProps> = ({ to, label, isExternal }) => {
  const isActive = useRouter().pathname === to;
  return (
    <Link
      target={(isExternal ? '_blank' : '_self')}
      href={to}
      rel="noreferrer"
      passHref
    >
      <a className={styles.navElement} data-active={isActive}>
        {label}
      </a>
    </Link>
  );
}

NavElement.defaultProps = {
  isExternal: false
}

export { NavElement };