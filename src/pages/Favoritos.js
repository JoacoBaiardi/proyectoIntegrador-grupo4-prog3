import { Component } from "react"
import Card from "../components/Card/Card";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true
            
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            const fetchPromises = parsedStorage.map(id =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c3dc5448bfaef255452b9ef7be22aa06`)
                    .then(response => response.json())
            );

            Promise.all(fetchPromises)
                .then(moviesData => {
                    this.setState({
                        movies: moviesData,
                        isLoading: false
                    });
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <>
            <h1>Peliculas Favoritas</h1>
            {!this.state.isLoading ? (
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
                ) : (
                    <div className="loader"></div>
                )}
            </>
        )
    }
}
export default Favoritos