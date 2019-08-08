const getState = ({ getStore, setStore }) => {
	return {
		store: {
			stations: [],
			onestation: {},
			persons: [],
			oneperson: {},
			organizations: [],
			oneorganization: {},
			measures: [],
			onemeasure: {},
			assignedmeasures: [],
			assignedmeasuresof: []
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
						fetch("https://3000-e731c6f5-46e3-46c2-900c-92b03ab5174e.ws-us0.gitpod.io/measures", {
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
									measures: data
								});
								console.log(data);
							})
							.catch(error => {
								console.log(error);
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
			getonestation: (urlstring, stationid) => {
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

						fetch(urlstring + "/assignedmeasures", {
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
									assignedmeasuresof: data
								});
								console.log(data);
							})
							.catch(error => {
								console.log(error);
							});

						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},
			getmeasures: urlstring => {
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
							measures: data
						});
						fetch("https://3000-e731c6f5-46e3-46c2-900c-92b03ab5174e.ws-us0.gitpod.io/stations", {
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

						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},
			addmeasure: urlstring => {},
			editmeasure: urlstring => {},
			deletemeasure: (urlstring, measureid) => {
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
							for (let i = 0; i <= tempstore.measures.length - 1; i++) {
								if (tempstore.measures[i].id === measureid) {
									tempstore.measures.splice(i, 1);
									break;
								}
							}
						}
						setStore({
							measures: tempstore.measures
						});
					})

					.catch(error => {
						console.log(error);
					});
			},
			addmeasureto: urlstring => {},
			deletemeasurefrom: urlstring => {},
			getmeasuresof: urlstring => {},
			getmeasuresfrom: urlstring => {
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
							assignedmeasuresof: data
						});
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
