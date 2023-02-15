import { Text } from "@components";
import { TechsGroup } from '@assets/icons';
import styles from './Techs.module.scss';

interface TechProps {
  description: string;
}

const Techs: React.FC<TechProps> = ({ description }) => {
  return (
    <section>
      <Text shadow>
        {description}
      </Text>
      <div style={{ marginTop: 30 }}>
        <TechsGroup className={styles.techssvg} />
      </div>
    </section>
  );
}

export default Techs;