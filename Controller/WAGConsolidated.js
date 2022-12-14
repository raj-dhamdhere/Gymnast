import { response } from "express";
import WAGMasterConsoleX from "../modules/wagconsolidated.js";

async function WAGMasterConsole(req, res) {
	try {
		new WAGMasterConsoleX().WAGMasterConsole(req.body);
		res.send({ success: true, message: "MAG Details Added  Successfully"  });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { WAGMasterConsole};
