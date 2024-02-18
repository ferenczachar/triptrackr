import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { UserContext } from "../UserContext"

export default function EditPost(){
    const { id } = useParams();
    const [ post, setPost ] = useState({});
    const [ title, setTitle ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [file, setFile] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { userInfo } = useContext(UserContext);
    const userId = userInfo.id;

    const upload = async() => {
        try {
            const formData = new FormData();
            formData.append('file', file)
            const res = await axios.post('http://localhost:5000/api/upload', formData);
            return res.data
        }
        catch(err) {
            console.log(err)
        }
    }

    const getPost = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/posts/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                setPost(response.data[0])
            } else {
                console.log('Error in axios:')
                console.log(response)
            }
        }
        catch (error) {
            console.log('Try error:')
            console.log(error)
        }
    }

    useEffect(() => {
        getPost();
        // eslint-disable-next-line
    }, [id])

    const submitEditedPost = async (e) => {
        e.preventDefault();
        let imgUrl = '';
        if (file) imgUrl = await upload();
        if (title === '' || desc === '') {
            console.log('Empty fields')
            setErrorMsg('Please fill out all fields')
        } else {
            console.log('Submitted your data:')
            console.log({ id, title, desc, userId })
        }
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
                    <label htmlFor="img">Picture URL</label>
                    <input 
                        type="file" 
                        id='file' 
                        name='file'                        
                        onChange={e => setFile(e.target.files[0])}/>
                    <button onClick={submitEditedPost}>Submit</button>
                </form>
                <span className="createPostError">{errorMsg}</span>
            </div>
        </div>
        </>
    )
}