# @bytesoftio/helpers-pagination

## Installation

`yarn add @bytesoftio/helpers-pagination` or `npm install @bytesoftio/helpers-pagination`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
  - [createPagination](#createpagination)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

Collection of helpers related to pagination.  

## Usage

### createPagination

Calculate total amount of pages, visible pages, more / less indicators and so on, based on the current page, total
items, page size, etc.

This helper can be used to build paginations like:

```
< << ... 6 7 8 [9] 10 11 12 ... >> >
< << 7 8 [9] 10 11 >> >
<  ... 7 8 [9] 10 11  ... >
< [9] >
[ v Select page ]
``` 

Usage example:

```ts
import { createPagination } from "@bytesoftio/helpers-pagination"

// active page
const currentPage = 7
// total number of items for pagination
const totalItems = 1337
// how many items are visible on a single page
const pageSize = 20
// how many pages you want to display to the left and right of the current page
const surroundBy = 2

const pagination = createPagination({ currentPage, totalItems, pageSize, surroundBy })
```

With the calculated information below you can build almost every possible kind of pagination you can
think of.

```js
{
  // active page
  currentPage: 7,
  // number of the first page, obviously...
  firstPage: 1,
  // number of the last page
  lastPage: 67,
  // first visible page based on the surroundBy 
  firstVisiblePage: 5,
  // last visible page based on the surroundBy 
  lastVisiblePage: 9,
  // all visible pages based on the surroundBy 
  visiblePages: [ 5, 6, 7, 8, 9 ],
  // all available pages, for a dropdown for example 
  allPages: [
     1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67
  ],
  // are there any previous pages?
  hasPrevious: true,
  // are there any next pages?
  hasNext: true,
  // are there any pages in between the first page and the first visible page?
  hasLess: true,
  // are there any pages in between the last page and the last visible page?
  hasMore: true,
  // how many items to skip, useful for an api call
  itemsOffset: 120,
  // how many items are visible per page
  pageSize: 20,
  // is current page the first one?
  isFirstPage: false,
  // is current page the last one?
  isLastPage: false
}
```