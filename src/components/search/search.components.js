import React from 'react'

const search = (props) => {
    return(
        < input
           name = 'search'
           className='search-box'
            type='password'
            placeholder='search monsters'
            onChange = {props.handleSearch}
        />
    )
    
}

export default search