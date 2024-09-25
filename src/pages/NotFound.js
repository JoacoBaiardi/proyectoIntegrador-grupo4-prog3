import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {

    return(
        <div className="NotFound">
            <h1>404 No se encontro lo que buscabas</h1>
            <h1><Link to="/"> Volver al Inicio</Link></h1>
            <img src="/img/error-404.png" alt="Error 404" />
        </div>
    )

}

export default Notfound