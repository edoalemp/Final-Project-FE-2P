import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import LineGraph from "../component/LineGraph";

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
										<h4>
											Gráfico de medición de {store.onemeasure.name} ({store.onemeasure.symbol})
											en {store.onestation.name}
										</h4>
									</nav>
									<form
										onSubmit={event => {
											event.preventDefault();
											const data = new FormData(event.target);

											var object = {};
											data.forEach(function(value, id) {
												object[id] = value;
											});
											/*var json = JSON.stringify(object);*/

											actions.getassignedmeasuredata(
												"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/assignedmeasures/" +
													object.station_id +
													"/" +
													object.measure_id +
													"/" +
													object.date_from +
													"/" +
													object.date_to,
												object.station_id,
												object.measure_id
											);
										}}>
										<table className="table table-bordered mb-0">
											<tbody>
												<tr>
													<td colSpan="1" className="p-0" scope="col">
														<div className="input-group mb-0">
															<div className="input-group-prepend">
																<span
																	className="input-group-text"
																	htmlFor="date_from"
																	id="basic-addon1">
																	Desde
																</span>
															</div>
															<input
																type="text"
																className="form-control"
																name="date_from"
																placeholder="YYYYMMDDhhmmss"
																aria-label="YYYYMMDDhhmmss"
																aria-describedby="basic-addon1"
															/>
														</div>
													</td>
													<td colSpan="1" className="p-0" scope="col">
														<div className="input-group mb-0">
															<div className="input-group-prepend">
																<span
																	className="input-group-text"
																	htmlFor="date_to"
																	id="basic-addon1">
																	Hasta
																</span>
															</div>
															<input
																type="text"
																className="form-control"
																name="date_to"
																placeholder="YYYYMMDDhhmmss"
																aria-label="YYYYMMDDhhmmss"
																aria-describedby="basic-addon1"
															/>
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
														<div className="graphdiv">
															<LineGraph />
														</div>
													</td>
												</tr>
												<tr hidden>
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
