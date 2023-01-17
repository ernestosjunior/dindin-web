export interface ReleaseProps {
  id: string
  date: string
  description: string
  value: number
  categoryId: string
  userId: string
  category: Category
  type: string
}

export interface Category {
  id: string
  title: string
  userId: string
}
