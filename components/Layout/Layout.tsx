import Footer from "../Footer";
import Navbar from '../Navbar';
import NavElement, { NavElementProps } from "../NavElement";
import styles from './Layout.module.scss';

const GITHUB = process.env.GITHUB || '';

interface LayoutProps {
  children?: React.ReactNode;
  navElements?: NavElementProps[];
}

const Layout: React.FC<LayoutProps> = ({ children, navElements }) => (
  <div className={styles.layoutContainer}>
    <Navbar >
      {navElements!.map(({ to, label }) => (
        <NavElement key={`${label}-${Math.random}`} to={to} label={label} />
      ))}
    </Navbar>
    {children && (
      <main>{children}</main>
    )}
    <Footer />
  </div>
)

Layout.defaultProps = {
  children: undefined,
  navElements: [
    { to: '/techs', label: 'TECHS' },
    { to: '/about', label: 'ABOUT ME' },
    { to: '/contact', label: 'CONTACT' },
    { to: GITHUB, label: 'GITHUB', isExternal: true },
  ]
}

export default Layout;