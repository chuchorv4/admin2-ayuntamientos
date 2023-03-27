export interface Main {
  _id: string
  title: string
  logo: string
  correo: string
  direccion?: string
  telefono?: string
  facebook?: string
}

export interface Page {
  _id: string
  title: string
  type: string
  url: string
}

export interface Content {
  _id: string
  content: string
  page: string
}

interface Query<T> {
  search: Partial<T>
  select: (keyof T)[]
  sort: Partial<Record<keyof T, 0 | 1>>
  limit: number
  skip: number
  populate: string
}

export interface QueryParams<T> extends Partial<Query<T>> {}
