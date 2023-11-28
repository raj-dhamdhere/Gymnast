import { response } from "express";
import InventoryMain from "../modules/InventoryMainFile.js";

async function InventoryAdd(req, res) {
	try {
		new InventoryMain().inventoryadd(req.body,req.file);
		res.send({ success: true, message: "Inventory Added  Successfully" });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { InventoryAdd};
