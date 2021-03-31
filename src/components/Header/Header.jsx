import React from 'react'
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import UserNav from './UserNav';




const Header = () => {
    const isAuthentificated = useSelector(authSelectors.isAuthentificated)
    return(
        <>
        <header>
            {isAuthentificated ? <UserNav/> : <AuthNav/>}   
        </header>
        </>            
    )
}

export default Header;
