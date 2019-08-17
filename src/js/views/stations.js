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
									<td className="py-1">{store.stations[stationi].id}</td>
									<td className="py-1">{store.stations[stationi].name}</td>
									<td className="py-1">{store.stations[stationi].lattitude}</td>
									<td className="py-1">{store.stations[stationi].longitude}</td>
									<td className="p-0">
										<div className="btn-group d-flex py-0" role="group" aria-label="buttons group">
											<Link
												to="/estaciones/id"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.getonestation(
														"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/" +
															store.stations[stationi].id,
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
														"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/" +
															store.stations[stationi].id,
														store.stations[stationi].id
													)
												}>
												Eliminar
											</Link>
											<Link
												to="#"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.getonestation(
														"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/" +
															store.stations[stationi].id,
														store.stations[stationi].id
													)
												}
												data-toggle="modal"
												data-target="#editstation">
												Editar
											</Link>

											<div className="modal fade" id="editstation">
												<div className="modal-dialog modal-lg">
													<div className="modal-content">
														<div className="modal-header">
															<h4 className="modal-title">Editar datos de estación</h4>
															<button
																type="button"
																className="close"
																data-dismiss="modal">
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
																	actions.editstation(
																		"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/" +
																			store.onestation.id,
																		json
																	);
																}}>
																<div className="form-group">
																	<label htmlFor="name">Nombre de estación</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="name"
																		placeholder={store.onestation.name}
																		name="name"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="lattitude">Latitud</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="lattitude"
																		placeholder={store.onestation.lattitude}
																		name="lattitude"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="longitude">Longitud</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="longitude"
																		placeholder={store.onestation.longitude}
																		name="longitude"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="streetaddress">Calle</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="streetaddress"
																		placeholder={store.onestation.streetaddress}
																		name="streetaddress"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="numberaddress">Número</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="numberaddress"
																		placeholder={store.onestation.numberaddress}
																		name="numberaddress"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="description">Descripción</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="description"
																		placeholder={store.onestation.description}
																		name="description"
																	/>
																</div>
																<div className="modal-footer">
																	<button className="btn btn-primary">
																		Modificar &#10003;
																	</button>
																	<button type="reset" className="btn btn-primary">
																		Cancelar
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
										<Link
											to="#"
											role="button"
											className="btn btn-primary w-100"
											data-toggle="modal"
											data-target="#myModal">
											Agregar estación
										</Link>
										<div className="modal fade" id="myModal">
											<div className="modal-dialog modal-lg">
												<div className="modal-content">
													<div className="modal-header">
														<h4 className="modal-title">Agregar Estación</h4>
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

																actions.addstation(
																	"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations",
																	json
																);
															}}>
															<div className="form-group">
																<label htmlFor="name">Nombre de estación</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="name"
																	placeholder="Estación"
																	name="name"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="lattitude">Latitud</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="lattitude"
																	placeholder="Latitud"
																	name="lattitude"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="longitude">Longitud</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="longitude"
																	placeholder="Longitud"
																	name="longitude"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="streetaddress">Calle</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="streetaddress"
																	placeholder="Calle"
																	name="streetaddress"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="numberaddress">Número</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="numberaddress"
																	placeholder="Número"
																	name="numberaddress"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="description">Descripción</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="description"
																	placeholder="Descripción"
																	name="description"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="person_id">Responsable</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="person_id"
																	placeholder="Nombre"
																	name="person_id"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="organization_id">Organización</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="organization_id"
																	placeholder="Nombre"
																	name="organization_id"
																/>
															</div>
															<div className="modal-footer">
																<button className="btn btn-primary">
																	Agregar &#10003;
																</button>
																<button
																	type="reset"
																	className="btn btn-primary"
																	data-dismiss="modal">
																	Cancelar
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
												actions.fillstations(
													"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/fill"
												)
											}>
											Llenar estaciones
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
