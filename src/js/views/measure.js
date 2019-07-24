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
						<nav id="navbarint" className="navbar navbar-light bg-light">
							<a className="navbar-brand" href="#listmeasures">
								Medida
							</a>
						</nav>
						<div data-spy="scroll" data-target="#navbar-example" data-offset="0">
							<div className="list-group" id="listmeasures">
								<a
									href="#"
									className="list-group-item list-group-item-action m-0 p-0 border border-0 text-left">
									Cras
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
