import React from "react";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
						<nav id="navbarint" className="navbar navbar-light bg-light justify-content-md-center border">
							<h4>Gráfico de medición de variable en la estación</h4>
						</nav>

						<table className="table table-bordered mb-0">
							<tbody>
								<tr>
									<td colSpan="2" className="p-0" scope="col">
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
									<td colSpan="2" className="p-0" scope="col">
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
									<td colSpan="2" className="p-0" scope="col">
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
									<td colSpan="6" className="w-100" scope="col">
										<div className="graphdiv" />
									</td>
								</tr>
								<tr>
									<th className="" scope="col">
										Valor máximo
									</th>
									<td className="" scope="col">
										0.0
									</td>
									<th className="" scope="col">
										valor mínimo
									</th>
									<td className="" scope="col">
										0.0
									</td>
									<th className="" scope="col">
										Promedio
									</th>
									<td className="" scope="col">
										0.0
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 col-center mt-3 border rounded px-0">
						<table className="table table-bordered mb-0">
							<tbody>
								<tr>
									<td className="py-1">N° de estaciones</td>
									<td className="py-1">10</td>
								</tr>
								<tr>
									<td className="py-1">N° de variables medidas</td>
									<td className="py-1">10</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
