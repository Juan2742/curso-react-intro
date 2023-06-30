import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';

function TodoCounter({total, completed}) {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
    return (
      total === completed & total == 1 ? (
        <h1>Haz completado todas las tareas</h1>
      ) : total === 0 ? (
        <h1>No hay tareas por completar</h1>
      ) : (
        <h1>
          Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
        </h1>
      )
    );
  };

  export {TodoCounter};