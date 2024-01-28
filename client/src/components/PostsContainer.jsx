import './PostsContainer.css'
import Post from './Post'
import { useState, useEffect } from 'react'

export default function PostsContainer(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/posts/showAll', {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setPosts(data);
                })
            } else {
                console.log('Error in response: ' + response)
            }
        }).catch((error) => {
            console.log('Error in catch: ' + error)
        })
    }, [])

    return (
        <div className='postsContainerFull'>
            <div className="postsContainer">
                {posts.map(post => {
                    return <Post 
                    key={post.id} 
                    title={post.title} 
                    desc={post.desc} 
                    likes={post.likes} 
                    createdAt={post.createdAt} 
                    img={post.img}/>
                })}
            </div>
        </div>
    )
}