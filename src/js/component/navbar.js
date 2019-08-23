import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
							<a className="navbar-brand" href="#">
								Logo
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar"
								aria-controls="navbar"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>

							<div className="collapse navbar-collapse" id="navbar">
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<Link className="nav-link" to="/home">
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											onClick={() =>
												actions.getstations(
													"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/stations"
												)
											}
											to="/estaciones">
											Estaciones
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											onClick={() =>
												actions.getmeasures(
													"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures"
												)
											}
											to="/mediciones">
											Variables
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Salir
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
