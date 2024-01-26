import './Post.css'

export default function Post(){
    return (
        <div className='postContainer'>
            <div className="card">
                <div className="card-left">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum dolor, error voluptatum quia nemo, molestiae, quaerat eveniet id velit obcaecati voluptate mollitia adipisci.</p>
                    <div className="cardActions">
                        <button>&#129505;</button>
                        <span className='likesNum'>25</span>
                    </div>
                    <span className='creationDate'>DD/MM/YYYY</span>
                </div>
                <div className="card-right">
                    <div className="card-right-photo">
                        <img src="https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="peldakep.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}