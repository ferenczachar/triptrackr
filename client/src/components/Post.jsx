import './Post.css'

export default function Post({ title, desc, likes, createdAt, img }){
    return (
        <div className='postContainer'>
            <div className="card">
                <div className="card-left">
                    <h3>{title}</h3>
                    <p>{desc}</p>
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