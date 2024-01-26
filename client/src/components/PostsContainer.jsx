import './PostsContainer.css'
import Post from './Post'

export default function PostsContainer(){
    return (
        <div className='postsContainerFull'>
            <div className="postsContainer">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}