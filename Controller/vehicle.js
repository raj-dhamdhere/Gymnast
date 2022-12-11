import { response } from "express";
import Vehicle from "../modules/vehicle.js";

async function vehicle(req, res) {
	try {
		new Vehicle().vehicleadd(req.body);
		res.send({ success: true, message: "Vehicle Details Added  Successfully" });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { vehicle};
