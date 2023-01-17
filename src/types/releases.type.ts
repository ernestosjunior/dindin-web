export interface ReleaseProps {
  id: string
  date: string
  description: string
  value: number
  categoryId: string
  userId: string
  category: ReleaseCategoryProps
  type: string
}

export interface ReleaseCategoryProps {
  id: string
  title: string
  userId: string
}
