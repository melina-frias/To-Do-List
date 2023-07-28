import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoButton } from '../TodoButton/TodoButton';
import { TodoError } from '../TodoError/TodoError';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/index.jsx';
import { Modal } from '../Modal/Modal';
import {NewToDo} from '../NewToDo/NewToDo'


function AppUi() {
    const { loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal ,
        totalTodos
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodoLoading />}
                {error && <TodoError />}
                {(!loading && searchedTodos.length === 0 && totalTodos === 0) && <EmptyTodos />}


                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <TodoButton setOpenModal={setOpenModal}/>
            {openModal && (
                <Modal>
                    <NewToDo/>
                </Modal>
            )}
        </>
    );
}

export { AppUi }