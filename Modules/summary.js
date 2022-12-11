import db, {  vehicleCollection} from "../DB.js";



class SummaryX {
	constructor() {}

	async summary() {
        let data = await db
			.collection(vehicleCollection)
            .find()
            .toArray();
        

        let returnData = {
            information:data
        }
        
    return returnData;

		
	
	}

	
}

export default SummaryX;
