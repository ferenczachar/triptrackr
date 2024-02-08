import DashboardMenu from "./DashboardMenu";
import DashboardContent from "./DashboardContent"
import DashboardRight from "./DashboardRight";

export default function DashboardContainer() {
    return (
        <>
            <div className="dashboardContainer">
                <div className="dashboard">
                    <DashboardMenu />
                    <DashboardContent />
                    <DashboardRight />
                </div>
            </div>
        </>
    )
}