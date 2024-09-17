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
            movies: []
        }
    }

    componentDidMount() {
        fetch(this.props.url, options)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    movies: data.results
                })
            })
    }


    render() {
        const moviesToShow = this.state.movies.slice(0, this.props.limit);
        return (
            <>
                <section className="gridContainer">
                    {moviesToShow.map((data, idx) => (
                        <Card
                            key={idx}
                            id=  {data.id}
                            image={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                            title={data.title}
                            description={data.overview}
                        />
                    ))}
                </section>
            </>
        )
    }
}

export default Grid