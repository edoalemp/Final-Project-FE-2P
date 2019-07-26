import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class OneMeasure extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-md-8 col-center mt-3">
						<nav className="navbar navbar-light bg-light text-center">
							<h2>Información de Señal de Medición</h2>
						</nav>
						<div className="jumbotron jumbotron-fluid pt-0 pb-0 mb-0">
							<div className="container">
								<h4>Identificador</h4>
								<p className="lead ml-2">identificador</p>
							</div>
							<div className="container">
								<h4>Dirección</h4>
								<p className="lead ml-2">identificador</p>
							</div>
							<div className="container">
								<h4>Coordenadas geográficas</h4>
								<p className="lead ml-2">identificador</p>
							</div>
							<div className="container">
								<h4>Referencia</h4>
								<p className="lead ml-2">identificador</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col-md-8 col-center mt-0">
						<nav className="navbar navbar-light bg-light text-center">
							<a className="h2">Valores de medida</a>
						</nav>
						<div className="jumbotron jumbotron-fluid pt-0 pb-0">
							<div className="container">
								<h4>Valor Actual</h4>
								<p className="lead ml-2">Valor</p>
							</div>
							<div className="container">
								<h4>Valor Máximo</h4>
								<p className="lead ml-2">Valor</p>
							</div>
							<div className="container">
								<h4>Valor Mínimo</h4>
								<p className="lead ml-2">Valor</p>
							</div>
							<div className="container">
								<h4>Valor Promedio</h4>
								<p className="lead ml-2">Valor</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
