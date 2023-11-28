import { response } from "express";
import InventorySummaryx from "../modules/InventorySummaryMain.js";

async function InventorySummary(req, res) {
	try {
		let data = new InventorySummaryx().summary();
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { InventorySummary};
