import { Component } from "react"
import Card from "../components/Card/Card"

class SearchResults extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            isLoading: true
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        const query = this.props.location.state.search;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c3dc5448bfaef255452b9ef7be22aa06`)


            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                    isLoading: false
                }); console.log(data);
            })
            .catch((error) => console.log(error));
    }


    render() {
        return (
            <div>
                
                <h1>Películas Encontradas</h1>
                {!this.state.isLoading ? (
                    <section className="SearchRsults">
                        {this.state.movies.length > 0 ? (
                        this.state.movies.map((movie, idx) => (
                            <Card
                                key={idx}
                                title={movie.title}
                                image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                id={movie.id}
                                description={movie.overview}
                            />
                        ))
                    ) : ( <h2> No se encontro ninguna pelicula con ese nombre </h2>)}
                    </section>
                ) : (
                    <p>Loading...</p>
                )}
            
            </div>
        );
    }
}

export default SearchResults