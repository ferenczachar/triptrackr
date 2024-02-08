import { useContext } from "react";
import { UserContext } from "../UserContext"

export default function DashboardContent(){
    const { userInfo } = useContext(UserContext)
    const username = userInfo.username;
    return (
        <div className="dashboardContent dashboardColumn">
            <h1>Welcome to your dashboard, {username} &#128075;</h1>
        </div>
    )
}