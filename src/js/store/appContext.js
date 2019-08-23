import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			this.state.actions.getassignedmeasures(
				"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/assignedmeasures"
			);
			this.state.actions.getstations(
				"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/stations"
			);
			this.state.actions.getonestation(
				"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/stations/2"
			);
			this.state.actions.getonemeasure(
				"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/measures/1"
			);
			this.state.actions.getassignedmeasuredata(
				"https://3000-b75744a2-23d9-4d26-b7ef-efa40bebf4e2.ws-us0.gitpod.io/assignedmeasures/2/1/20181230230000/20181231230000",
				2,
				1
			);
		}

		/**
		 * EDIT THIS!
		 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
		 * you should do your ajax requests or fetch api requests here
		 **/

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
