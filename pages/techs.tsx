import { GetStaticProps, NextPage } from "next";
import { Content, Techs, Button, Layout } from "@components";
import { PageProps } from "@types";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/aws?pageName=Techs', {
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

const Experience: NextPage<PageProps> = ({ content }) => (
  <Layout>
    <Content>
      <Techs description={content!} />
      <Button to="/contact" variant="secondary" style={{ marginTop: 50 }}>
        Get in Touch
      </Button>
    </Content>
  </Layout>
)

export default Experience;