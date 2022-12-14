import { response } from "express";
import MAGMasterConsoleX from "../modules/magconsolidated.js";

async function MAGMasterConsole(req, res) {
	try {
		new MAGMasterConsoleX().MAGMasterConsole(req.body);
		res.send({ success: true, message: "MAG Details Added  Successfully"  });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { MAGMasterConsole};
