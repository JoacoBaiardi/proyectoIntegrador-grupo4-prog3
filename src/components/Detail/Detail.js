import { Component } from "react";

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
                console.log(data);
                this.setState({
                    movie: data,
                })
            })
    }

    render() {
        const { movie } = this.state

        if (!movie) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <h1>{movie.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
                <p>{movie.overview}</p>
                <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
            </div>
        );
    }
}

export default Detail;
