import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
						<FontAwesomeIcon icon={faBars} />
						<i className="fas fa-grip-lines" />
					</button>
					<div className="dropdown-menu">
						<Link className="dropdown-item" to="/">
							Inicio
						</Link>
						<Link className="dropdown-item" to="/estaciones">
							Estaciones
						</Link>
						<Link className="dropdown-item" to="/mediciones">
							Mediciones
						</Link>
						<Link className="dropdown-item" to="/mediciones">
							Usuario
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}
