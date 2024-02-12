import { Link } from 'react-router-dom'
import './EditPostBtn.css'


export default function EditPostBtn(){
    return (
        <>
            <Link to='/edit'><button className='editPostBtn'>Edit post</button></Link>
        </>
    )
}