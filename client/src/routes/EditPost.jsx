import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { UserContext } from "../UserContext"
import './EditPost.css'

export default function EditPost(){
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);
    const [ post, setPost ] = useState({});
    const [ title, setTitle ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { userInfo } = useContext(UserContext);
    const userId = userInfo.id;

    useEffect(() => {
        const fetchData = async () => {
            // Check if user is logged in
            if (!userId) {
                setRedirect(true);
                return;
            }
    
            try {
                // Fetch the post
                const response = await axios.get(`http://localhost:5000/api/posts/${id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
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
                    console.log('Error in axios:');
                    console.log(response);
                }
            } catch (error) {
                console.log('Error fetching post:');
                console.log(error);
            }
        };
    
        fetchData();
    }, [userId, id]);

    const submitEditedPost = async (e) => {
        e.preventDefault();
        if (title === '' && desc === '') {
            console.log('Empty fields/Nothing has been changed')
            setErrorMsg('No changes / Please fill out all fields')
        } else {
            try {
                const response = await axios.put("http://localhost:5000/api/posts/edit",{
                    postId: id,
                    postUserName: post.username,
                    title,
                    desc,
                    userId,
                    username: userInfo.username
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.status === 200) {
                    setErrorMsg('Post modified successfully')
                    setTimeout(() => {
                        setRedirect(true);
                    }, 3000);
                } else {
                    console.log('Error in axios')
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    

    if (redirect){
        return <Navigate to={'/'}/>;
    }

    return (
        <>
        <NavBar />
        <div className="createPostContainer">
            <div className="createPost">
            <h1>Edit your post here</h1>
                <form className='createPostForm'>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id='title' 
                        name='title' 
                        defaultValue={post?.title || ''}
                        onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="desc">Description</label>
                    <textarea 
                        id='desc' 
                        name='desc'
                        defaultValue={post?.desc || ''}
                        onChange={e => setDesc(e.target.value)}/>
                    <label htmlFor="img">Picture (Cannot be changed)</label>
                    <img src={"/assets/" + post?.img} alt="" />
                    <button onClick={submitEditedPost}>Submit</button>
                </form>
                <span className="createPostError">{errorMsg}</span>
            </div>
        </div>
        </>
    )
}