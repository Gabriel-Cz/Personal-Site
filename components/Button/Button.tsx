import Link from 'next/link';
import { CSSProperties } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  ...rest
}) => {
  return (
    to ? (
      <Link passHref href={to}>
        <button
          className={styles.customButton}
          data-variant={variant}
          {...rest}
        >
          {children}
        </button>
      </Link>
    ) : (
      <button
        className={styles.customButton}
        data-variant={variant}
        {...rest}
      >
        {children}
      </button>
    )
  );
}

export default Button;