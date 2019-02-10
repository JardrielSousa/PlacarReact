import React from  'react';

export default class BotaoGol extends React.Component{
    handle(event){
        event.preventDefault();
        this.props.marcarGol();
    }
    render(){
        return (
            <button onClick={this.handle.bind(this)}>Gol!</button>
        );
        
           
        
    }
}