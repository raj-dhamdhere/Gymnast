import { response } from "express";
import MAGMastergetX from "../Modules/magmasterget.js";

async function magmasterget(req, res) {
	try {
		let data = new MAGMastergetX().magmasterget();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { magmasterget};
