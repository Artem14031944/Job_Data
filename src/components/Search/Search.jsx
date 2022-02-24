import React from 'react'

const Search = ({ baseDate, setValue, placeholder }) => {

    const style = {
        input : baseDate.boxMenu.search.input
    };

    return (
        <>
            <input 
                type="text" 
                style={style.input}
                onChange={e=> setValue(e.target.value)}
                placeholder={placeholder}
                defaultValue={''}
            />
        </>
    )
};

export default Search;