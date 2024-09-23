import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Grid from "../components/Grid/Grid"
import Form from "../components/Form/Form"
import { Component } from "react"

class Home extends Component{

    render(){
    return (
        <>
            <section className="searchForm">
                <h4>Buscar pelicula</h4>
                <Form history = {this.props.history}/>
            </section>
            <h1>My App in React</h1>
            <section className="home">
                <div>
                
                <h2>Popular</h2>
                <p><Link to = "/populares">Ver mas</Link></p>
                </div>
                <Grid
                    url='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
                    limit={5}
                />
                <div>
                <h2>Upcoming</h2>
                <p><Link to = "/upcoming">Ver mas</Link></p>
                </div>
                <Grid
                    url='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                    limit={5}
                />
            </section>
        </>

    )
}
}
export default Home