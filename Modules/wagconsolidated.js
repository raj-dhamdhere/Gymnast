import db, {WAGConsolidated} from "../DB.js";



class WAGMasterConsoleX {
	constructor() {}
 
	async WAGMasterConsole(userData) {
        let response = await db.collection(WAGConsolidated).insertOne(userData);
	}

	
}

export default WAGMasterConsoleX;