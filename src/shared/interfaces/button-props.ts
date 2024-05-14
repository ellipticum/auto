import LayoutProps from '@/shared/interfaces/layout-props'

interface ButtonProps extends LayoutProps {
    className?: string
    borderColor?: string
    color?: string
    background?: string
    isFilled?: boolean
    onClick: () => void
}

export default ButtonProps
