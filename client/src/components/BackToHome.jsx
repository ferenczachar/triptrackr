import { Link } from 'react-router-dom'
import './BackToHome.css'


export default function BackToHome(){
    return (
        <>
            <Link to='/'><button className='backToHome'>Back to Homepage</button></Link>
        </>
    )
}