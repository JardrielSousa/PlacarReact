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
		const {partida , casa , visitante} = this.props;
		const estilo = { float:"left","marginRight":"20px"};
        return  (
        	<div>
        		<div style={estilo}>
					<h3>Casa</h3>
					<Time nome={casa.nome} gols={this.state.golsCasa}
					marcarGol={this.MarcarGolsCasa.bind(this)}/>
				</div>
        		<div style={estilo}>
					<Partida {...partida} />
					{this.props.clima}
				</div>
				
					
				
        		<div style={estilo}>
				<h3>Visitante</h3>
				<Time nome={visitante.nome} gols={this.state.golsVisitante}
				marcarGol={this.MarcarGolsVisitante.bind(this)}/>
				</div>
				<div style={{ clear:"both"}}></div>
        	</div>

        	);        
	}    
}

PlacarContainer.propTypes = {
	clima : React.PropTypes.string,
};

PlacarContainer.defaultProps = {
	clima : 'Ensolarado' ,
};	