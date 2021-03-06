import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Measures extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let arrayhtml = [];
					if (store.measures.length > 0) {
						for (let measurei = 0; measurei <= store.measures.length - 1; measurei++) {
							arrayhtml.push(
								<tr key={measurei}>
									<td className="py-1">{store.measures[measurei].id}</td>
									<td className="py-1">{store.measures[measurei].name}</td>
									<td className="py-1">{store.measures[measurei].unit}</td>
									<td className="p-0">
										<div className="btn-group d-flex py-0" role="group" aria-label="buttons group">
											<Link
												to="/mediciones/id"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.getstationswithmeasure(
														"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures/" +
															store.measures[measurei].id +
															"/stations",
														store.measures[measurei].id
													)
												}>
												Detalle
											</Link>
											<Link
												to="#"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.deletemeasure(
														"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures/" +
															store.measures[measurei].id,
														store.measures[measurei].id
													)
												}>
												Eliminar
											</Link>
											<Link
												to="#"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.getonemeasure(
														"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures/" +
															store.measures[measurei].id,
														store.measures[measurei].id
													)
												}
												data-toggle="modal"
												data-target="#editmeasure">
												Editar
											</Link>

											<div className="modal fade" id="editmeasure">
												<div className="modal-dialog modal-lg">
													<div className="modal-content">
														<div className="modal-header">
															<h4 className="modal-title">Editar datos de medida</h4>
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
																	console.log(json);
																	actions.editmeasure(
																		"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures/" +
																			store.onemeasure.id,
																		json
																	);
																}}>
																<div className="form-group">
																	<label htmlFor="name">Nombre de medida</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="name"
																		placeholder={store.onemeasure.name}
																		name="name"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="unit">Unidad</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="unit"
																		placeholder={store.onemeasure.unit}
																		name="unit"
																	/>
																</div>
																<div className="form-group">
																	<label htmlFor="symbol">Símbolo</label>
																	<input
																		type="text"
																		className="form-control form-control-sm"
																		id="symbol"
																		placeholder={store.onemeasure.symbol}
																		name="symbol"
																	/>
																</div>
																<div className="modal-footer">
																	<button type="submit" className="btn btn-primary">
																		Modificar &#10003;
																	</button>
																	<button type="reset" className="btn btn-primary">
																		Limpiar
																	</button>
																	<button
																		type="button"
																		className="btn btn-primary"
																		data-dismiss="modal">
																		Cancelar &times;
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
											Agregar medida
										</Link>
										<div className="modal fade" id="myModal">
											<div className="modal-dialog modal-lg">
												<div className="modal-content">
													<div className="modal-header">
														<h4 className="modal-title">Agregar medida</h4>
														<button type="button" className="close" data-dismiss="modal">
															&times;
														</button>
													</div>

													<div className="modal-body">
														<form
															id="addmeasureform"
															onSubmit={event => {
																event.preventDefault();
																const data = new FormData(event.target);

																var object = {};
																data.forEach(function(value, id) {
																	object[id] = value;
																});
																var json = JSON.stringify(object);

																actions.addmeasure(
																	"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures",
																	json
																);
															}}>
															<div className="form-group">
																<label htmlFor="name">Nombre de medida</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="name"
																	placeholder="Medida"
																	name="name"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="unit">Unidad</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="unit"
																	placeholder="Unidad"
																	name="unit"
																/>
															</div>
															<div className="form-group">
																<label htmlFor="symbol">Símbolo</label>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	id="symbol"
																	placeholder="Símbolo"
																	name="symbol"
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
												actions.fillmeasures(
													"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures/fill"
												)
											}>
											Llenar medidas
										</Link>
									</nav>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border">
										<h4>Variables medidas</h4>
									</nav>
									<table className="table table-bordered mb-0">
										<thead>
											<tr>
												<th className="w-10 py-1" scope="col">
													#m_id
												</th>
												<th className="w-50 py-1" scope="col">
													Variable
												</th>
												<th className="w-20 py-1" scope="col">
													Unidad
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
