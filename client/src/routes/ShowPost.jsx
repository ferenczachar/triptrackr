import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import NavBar from '../components/NavBar'
import BackToHome from '../components/BackToHome'
import EditPostBtn from '../components/EditPostBtn'
import DeletePostBtn from '../components/DeletePostBtn'
import './ShowPost.css'
import { UserContext } from '../UserContext';


export default function ShowPost(){
    const [post, setPost] = useState([]);
    const { id } = useParams()
    const { userInfo } = useContext(UserContext);

    const fetchPosts = async () => {
        try {
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
        catch (error) {
            console.log('Error in axios - from catch')
        }
    }

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
        <NavBar/>
        <BackToHome/>
        {(userInfo && userInfo.username === post[0]?.username) && <EditPostBtn postId={id}/>}
        {(userInfo && userInfo.username === post[0]?.username) && <DeletePostBtn postId={id}/>}
        <>
        <div className="showPostContainerFull">
            <div className="showPostContainer">
            <div className="showPostLeft">
                <p className='showPostCreator'>@{post[0]?.username}</p>
                <p className='showPostDate'>{post[0]?.createdAt}</p>
                <h1>{post[0]?.title}</h1>
                <p>{post[0]?.desc}</p>
                </div>
                <div className="showPostRight">
                    <img src={`/assets/${post[0]?.img}`} alt={post[0]?.img} />
            </div>
            </div>
        </div>
        </>
        </>    
    )
}