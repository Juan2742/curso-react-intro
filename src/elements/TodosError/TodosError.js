import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

function TodosError() {
    return (
        <div className="div-error-icon">
            <p className="error-text">Desesperate, hubo un error!!</p>
            <span><FiAlertTriangle className="error-icon"/></span>
        </div>
    );
};

export { TodosError };