import './SearchPost.css'

export default function SearchPost(){
    return (
        <div className='searchContainer'>
            <h4>Search any topic you are interested in</h4>
            <form className='searchForm' action='/kakaland'>
                <input type="text" />
                <button>Search</button>
            </form>
            <div className="categories">
                <span>All</span>
                <span>Europe</span>
                <span>Asia</span>
                <span>South-America</span>
                <span>North-America</span>
                <span>Australia</span>
                <span>Africa</span>
            </div>
        </div>
    )
}