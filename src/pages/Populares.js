import Grid from "../components/Grid/Grid"
import { Component } from "react"

class Populares extends Component{
    render(){
    return (
        <>
            <Grid
                url={'https://api.themoviedb.org/3/movie/popular?language=en-US'}
                movies = {this.props.handlemovies}
                />
        </>
    )
}
}

export default Populares