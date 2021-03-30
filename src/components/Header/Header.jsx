import React from 'react'
import AuthNav from './AuthNav';
// import {useSelector, useDispatch} from 'react-redux'
// import {authSelectors} from 'redux/auth';
import UserNav from './UserNav';


const Header = () => {
    // const isAuthenticated = useSelector(authSelectors.isAuthenticated)
    const isAuth = false;
    return(
        <>
        <header>
            {isAuth ? <AuthNav/> : <UserNav/>}   
        </header>
        </>            
    )
}

export default Header
