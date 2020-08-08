import { useState } from "react";

function SearchBar({ setValue }) {

    const [inputValue, setInputValue] = useState('')

    const handleInput = (event) => {
        let input = event.target.value;
        setInputValue(input);
    }

    const handleKeypress = event => {
        if (event.key === 'Enter') {
            setValue(inputValue);
        }
    }

    const handleClick = (event) => {
        setValue(inputValue);
    }

    return (
        <div>
            <input id="SearchInput" type="text" placeholder="Search" onKeyPress={handleKeypress} onChange={handleInput}></input>
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchBar