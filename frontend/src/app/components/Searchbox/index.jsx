"use client"
import "./styles.scss"
import { useState } from "react"

// useState == { variable, function }

function Searchbox(props) {
    const [searchVal, setSearchVal] = useState("")
    const [searchResults, setSearchResults] = useState([])

    function handleChange(event) {
        const input = event.target
        const val = input.value
        setSearchVal(val)

        let result = props.arr.filter(item => item.toLowerCase().includes(val.toLowerCase()))
        setSearchResults(result)
    }

    return (
        <div className="searchbox-wrapper">
            <input 
                type="text" 
                placeholder={props.placeholderText}
                value={searchVal}
                onChange={handleChange}
            />
            <button id="search-btn">Search</button>

            <div className="search-results">
                {
                    searchResults.length>0 
                        ?
                    searchResults.toString()
                        :
                    "No results found"
                }
            </div>
        </div>
    );
}

export default Searchbox;

