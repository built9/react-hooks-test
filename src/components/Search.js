import React ,{useState}from 'react';

function Search({search}) {
    const [searchVal,setSearchVal] = useState('')
    const handleSearchChanges =(e)=>{
        setSearchVal(e.target.value)
    }
    const resetSearchChanges =(e)=>{
        setSearchVal('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchVal);
        resetSearchChanges();
      }
    return (
        <form className="search">
        <input
          value={searchVal}
          onChange={handleSearchChanges}
          type="text"
        />
        <button onClick={handleSubmit} type="submit">搜索</button>
      </form>
    );
}

export default Search;