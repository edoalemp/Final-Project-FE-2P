import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Measures extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
						<nav
							id="navbarint"
							className="navbar navbar-light bg-light justify-content-md-center border p-0">
							<Link to="#" role="button" className="btn btn-primary w-100">
								Agregar variable
							</Link>
						</nav>
					</div>
				</div>
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
									<th className="w-20" scope="col">
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
										<div className="btn-group d-flex" role="group" aria-label="buttons group">
											<Link to="/mediciones/id" role="button" className="btn btn-primary w-100">
												Detalle
											</Link>
											<Link to="#" role="button" className="btn btn-primary w-100">
												Eliminar
											</Link>
											<Link to="#" role="button" className="btn btn-primary w-100">
												Editar
											</Link>
										</div>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Presión</td>
									<td>P</td>

									<td className="px-0">
										<div className="btn-group d-flex" role="group" aria-label="buttons group">
											<Link to="/mediciones/id" role="button" className="btn btn-primary w-100">
												Detalle
											</Link>
											<Link to="#" role="button" className="btn btn-primary w-100">
												Eliminar
											</Link>
											<Link to="#" role="button" className="btn btn-primary w-100">
												Editar
											</Link>
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
