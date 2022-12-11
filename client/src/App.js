import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./Components/Test";
import Login from "./Components/Login";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import Refund from "./Components/Refund";
import Disclaimer from "./Components/Disclaimer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import Rif from "./Components/Refundnew";
import Signup from "./Components/Signup.js";
import Drowsyinfo from "./Information/Drowsyinfo.js";
import Shortestrouteinfo from "./Information/Shortestrouteinfo.js";
import VehicleExinfo from "./Information/VehicleExinfo.js";
import Stopinfo from "./Information/Stopinfo.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import VehicleControl from "./Components/Dashboard/VehicleControl.js"
import SummaryControl from "./Components/Dashboard/SummaryControl.js"
import DrowsyControl from "./Components/Dashboard/DrowsyControl.js"
import ShortestControl from "./Components/Dashboard/ShortestControl.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Test} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/pricing" component={Pricing} />
					<Route path="/Terms" component={Terms} />
					<Route path="/privacy" component={Privacy} />
					<Route path="/refund" component={Refund} />
					<Route path="/Disclaimer" component={Disclaimer} />
					<Route path="/Efund" component={Rif} />
					<Route path="/login" component={Login} />
					<Route path="/signup"component={Signup} />
					<Route path="/drowsyinfo"component={Drowsyinfo} />
					<Route path="/shortestrouteinfo"component={Shortestrouteinfo} />
					<Route path="/vehicleExinfo"component={VehicleExinfo} />
					<Route path="/stopinfo"component={Stopinfo} />
					<Route path="/dashboard"component={Dashboard} />
					<Route path="/VehicleControl" component ={VehicleControl} />
					<Route path="/SummaryControl" component ={SummaryControl} />
					<Route path="/DrowsyControl" component ={DrowsyControl} />
					<Route path="/ShortestControl" component ={ShortestControl} />
				</div>
			</Router>
		);
	}
}

export default App;