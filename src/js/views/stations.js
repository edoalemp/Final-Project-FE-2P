import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class Stations extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4 href="#liststations">Listado de Estaciones</h4>
						</nav>
						<div data-spy="scroll" data-target="#navbar-example" data-offset="0">
							<div className="list-group" id="liststations">
								<table className="table table-sm table-bordered mb-0">
									<thead>
										<tr>
											<th scope="col">#id</th>
											<th scope="col">Variable</th>
											<th scope="col">Lat</th>
											<th scope="col">long</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
