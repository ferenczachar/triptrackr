import './PostsContainer.css'
import Post from './Post'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function PostsContainer({ sendQuery }){
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts/showAll', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
            if (response.status === 200) {
                setPosts(response.data);
            } else {
                console.error('Error in response:', response);
            }
        } catch (error) {
            console.error('Error in catch:', error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className='postsContainerFull'>
            <div className="postsContainer">
                {posts.map((post) => (
                        <Post
                            key={post.id}
                            creator={post.username}
                            title={post.title}
                            desc={post.desc}
                            likes={post.likes}
                            createdAt={post.createdAt}
                            img={post.img}
                            postId={post.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}