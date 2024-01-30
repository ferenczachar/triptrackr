import './SearchPost.css'
import { useState } from 'react'

export default function SearchPost({ onSearch }){
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery)
    };
    return (
        <div className='searchContainer'>
            <h4>Search any topic you are interested in</h4>
            <form className='searchForm' onSubmit={handleSearchSubmit}>
                <input
                type="text"
                placeholder='Scuba diving..'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            {/*<div className="categories">
                <span>All</span>
                <span>Europe</span>
                <span>Asia</span>
                <span>South-America</span>
                <span>North-America</span>
                <span>Australia</span>
                <span>Africa</span>
            </div>*/}
        </div>
    )
}