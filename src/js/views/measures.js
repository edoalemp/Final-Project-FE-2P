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
									<td className="py-1">{store.measures[measurei]["id"]}</td>
									<td className="py-1">{store.measures[measurei]["name"]}</td>
									<td className="py-1">{store.measures[measurei]["unit"]}</td>
									<td className="p-0">
										<div className="btn-group d-flex py-0" role="group" aria-label="buttons group">
											<Link
												to="/mediciones/id"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() => actions.getstationswithmeasure()}>
												Detalle
											</Link>
											<Link
												to="#"
												role="button"
												className="btn btn-primary w-100 py-1"
												onClick={() =>
													actions.deletemeasure(
														"https://3000-e731c6f5-46e3-46c2-900c-92b03ab5174e.ws-us0.gitpod.io/measures/" +
															store.measures[measurei].id,
														store.measures[measurei]["id"]
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
											Agregar variable
										</Link>
									</nav>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div id="list" className="col-md-12 col-center mt-3 p-0 border rounded">
									<nav
										id="navbarint"
										className="navbar navbar-light bg-light justify-content-md-center border">
										<h4>Lista de variables del sistema</h4>
									</nav>
									<table className="table table-bordered mb-0">
										<thead>
											<tr>
												<th className="w-10 py-1" scope="col">
													#id
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
