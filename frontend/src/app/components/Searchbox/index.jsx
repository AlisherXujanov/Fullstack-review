"use client"
import "./styles.scss"
import { useState } from "react"

// useState == { variable, function }

function Searchbox(props) {
    const [searchVal, setSearchVal] = useState("")

    function handleChange(event) {
        const input = event.target
        const val = input.value
        setSearchVal(val)
    }

    return (
        <div className="searchbox-wrapper">
            <p>{searchVal}</p>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchVal}
                onChange={handleChange}
            />
            <button id="search-btn">Search</button>

            <div className="search-results"></div>
        </div>
    );
}

export default Searchbox;

