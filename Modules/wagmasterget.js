import db, {  WAGSCollection} from "../DB.js";



class WAGMastergetX  {
	constructor() {}

	async wagmasterget() {
        let data = await db
			.collection(WAGSCollection)
            .find()
            .toArray();
        

        let returnData = {
            information:data
        }
        
    return returnData;

		
	
	}

	
}

export default WAGMastergetX;
