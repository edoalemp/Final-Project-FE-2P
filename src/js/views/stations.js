import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Stations extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-md-6 col-center mt-1">
						<nav id="navbarint" className="navbar navbar-light bg-light">
							<a className="navbar-brand" href="#liststations">
								Estaciones
							</a>
						</nav>
						<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
							<div className="list-group" id="liststations">
								<a
									href="#"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Cras justo odio
								</a>
								<a
									href="#"
									className="list-group-item list-group-item-action m-0 p-0 border border-0  text-left">
									Dapibus ac facilisis in
								</a>
								<a
									href="#"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Morbi leo risus
								</a>
								<a
									href="#"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Porta ac consectetur ac
								</a>
								<a
									href="#"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left ">
									Vestibulum at eros
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
