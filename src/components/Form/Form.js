import { Component } from "react"
import "./Form.css"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: " "
        }
    }

    handleNameChange(event) {
        this.setState({
            search: event.target.value
        },()=> console.log(this.state.search)
        )
    }

    handleCancelSubmite(e){
        e.preventDefault()
    }

    handelFormSubmit(){
        this.props.history.push('/search', { search: this.state.search })

    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.handleCancelSubmite(e)}> 
                    <input onChange={(event) => this.handleNameChange(event)} name="search" value={this.state.search} />
                    <button type="submit" onClick={() => this.handelFormSubmit()}>Search</button>
                </form>
            </div>
        )
    }
}

export default Form