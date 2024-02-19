import { Link } from 'react-router-dom'
import './EditPostBtn.css'
import './DeletePostBtn.css'


export default function DeletePostBtn({ postId }){

    const targetLink = `/posts/${postId}/delete`;

    return (
        <>
            <Link to={targetLink}><button className='deletePostBtn'>Delete post</button></Link>
        </>
    )
}