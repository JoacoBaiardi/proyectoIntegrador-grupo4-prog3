import { Component } from "react"

class Form extends Component {
    constructor() {
        super();
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

    render() {
        return (
            <form>
                <input onChange={(event) => this.handleNameChange(event)} name="search" value={this.state.inputName} />
            </form>
        )
    }
}

export default Form