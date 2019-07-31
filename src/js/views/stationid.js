import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export class StationId extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4>Estacion 1</h4>
						</nav>

						<table className="table table-bordered mb-0">
							<tbody>
								<tr>
									<th className="w-20" scope="col">
										Nombre
									</th>
									<td colSpan="2" className="w-80" scope="col">
										Nombre
									</td>
								</tr>
								<tr>
									<th className="w-20" scope="col">
										Latitud
									</th>
									<td colSpan="2" className="w-80" scope="col">
										00.00
									</td>
								</tr>
								<tr>
									<th className="w-20" scope="col">
										Longitud
									</th>
									<td colSpan="2" className="w-80" scope="col">
										00.00
									</td>
								</tr>
								<tr>
									<th className="w-20" scope="col">
										Responsable
									</th>
									<td colSpan="2" className="w-80" scope="col">
										nombre
									</td>
								</tr>
								<tr>
									<th className="w-20" scope="col">
										Dirección
									</th>
									<td className="w-80" scope="col">
										Calle
									</td>
									<td className="w-20" scope="col">
										Número
									</td>
								</tr>
								<tr>
									<th className="w-20" scope="col">
										Referencia
									</th>
									<td colSpan="2" className="w-80" scope="col">
										Descripción
									</td>
								</tr>
								<tr>
									<th className="w-20" scope="col">
										Variable
									</th>
									<td className="w-60" scope="col">
										valor
									</td>
									<td className="w-20" scope="col">
										unidades
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4>Mediciones asignadas a la estación</h4>
						</nav>

						<table className="table table-bordered mb-0">
							<thead>
								<tr>
									<th className="w-10" scope="col">
										#id
									</th>
									<th className="w-30" scope="col">
										Variable
									</th>
									<th className="w-20" scope="col">
										Valor
									</th>
									<th className="w-20" scope="col">
										Unidades
									</th>
									<th className="w-20" scope="col">
										Acciones
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Temperatura</td>
									<td>32</td>
									<td>°C</td>
									<td className="px-0">
										<div className="btn-group" role="group" aria-label="buttons group">
											<a href="/medicion" role="button" className="btn btn-primary">
												Mostrar
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
									<td>1</td>
									<td>P</td>
									<td className="px-0">
										<div className="btn-group" role="group" aria-label="buttons group">
											<a href="/medicion" role="button" className="btn btn-primary">
												Mostrar
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
