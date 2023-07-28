import React from 'react';
import './EmptyTodos.css';
import check from '../../Img/event.png'

const EmptyTodos = () => {
    return (
        <div className="EmptyTodo">
            <img src={check} alt="check" className='check'/>
            <p className='textoEmptyTodo'>Crea tu primer To Do!</p>
        </div>
    )
}

export { EmptyTodos }