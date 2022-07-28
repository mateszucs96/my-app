import React, { useState } from 'react'
import Slider from './Slider.js';

import styles from './card.module.scss'

const Card = () => {
    const [value, setValue] = useState(0);


    return (
        <div className={styles.container}>
            <div className={styles.pageview}>
                <h4>100K PAGEVIEWS</h4>
            </div>
            <Slider />
        </div>
    )
}

export default Card