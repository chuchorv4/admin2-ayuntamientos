import Layout from '@/layout'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import * as yup from 'yup'
import locale from '@/utils/yupLocale'

yup.setLocale(locale)

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default App
