import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class StationId extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let stationframe;
					let arrayhtml = [];
					stationframe = (
						<div className="row justify-content-md-center">
							<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
								<nav
									id="navbarint"
									className="navbar navbar-light bg-light justify-content-md-center border">
									<h4>{store.onestation.name}</h4>
								</nav>

								<table className="table table-bordered mb-0">
									<tbody>
										<tr>
											<th className="w-20 py-1" scope="col">
												Latitud
											</th>
											<td colSpan="2" className="w-80 py-1" scope="col">
												{store.onestation.lattitude}
											</td>
										</tr>
										<tr>
											<th className="w-20 py-1" scope="col">
												Longitud
											</th>
											<td colSpan="2" className="w-80 py-1" scope="col">
												{store.onestation.longitude}
											</td>
										</tr>
										<tr>
											<th className="w-20 py-1" scope="col">
												Responsable
											</th>
											<td colSpan="2" className="w-80 py-1" scope="col">
												{store.onestation.person_id}
											</td>
										</tr>
										<tr>
											<th className="w-20 py-1" scope="col">
												Dirección
											</th>
											<td className="w-80 py-1" scope="col">
												{store.onestation.streetaddress}
											</td>
											<td className="w-20 py-1" scope="col">
												{store.onestation.numberaddress}
											</td>
										</tr>
										<tr>
											<th className="w-20 py-1" scope="col">
												Referencia
											</th>
											<td colSpan="2" className="w-80 py-1" scope="col">
												{store.onestation.description}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					);
					if (store.assignedmeasuresof.length > 0) {
						for (let measurei = 0; measurei <= store.assignedmeasuresof.length - 1; measurei++) {
							arrayhtml.push(
								<tr key={measurei}>
									<td className="py-1">1</td>
									<td className="py-1">Temperatura</td>
									<td className="py-1">32</td>
									<td className="py-1">°C</td>
									<td className="p-0">
										<div className="btn-group d-flex" role="group" aria-label="buttons group">
											<Link to="/medicion" role="button" className="btn btn-primary w-100 py-1">
												Mostrar
											</Link>
											<Link to="#" role="button" className="btn btn-primary w-100 py-1">
												Eliminar
											</Link>
										</div>
									</td>
								</tr>
							);
						}
					}
					return (
						<div className="container">
							{stationframe}
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border p-0">
										<Link to="#" role="button" className="btn btn-primary w-100">
											Asignar Variable a estación
										</Link>
									</nav>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border">
										<h4>Mediciones asignadas a la estación</h4>
									</nav>

									<table className="table table-bordered mb-0">
										<thead>
											<tr>
												<th className="w-10 py-1" scope="col">
													#id
												</th>
												<th className="w-30 py-1" scope="col">
													Variable
												</th>
												<th className="w-20 py-1" scope="col">
													Valor
												</th>
												<th className="w-20 py-1" scope="col">
													Unidades
												</th>
												<th className="w-20 py-1" scope="col">
													Acciones
												</th>
											</tr>
										</thead>
										<tbody>{arrayhtml}</tbody>
									</table>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
