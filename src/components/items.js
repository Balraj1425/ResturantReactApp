import React from 'react';

class Items extends React.Component {
    constructor(props){
        super();
        // let type = this.props.type;
        this.state = {
            type:props.type
        }
    }
    changeValue = () => {
        this.setState ({
            type:"do something"
        })
    }
    render = () => {
        return (
            <div>
                <h1>dsdsd</h1>
                <h1>{this.state.type}</h1>             
                <button onClick={this.changeValue}>Submit</button>
            </div>
        );
    }
}

export default Items