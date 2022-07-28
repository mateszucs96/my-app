import React, { useEffect, useState } from 'react'
import Slider from './Slider.js';
import styles from './card.module.scss';

const Card = () => {
    const [value, setValue] = useState('100K');
    const [price, setPrice] = useState((16).toFixed(2));
    const [isMonthly, setIsMonthly] = useState(true);


    useEffect(() => {
        if (isMonthly === false) {
            setPrice(p => p * 0.75)
        }
        if (isMonthly === true) {
            setPrice(p => p * 1.25)
        }
    }, [isMonthly])

    const toggleButton = (e) => {
        const clicked = e.target.closest(`.${styles.toggleContainer}`);
        if (clicked.style.justifyContent === 'flex-start' || clicked.style.justifyContent === '') {
            clicked.style.justifyContent = 'flex-end';
            setIsMonthly(false);
        } else {
            clicked.style.justifyContent = 'flex-start';
            setIsMonthly(true);
        }

    }




    return (
        <div className={styles.container}>
            <div className={styles.pageview}>
                <h4>{value} PAGEVIEWS</h4>
            </div>
            <Slider changeValue={setValue} changePrice={setPrice} discount={isMonthly} />
            <div className={styles.billingTag}>
                <h4 className={styles.price}>${price.toString()} <span className={styles.monthly}>/ month</span></h4>
            </div>
            <div className={styles.billing}>
                <h5 className={styles.text}>Monthly Billing</h5>
                <div className={styles.toggleContainer} onClick={toggleButton}>
                    <div className={styles.button}></div>
                </div>
                <h5 className={styles.text}>Yearly Billing</h5>
            </div>
        </div>
    )
}

export default Card