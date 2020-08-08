function SearchBar() {

    const getInput = () => {
        let input = document.getElementById("SearchInput").value;
    }

    const retrieveResults = () => {
        
    }

    return (
        <div>
            <input id="SearchInput" type="text" placeholder="Enter keyword" onInput={getInput}></input>
        </div>
    )
}

export default SearchBar