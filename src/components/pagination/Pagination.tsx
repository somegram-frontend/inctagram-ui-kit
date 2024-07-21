import { type ElementRef, forwardRef } from 'react'

import s from './pagination.module.scss'

import { Select, Typography } from '../'
import ArrowBack from '../../assets/icons/ArrowBack'
import ArrowForward from '../../assets/icons/ArrowForward'
import { usePagination } from './lib/usePagination'
import { ButtonArrow } from './ui/buttonArrow/ButtonArrow'
import { MainPaginationButtons } from './ui/mainPaginationButtons/MainPaginationButtons'
export type PaginationOption = {
  label: string
  value: string
}
export type PaginationProps = {
  siblingCount?: number
  totalCount: number
}

export const Pagination = forwardRef<ElementRef<'div'>, PaginationProps>(
  ({ siblingCount, totalCount }, ref) => {
    const {
      currentPage,
      isFirstPage,
      isLastPage,
      itemsPerPage,
      itemsPerPageChangeHandler,
      onCurrentPageChange,
      onNextPage,
      onPreviousPage,
      options,
      paginationRange,
    } = usePagination({ siblingCount, totalCount })

    return (
      <div className={s.container} ref={ref}>
        <ButtonArrow disabled={isFirstPage} onClick={onPreviousPage}>
          <ArrowBack />
        </ButtonArrow>
        <MainPaginationButtons
          currentPage={currentPage}
          onCurrentPageChange={onCurrentPageChange}
          paginationRange={paginationRange}
        />
        <ButtonArrow disabled={isLastPage} onClick={onNextPage}>
          <ArrowForward />
        </ButtonArrow>
        <div className={s.selectBlock}>
          <Typography variant={'regular_text14'}>Show&nbsp;</Typography>
          <Select
            onValueChange={itemsPerPageChangeHandler}
            options={options}
            small
            value={itemsPerPage}
          />
          <Typography variant={'regular_text14'}>on the page</Typography>
        </div>
      </div>
    )
  }
)

Pagination.displayName = 'Pagination'
