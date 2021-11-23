import * as React from "react"

function BackShape1(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1506.202}
      height={697.534}
      {...props}
    >
      <defs>
        <filter
          id="prefix__a"
          x={0}
          y={0}
          width={1506.202}
          height={363.767}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={5} />
          <feGaussianBlur stdDeviation={5} result="blur" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__b"
          x={0}
          y={333.767}
          width={1506.202}
          height={363.767}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={5} />
          <feGaussianBlur stdDeviation={5} result="blur-2" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g data-name="Group 259">
        <g filter="url(#prefix__a)" transform="translate(-.001)">
          <path
            data-name="Path 195"
            d="M1463.13 341.22L36.838 93.802a14.92 14.92 0 01-12.15-17.25l7.99-46.06a14.92 14.92 0 0117.25-12.15L1476.22 265.76a14.92 14.92 0 0112.15 17.25l-7.99 46.06a14.92 14.92 0 01-17.25 12.15z"
            fill={props.fill}
          />
        </g>
        <g filter="url(#prefix__b)" transform="translate(-.001)">
          <rect
            data-name="Rectangle 685"
            width={1485.398}
            height={77}
            rx={15}
            transform="matrix(-.98 .17 -.17 -.98 1491.2 419.6)"
            fill={props.fill}
          />
        </g>
      </g>
    </svg>
  )
}

export default BackShape1
