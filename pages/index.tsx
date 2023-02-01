import { Layout } from 'components';
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Index: NextPage = () => {
  useEffect(() => {
    const main = document.querySelector('main');
    main?.remove();
  }, [])
  return <Layout />
}

export default Index
