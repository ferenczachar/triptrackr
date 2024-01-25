import { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import { UserContext } from "../UserContext"

export default function Dashboard(){
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        })
        .then((response) => {
            response.json()
            .then((userInfo) => {
                setUserInfo(userInfo);
            })
        })
        .catch((err) => {
            console.log(err)
        });
        // eslint-disable-next-line
    }, []);
    const username = userInfo.username;
    const id = userInfo.id;
    return (
        <>
            <NavBar />
            <h1>Welcome to your Dashboard, {username}</h1>
            <h3>ID# {id}</h3>
        </>    
    )
};