import { Component } from "react"
import Card from "../components/Card/Card";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            parsedStorage.map(id =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c3dc5448bfaef255452b9ef7be22aa06`).then(response => response.json())
                    .then(data => this.setState({
                        movies: [...this.state.movies, data]
                    }))
            )
        }
    }

    render() {
        return (
            <>
            <h1>Peliculas Favoritas</h1>
            <section className="favoritos">
                {this.state.movies.map((movies, idx) =>
                    <Card
                        key={idx}
                        title={movies.title}
                        image={`https://image.tmdb.org/t/p/w342/${movies.poster_path}`}
                        id={movies.id}
                        description={movies.overview}
                    />
                )}
                </section>
            </>
        )
    }
}
export default Favoritos