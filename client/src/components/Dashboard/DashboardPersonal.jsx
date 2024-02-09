import { useContext } from "react";
import { UserContext } from "../../UserContext"

export default function DashboardYourDashboard(){
    const { userInfo } = useContext(UserContext)
    //const username = userInfo.username;
    return (
        <>
            <h1>Personal details</h1>
            <h3>Username:</h3>
            <h4>{userInfo.username}</h4>
            <h3>User ID:</h3>
            <h4>#{userInfo.id}</h4>
            <h3>Email:</h3>
            <h4>{userInfo.email}</h4>
        </>
    )
}