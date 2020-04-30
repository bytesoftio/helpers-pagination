export type CreatePaginationArgs = {
  currentPage: number
  totalItems: number
  pageSize: number
  surroundBy: number
}

export type CreatePagination = (args: CreatePaginationArgs) => {
  currentPage: number
  firstPage: number
  lastPage: number
  firstVisiblePage: number
  lastVisiblePage: number
  visiblePages: number[]
  allPages: number[]
  hasPrevious: boolean
  hasNext: boolean
  hasLess: boolean
  hasMore: boolean
  itemsOffset: number
  pageSize: number
  isFirstPage: boolean
  isLastPage: boolean
}