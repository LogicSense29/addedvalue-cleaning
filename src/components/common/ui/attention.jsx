import React from 'react'

function attention() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      width='64'
      height='64'
      aria-hidden='true'>
      <defs>
        <linearGradient id='g-attn-1' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0' stop-color='#ffffff' stop-opacity='0.95' />
          <stop offset='1' stop-color='#f6d7c1' stop-opacity='0.9' />
        </linearGradient>
        <linearGradient id='g-attn-2' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0' stop-color='#ffffff' />
          <stop offset='1' stop-color='#ff0000' />
        </linearGradient>
        <filter id='s-attn' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur in='SourceAlpha' stdDeviation='2' result='blur' />
          <feOffset dx='0' dy='2' result='off' />
          <feMerge>
            <feMergeNode in='off' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.1  0 0 0 0 0.05  0 0 0 0 0.03  0 0 0 0.7 0'
          />
        </filter>
      </defs>

      {/* <!-- Sparkles (left) --> */}
      <g transform='translate(8,8)' opacity='0.9'>
        <path
          d='M6 0 L8 6 L14 8 L8 10 L6 16 L4 10 L-2 8 L4 6 Z'
          fill='#81C7FF'
          opacity='0.95'
        />
        <circle cx='22' cy='6' r='3' fill='#6EE7B7' opacity='0.95' />
      </g>

      {/* <!-- Glass + handle --> */}
      <g filter='url(#s-attn)' transform='translate(10,10)'>
        <circle
          cx='22'
          cy='22'
          r='14'
          fill='url(#g-attn-1)'
          stroke='#ff0000'
          stroke-width='2'
        />
        <line
          x1='33'
          y1='33'
          x2='44'
          y2='44'
          stroke='#cc0000'
          stroke-width='4'
          stroke-linecap='round'
        />
        <circle cx='22' cy='22' r='5' fill='url(#g-attn-2)' opacity='0.14' />
      </g>
    </svg>
  );
}

export default attention