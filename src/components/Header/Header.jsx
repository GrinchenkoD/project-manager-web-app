import React from 'react'
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import UserNav from './UserNav';
import styles from "./Header.module.css"




const Header = () => {
    const isAuthentificated = useSelector(authSelectors.isAuthentificated)
    return(
        <>
        <header className={styles.pageHeader}>
            {isAuthentificated ? <UserNav/> : <AuthNav/>}   
        </header>
        </>            
    )
}

export default Header;
