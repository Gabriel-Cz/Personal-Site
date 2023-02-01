import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Footer.module.scss';

export const Footer: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ ...props }) => {
  return (
    <footer {...props} className={styles.footer}>
      <div>
        Built by&nbsp;
        <a href="" target="_blank" rel="noreferrer">
          Gabriel Cz
        </a>
      </div>
      <div>
        Background photo by&nbsp;
        <a href="https://www.pexels.com/photo/colorful-sand-13371419/" target="_blank">
          Giovanni Vardan
        </a>
      </div>
    </footer>
  )
}