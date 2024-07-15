import * as React from 'react'

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={'none'}
      height={'1em'}
      viewBox={'0 0 24 24'}
      width={'1em'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <g clipPath={'url(#a)'}>
        <path
          d={
            'm20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z'
          }
          fill={'currentColor'}
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path d={'M0 0h24v24H0z'} fill={'currentColor'} />
        </clipPath>
      </defs>
    </svg>
  )
}
