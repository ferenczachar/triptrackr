import { Link } from 'react-router-dom'
import './EditPostBtn.css'


export default function EditPostBtn({ postId }){

    const targetLink = `/posts/${postId}/edit`;

    return (
        <>
            <Link to={targetLink}><button className='editPostBtn'>Edit post</button></Link>
        </>
    )
}