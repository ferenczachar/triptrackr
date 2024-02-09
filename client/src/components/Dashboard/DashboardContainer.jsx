import DashboardMenu from "./DashboardMenu";
import DashboardContent from "./DashboardContent"
import DashboardRight from "./DashboardRight";

//context
import { DashboardContextProvider } from "../../context/DashboardContext"

export default function DashboardContainer() {
    return (
        <>
            <div className="dashboardContainer">
                <div className="dashboard">
                    <DashboardContextProvider>
                        <DashboardMenu />
                        <DashboardContent />
                        <DashboardRight />
                    </DashboardContextProvider>
                </div>
            </div>
        </>
    )
}