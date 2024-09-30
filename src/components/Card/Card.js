import "./Card.css"
import { Link } from "react-router-dom"
import { Component } from "react"
import FavoritosIcon from "../FavoritosIcon/FavoritosIcon";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verDescripcion: false,
            esFavorito: false
        }
    }

    handleVerDescripcion() {
        this.setState(
            {
                verDescripcion: !this.state.verDescripcion
            }
        )
    }

    render() {
        const { title, image, description, id } = this.props
        return (
            <article className='card'>
                <img src={`${image}`} alt="" />
                <h3> {title}</h3>
                <div>
                    {this.state.verDescripcion ?
                        <button onClick={() => this.handleVerDescripcion()}>Ver Menos</button> :
                        <button onClick={() => this.handleVerDescripcion()}>Ver Descripcion</button>}
                    </div>
                    <p className={this.state.verDescripcion ? "mostrar" : "ocultar"}>{description}</p>
                <button><Link to={`pelicula/${id}`}>Ver detalle</Link></button>
                <FavoritosIcon id={id} />
            </article>

        )
    }
}
export default Card