import NavBar from '../components/NavBar'
import PostsContainer from '../components/PostsContainer'
import SearchPost from '../components/SearchPost'

export default function Home() {
    const showQuery = (searchQuery) =>{
        console.log(searchQuery)
    }
    return (
        <>
            <NavBar />
            <SearchPost onSearch={showQuery}/>
            <PostsContainer sendQuery={showQuery}/>
        </>
    )
}