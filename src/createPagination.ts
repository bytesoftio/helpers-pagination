import { first, last, range } from "lodash"
import { CreatePagination } from "./types"

export const createPagination: CreatePagination = ({currentPage, totalItems, pageSize, surroundBy}) => {
  const totalPages = Math.ceil(totalItems / pageSize)
  const firstPage = 1
  const lastPage = totalPages
  const allPages = range(firstPage, lastPage + 1)
  currentPage = pageExists(currentPage, totalPages) ? currentPage : 1

  const visiblePages = movePages(range(currentPage - surroundBy, currentPage + surroundBy + 1), totalPages)
  const firstVisiblePage = first(visiblePages)!
  const lastVisiblePage = last(visiblePages)!

  const hasPrevious = currentPage > firstPage
  const hasNext = currentPage < lastPage

  const hasLess = firstVisiblePage > firstPage
  const hasMore = lastVisiblePage < lastPage

  const itemsOffset = currentPage > 1 ? (currentPage - 1) * pageSize : 0

  const isFirstPage = currentPage === firstPage
  const isLastPage = currentPage === lastPage

  return {
    currentPage,
    firstPage,
    lastPage,
    firstVisiblePage,
    lastVisiblePage,
    visiblePages,
    allPages,
    hasPrevious,
    hasNext,
    hasLess,
    hasMore,
    itemsOffset,
    pageSize,
    isFirstPage,
    isLastPage
  }
}

const pageExists = (pageNumber: number, totalPages: number): boolean => pageNumber > 0 && pageNumber <= totalPages

const movePageRange = (range: number[], moveBy: number): number[] => range.map(item => item + moveBy)

const movePagesRight = (pages: number[], totalPages: number): number[] => {
  if (totalPages === 0) {
    return pages
  }

  if ( ! pageExists(first(pages)!, totalPages)) {
    return movePagesRight(movePageRange(pages, 1), totalPages)
  }

  return pages
}

const movePagesLeft = (pages: number[], totalPages: number): number[] => {
  if (totalPages === 0) {
    return pages
  }

  if ( ! pageExists(last(pages)!, totalPages)) {
    return movePagesLeft(movePageRange(pages, -1), totalPages)
  }

  return pages
}

const movePages = (pages: number[], totalPages: number): number[] => {
  return movePagesLeft(movePagesRight(pages, totalPages), totalPages).filter(page => pageExists(page, totalPages))
}