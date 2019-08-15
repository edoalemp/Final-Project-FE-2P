import React from "react";
import { Link } from "react-router-dom";

export class Login extends React.Component {
	sending(e) {
		e.preventDefault();

		window.open("/home", "_self", "", "false");
	}

	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div id="list" className="col-md-6 mt-3 p-0 border rounded">
						<nav className="navbar navbar-light bg-light">
							<h4 className="text-center w-100">Telemetría</h4>
						</nav>

						<div className="row justify-content-md-center m-0">
							<div className="col-md-6 col-center my-2">
								<img
									className="mx-auto d-block"
									src="https://www.ibm.com/support/knowledgecenter/es/SSFKSJ_8.0.0/com.ibm.mq.pro.doc/q001030b.gif"
								/>
							</div>
						</div>

						<div className="row justify-content-md-center mt-0 mb-3 mx-0">
							<div className="col-md-6 col-center">
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
									<button onClick={this.sending} type="submit" className="btn btn-primary btn-block">
										Enviar
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
