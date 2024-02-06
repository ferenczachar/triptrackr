import './PostsContainer.css'
import Post from './Post'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { QueryContext } from '../QueryContext'

export default function PostsContainer(){
    const { queryValue } = useContext(QueryContext)
    const [posts, setPosts] = useState([]);
    let filterForPosts = false;

    const fetchPosts = async () => {
        try {
            console.log(queryValue)
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
        // eslint-disable-next-line
    }, [queryValue])

    if (posts && queryValue !== '' && queryValue.length > 3) { //Ha vannak posztok
        filterForPosts = true;
    }

    let filteredPosts;

    if (filterForPosts) {
        filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(queryValue.toLowerCase()) || post.desc.toLowerCase().includes(queryValue.toLowerCase())
        });
    }


    return (
        <div className='postsContainerFull'>
            <div className="postsContainer">
                {filterForPosts &&
                 filteredPosts?.map((post) => (
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
                ))}
                {!filterForPosts && 
                posts?.map((post) => (
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