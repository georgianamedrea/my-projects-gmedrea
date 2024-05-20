import styles from './Layout.module.scss';

import PropTypes from 'prop-types';

import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Layout = ({ children }) => {

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        if (location.pathname === '/auth') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])


    return (
        <>
            <header>
                <Link to='/'>
                    <div className={styles.logo}>Hola, Amigos!</div>
                </Link>
            </header>
            {showNavBar && <Navigation />}
            <main className={styles.mainContent}>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;