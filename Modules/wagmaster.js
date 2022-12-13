import db, {  WAGSCollection} from "../DB.js";



class WAGMasterX {
	constructor() {}

	async WAGMaster(userData) {
        let response = await db.collection(WAGSCollection).insertOne(userData);

	}

	
}

export default WAGMasterX;