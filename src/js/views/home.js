import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4>Gráfico de variable de la estación</h4>
						</nav>

						<table className="table table-bordered mb-0">
							<tbody>
								<tr>
									<td className="w-30 p-0" scope="col">
										<div className="input-group">
											<div className="input-group-prepend">
												<label className="input-group-text" htmlFor="inputGroupSelect01">
													Intervalo
												</label>
											</div>
											<select className="custom-select" id="inputGroupSelect01">
												<option selected>Escoger..</option>
												<option value="1">Hora</option>
												<option value="2">Semana</option>
												<option value="3">Mes</option>
											</select>
										</div>
									</td>
									<td className="w-40 p-0" scope="col">
										<div className="input-group">
											<div className="input-group-prepend">
												<label className="input-group-text" htmlFor="inputGroupSelect01">
													Variable
												</label>
											</div>
											<select className="custom-select" id="inputGroupSelect01">
												<option selected>Escoger..</option>
												<option value="1">Hora</option>
												<option value="2">Semana</option>
												<option value="3">Mes</option>
											</select>
										</div>
									</td>
									<td className="w-30 p-0" scope="col">
										<div className="input-group">
											<div className="input-group-prepend">
												<label className="input-group-text" htmlFor="inputGroupSelect01">
													Estación
												</label>
											</div>
											<select className="custom-select" id="inputGroupSelect01">
												<option selected>Escoger..</option>
												<option value="1">Hora</option>
												<option value="2">Semana</option>
												<option value="3">Mes</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td colSpan="3" className="w-80" scope="col">
										<div className="graphdiv" />
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
