import type { FlagPropTypes } from './Flags.types.js';

import React from 'react';

import { DEFAULT_SIZE } from './Flags.constants.js';

export default function Portuguese(props: FlagPropTypes) {
  const { size = DEFAULT_SIZE } = props;

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#6da544" d="M0 512h167l37.9-260.3L167 0H0z" />
        <path fill="#d80027" d="M512 0H167v512h345z" />
        <circle cx="167" cy="256" r="89" fill="#ffda44" />
        <path
          fill="#d80027"
          d="M116.9 211.5V267a50 50 0 1 0 100.1 0v-55.6H117z"
        />
        <path
          fill="#eee"
          d="M167 283.8c-9.2 0-16.7-7.5-16.7-16.7V245h33.4v22c0 9.2-7.5 16.7-16.7 16.7z"
        />
      </g>
    </svg>
  );
}
