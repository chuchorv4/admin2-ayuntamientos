export interface Sevac {
  id: string
  type: string
  content: SEVACContent[]
}

export interface SEVACContent {
  year: string
  content: YearContent[]
}

export interface YearContent {
  type: 'table' | 'title'
  content: TableContent[] | string
}

export interface TableContent {
  type: 'text' | 'url'
  title: string
  content?: string
}
