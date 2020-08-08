function SearchBar({ setValue }) {

    const handleInput = (event) => {
        let input = event.target.value;
        setValue(input);
    }

    return (
        <div>
            <input id="SearchInput" type="text" placeholder="Enter keyword" onInput={handleInput}></input>
        </div>
    )
}

export default SearchBar