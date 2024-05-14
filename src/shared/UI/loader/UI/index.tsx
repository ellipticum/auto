import React from 'react'

import styles from './styles.module.scss'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.ring} />
        </div>
    )
}

export default Loader
