import NavBar from "../components/NavBar"
import './DeletePost.css'
import { useState, useEffect, useContext } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"
import axios from "axios"

export default function DeletePost(){
    const { id } = useParams();
    const [ post, setPost ] = useState(null);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ redirect, setRedirect ] = useState(false);
    const { userInfo } = useContext(UserContext);
    const userId = userInfo.id;

    useEffect(() => {
        const fetchData = async () => {
            // Check if user is logged in
            if (!userId) {
                setRedirect(true)
            }
            try {
                const response = await axios.get(`http://localhost:5000/api/posts/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (response.status === 200) {
                    const postData = response.data[0];
                        // Check if logged-in user is the author of the post
                        if (userId !== postData.authorId) {
                            setRedirect(true);
                        } else {
                            // Set the post state if everything is fine
                            setPost(postData);
                        }
                } else {
                    console.log('Error from Axios')
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [id])

    const submitDeletion = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:5000/api/posts/delete/${id}`)
            if (response.status === 200) {
                console.log(response.data);
                setErrorMsg('Successfully deleted, redirecting to homepage..')
                setTimeout(() => {
                    setRedirect(true);
                }, 3000)
            } else {
                console.log('Error in Axios while deletion request.');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    if (redirect) {
        return <Navigate to={'/'}/>;
    }

    return (
        <>
            <NavBar />
            <div className="deletePostFormContainer">
                <form className="deletePostForm" onSubmit={submitDeletion}>
                    <h2> Do you really want to delete the below post?</h2>
                    <div className="buttons">
                        <button type="submit">Yes, I'm sure</button>
                        <Link to={'/posts/' + id}><button>No, I don't</button></Link>
                    </div>
                </form>
                <div className="currentPost">
                    <h3>{post?.title}</h3>
                    <img src={'/assets/' + post?.img} alt={post?.id} />
                </div>
                <span className="createPostError">{errorMsg}</span>
            </div>
        </>
    )
}