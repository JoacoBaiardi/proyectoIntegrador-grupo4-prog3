import React, { Component } from "react";
import Detail from "../components/Detail/Detail";

class DetailPage extends Component {
    
    render() {
        const { id } = this.props.match.params;
        return (
            <>
                <section>
                    <Detail id={id} />
                </section>
            </>
        );
    }
}

export default DetailPage;
