import { Component } from "react"
import Card from "../Card/Card"
import "./Grid.css"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2RjNTQ0OGJmYWVmMjU1NDUyYjllZjdiZTIyYWEwNiIsIm5iZiI6MTcyNjQ4Nzg2Ny4wMTU3ODMsInN1YiI6IjY2ZTFiMDViMDAwMDAwMDAwMDIyYWY5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C1LL8xvJAE1bdJg7wIQG6XUbqVpuviXdAILYvULO6kM'
    }
};

class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
            page: 1,
            isLoading: true,
            filterValue: ""
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch(`${this.props.url}&page=${this.state.page}`, options)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    movies: data.results,
                    isLoading: false,
                    filteredMovies: data.results

                })
            })
    }

    verMas = () => {
        this.setState({ page: this.state.page + 1 }, () => {
            fetch(`${this.props.url}&page=${this.state.page}`, options)
                .then((response) => response.json())
                .then(data => {
                    this.setState({
                        movies: this.state.movies.concat(data.results)
                    });
                    console.log(data);
                });
        });
    };


    handleFilter = (e) => {
        const userValue = e.target.value;
        this.setState({
            filterValue: userValue,
            filteredMovies: this.state.movies.filter((movie) =>
                movie.title.toLowerCase().includes(userValue.toLowerCase())
            ),
        });
        console.log(this.state.filteredMovies);

    }

    handleResetFilter = () => {
        this.setState({
            filterValue: "",
            filteredMovies: this.state.movies,
        });
    }


    render() {
        const moviesToShow = this.state.filteredMovies.slice(0, this.props.limit);
        return (
            <>
                <div>

                    {this.props.limit !== 5 && (
                        <>
                            <input
                                type="text"
                                value={this.state.filterValue}
                                onChange={this.handleFilter}
                            />
                            <button onClick={this.handleResetFilter}>Reset Filter</button>
                        </>
                    )}

                </div>
                {!this.state.isLoading ? (
                    <section className="gridContainer">
                        {moviesToShow.map((data, idx) => (
                            <Card
                                key={idx}
                                id={data.id}
                                image={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                                title={data.title}
                                description={data.overview}
                            />
                        ))}
                        {this.props.limit !== 5 && (
                            <button onClick={this.verMas}>Ver mas</button>
                        )}
                    </section>

                ) : (
                    <p>Loading...</p>
                )}
            </>
        )
    }
}

export default Grid