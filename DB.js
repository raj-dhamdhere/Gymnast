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

const InventoryCollection = "InventoryCollection"

const MAGSCollection="MAGScoresheet"

const WAGSCollection="WAGScoresheet"

const MAGConsolidated="MAGConsolidated"

const WAGConsolidated="WAGConsolidated"


export default DB;
export {
	ObjectId,
	userCollection,
	vehicleCollection,
	MAGSCollection,
	WAGSCollection,
	MAGConsolidated,
	WAGConsolidated,
	InventoryCollection

};
