import Head from 'next/head'
import { useRouter } from 'next/router'
import { HeaderProps } from '../interfaces/layout'
import Navbar from './navbar'

const Header: React.FC<HeaderProps> = ({ title, description, favicon }) => {
  const router = useRouter()
  const main = router.pathname === '/'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>
      {!main && <Navbar />}
    </>
  )
}

export default Header
