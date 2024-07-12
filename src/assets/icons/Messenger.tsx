import * as React from 'react'

export function MessengerIcon(props: React.SVGProps<SVGSVGElement>) {
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
            'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
          }
          fill={'#fff'}
        />
        <path
          d={
            'M19.07 4.93a10 10 0 0 0-16.28 11c.096.199.127.422.09.64L2 20.8a1 1 0 0 0 .605 1.13A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28l-.05-.02Zm.83 8.36a7.999 7.999 0 0 1-11 6.08 3.261 3.261 0 0 0-1.25-.26 3.435 3.435 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 9.826-10.72 8 8 0 0 1 5.444 8.91Z'
          }
          fill={'#fff'}
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path d={'M0 0h24v24H0z'} fill={'#fff'} />
        </clipPath>
      </defs>
    </svg>
  )
}
