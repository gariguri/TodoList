import React, {useEffect, useState} from "react";

export default function TodoSearch({searchInput, setSearchInput}){
    // const handleInputClick = (e) => {
    //     const filtertodos = searchInput.trim() 
    //         ? todos.filter(todo => todo.toLowerCase().includes(searchInput.toLowerCase())) 
    //         : todos;
    //     setFilterTodos(filtertodos);
    //     setSearchInput('');
    // }
   
    return(
        <div className="search-container"> 
            <input className="searchinput" type="text" placeholder="검색어 입력" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
            {/* <button className="searchbutton" onClick={(e) => handleInputClick(e)}>입력</button> */}
        </div>
    )
}
