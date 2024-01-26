import NavBar from '../components/NavBar'
import PostsContainer from '../components/PostsContainer'
import SearchPost from '../components/SearchPost'

export default function Home() {
    return (
        <>
            <NavBar />
            <SearchPost />
            <PostsContainer />
        </>
    )
}