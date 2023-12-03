import db, { ItemSellCollection } from "../DB.js";



class ItemSellMain {
	constructor() { }

	async itemSell(userData, UserFile) {
		console.log(userData)
		console.log(UserFile)
		let response = await db.collection(ItemSellCollection).insertOne(userData);


	}


}

export default ItemSellMain;
