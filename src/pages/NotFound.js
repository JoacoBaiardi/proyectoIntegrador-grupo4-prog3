import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {

    return(
        <div className="NotFound">
            <section className="s-Notfound">
            <h1>404 No se encontro lo que buscabas</h1>
            <h1><Link to="/"> Volver al Inicio</Link></h1>
            <img src="/img/404-error-page-not-found-gato.webp" alt="Error 404" />
            </section>
        </div>
    )

}

export default Notfound