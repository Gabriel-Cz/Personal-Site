import { GetServerSideProps, NextPage } from "next";
import { Content, Text, Button, Layout } from "@components";
import { PageProps } from "@types";

export const getStaticProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.REACT_URL}/api/aws?pageName=Experience`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json",
    },
  });
  const { data } = await res.json();
  return {
    props: {
      content: data.Item.Content ?? ''
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