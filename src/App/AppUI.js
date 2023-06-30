import React from "react";
import { TodoForm } from "../TodoForm/TodoForm.js"
import { TodoContext } from "../TodoContext/TodoContext.js";
import { TodoCounter } from '../elements/TodoCounter/TodoCounter.js';
import { TodoSearch } from '../elements/TodoSearch/TodoSearch.js';
import { TodoList } from '../elements/TodoList/TodoList.js';
import { TodoItem } from '../elements/TodoItem/TodoItem.js';
import { CreateTodoButton } from '../elements/CreateTodoButton/CreateTodoButton.js';
import { TodosLoading } from '../elements/TodosLoading/TodosLoading.js';
import { TodosError } from '../elements/TodosError/TodosError.js';
import { EmptyTodos } from '../elements/EmptyTodos/EmptyTodos.js';
import { Modal } from "../Modal/Modal.js";

function AppUI() {
    const {
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext)
    return (
        <div>
    <TodoContext.Consumer>
      {({ completedTodos, totalTodos }) => (
        <TodoCounter completed={completedTodos} total={totalTodos} />
      )}
    </TodoContext.Consumer>
        <TodoSearch />
            <TodoContext.Consumer>
                {({
                            loading,
                            error,
                            searchedTodos,
                            completeTodo,
                            deleteTodo,
                }) => (
                <TodoList>
                    { loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loading && searchedTodos.lenght === 0) && <EmptyTodos/>}
                    {searchedTodos.map(todo => {
                        return <TodoItem key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={() => completeTodo(todo.text)} 
                        onDelete={() => deleteTodo(todo.text)}/>
                    })}
                </TodoList>
                )}
            </TodoContext.Consumer>
      <CreateTodoButton/>
      {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )};
      </div>
    );
};

export {AppUI};