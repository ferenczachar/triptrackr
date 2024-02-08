export default function DashboardMenu(){
    return (
        <>
            <ul className="dashboardMenu dashboardColumn">
                <li>Your dashboard</li>
                <li>Personal details</li>
                <li>Manage posts</li>
                <li>User management</li>
                <li>Logout</li>
                <li className="dashboardDeleteID">Delete your account</li>
            </ul>
        </>
    )
}