const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lastdata: 0,

			stations: [],
			stationswithmeasure: [],
			onestation: {},

			persons: [],
			oneperson: {},

			organizations: [],
			oneorganization: {},

			measuretype: {},
			measures: [],
			onemeasure: {},

			assignedmeasures: [],
			assignedmeasuresof: [],

			datameasure: {}
		},
		actions: {
			//1. trae lista de estaciones (OK!)

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
							stations: data //actualiza vista estaciones
						});
						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures", {
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

			//2. Agrega una estación (OK!)

			addstation: (urlstring, datastation) => {
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: datastation
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations", {
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
					})

					.catch(error => {
						console.log(error);
					});
			},

			//3. edita una estación (OK!)

			editstation: (urlstring, datastation) => {
				fetch(urlstring, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: datastation
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations", {
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
					})
					.catch(error => {
						console.log(error);
					});
			},

			//4. borra una estación (OK!)

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
						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations", {
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
					})

					.catch(error => {
						console.log(error);
					});
			},

			//5. Trae una estación (ok!)

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
						console.log(data);
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

			//6. Trae lista con los tipos de medida (OK!)

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
						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations", {
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

			//7. Agrega un tipo de medida (OK!)

			addmeasure: (urlstring, datameasure) => {
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: datameasure
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures", {
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
					})

					.catch(error => {
						console.log(error);
					});
			},

			//8. Trae una medida (OK)

			getonemeasure: (urlstring, measureid) => {
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
							onemeasure: data
						});

						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			//9. Borra un tipo de medida (OK!)

			deletemeasure: urlstring => {
				let tempstore = getStore();

				fetch(urlstring, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures", {
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
					})

					.catch(error => {
						console.log(error);
					});
			},

			//10. Edita un tipo de medida (OK!)

			editmeasure: (urlstring, datameasure) => {
				console.log("!!");
				console.log(datameasure);
				fetch(urlstring, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: datameasure
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures", {
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
							})
							.catch(error => {
								console.log(error);
							});
					})

					.catch(error => {
						console.log(error);
					});
			},

			//11. asigna estación a una medida (OK!)

			addstationto: (urlstring, assigndata) => {
				let station_id = JSON.parse(assigndata).station_id;
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: assigndata
				})
					.then(resp => {
						console.log(resp.status);
						//********/

						fetch(
							"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/" + station_id,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/json"
								}
							}
						)
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								console.log(data);
								setStore({
									onestation: data
								});

								fetch(
									"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations/" +
										station_id +
										"/measures",
									{
										method: "GET",
										headers: {
											"Content-Type": "application/json"
										}
									}
								)
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

						//********/
					})

					.catch(error => {
						console.log(error);
					});
			},

			//12. Asigna una medida a una estación (OK)

			addmeasureto: (urlstring, assigndata) => {
				let measure_id = JSON.parse(assigndata).measure_id;
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: assigndata
				})
					.then(resp => {
						console.log(resp.status);
						//********/
						fetch(
							"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures/" +
								measure_id +
								"/stations",
							{
								method: "GET",
								headers: {
									"Content-Type": "application/json"
								}
							}
						)
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({
									assignedmeasuresof: data
								});
								fetch(
									"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures/" +
										measure_id,
									{
										method: "GET",
										headers: {
											"Content-Type": "application/json"
										}
									}
								)
									.then(resp => {
										return resp.json();
									})
									.then(data => {
										setStore({
											measuretype: data
										});
										console.log(data);
									});

								console.log(data);
							})
							.catch(error => {
								console.log(error);
							});

						//********/
					})

					.catch(error => {
						console.log(error);
					});
			},

			//13. Borra una medida asignada a una estación (OK!)

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
								if (tempstore.assignedmeasuresof[i].measure_id === assignedmeasuresid) {
									tempstore.assignedmeasuresof.splice(i, 1);
									break;
								}
							}
							for (let i = 0; i <= tempstore.assignedmeasures.length - 1; i++) {
								if (tempstore.assignedmeasures[i].measure_id === assignedmeasuresid) {
									tempstore.assignedmeasures.splice(i, 1);
									break;
								}
							}
						}
						setStore({
							assignedmeasuresof: tempstore.assignedmeasuresof,
							assignedmeasures: tempstore.assignedmeasures
						});
					})

					.catch(error => {
						console.log(error);
					});
			},

			//14. Trae lista de estaciones con medidas asignadas de un tipo (OK!)

			getstationswithmeasure: (urlstring, measureid) => {
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
						fetch(
							"https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures/" + measureid,
							{
								method: "GET",
								headers: {
									"Content-Type": "application/json"
								}
							}
						)
							.then(resp => {
								return resp.json();
							})
							.then(data => {
								setStore({
									measuretype: data
								});
								console.log(data);
							});

						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			//15. Trae lista con mediciones asignadas (OK)

			getassignedmeasures: urlstring => {
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
							assignedmeasures: data
						});
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			//16. Trae datos de medición

			getassignedmeasuredata: urlstring => {
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
							datameasure: data
						});
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			//17. Llena estaciones

			fillstations: urlstring => {
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/stations", {
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
					})
					.catch(error => {
						console.log(error);
					});
			},

			//18. Llena medidas

			fillmeasures: urlstring => {
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/measures", {
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
					})
					.catch(error => {
						console.log(error);
					});
			},

			// llena con asignaciones de medidas

			fillassignedmeasures: urlstring => {
				fetch(urlstring, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.status);

						fetch("https://3000-f0fe1d67-8c5b-4489-91c9-a76f335e26e0.ws-us0.gitpod.io/assignedmeasures", {
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
									assignedmeasures: data
								});
								console.log(data);
							})
							.catch(error => {
								console.log(error);
							});
					})
					.catch(error => {
						console.log(error);
					});
			},

			getassignedmeasurelastdata: urlstring => {
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
							lastdata: data
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
