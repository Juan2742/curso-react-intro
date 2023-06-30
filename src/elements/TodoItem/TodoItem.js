import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import { CompleteIcon } from "../Icons/CompleteIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
      <p className={`task ${props.completed && 'task-completed'}`}>{props.text}</p>
      <DeleteIcon deleted={props.deleted} onDelete={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
