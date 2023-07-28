import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue,totalTodos } = React.useContext(TodoContext)
  return totalTodos !== 0 && (
    <div className="contenedorTodoSearch">
      <input
        type="text"
        name=""
        id=""
        className='TodoSearch'
        value={searchValue}
        placeholder='Ingresa tu búsqueda'
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch }