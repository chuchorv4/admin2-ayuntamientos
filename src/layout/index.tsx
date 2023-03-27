import { Props } from '@/interfaces/common'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import Header from './header'

const Layout = ({ children }: Props) => {
  const isFeching = useIsFetching()
  const isMutating = useIsMutating()
  const isLoading = isFeching > 0 || isMutating > 0
  return (
    <>
      <main className="container relative mx-auto flex h-screen max-h-screen flex-col">
        <Header title="" description="" favicon="" />
        <section className="mx-a flex max-h-full grow flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </section>
      </main>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-75">
          <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
          <h2 className="text-center text-xl font-semibold text-white">
            Loading...
          </h2>
        </div>
      )}
    </>
  )
}

export default Layout
