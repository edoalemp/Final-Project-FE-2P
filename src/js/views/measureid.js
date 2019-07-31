import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class MeasureId extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
						<table className="table table-bordered mb-0">
							<tbody>
								<tr>
									<th className="w-20 py-1" scope="col">
										Nombre
									</th>
									<td className="w-80 py-1" scope="col">
										Presión
									</td>
								</tr>
								<tr>
									<th className="py-1">Unidad</th>
									<td className="py-1">Pascal</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
						<nav
							id="navbarint"
							className="navbar navbar-light bg-light justify-content-md-center border p-0">
							<a href="#" role="button" className="btn btn-primary w-100">
								Asignar variable a estación
							</a>
						</nav>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4>Estaciones asignadas a la variable</h4>
						</nav>

						<table className="table table-bordered mb-0">
							<thead>
								<tr>
									<th className="w-10" scope="col">
										#id
									</th>
									<th className="w-40" scope="col">
										Nombre
									</th>
									<th className="w-15" scope="col">
										Latitud
									</th>
									<th className="w-15 px-0" scope="col">
										Longitud
									</th>
									<th className="w-20 px-0" scope="col">
										Acciones
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Estación 1</td>
									<td>00.00</td>
									<td>00.00</td>
									<td className="px-0">
										<div className="btn-group d-flex" role="group" aria-label="buttons group">
											<a href="/home" role="button" className="btn btn-primary w-100">
												Detalle
											</a>
											<a role="button" className="btn btn-primary w-100">
												Eliminar
											</a>
											<a role="button" className="btn btn-primary w-100">
												Editar
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Estación 2</td>
									<td>00.00</td>
									<td>00.00</td>
									<td className="px-0">
										<div className="btn-group d-flex" role="group" aria-label="buttons group">
											<a href="/home" role="button" className="btn btn-primary w-100">
												Detalle
											</a>
											<a role="button" className="btn btn-primary w-100">
												Eliminar
											</a>
											<a role="button" className="btn btn-primary w-100">
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
