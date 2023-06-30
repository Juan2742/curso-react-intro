import React from "react";
import { Gi3DHammer } from "react-icons/gi";

function EmptyTodos() {
    return (
        <div className="div-empty-icon">
            <p className="empty-text">Crea tu primera tarea!!</p>
            <span className="empty-icon"><Gi3DHammer/></span>
        </div>
    );
};

export { EmptyTodos };