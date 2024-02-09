import DashboardYourDashboard from "./DashboardYourDashboard"
import DashboardPersonal from "./DashboardPersonal"
import DashboardManagePosts from "./DashboardManagePosts"
import DashboardDelete from "./DashboardDelete"

import { useContext, useEffect } from "react"
import { DashboardContext } from "../../context/DashboardContext"

export default function DashboardContent(){
    const { contentValue } = useContext(DashboardContext);

    useEffect(() => {
    }, [contentValue])

    return (
        <div className="dashboardContent dashboardColumn">
            {(contentValue === '1') && <DashboardYourDashboard/>}
            {(contentValue === '2') && <DashboardPersonal/>}
            {(contentValue === '3') && <DashboardManagePosts/>}
            {(contentValue === '4') && <DashboardDelete/>}
        </div>
    )
}