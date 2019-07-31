import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class Measures extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4>Lista de variables del sistema</h4>
						</nav>

						<table className="table table-bordered mb-0">
							<thead>
								<tr>
									<th className="w-10" scope="col">
										#id
									</th>
									<th className="w-50" scope="col">
										Variable
									</th>
									<th className="w-20" scope="col">
										Unidad
									</th>
									<th className="w-20 px-0" scope="col">
										Acciones
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>temperatura</td>
									<td>C°</td>
									<td className="px-0">
										<div className="btn-group" role="group" aria-label="buttons group">
											<a href="/mediciones/id" role="button" className="btn btn-primary">
												Detalle
											</a>
											<a role="button" className="btn btn-primary">
												Eliminar
											</a>
											<a role="button" className="btn btn-primary">
												Editar
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Presión</td>
									<td>P</td>

									<td className="px-0">
										<div className="btn-group" role="group" aria-label="buttons group">
											<a href="/mediciones/id" role="button" className="btn btn-primary">
												Detalle
											</a>
											<a role="button" className="btn btn-primary">
												Eliminar
											</a>
											<a role="button" className="btn btn-primary">
												Editar
											</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
