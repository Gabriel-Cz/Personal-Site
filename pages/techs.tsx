import { GetStaticProps, NextPage } from "next";
import { Content, Techs, Button, Layout } from "@components";
import { PageProps } from "@types";
import api from "@services/api.service";

export const getStaticProps: GetStaticProps = async () => {
  const page = await api.getPage('Techs');
  return {
    props: {
      content: page.Item?.Content ?? ''
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