import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.main}>
                Simple, traffic-based pricing
            </h1>
            <div className={styles.secondary}>
                <h4>
                    Sign-up for our 30-day trial.
                </h4>
                <h4>
                    No credit card required.
                </h4>
            </div>


        </div>

    )
}

export default Header;