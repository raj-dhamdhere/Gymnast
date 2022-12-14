import db, {  MAGConsolidated} from "../DB.js";



class MAGMastergetconsoleX  {
	constructor() {}

	async magmastergetconsole() {
        let data = await db
			.collection(MAGConsolidated)
            .find()
            .toArray();
        

        let returnData = {
            information:data
        }
        
    return returnData;

		
	
	}

	
}

export default MAGMastergetconsoleX;
