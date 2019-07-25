import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class OneStation extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-md-8 col-center mt-3">
						<nav className="navbar navbar-light bg-light text-center">
							<h2>Estación</h2>
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
			</div>
		);
	}
}
