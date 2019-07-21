import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center">
				<div className="mt-5">
					<h1> Telemetría </h1>
				</div>

				<div className="image">
					<img src="https://www.ibm.com/support/knowledgecenter/es/SSFKSJ_8.0.0/com.ibm.mq.pro.doc/q001030b.gif" />
				</div>

				<div className="description ml-3">
					<div className="row">
						<div className="col-md-11 col-center ml-5 mt-5">
							<h6> </h6>
						</div>
					</div>
				</div>

				<div className="menuvista1">
					<div className="row">
						<div className="col-md-11 col-center text-center ml-5 mt-5">
							<div className="p-3 mb-2 bg-dark text-white w-25">
								<h4> Usuario </h4>
							</div>
						</div>
						<div className="col-md-11 col-center text-center ml-5 mt-5">
							<div className="p-3 mb-2 bg-dark text-white w-25">
								<h4> Password </h4>
							</div>
						</div>
						<div className="col-md-11 col-center text-center ml-5 mt-5">
							<div className="p-3 mb-2 bg-dark text-white w-25">
								<h4> Log In </h4>
							</div>
						</div>
						<div className="col-md-11 col-center text-center ml-5 mt-5">
							<div className="p-3 mb-5 bg-dark text-white w-25">
								<h4> Nuevo Usuario </h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
