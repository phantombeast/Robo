import React from 'react'


const SearchBox=({searchfield,searchChange})=>{

    return(
        <div>
        <input className="pa3 ba b--green" type='search' placeholder='search here'
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox