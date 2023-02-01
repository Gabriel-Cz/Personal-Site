import { Text } from "@components";
import { TechsGroup } from '@assets/icons';

interface TechProps {
  description: string;
}

const Techs: React.FC<TechProps> = ({ description }) => {
  return (
    <section>
      <Text style={{ marginTop: '50px' }}>
        {description}
      </Text>
      <div style={{ marginTop: 60 }}>
        <TechsGroup />
      </div>
    </section>
  );
}

export default Techs;