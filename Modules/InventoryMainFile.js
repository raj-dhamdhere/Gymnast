import db, {  InventoryCollection} from "../DB.js";



class InventoryMain {
	constructor() {}
	
	async inventoryadd(userData,UserFile) {
		console.log(userData)
		console.log(UserFile)
		let response = await db.collection(InventoryCollection).insertOne(userData);


	}

	
}

export default InventoryMain;
