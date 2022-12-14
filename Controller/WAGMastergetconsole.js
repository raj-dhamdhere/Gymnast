import { response } from "express";
import WAGMastergetconsoleX from "../Modules/wagmastergetconsole.js";

async function wagmastergetconsole(req, res) {
	try {
		let data = new WAGMastergetconsoleX().wagmastergetconsole();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { wagmastergetconsole};
