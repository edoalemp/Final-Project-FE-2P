import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let arraystations = [
						<option key="0" value="0">
							Escoger..
						</option>
					];
					if (store.stations.length > 0) {
						arraystations.push(
							<option key="1" value={store.stations[0].id} selected>
								id# {store.stations[0].id} {store.stations[0].name}
							</option>
						);
						for (let stationi = 1; stationi <= store.stations.length - 1; stationi++) {
							arraystations.push(
								<option key={stationi + 1} value={store.stations[stationi].id}>
									id# {store.stations[stationi].id} {store.stations[stationi].name}
								</option>
							);
						}
					}
					let arraymeasures = [
						<option key="0" value="0">
							Escoger..
						</option>
					];
					if (store.measures.length > 0) {
						arraymeasures.push(
							<option key="1" value={store.measures[0].id} selected>
								id# {store.measures[0].id} {store.measures[0].name}
							</option>
						);
						for (let measuresi = 1; measuresi <= store.measures.length - 1; measuresi++) {
							arraymeasures.push(
								<option key={measuresi + 1} value={store.measures[measuresi].id}>
									id# {store.measures[measuresi].id} {store.measures[measuresi].name}
								</option>
							);
						}
					}
					return (
						<div className="container">
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border">
										<h4>Gráfico de medición de variable en la estación</h4>
									</nav>
									<form
										onSubmit={event => {
											event.preventDefault();
											const data = new FormData(event.target);

											var object = {};
											data.forEach(function(value, id) {
												object[id] = value;
											});
											var json = JSON.stringify(object);

											actions.getdatameasure(
												"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/assignedmeasures/" +
													object.station_id +
													"/" +
													object.measure_id,
												json
											);
										}}>
										<table className="table table-bordered mb-0">
											<tbody>
												<tr>
													<td colSpan="2" className="p-0" scope="col">
														<div className="input-group">
															<div className="input-group-prepend">
																<label
																	className="input-group-text"
																	htmlFor="time_interval">
																	Intervalo
																</label>
															</div>
															<select
																className="custom-select"
																id="time_interval"
																defaultValue="1"
																name="time_interval">
																<option key="1" value="0">
																	Escoger..
																</option>
																<option key="2" value="1" selected>
																	Hora
																</option>
																<option key="3" value="2">
																	Semana
																</option>
																<option key="4" value="3">
																	Mes
																</option>
															</select>
														</div>
													</td>
													<td colSpan="2" className="p-0" scope="col">
														<div className="input-group">
															<div className="input-group-prepend">
																<label
																	className="input-group-text"
																	htmlFor="measure_id">
																	Variable
																</label>
															</div>
															<select
																className="custom-select"
																id="measure_id"
																name="measure_id">
																{arraymeasures}
															</select>
														</div>
													</td>
													<td colSpan="2" className="p-0" scope="col">
														<div className="input-group">
															<div className="input-group-prepend">
																<label
																	className="input-group-text"
																	htmlFor="station_id">
																	Estación
																</label>
															</div>
															<select
																className="custom-select"
																id="station_id"
																name="station_id">
																{arraystations}
															</select>
														</div>
													</td>
													<td colSpan="2" className="p-0" scope="col">
														<button type="submit" className="btn btn-primary btn-block">
															Mostrar
														</button>
													</td>
												</tr>
												<tr>
													<td colSpan="8" className="w-100" scope="col">
														{store.datameasure.data}
														<div className="graphdiv">
															{store.datameasure.data} {store.datameasure.station_id}{" "}
															{store.datameasure.measure_id}{" "}
															{store.datameasure.measure_id}
														</div>
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
									</form>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-6 col-center mt-3 border rounded px-0">
									<table className="table table-bordered mb-0">
										<tbody>
											<tr>
												<td className="py-1">N° de estaciones</td>
												<td className="py-1">{store.stations.length}</td>
											</tr>
											<tr>
												<td className="py-1">N° de variables medidas</td>
												<td className="py-1">{store.assignedmeasures.length}</td>
											</tr>
										</tbody>
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
