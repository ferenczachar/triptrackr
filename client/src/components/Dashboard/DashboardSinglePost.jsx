import { Link } from 'react-router-dom'

export default function DashboardSinglePost({ id, title, img, createdAt }){
    return (
        <>
        <div className="managePost">
            <div className="postImg">
                <Link to={`/posts/${id}`}><img src={`/assets/${img}`} alt={img} /></Link>
            </div>
            <div className="postDetails">
                <h4>{ title }</h4>
                <p>Last updated: { createdAt.slice(0, 10) }</p>
            </div>
            <div className="postActions">
            <Link to={`/posts/${id}/edit`}><span>Edit</span></Link>
            </div>
        </div>
        </>
    )
}