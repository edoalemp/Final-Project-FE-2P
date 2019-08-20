import React, { Component } from "react";
import { Line } from "react-chartjs-2";
/*
const data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
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
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};
*/
export default class LineGraph extends Component {
	constructor() {
		super();
		this.state = {
			name: "React",
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
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
						data: [65, 59, 80, 81, 56, 55, 40]
					}
				]
			}
		};
	}

	render() {
		return (
			<div className="chart-container" id="containerchart">
				<Line
					id="chart"
					data={this.state.data}
					options={{
						responsive: true,
						maintainAspectRatio: false
					}}
				/>
			</div>
		);
	}
}
