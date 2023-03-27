import { Props } from './common'

export interface LayoutProps extends Props {
  loading: boolean
}

export interface HeaderProps {
  title: string
  favicon: string
  description: string
}
