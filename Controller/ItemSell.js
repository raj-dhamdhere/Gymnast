import { response } from "express";
import ItemSellMain from "../modules/ItemSellMainFile.js";

async function ItemSell(req, res) {
	try {
		
		new ItemSellMain().itemSell(req.body, req.file);
		res.send({ success: true, message: "Item Sold Successfully" });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { ItemSell };
