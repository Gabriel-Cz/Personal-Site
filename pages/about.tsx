import { GetServerSideProps, NextPage } from "next";
import { Content, Text, Button, Layout } from "@components";
import api from "@services/api.service";
import { PageProps } from "@types";

export const getStaticProps: GetServerSideProps = async () => {
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