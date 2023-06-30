import React from "react";
import { FiTrash2 } from "react-icons/fi";

function DeleteIcon(props) {
  return (<span className="trash" ><FiTrash2 onClick={props.onDelete}/></span>);
}

export { DeleteIcon };
