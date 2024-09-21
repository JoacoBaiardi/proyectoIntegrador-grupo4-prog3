import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {

    return(
        <div className="NotFound">
            <h1>404 No se encontro lo que buscabas</h1>
            <h1><Link to="/"> Volver al Inicio</Link></h1>
            <iframe src="https://giphy.com/embed/48NwKxvf3zNfdO33rv" width="480" height="360" title="gif 404"  ></iframe>
        </div>
    )

}

export default Notfound