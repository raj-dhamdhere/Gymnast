import db, {  WAGConsolidated} from "../DB.js";



class WAGMastergetconsoleX  {
	constructor() {}

	async wagmastergetconsole() {
        let data = await db
			.collection(WAGConsolidated)
            .find()
            .toArray();
        

        let returnData = {
            information:data
        }
        
    return returnData;

		
	
	}

	
}

export default WAGMastergetconsoleX;
