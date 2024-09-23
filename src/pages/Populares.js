import Grid from "../components/Grid/Grid"
import { Component } from "react"

export class Populares extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            filteredmovies: [],
            filtervalue: "",
        };
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results, 
                    filteredmovies: data.results,
                });
            })
            .catch((error) => console.log(error));
    }


handelFilter(e){
  const uservalue = e.target.value;
  this.setState({
    filtervalue: uservalue,
    filteredmovies: this.state.movies.filter((movie) => movie.title.toLowerCase().includes(uservalue.toLowerCase()),
    )
  });
  console.log(this.state.filteredmovies);
  
}

 handleResetFilter() {
    this.setState({
        filtervalue: "",
        filteredmovies: this.state.movies,
    });
 }


    render(){
    return (
        <>
           <div>

                 <input type="text" value= {this.state.filtervalue} onChange={(e) => this.handelFilter(e)}></input>
                 <button onClick={()=> this.handleResetFilter}> reset filter</button>
           </div>
           <Grid 
           url = {'https://api.themoviedb.org/3/movie/popular?language=en-US'}
           movie = {this.state.filteredmovies} />
        </>
        )
     }
    }

export default Populares