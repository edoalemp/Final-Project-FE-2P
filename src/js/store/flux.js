const getState = ({ getStore, setStore }) => {
	return {
		store: {
			stations: [],
			onestation: {},
			persons: [],
			oneperson: {},
			organizations: [],
			oneorganization: {},
			measure: [],
			measures: [],
			onemeasure: {},
			assignedmeasures: [],
			assignedmeasurestype: [],
			assignedmeasuresof: []
		},
		actions: {
			//1. trae lista de estaciones (OK)

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

			//2. Agrega una estación

			addstation: urlstring => {},

			//3. edita una estación

			editstation: urlstring => {},

			//4. borra una estación (OK)

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

			//5. Trae una estación (OK)

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

						fetch(urlstring + "/measures", {
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

			//6. Trae lista con los tipos de medida (OK)

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

			//7. Agrega un tipo de medida

			addmeasure: urlstring => {},

			//8. Edita un tipo de medida

			editmeasure: urlstring => {},

			//9. Borra un tipo de medida (OK)

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

			//10. Asigna una medida a una estación

			addmeasureto: urlstring => {},

			//11. Borra una medida asignada a una estación (OK)

			deletemeasurefrom: (urlstring, assignedmeasuresid) => {
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
							for (let i = 0; i <= tempstore.assignedmeasuresof.length - 1; i++) {
								if (tempstore.assignedmeasuresof[i].id === assignedmeasuresid) {
									tempstore.assignedmeasuresof.splice(i, 1);
									break;
								}
							}
						}
						setStore({
							assignedmeasuresof: tempstore.assignedmeasuresof
						});
					})

					.catch(error => {
						console.log(error);
					});
			},

			//12. Trae lista de estaciones con medidas asignadas de un tipo (OK)

			getstationwithmeasure: urlstring => {
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
							assignedmeasurestype: data
						});
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			//13. Trae lista con medidas asignadas a una estación (OK)

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
