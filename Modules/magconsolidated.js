import db, {  MAGConsolidated} from "../DB.js";



class MAGMasterConsoleX {
	constructor() {}
 
	async MAGMasterConsole(userData) {
        let response = await db.collection(MAGConsolidated).insertOne(userData);
	}

	
}

export default MAGMasterConsoleX;