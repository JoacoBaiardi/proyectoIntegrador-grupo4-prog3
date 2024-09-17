import "./Card.css"
import { Link } from "react-router-dom"
import { Component } from "react"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verDescripcion: false,
            esFavorito: false
        }
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            const estaEnFavoritos = parsedStorage.includes(this.props.id)
            if (estaEnFavoritos) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    handleVerDescripcion() {
        this.setState(
            {
                verDescripcion: !this.state.verDescripcion
            }
        )
    }

    agregarAFavoritos() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            parsedStorage.push(this.props.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', stringStorage)
        } else {
            const primerFavorito = [this.props.id]
            const stringStorage = JSON.stringify(primerFavorito)
            localStorage.setItem('favoritos', stringStorage)
        }
        this.setState({
            esFavorito: true
        })
    }
    quitarFavoritos() {
        const storage = localStorage.getItem('favoritos')
        const parsedStorage = JSON.parse(storage)
        const restoFavoritos = parsedStorage.filter(id => id !== this.props.id)
        const stringStorage = JSON.stringify(restoFavoritos)
        localStorage.setItem('favoritos', stringStorage)
        this.setState({
            esFavorito: false
        })
    }

    render() {
        const { title, image, description, id } = this.props
        return (
            <article className='card'>
                <img src={`${image}`} alt="" />
                <h3> {title}</h3>
                <div>
                    {this.state.verDescripcion ? <button onClick={() => this.handleVerDescripcion()}>Ver Menos</button> : <button onClick={() => this.handleVerDescripcion()}>Ver Descripcion</button>}
                </div>
                <p className={this.state.verDescripcion ? "mostrar" : "ocultar"}>{description}</p>
                <button><Link to={`pelicula/${id}`}>Ver detalle</Link></button>
                <button
                    onClick={() => !this.state.esFavorito ? this.agregarAFavoritos() : this.quitarFavoritos()}>
                    {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
                </button>
            </article>

        )
    }
}
export default Card