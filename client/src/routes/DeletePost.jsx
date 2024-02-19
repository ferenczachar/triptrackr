import NavBar from "../components/NavBar"
import './DeletePost.css'
import { useState, useEffect } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import axios from "axios"

export default function DeletePost(){
    const { id } = useParams();
    const [ post, setPost ] = useState(null);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ redirect, setRedirect ] = useState(false);

    const getPostById = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/posts/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (response.status === 200) {
                setPost(response.data[0]);
            } else {
                console.log('Error from Axios')
            }
        }
        catch (error) {
            console.log(error);
        }
    }

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

    useEffect(() => {
        getPostById();
        // eslint-disable-next-line
    }, [id])

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