import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext'

export const ProtectedRoute = () => {
    const { userInfo } = useContext(UserContext)
    let isLoggedIn
    (userInfo === null) ? isLoggedIn = false : isLoggedIn = true;
    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
    return (
        <Outlet />
    )
}