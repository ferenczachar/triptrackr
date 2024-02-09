import { useContext } from "react";
import { UserContext } from "../../UserContext"

export default function DashboardPersonal(){
    const { userInfo } = useContext(UserContext)
    //const username = userInfo.username;
    return (
        <>
            <h1>Personal details &#x1F464;</h1>
            <div className="personalContainer">
                <div className="personalBubble">
                    <h4>Username:</h4>
                    <p>{userInfo.username}</p>
                </div>
                <div className="personalBubble">
                    <h4>User ID:</h4>
                    <p>#{userInfo.id}</p>
                </div>
                <div className="personalBubble">
                    <h4>Email:</h4>
                    <p>{userInfo.email}</p>
                </div>
            </div>
        </>
    )
}