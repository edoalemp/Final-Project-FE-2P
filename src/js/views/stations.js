import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Stations extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light">
							<h4 href="#liststations">Listado de Estaciones</h4>
						</nav>
						<div data-spy="scroll" data-target="#navbar-example" data-offset="0">
							<div className="list-group" id="liststations">
								<Link
									to="/estacion"
									className="list-group-item list-group-item-action ml-0 pl-2 pt-0 pb-0 border border-0 text-left">
									Cras justo odio
								</Link>
								<Link
									to="/estacion"
									className="list-group-item list-group-item-action ml-0 pl-2 pt-0 pb-0 border border-0  text-left">
									Dapibus ac facilisis in
								</Link>
								<Link
									to="/estacion"
									className="list-group-item list-group-item-action ml-0 pl-2 pt-0 pb-0  border border-0 text-left">
									Morbi leo risus
								</Link>
								<Link
									to="/estacion"
									className="list-group-item list-group-item-action ml-0 pl-2 pt-0 pb-0  border border-0 text-left">
									Porta ac consectetur ac
								</Link>
								<Link
									to="/estacion"
									className="list-group-item list-group-item-action ml-0 pl-2 pt-0 pb-0  border border-0 text-left ">
									Vestibulum at eros
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
