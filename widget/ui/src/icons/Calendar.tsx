import type { SvgIconPropsWithChildren } from '../components/SvgIcon';

import React, { createElement } from 'react';

import { SvgIcon } from '../components/SvgIcon';

function SvgCalendar(props: SvgIconPropsWithChildren) {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.50034 3.8499C3.99644 3.8499 3.51318 4.05007 3.15687 4.40638C2.80056 4.76269 2.60039 5.24595 2.60039 5.74985V20.7495C2.60039 21.2534 2.80056 21.7367 3.15687 22.093C3.51318 22.4493 3.99644 22.6495 4.50034 22.6495H19.5C20.0039 22.6495 20.4872 22.4493 20.8435 22.093C21.1998 21.7367 21.4 21.2534 21.4 20.7495V5.74985C21.4 5.24595 21.1998 4.76269 20.8435 4.40638C20.4872 4.05007 20.0039 3.8499 19.5 3.8499H4.50034ZM2.30834 3.55786C2.8897 2.9765 3.67818 2.6499 4.50034 2.6499H19.5C20.3222 2.6499 21.1107 2.9765 21.692 3.55786C22.2734 4.13921 22.6 4.92769 22.6 5.74985V20.7495C22.6 21.5717 22.2734 22.3602 21.692 22.9415C21.1107 23.5229 20.3222 23.8495 19.5 23.8495H4.50034C3.67818 23.8495 2.8897 23.5229 2.30834 22.9415C1.72699 22.3602 1.40039 21.5717 1.40039 20.7495V5.74985C1.40039 4.92769 1.72699 4.13921 2.30834 3.55786Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9999 0.149902C17.3313 0.149902 17.5999 0.418532 17.5999 0.749902V5.74979C17.5999 6.08116 17.3313 6.34979 16.9999 6.34979C16.6685 6.34979 16.3999 6.08116 16.3999 5.74979V0.749902C16.3999 0.418532 16.6685 0.149902 16.9999 0.149902Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00039 0.149902C7.33176 0.149902 7.60039 0.418532 7.60039 0.749902V5.74979C7.60039 6.08116 7.33176 6.34979 7.00039 6.34979C6.66902 6.34979 6.40039 6.08116 6.40039 5.74979V0.749902C6.40039 0.418532 6.66902 0.149902 7.00039 0.149902Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.40039 10.7494C1.40039 10.418 1.66902 10.1494 2.00039 10.1494H22C22.3313 10.1494 22.6 10.418 22.6 10.7494C22.6 11.0808 22.3313 11.3494 22 11.3494H2.00039C1.66902 11.3494 1.40039 11.0808 1.40039 10.7494Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCalendar;
