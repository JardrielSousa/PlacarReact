import React from 'react';

export default class Contador extends React.Component{
    constructor(){
        super();
        this.state = {
            contador : 0,
        };
    }
    decremento(){
        this.setState({
            contador: this.state.contador -1 ,
        });
    }
    incremento(){
        this.setState({
            contador: this.state.contador +1 ,
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decremento.bind(this)}>-</button>
                    <button onClick={this.incremento.bind(this)}>+</button>
                </div>
            </div>

        );

    }
}