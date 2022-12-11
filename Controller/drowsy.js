import { response } from "express";
import DrowsyX from "../Modules/Drowsy/drowsy.js";

async function drowsy(req, res) {
	try {
		let data = new DrowsyX().drowsy(req.body);
		res.send({ success: true });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { drowsy};
