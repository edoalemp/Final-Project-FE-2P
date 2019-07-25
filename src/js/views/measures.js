import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Measures extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-md-6 col-center mt-3">
						<nav id="navbarint" className="navbar navbar-light bg-light">
							<h2 href="#listmeasures">Listado de Mediciones</h2>
						</nav>
						<div data-spy="scroll" data-target="#navbar-example" data-offset="0">
							<div className="list-group" id="listmeasures">
								<Link
									to="/medicion"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Cras justo odio
								</Link>
								<Link
									to="/medicion"
									className="list-group-item list-group-item-action m-0 p-0 border border-0  text-left">
									Dapibus ac facilisis in
								</Link>
								<Link
									to="/medicion"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Morbi leo risus
								</Link>
								<Link
									to="/medicion"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Porta ac consectetur ac
								</Link>
								<Link
									to="/medicion"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left ">
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
