import { useEffect } from 'react'
import { Layout } from '@components';
import type { NextPage } from 'next'

const Index: NextPage = () => {
  useEffect(() => {
    const main = document.querySelector('main');
    main?.remove();
  }, [])
  return <Layout />
}

export default Index
