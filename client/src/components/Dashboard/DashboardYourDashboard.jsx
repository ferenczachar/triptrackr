import { useContext } from "react";
import { UserContext } from "../../UserContext"

export default function DashboardYourDashboard(){
    const { userInfo } = useContext(UserContext)
    const username = userInfo.username;
    return (
        <>
            <h1>Welcome to your dashboard, {username} &#128075;</h1>
            <div className="yourDashboardContainer">
                <h3>You can navigate through the menu on the left hand side,</h3>
                <h4>&#x2190; Select one that fits your interest.</h4>
            </div>
        </>
    )
}