import React from 'react'

import IconProps from '@/shared/interfaces/icon-props'

const Logo = ({ width = 24, height = 24 }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M16.6667 47.2221L0 37.5L50 8.33334L100 37.5V72.9167H91.6667V42.3613L83.3333 47.2221V75.0471L82.4058 76.1934C74.7737 85.6246 63.0908 91.6667 50 91.6667C36.909 91.6667 25.2262 85.6246 17.5943 76.1934L16.6667 75.0471V47.2221ZM25 52.0833V72.0488C31.1134 78.975 40.0463 83.3334 50 83.3334C59.9537 83.3334 68.8867 78.975 75 72.0488V52.0833L50 66.6667L25 52.0833ZM16.5386 37.5L50 57.0192L83.4613 37.5L50 17.9809L16.5386 37.5Z'
                fill='#202020'
            />
        </svg>
    )
}

export default Logo
