import React from "react";
import { FiCheck } from "react-icons/fi";

function CompleteIcon(props) {
  return(
    <span ><FiCheck className={`check-icon ${props.completed && 'check-icon-completed'}`} onClick={props.onComplete}/></span>);
}

export { CompleteIcon };
