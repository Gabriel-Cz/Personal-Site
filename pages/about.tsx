import { GetStaticProps, NextPage } from "next";
import { Content, Text, Button, Layout } from "@components";
import { PageProps } from "@types";

export const getServerSideProps = async () => {
  console.log('Get Server Side');
  const res = await fetch('http://localhost:3000/api/aws?pageName=Experience', {
    method: 'GET',
    headers: {
      "Content-type": "application/json",
    },
  });
  const { data } = await res.json();
  console.log(data);
  return {
    props: {
      content: data.Item.Content
    }
  }
}

const About: NextPage<PageProps> = ({ content }) => {
  console.log('About')
  return (
    <Layout>
      <Content>
        <Text>
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