import { default as mongodb } from "mongodb";
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;

let connection = await MongoClient.connect("mongodb://localhost:27017/", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const DB = connection.db("Gymnast");

const userCollection = "User";

const vehicleCollection="Player"


export default DB;
export {
	ObjectId,
	userCollection,
	vehicleCollection

};
