import { useContext, useEffect } from "react"
import { DashboardContext } from "../../context/DashboardContext"

export default function DashboardMenu(){
    const { contentValue, setContentValue } = useContext(DashboardContext);


    const showDashboard = (e) => {
        setContentValue(e.target.id);
    }
    const showPersonal = (e) => {
        setContentValue(e.target.id);
    }
    const showManagePosts = (e) => {
        setContentValue(e.target.id);
    }
    const showDeleteAccount = (e) => {
        setContentValue(e.target.id);
    }
    const logout = () => {
        console.log('Logout clicked')
    }

    useEffect(() => {
    }, [contentValue])

    return (
        <>
            <ul className="dashboardMenu dashboardColumn">
                <li onClick={showDashboard} id="1">Your dashboard</li>
                <li onClick={showPersonal}  id="2">Personal details</li>
                <li onClick={showManagePosts}  id="3">Manage posts</li>
                {/*<li>User management</li>*/}
                <li onClick={logout}>Logout</li>
                <li className="dashboardDeleteID" onClick={showDeleteAccount}  id="4">Delete your account</li>
            </ul>
        </>
    )
}