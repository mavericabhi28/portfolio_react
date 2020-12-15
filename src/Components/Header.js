import React from 'react'
import styles from './header.module.css';
import { Link} from "react-router-dom";





const Header = () => {
    return (
        <div>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.li}>    
                        <Link to="/" className={styles.link}>Home</Link>
                    </li>
                    <li className={styles.li}>    
                        <Link to="/Contact" className={styles.link}>Contact</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/About" className={styles.link}>About</Link>
                    </li>
                    <li className={styles.li}>    
                        <Link to="/Contact" className={styles.link}>Resume</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
