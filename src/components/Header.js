import styles from './Header.module.css'

const Header = () => {
    return (
        <div className='header'>
            <h3 className={styles.main}>
                Helloo
            </h3>
            <h4 className={styles.secondary}>
                World!
            </h4>
        </div>

    )
}

export default Header;