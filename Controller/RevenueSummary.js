import { response } from "express";
import RevenueSummaryx from "../modules/RevenueSummaryMain.js";

async function RevenueSummary(req, res) {
	try {
		let data = new RevenueSummaryx().summary();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { RevenueSummary };
