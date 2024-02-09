import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext"
import DashboardSinglePost from "./DashboardSinglePost";
import axios from "axios";

export default function DashboardManagePosts(){
    const { userInfo } = useContext(UserContext)
    const id = userInfo.id;
    const [ userPosts, setUserPosts ] = useState([]);

    const getUserPosts = async() => {
        try {
            const response = await axios.post('http://localhost:5000/api/posts/userPosts', {id},
            { 
            headers: {
                'Content-Type': 'application/json'
            },
            });

            if (response.status === 200) {
                setUserPosts(response.data)
            } else {
                console.error('Error in response:', response);
            }
        }
        catch (error) {
            console.error('Error in catch:', error);
        }
    }

    useEffect(() => {
        getUserPosts();
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <h1>Manage posts &#128221;</h1>
            <div className="managePostsContainer">
                {userPosts?.map((post) => {
                    return <DashboardSinglePost key={post.id} id={post.id} title={post.title} img={post.img} createdAt={post.createdAt}/>
                })}
                
                {userPosts.length === 0 && (
                    <h4 style={{textAlign: 'center'}}>You don't have any posts, yet.</h4>
                )}
            </div>
        </>
    )
}