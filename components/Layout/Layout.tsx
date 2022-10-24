import React from "react"
import Navbar from '../Navbar';
import NavElement, { NavElementProps } from "../NavElement";
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  navElements: NavElementProps[];
}

const Layout: React.FC<LayoutProps> = ({ children, navElements }) => (
  <div className={styles.layoutContainer}>
    <Navbar>
      {navElements.map(({ to, label }) => (
        <NavElement key={`${label}-${Math.random}`} to={to} label={label} />
      ))}
    </Navbar>
    {children}
  </div>
)

export { Layout };