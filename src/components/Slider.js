import React from 'react'

import styles from './slider.module.scss';

const Slider = () => {
    function con(e) {
        const value = +e.target.value;
        const width = +e.target.clientWidth;
        e.target.nextSibling.style.marginLeft = (5 * value) * (width / 10) + 'px';
    }


    return (
        <div className={styles.container}>
            <input type="range" min="-2" max="2" step="1" id={styles.slider} onInput={con} onChange={e => console.log(e.target.value)} />
            <div className={styles.button}></div>
        </div>
    )
}

export default Slider;