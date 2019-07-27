import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 mt-3 p-0 border rounded">
						<nav className="navbar navbar-light bg-light">
							<h4 className="text-center w-100">Telemetría</h4>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
