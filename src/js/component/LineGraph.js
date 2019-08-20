import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Context } from "../store/appContext";

export default class LineGraph extends Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let x = [];
					let y = [];
					for (let elem in store.datameasure) {
						x.push(store.datameasure[elem].data_time_measure);
						y.push(store.datameasure[elem].data_value);
					}
					return (
						<div className="chart-container" id="containerchart">
							<Line
								id="chart"
								data={{
									labels: x,
									datasets: [
										{
											label: "datos",
											fill: false,
											lineTension: 0.1,
											backgroundColor: "rgba(75,192,192,0.4)",
											borderColor: "rgba(75,192,192,1)",
											borderCapStyle: "butt",
											borderDash: [],
											borderDashOffset: 0.0,
											borderJoinStyle: "miter",
											pointBorderColor: "rgba(75,192,192,1)",
											pointBackgroundColor: "#fff",
											pointBorderWidth: 1,
											pointHoverRadius: 5,
											pointHoverBackgroundColor: "rgba(75,192,192,1)",
											pointHoverBorderColor: "rgba(220,220,220,1)",
											pointHoverBorderWidth: 2,
											pointRadius: 1,
											pointHitRadius: 10,
											data: y
										}
									]
								}}
								options={{
									responsive: true,
									maintainAspectRatio: false
								}}
							/>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
