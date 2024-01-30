import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import './ShowPost.css'

export default function ShowPost(){
    const [post, setPost] = useState([]);
    const { id } = useParams()

    const fetchPosts = async () => {
        await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setPost(data);
                })
            } else {
                console.log('Error in response: ' + response)
            }
        }).catch((error) => {
            console.log('Error in catch: ' + error)
        })
    }

    useEffect(() => {
        fetchPosts();
        console.log(post[0])
    }, [id, post])

    return (
        <>
        <NavBar/>
        <>
        <div className="showPostContainerFull">
            <div className="showPostContainer">
            <div className="showPostLeft">
                <p className='showPostCreator'>@{post[0]?.username}</p>
                <p className='showPostDate'>DD/MM/YYYY</p>
                <h1>{post[0]?.title}</h1>
                <p>{post[0]?.desc}</p>
                </div>
                <div className="showPostRight">
                    <img src={post[0]?.img} alt={post[0]?.id} />
            </div>
            </div>
        </div>
        </>
        </>    
    )
}