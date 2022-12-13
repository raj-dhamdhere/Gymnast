import db, {  MAGSCollection} from "../DB.js";



class MAGMasterX {
	constructor() {}
 
	async MAGMaster(userData) {
        let response = await db.collection(MAGSCollection).insertOne(userData);
	}

	
}

export default MAGMasterX;