import { response } from "express";
import WAGMasterX from "../modules/wagmaster.js";

async function WAGMaster(req, res) {
	try {
		new WAGMasterX().WAGMaster(req.body);
		res.send({ success: true, message: "WAG Details Added  Successfully"  });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { WAGMaster};
