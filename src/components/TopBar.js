import React from 'react'

function Topbar(props) {

    return (
        <>
        <form onSubmit={props.submitFunction} className="searchcontainer">
            <input
                type="text"
                placeholder="Enter the movie name....."
                value={props.searchQuery}
                onChange={props.changeFunction}
            />
            <button type="submit">
                Search
            </button>
        </form>
        </>
    )
}

export default Topbar;