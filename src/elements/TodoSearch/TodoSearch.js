import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext.js";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
      } = React.useContext(TodoContext);
    const lookForValue = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <input type="text" placeholder="🔍Busca tu tarea🛠" value={searchValue} onChange={lookForValue}/>
    )
};

export {TodoSearch};