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
												id#
											</th>
											<td className="w-80 py-1" scope="col">
												{store.measuretype.id}
											</td>
										</tr>
										<tr>
											<th className="w-20 py-1" scope="col">
												Nombre
											</th>
											<td className="w-80 py-1" scope="col">
												{store.measuretype.name}
											</td>
										</tr>
										<tr>
											<th className="py-1">Unidad</th>
											<td className="py-1">
												{store.measuretype.unit} ({store.measuretype.symbol})
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					);
					if (store.assignedmeasuresof.length > 0) {
						for (let i = 0; i <= store.assignedmeasuresof.length - 1; i++) {
							for (let j = 0; j <= store.stations.length - 1; j++) {
								if (store.assignedmeasuresof[i].station_id == store.stations[j].id) {
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
														className="btn btn-primary w-100 py-1"
														onClick={() =>
															actions.getassignedmeasuredata(
																"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/assignedmeasures/" +
																	store.assignedmeasuresof[i].station_id +
																	"/" +
																	store.assignedmeasuresof[i].measure_id +
																	"/20181230230000/20181231230000"
															)
														}>
														Mostrar
													</Link>
													<Link
														to="#"
														role="button"
														className="btn btn-primary w-100 py-1"
														onClick={() =>
															actions.deletemeasurefrom(
																"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/assignedmeasures/" +
																	store.assignedmeasuresof[i].id,
																store.assignedmeasuresof[i].measure_id
															)
														}>
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
										<Link
											to="#"
											role="button"
											className="btn btn-primary w-100"
											data-toggle="modal"
											data-target="#myModal">
											Asignar variable a estación
										</Link>
										<div className="modal fade" id="myModal">
											<div className="modal-dialog modal-lg">
												<div className="modal-content">
													<div className="modal-header">
														<h4 className="modal-title">Asignar medida a estación</h4>
														<button type="button" className="close" data-dismiss="modal">
															&times;
														</button>
													</div>

													<div className="modal-body">
														<form
															onSubmit={event => {
																event.preventDefault();
																const data = new FormData(event.target);

																var object = {};
																data.forEach(function(value, id) {
																	object[id] = value;
																});
																var json = JSON.stringify(object);

																actions.addmeasureto(
																	"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/assignedmeasures",
																	json
																);
															}}>
															<div className="form-group">
																<label htmlFor="measure_id">
																	identificador de medida
																</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="measure_id"
																	placeholder="measure_id"
																	name="measure_id"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="station_id">
																	identificador de estación
																</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="station_id"
																	placeholder="station_id"
																	name="station_id"
																/>
															</div>

															<div className="modal-footer">
																<button type="submit" className="btn btn-primary">
																	Agregar &#10003;
																</button>
																<button type="reset" className="btn btn-primary">
																	Limpiar
																</button>
																<button
																	type="button"
																	className="btn btn-primary"
																	data-dismiss="modal">
																	Cerrar &times;
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
										<Link
											to="#"
											role="button"
											className="btn btn-primary w-100"
											onClick={() =>
												actions.fillassignedmeasures(
													"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-eu0.gitpod.io/assignedmeasures/fill"
												)
											}>
											Llenar estaciones con variables
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
													#m_id
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
