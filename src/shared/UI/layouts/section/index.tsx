import React from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

interface Props extends LayoutProps {
    variant?: 'large' | 'default'
}

const Section = ({ children, variant = 'default' }: Props) => {
    return <section className={cn(styles.section, styles[variant])}>{children}</section>
}

export default Section
