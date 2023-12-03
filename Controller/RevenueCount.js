import { response } from "express";
import RevenueCountMain from "../modules/RevenueCountMain.js";

async function RevenueCount(req, res) {
	try {

		new RevenueCountMain().RevenueCount(req.body, req.file);
		res.send({ success: true, message: "Revenue Added Successfully" });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { RevenueCount };
