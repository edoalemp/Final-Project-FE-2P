import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					actions.getstations("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-eu0.gitpod.io/stations");
					actions.getmeasures("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-eu0.gitpod.io/measures");
					let arraystations = [
						<option key="1" selected>
							Escoger..
						</option>
					];
					if (store.stations.length > 0) {
						for (let stationi = 0; stationi <= store.stations.length - 1; stationi++) {
							arraystations.push(
								<option value={stationi}>
									id# {store.stations[stationi].id} {store.stations[stationi].name}
								</option>
							);
						}
					}
					let arraymeasures = [
						<option key="1" selected>
							Escoger..
						</option>
					];
					if (store.measures.length > 0) {
						for (let measuresi = 0; measuresi <= store.measures.length - 1; measuresi++) {
							arraymeasures.push(
								<option value={measuresi}>
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
									<form>
										<table className="table table-bordered mb-0">
											<tbody>
												<tr>
													<td colSpan="2" className="p-0" scope="col">
														<div className="input-group">
															<div className="input-group-prepend">
																<label
																	className="input-group-text"
																	htmlFor="inputGroupSelect01">
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
																<label
																	className="input-group-text"
																	htmlFor="inputGroupSelect01">
																	Variable
																</label>
															</div>
															<select className="custom-select" id="inputGroupSelect02">
																{arraymeasures}
															</select>
														</div>
													</td>
													<td colSpan="2" className="p-0" scope="col">
														<div className="input-group">
															<div className="input-group-prepend">
																<label
																	className="input-group-text"
																	htmlFor="inputGroupSelect01">
																	Estación
																</label>
															</div>
															<select className="custom-select" id="inputGroupSelect03">
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
												<td className="py-1">10</td>
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
