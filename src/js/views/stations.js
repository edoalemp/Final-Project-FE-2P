import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Stations extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let arrayhtml = [];
					if (store.stations.length > 0) {
						for (let stationi = 0; stationi <= store.stations.length - 1; stationi++) {
							arrayhtml.push(
								<tr key={stationi}>
									<td className="py-1">{store.stations[stationi]["id"]}</td>
									<td className="py-1">{store.stations[stationi]["name"]}</td>
									<td className="py-1">{store.stations[stationi]["lattitude"]}</td>
									<td className="py-1">{store.stations[stationi]["longitude"]}</td>
									<td className="p-0">
										<div className="btn-group d-flex py-0" role="group" aria-label="buttons group">
											<Link
												to="/estaciones/id"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.getonestation(
														"https://3000-e731c6f5-46e3-46c2-900c-92b03ab5174e.ws-us0.gitpod.io/stations/" +
															store.stations[stationi].id
													)
												}>
												Detalle
											</Link>
											<Link
												to="#"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.deletestation(
														"https://3000-e731c6f5-46e3-46c2-900c-92b03ab5174e.ws-us0.gitpod.io/stations/" +
															store.stations[stationi].id,
														store.stations[stationi]["id"]
													)
												}>
												Eliminar
											</Link>
											<Link to="#" role="button" className="btn btn-primary w-100 py-1">
												Editar
											</Link>
										</div>
									</td>
								</tr>
							);
						}
					}
					return (
						<div className="container">
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-6 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border p-0">
										<Link to="#" role="button" className="btn btn-primary w-100">
											Agregar estación
										</Link>
									</nav>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border">
										<h4>Estaciones</h4>
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
													Latitud
												</th>
												<th className="w-20 py-1" scope="col">
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
