import React from 'react';
import './TodoLoading.css'

const TodoLoading = () => {
    return (
        <div className="loader">
            <li className="ball"></li>
            <li className="ball"></li>
            <li className="ball"></li>
        </div>
    )
}

export { TodoLoading }