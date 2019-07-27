import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { User } from "./views/user";
import { Stations } from "./views/stations";
import injectContext from "./store/appContext";
import { Measures } from "./views/measures";
import { OneMeasure } from "./views/onemeasure";
import { OneStation } from "./views/onestation";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/home" component={Home} />
							<Route path="/usuario" component={User} />
							<Route path="/estaciones/id" component={OneStation} />
							<Route path="/estaciones" component={Stations} />
							<Route path="/mediciones/id" component={Measures} />
							<Route exact path="/medicion" component={Home} />
							<Route path="/mediciones" component={Measures} />

							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
