import { response } from "express";
import SummaryX from "../modules/summary.js";

async function summary(req, res) {
	try {
		let data = new SummaryX().summary();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { summary};
