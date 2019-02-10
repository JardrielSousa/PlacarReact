import React from  'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida : {
        estadio : "Maracana/RJ",
        data : "11/02/2019",
        horario : "19h",
    },
    casa : {
        nome : "Vasco" ,
    },
    visitante: {
        nome: "Flamengo" ,
    }

};
export default class App extends React.Component{   
    render(){
        return  <PlacarContainer partida={dados.partida} 
        casa={dados.casa}
        visitante={dados.visitante}
        /> ;
           
        
    }
}