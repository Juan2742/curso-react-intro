import React from "react";
import { CreateIcon } from "../elements/Icons/CreateIcon";
import { CancelIcon } from "../elements/Icons/CancelIcon.js";
import { TodoContext } from "../TodoContext/TodoContext.js";

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
    <form onSubmit={onSubmit}>
            <h2 className="create-title">Crea una tarea</h2>
        <div className="container-create">
            <input className="create-input" type="text" placeholder="Escribe aquí tu nueva tarea" value={newTodoValue} onChange={onChange}></input> 
        </div>
        <div className="button-container">
            <button type="button"  onClick={onCancel} className="cancel-button"><CancelIcon/></button>
            <button type="submit" className="create-button"><CreateIcon/></button>
        </div>
    </form>
    )
}

export { TodoForm };