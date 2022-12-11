import { response } from "express";

import StartMapsX from "../Modules/Startmaps.js";

async function startmaps(req, res) {
	try {
		let data = new StartMapsX().startmaps(req.body);
		
		res.send({ success: true , data: await data});
		console.log("datas is here ", await data)
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}
 

export default "";
export { startmaps};
