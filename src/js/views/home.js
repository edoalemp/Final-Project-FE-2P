import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 mt-3 p-0 border rounded">
						<nav className="navbar navbar-light bg-light">
							<h4 className="text-center w-100">Telemetría</h4>
						</nav>

						<div className="row justify-content-md-center">
							<div className="col-md-6 col-center mt-1">
								<img
									className="mx-auto d-block"
									src="https://www.ibm.com/support/knowledgecenter/es/SSFKSJ_8.0.0/com.ibm.mq.pro.doc/q001030b.gif"
								/>
							</div>
						</div>

						<div className="row justify-content-md-center">
							<div className="col-md-6 col-center mt-1">
								<form>
									<div className="form-group">
										<label htmlFor="InputEmail">Email</label>
										<input
											type="email"
											className="form-control"
											id="InputEmail"
											aria-describedby="EmailHelp"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="InputPassword">Password</label>
										<input type="password" className="form-control" id="InputPassword" />
									</div>

									<button type="submit" className="btn btn-primary btn-block">
										Iniciar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
