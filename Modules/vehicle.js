import db, {  vehicleCollection} from "../DB.js";



class Vehicle {
	constructor() {}

	async vehicleadd(userData) {
		let response = await db.collection(vehicleCollection).insertOne(userData);


	}

	
}

export default Vehicle;
