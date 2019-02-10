import React from  'react';
import Time from './Time';
import Partida from './Partida';
export default class PlacarContainer extends React.Component {
	constructor(){
		super();
		this.state = {
			golsCasa : 0 ,
			golsVisitante : 0 ,
		};
	}

	MarcarGolsCasa(){
		this.setState({
			golsCasa: this.state.golsCasa + 1,
		});
	}

	MarcarGolsVisitante(){
		this.setState({
			golsVisitante: this.state.golsVisitante + 1,
		});
	}

	render(){
        return  (
        	<div>
        		<div style={{ float:"left","marginRight":"20px"}}>
					<h3>Casa</h3>
					<Time nome={this.props.casa.nome} gols={this.state.golsCasa}
					marcarGol={this.MarcarGolsCasa.bind(this)}/>
				</div>
        		<div style={{ float:"left","marginRight":"20px"}}>
					<Partida estadio={this.props.partida.estadio}
					data={this.props.partida.data}
					horario={this.props.partida.horario}/>
				</div>
        		<div style={{ float:"left","marginRight":"20px"}}>
				<h3>Visitante</h3>
				<Time nome={this.props.visitante.nome} gols={this.state.golsVisitante}
				marcarGol={this.MarcarGolsVisitante.bind(this)}/>
				</div>
				<div style={{ clear:"both"}}></div>
        	</div>

        	);        
	}    
}