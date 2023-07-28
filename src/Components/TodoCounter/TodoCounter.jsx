import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos ,loading} = React.useContext(TodoContext)
  return (

    loading

    ?

    <h1 className="TodoCounter">Has completado 0 de 0 To Do</h1>

    :

    totalTodos === 0 || totalTodos === completedTodos 
    ?
    

    <h1 className="TodoCounter">Felicidades no tienes ningun To Do</h1>
    :

    <h1 className="TodoCounter">Has completado<span> {completedTodos} </span>
      de<span> {totalTodos} </span>
      To Do</h1>
  )
}

export { TodoCounter }