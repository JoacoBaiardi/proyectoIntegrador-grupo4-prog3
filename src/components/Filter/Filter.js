import { Component } from "react"

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            filteredmovies: [],
            filtervalue: "",
        };
    }

    componentDidMount() {
        fetch(`${this.props.url}&page=${this.state.page}`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                    filteredmovies: data.results,
                });
            })
            .catch((error) => console.log(error));
    }


    handleFilter(e) {
        const uservalue = e.target.value;
        this.setState({
            filtervalue: uservalue,
            filteredmovies: this.state.movies.filter((movie) => movie.title.toLowerCase().includes(uservalue.toLowerCase()),
            )
        });
    }

    handleResetFilter() {
        this.setState({
            filtervalue: "",
            filteredmovies: this.state.movies,
        });
    }
    render() {
        return (
            <>
                <div>

                    <input type="text" value={this.state.filtervalue} onChange={(e) => this.handleFilter(e)}></input>
                    <button onClick={() => this.handleResetFilter()}> reset filter</button>
                </div>
            </>
        )
    }
}

export default Filter
