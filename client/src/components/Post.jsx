import './Post.css'

export default function Post({ creator, title, desc, likes, createdAt, img }){
    return (
        <div className='postContainer'>
            <div className="card">
                <div className="card-left">
                    <p className='creatorLink'>@{creator}</p>
                    <h3>{title.slice(0,40)}</h3>
                    <p>{(desc.length >= 120) ? `${desc.slice(0,120)}...` : desc}</p>
                    <div className="cardActions">
                        <button>&#129505;</button>
                        <span className='likesNum'>{likes}</span>
                    </div>
                    <span className='creationDate'>{createdAt}</span>
                </div>
                <div className="card-right">
                    <div className="card-right-photo">
                        <img src={img} alt="peldakep.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}