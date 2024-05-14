import IconProps from '@/shared/interfaces/icon-props'

const Cross = ({ width = 25, height = 25, color = '#202020' }: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M12.5 11.1112L17.3611 6.25003L18.75 7.63892L13.8889 12.5001L18.75 17.3612L17.3611 18.75L12.5 13.889L7.63889 18.75L6.25 17.3612L11.1111 12.5001L6.25 7.63892L7.63889 6.25003L12.5 11.1112Z'
            fill={color}
        />
    </svg>
)

export default Cross
