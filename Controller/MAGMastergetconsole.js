import { response } from "express";
import MAGMastergetconsoleX from "../Modules/magmastergetconsole.js";

async function magmastergetconsole(req, res) {
	try {
		let data = new MAGMastergetconsoleX().magmastergetconsole();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { magmastergetconsole};
