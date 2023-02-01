import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord.length === 0){
      setFilteredData([]);
    }
    else if (searchWord.length >= 3 ){
      // const searchdata=data.filter((item)=>item.name.toLowercase().includes(searchWord));
      setFilteredData(newFilter);
    }

  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0,15).map((value, key) => {
            return (
              
              <div className="dataItem" id="a">
                <table>
                <div className="gap">{value.name}</div> 
                
                </table>
            

                 </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;