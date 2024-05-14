import IconProps from '@/shared/interfaces/icon-props'

const Document = ({ width = 35, height = 35 }: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 35 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M29.1664 32.0833H5.83309C5.02768 32.0833 4.37476 31.4304 4.37476 30.625V4.37499C4.37476 3.56958 5.02768 2.91666 5.83309 2.91666H29.1664C29.9719 2.91666 30.6248 3.56958 30.6248 4.37499V30.625C30.6248 31.4304 29.9719 32.0833 29.1664 32.0833ZM10.2081 8.74999V14.5833H16.0414V8.74999H10.2081ZM10.2081 17.5V20.4167H24.7914V17.5H10.2081ZM10.2081 23.3333V26.25H24.7914V23.3333H10.2081ZM18.9581 10.2083V13.125H24.7914V10.2083H18.9581Z'
            fill='white'
        />
    </svg>
)

export default Document
