import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class MeasureId extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let measuresframe;
					let arrayhtml = [];
					measuresframe = (
						<div className="row justify-content-md-center">
							<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
								<table className="table table-bordered mb-0">
									<tbody>
										<tr>
											<th className="w-20 py-1" scope="col">
												{store.measure.name}
											</th>
											<td className="w-80 py-1" scope="col">
												{store.measure.unit}
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
					);
					if (store.assignedmeasurestype.length > 0) {
						for (let i = 0; i <= store.assignedmeasurestype.length - 1; i++) {
							for (let j = 0; j <= store.stations.length - 1; j++) {
								if (store.assignedmeasurestype[i].station_id == store.stations[j].id) {
									arrayhtml.push(
										<tr key={i}>
											<td className="py-1">{store.stations[j].id}</td>
											<td className="py-1">{store.stations[j].name}</td>
											<td className="py-1">{store.stations[j].lattitude}</td>
											<td className="py-1">{store.stations[j].longitude}</td>
											<td className="p-0">
												<div
													className="btn-group d-flex"
													role="group"
													aria-label="buttons group">
													<Link
														to="/home"
														role="button"
														className="btn btn-primary w-100 py-1">
														Detalle
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
						}
					}
					return (
						<div className="container">
							{measuresframe}
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border p-0">
										<Link to="#" role="button" className="btn btn-primary w-100">
											Asignar variable a estación
										</Link>
									</nav>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border">
										<h4>Estaciones asignadas a la variable</h4>
									</nav>

									<table className="table table-bordered mb-0">
										<thead>
											<tr>
												<th className="w-10 py-1" scope="col">
													#id
												</th>
												<th className="w-40 py-1" scope="col">
													Nombre
												</th>
												<th className="w-15 py-1" scope="col">
													Latitud
												</th>
												<th className="w-15 py-1" scope="col">
													Longitud
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
