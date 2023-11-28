import db, {  vehicleCollection} from "../DB.js";



class Vehicle {
	constructor() {}
	
	async vehicleadd(userData,UserFile) {
		console.log(userData)
		console.log(UserFile)
		let response = await db.collection(vehicleCollection).insertOne(userData);


	}

	
}

export default Vehicle;
