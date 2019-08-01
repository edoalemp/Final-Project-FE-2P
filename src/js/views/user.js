import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class User extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-md-8 col-center mt-2">
						<div className="jumbotron">
							<h1 className="display-6">Usuario</h1>
							<form>
								<div className="form-group">
									<label htmlFor="InputUsername">Nombre de usuario</label>
									<input
										type="text"
										className="form-control"
										id="InputUsername"
										aria-describedby="usernameHelp"
										placeholder="Ingresar usuario"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="InputPassword">Password</label>
									<input
										type="password"
										className="form-control"
										id="InputPassword"
										placeholder="Password"
									/>
								</div>

								<button type="submit" className="btn btn-primary">
									Modificar
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col-md-8 col-center mt-2">
						<div className="jumbotron ">
							<h1 className="display-6">Base de datos</h1>
							<form>
								<div className="form-group">
									<label htmlFor="InputAdress">Dirección</label>
									<input
										type="text"
										className="form-control"
										id="InputAdress"
										aria-describedby="AdressHelp"
										placeholder="Ingresar dirección"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="InputUserdb">Nombre de Usuario</label>
									<input
										type="text"
										className="form-control"
										id="InputUserdb"
										placeholder="Nombre de usuario base de datos"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="InputPassworddb">Password</label>
									<input
										type="password"
										className="form-control"
										id="InputPassworddb"
										placeholder="Password"
									/>
								</div>

								<button type="submit" className="btn btn-primary">
									Modificar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
