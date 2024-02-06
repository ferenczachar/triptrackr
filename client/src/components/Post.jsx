import './Post.css'
import { Link } from 'react-router-dom'

export default function Post({ creator, title, desc, likes, createdAt, img, postId }){
    return (
        <div className='postContainer'>
            <div className="card">
                <div className="card-left">
                    <p className='creatorLink'>@{creator}</p>
                    <Link to={`/posts/${postId}`}><h3>{title.slice(0,40)}</h3></Link>
                    <p>{(desc.length >= 120) ? `${desc.slice(0,120)}...` : desc}</p>
                    {/*<div className="cardActions">
                        <button>&#129505;</button>
                        <span className='likesNum'>{likes}</span>
                    </div>*/}
                    <span className='creationDate'>{createdAt}</span>
                </div>
                <div className="card-right">
                    <div className="card-right-photo">
                    <Link to={`/posts/${postId}`}><img src={img} alt="peldakep.png" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}