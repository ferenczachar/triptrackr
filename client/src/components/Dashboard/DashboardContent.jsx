import DashboardYourDashboard from "./DashboardYourDashboard"
import DashboardPersonal from "./DashboardPersonal"

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
        </div>
    )
}