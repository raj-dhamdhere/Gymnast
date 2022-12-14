import { response } from "express";
import WAGMastergetX from "../Modules/wagmasterget.js";

async function wagmasterget(req, res) {
	try {
		let data = new WAGMastergetX().wagmasterget();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { wagmasterget};
