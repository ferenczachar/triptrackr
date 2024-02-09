import { useContext } from "react";
import { UserContext } from "../../UserContext"
import { DashboardContext } from "../../context/DashboardContext"

export default function DashboardManagePosts(){
    const { userInfo } = useContext(UserContext)
    const { setContentValue } = useContext(DashboardContext)
    const dontDelete = () =>{
        setContentValue('1');
    }
    
    return (
        <>
            <h1>Delete your account &#128543;</h1>
            <div className="deleteAccountContainer">
                <form action="/kaki" className="deleteAccountForm">
                    <h3>Are you sure you want to delete your account?</h3>
                    <div className="deleteFormButtons">
                        <button type="submit">Yes</button>
                        <button onClick={dontDelete}>No</button>
                    </div>
                </form>
            </div>
        </>
    )
}