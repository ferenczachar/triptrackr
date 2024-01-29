import { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import { UserContext } from "../UserContext"
import './Dashboard.css'

export default function Dashboard(){
    const { userInfo } = useContext(UserContext)
    const username = userInfo.username;
    //const id = userInfo.id;
    return (
        <>
            <NavBar />
            <div className="dashboardContainer">
                <div className="dashboard">
                    <ul className="dashboardMenu dashboardColumn">
                        <li>Your dashboard</li>
                        <li>Personal details</li>
                        <li>Manage posts</li>
                        <li>Logout</li>
                        <li className="dashboardDeleteID">Delete your account</li>
                    </ul>
                    <div className="dashboardContent dashboardColumn">
                        <h1>Welcome to your dashboard, {username} &#128075;</h1>
                    </div>
                    <div className="dashboardRight dashboardColumn">
                    </div>
                </div>
            </div>
        </>    
    )
};