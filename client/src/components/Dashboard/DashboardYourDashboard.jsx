import { useContext } from "react";
import { UserContext } from "../../UserContext"

export default function DashboardYourDashboard(){
    const { userInfo } = useContext(UserContext)
    const username = userInfo.username;
    return (
        <>
            <h1>Welcome to your dashboard, {username} &#128075;</h1>
        </>
    )
}