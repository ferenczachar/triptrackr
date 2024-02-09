import { useContext } from "react";
import { UserContext } from "../../UserContext"

export default function DashboardManagePosts(){
    const { userInfo } = useContext(UserContext)
    
    return (
        <>
            <h1>Manage posts &#128221;</h1>
            <div className="managePostsContainer">
                <div className="managePost">
                    <div className="postImg">
                        <img src="https://images.unsplash.com/photo-1696446701744-f548de20f463?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" />
                    </div>
                    <div className="postDetails">
                        <h4>Post title</h4>
                        <span>Last updated: {'2024-01-12 15:32:01'}</span>
                    </div>
                    <div className="postActions">
                        <span>Edit</span>
                    </div>
                </div>
            </div>
        </>
    )
}