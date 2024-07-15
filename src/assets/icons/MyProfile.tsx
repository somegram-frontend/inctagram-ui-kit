import * as React from 'react'

export function MyProfileIcon(props: React.SVGProps<SVGSVGElement>) {
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
            'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 8a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7Z'
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
