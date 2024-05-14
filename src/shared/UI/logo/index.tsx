import Link from 'next/link'

import Icons from '@/shared/UI/icons'

import styles from './styles.module.scss'

const Logo = () => {
    return (
        <Link className={styles.logo} href='/'>
            Racer
        </Link>
    )
}

export default Logo
