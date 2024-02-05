import './SearchPost.css'
import { useContext } from 'react'
import { QueryContext } from '../QueryContext'

export default function SearchPost(){
    const { queryValue, setQueryValue } = useContext(QueryContext)

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='searchContainer'>
            <h4>Search any topic you are interested in</h4>
            <form className='searchForm' onSubmit={handleSearchSubmit}>
                <input
                type="text"
                placeholder='Scuba diving..'
                value={queryValue}
                onChange={(e) => setQueryValue(e.target.value)}/>
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