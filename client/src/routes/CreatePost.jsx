import NavBar from '../components/NavBar'
import { useState } from 'react'

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');

    function submitPost(e){
        e.preventDefault()
        if (title === '' || desc === '' || img === '') {
            console.log('Empty fields')
        } else {
            fetch('http://localhost:5000/api/posts/new', {
                method: 'POST',
                body: JSON.stringify({title, desc, img}),
                headers: {'Content-Type':'application/json'}
            }).then((response) => {
                if (response.ok) {
                    console.log('Post created successfully');
                } else {
                    console.error('Error while creating post:', response.statusText);
                }
            }).catch((error) => {
                if (error) {
                    console.log('Error in catch: ' + error)
                }
            })
        }
    }

    return (
        <div className="createPostContainer">
            <NavBar />
            <h1>Create your post here</h1>

            <form className='createPostForm'>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id='title' 
                    name='title' 
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                <label htmlFor="desc">Description</label>
                <textarea 
                    id='desc' 
                    name='desc'
                    value={desc}
                    onChange={e => setDesc(e.target.value)}/>
                <label htmlFor="img">Picture URL</label>
                <input 
                    type="text" 
                    id='img' 
                    name='img' 
                    value={img}
                    onChange={e => setImg(e.target.value)}/>
                <button onClick={submitPost}>Submit</button>
            </form>
        </div>
    )
}