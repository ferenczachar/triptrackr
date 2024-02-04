import NavBar from '../components/NavBar'
import { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext"
import './CreatePost.css'
import axios from 'axios';

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { userInfo } = useContext(UserContext);
    const userId = userInfo.id;

    function submitPost(e){
        e.preventDefault()
        if (title === '' || desc === '' || img === '') {
            console.log('Empty fields')
            setErrorMsg('Please fill out all fields')
        } else {
            axios.post('http://localhost:5000/api/posts/new', {
                title,
                desc,
                img,
                userId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        setErrorMsg('Post created successfully');
                        setRedirect(true);
                    } else {
                        console.log('Error while creating post:', response.statusText);
                        setErrorMsg('Error while creating post: ' + response.statusText);
                    }
                })
                .catch(error => {
                    if (error.response) {
                        console.error('Error in catch:', error.response.data);
                        setErrorMsg('Error in catch: ' + error.response.data.message);
                    } else if (error.request) {
                        console.error('Error in catch:', error.request);
                        setErrorMsg('Error in catch: No response received');
                    } else {
                        console.error('Error in catch:', error.message);
                        setErrorMsg('Error in catch: ' + error.message);
                    }
                });
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
            <h1>Create your post here</h1>
                <form className='createPostForm'>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id='title' 
                        name='title' 
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="desc">Description</label>
                    <textarea 
                        id='desc' 
                        name='desc'
                        value={desc}
                        onChange={e => setDesc(e.target.value)}/>
                    <label htmlFor="img">Picture URL</label>
                    <input 
                        type="text" 
                        id='img' 
                        name='img' 
                        value={img}
                        onChange={e => setImg(e.target.value)}/>
                    <button onClick={submitPost}>Submit</button>
                </form>
                <span className="createPostError">{errorMsg}</span>
            </div>
        </div>
        </>
    )
}