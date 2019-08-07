const getState = ({ getStore, setStore }) => {
	return {
		store: {
			stations: [],
			onestation: {},
			persons: [],
			organizations: [],
			measures: [],
			assignedmeasures: []
		},
		actions: {
			getstations: urlstring => {
				fetch(urlstring, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({
							stations: data
						});
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},
			addstation: urlstring => {},
			editstation: urlstring => {},
			deletestation: (urlstring, stationid) => {
				let tempstore = getStore();

				fetch(urlstring, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.status);
						if (resp.status === 200) {
							for (let i = 0; i <= tempstore.stations.length - 1; i++) {
								if (tempstore.stations[i].id === stationid) {
									tempstore.stations.splice(i, 1);
									break;
								}
							}
						}
						setStore({
							stations: tempstore.stations
						});
					})

					.catch(error => {
						console.log(error);
					});
			},
			getonestation: urlstring => {
				fetch(urlstring, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({
							onestation: data
						});
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},
			getmeasures: urlstring => {},
			addmeasure: urlstring => {},
			editmeasure: urlstring => {},
			deletemeasure: urlstring => {},
			addassignmeasure: urlstring => {},
			deleteassignmeasure: urlstring => {},
			getmeasuressofstation: urlstring => {},
			getstationswithmeasure: urlstring => {}
		}
	};
};

export default getState;
