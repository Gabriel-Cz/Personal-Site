import type { NextPage } from 'next'
import { Content, Layout } from '../components'
import styles from '../styles/Home.module.css'

const Index: NextPage = () => (
  <>
  <div className='animatedDiv' />
  <div className='animatedDiv' />
  <div className='animatedDiv' />
  <div className='animatedDiv' />
  <Layout navElements={[{ to: '/contact', label: 'Contact' }]} >
    <Content>
      <p>
      I am a Full-Stack Developer, focused on working with the most efficient and reliable technologies to build and maintain UIs, Component libraries, Websites, Web Applications, APIs, Databases and even Scripts. Hand in hand with the best coding practices, design patters and design principles.

      In my journey of development i’ve working closely with diverse teams and several projects from all sort of types. From simple Websites to Content Management Systems, Electronic Health Records to Shopify stores.

      </p>
    </Content>
  </Layout>
  </>
)

export default Index
