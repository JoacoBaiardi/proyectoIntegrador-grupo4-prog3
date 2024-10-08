import { Component } from "react";
import FavoritosIcon from "../FavoritosIcon/FavoritosIcon";
import "./Detail.css"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2RjNTQ0OGJmYWVmMjU1NDUyYjllZjdiZTIyYWEwNiIsIm5iZiI6MTcyNjQ4Nzg2Ny4wMTU3ODMsInN1YiI6IjY2ZTFiMDViMDAwMDAwMDAwMDIyYWY5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C1LL8xvJAE1bdJg7wIQG6XUbqVpuviXdAILYvULO6kM'
    }
};

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        };
    }

    componentDidMount() {
        const id = this.props.id
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    movie: data,
                })
            })
    }

    render() {
        const { movie } = this.state

        if (!movie) {
            return <div className="loader"></div>
        }
        return (
            <div className="movie-detail-container">
                <h1>{movie.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}/>
                <div className="movie-info">
                <p>{movie.overview}</p>
                <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                <p><strong>Generos:</strong></p>
                <ul className="genres-list">
                    {this.state.movie.genres && this.state.movie.genres.length > 0 ? (
                        this.state.movie.genres.map((genero, idx) => (
                            <li key={idx}>{genero.name}</li>
                        ))
                    ) : (
                        <li>Cargando géneros...</li>
                    )}
                </ul>
                </div>
                <div className="favorites-icon">
                    <FavoritosIcon id={Number(movie.id)} />
                </div>
            </div>
        );
    }
}

export default Detail;
