import db, { RevenueCount } from "../DB.js";



class RevenueCountMain {
	constructor() { }

	async RevenueCount(userData,UserFile) {
		console.log("Backed Revenue",userData.Revenue)
		
		let response = await db.collection(RevenueCount).findOneAndUpdate({ "name": "Revenue" },
			{ $inc: { "Revenue": parseInt(userData.Revenue) } });


	}


}

export default RevenueCountMain;
