import React from 'react'

import styles from './slider.module.scss';

const Slider = (props) => {
    const sliding = (e) => {
        const value = +e.target.value;
        const width = +e.target.clientWidth;
        e.target.nextSibling.style.marginLeft = (5 * value) * (width / 10) + 'px';
    }

    const updateText = (e) => {
        const texts = ['10K', '50K', '100K', '500K', '1M'];
        props.changeValue(texts[+e.target.value + 2])
    }

    const updatePrice = (e) => {
        const value = e.target.value;
        let multiplier = props.discount ? 1 : 0.75;
        switch (value) {
            case '-2':
                props.changePrice((8 * multiplier).toFixed(2));
                break;
            case '-1':
                props.changePrice((12 * multiplier).toFixed(2));
                break;
            case '1':
                props.changePrice((24 * multiplier).toFixed(2));
                break;
            case '2':
                props.changePrice((36 * multiplier).toFixed(2));
                break;
            default:
                props.changePrice((16 * multiplier).toFixed(2));

        }
    }


    return (
        <div className={styles.container}>
            <input type="range" min="-2" max="2" step="1" id={styles.slider}
                onInput={sliding}
                onChange={(e) => {
                    updateText(e);
                    updatePrice(e);
                }} />
            <div className={styles.button}></div>
        </div>
    )
}

export default Slider;