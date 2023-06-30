import React from "react";
import { BiHistory } from "react-icons/bi";

function TodosLoading() {
    return (
        <div className="div-loading-icon">
            <p className="loading-text">Estamos cargando...</p>
            <span><BiHistory className="loading-icon"/></span>
        </div>
    );
};

export { TodosLoading };