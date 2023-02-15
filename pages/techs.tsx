import { Content, Techs, Button, Layout } from "@components";
import api from "@services/api.service";
import type { GetServerSideProps, NextPage } from "next";
import type { PageProps } from "@types";

export const getServerSideProps: GetServerSideProps = async () => {
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