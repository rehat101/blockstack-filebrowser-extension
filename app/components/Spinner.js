import React from 'react';

const Spinner = props => (
  <svg width="9em" height="9em" viewBox="0 0 100 100" {...props}>
    <defs>
      <linearGradient
        x1="8.042%"
        y1="0%"
        x2="65.682%"
        y2="23.865%"
        id="prefix__a"
      >
        <stop stopColor="#fff" stopOpacity={0} offset="0%" />
        <stop stopColor="#fff" stopOpacity={0.631} offset="63.146%" />
        <stop stopColor="#fff" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="rotate(-3.056 37.244 -.244)" fill="none" fillRule="evenodd">
      <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#prefix__a)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill="#fff" cx={36} cy={18} r={1}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export default Spinner;
