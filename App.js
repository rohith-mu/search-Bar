import React from "react";
import "./App.css";
 import SearchBar from "./Components/SearchBar";
 import BookData from "./Data.json";


function App() {
   return (
 <div className="App">
  <SearchBar placeholder="Enter the Airport name " data={BookData} /> 
 </div>
  );
}

export default App;