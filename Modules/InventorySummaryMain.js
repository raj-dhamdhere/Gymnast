import db, {  InventoryCollection} from "../DB.js";



class InventorySummaryx {
	constructor() {}

	async summary() {
        let data = await db
			.collection(InventoryCollection)
            .find()
            .toArray();
        

        let returnData = {
            information:data
        }
        
    return returnData;

		
	
	}

	
}

export default InventorySummaryx;
