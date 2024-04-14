import { response } from "express";
import Faqx from "../modules/FaqMainn.js";

async function Faq(req, res) {
	try {
		let data = new Faqx().faqFunction(req.body);
		res.send({ success: true, data: (await data).information });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { Faq };
