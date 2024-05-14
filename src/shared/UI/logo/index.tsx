import Link from 'next/link'

import Icons from '@/shared/UI/icons'

import styles from './styles.module.scss'

const Logo = () => {
    return (
        <Link className={styles.logo} href='/'>
            <Icons.Logo width={50} height={50} />
        </Link>
    )
}

export default Logo
