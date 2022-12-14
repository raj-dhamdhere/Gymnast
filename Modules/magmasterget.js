import db, {  MAGSCollection} from "../DB.js";



class MAGMastergetX  {
	constructor() {}

	async magmasterget() {
        let data = await db
			.collection(MAGSCollection)
            .find()
            .toArray();
        

        let returnData = {
            information:data
        }
        
    return returnData;

		
	
	}

	
}

export default MAGMastergetX;
