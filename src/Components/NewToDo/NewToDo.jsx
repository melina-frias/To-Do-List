import React from 'react';
import './NewToDo.css';
import { TodoContext } from '../TodoContext/index'

const NewToDo = () => {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('')


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe un nuevo To Do</label>
            <textarea name="" id="" cols="30" rows="10"
                value={newTodoValue}
                onChange={onChange}
                placeholder='Escribi una tarea que tengas pendiente'
                >
                
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"

                >Cancelar</button>
                <button
                    onClick={onSubmit}
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { NewToDo }