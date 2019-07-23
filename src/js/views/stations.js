import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Stations extends React.Component {
	render() {
		return (
			<div className="container text-center">
				<div className="row  justify-content-md-center">
					<div className="col-md-6 col-center mt-1">
						<div data-spy="scroll" data-target=".navbar" data-offset="50">
							<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
								<ul className="navbar-nav">
									<li className="nav-item">
										<a className="nav-link" href="#section1">
											Section 1
										</a>
									</li>
								</ul>
							</nav>

							<div id="section1" className="container-fluid bg-success">
								<div className="list-group">
									<a href="#" className="list-group-item list-group-item-action">
										First item
									</a>
									<a href="#" className="list-group-item list-group-item-action">
										Second item
									</a>
									<a href="#" className="list-group-item list-group-item-action">
										Third item
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
