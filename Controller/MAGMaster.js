import { response } from "express";
import MAGMasterX from "../modules/magmaster.js";

async function MAGMaster(req, res) {
	try {
		new MAGMasterX().MAGMaster(req.body);
		res.send({ success: true, message: "MAG Details Added  Successfully"  });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { MAGMaster};
