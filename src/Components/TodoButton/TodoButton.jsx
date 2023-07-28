import React from 'react';
import './TodoButton.css';

function TodoButton({setOpenModal}) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >
      +
    </button>
  )
}

export { TodoButton }