import { Content, Text, Button, Layout } from "@components";
import api from "@services/api.service";
import type { PageProps } from "@types";
import type { GetStaticProps, NextPage } from "next"

export const getStaticProps: GetStaticProps = async () => {
  const page = await api.getPage('Experience');
  return {
    props: {
      content: page.Item?.Content ?? ''
    }
  }
}

const About: NextPage<PageProps> = ({ content }) => {
  return (
    <Layout>
      <Content>
        <Text shadow>
          {content}
        </Text>
        <Button to="/contact" variant="secondary" style={{ marginTop: 50 }}>
          Get in Touch
        </Button>
      </Content>
    </Layout>
  );
}

export default About;