import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className=" text-center">
				<div className=" row mt-2 justify-content-md-center">
					<h1> Telemetría </h1>
				</div>

				<div className="row  justify-content-md-center">
					<img src="https://www.ibm.com/support/knowledgecenter/es/SSFKSJ_8.0.0/com.ibm.mq.pro.doc/q001030b.gif" />
				</div>

				<div className="row  justify-content-md-center">
					<div className="col-md-6 col-center mt-1">
						<h3 />
					</div>
				</div>

				<div className="row justify-content-md-center">
					<a type="button" className="btn btn-secondary col-md-2 col-center mt-1" href="/usuario">
						Ingresar Usuario
					</a>
				</div>

				<div className="row justify-content-md-center">
					<a type="button" className="btn btn-secondary col-md-2 col-center mt-1" href="/usuario">
						Registrar Usuario
					</a>
				</div>
			</div>
		);
	}
}
