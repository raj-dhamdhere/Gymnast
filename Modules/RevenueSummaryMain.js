import db, { RevenueCount } from "../DB.js";



class RevenueSummaryx {
    constructor() { }

    async summary() {
        let data = await db
            .collection(RevenueCount)
            .find()
            .toArray();


        let returnData = {
            information: data
        }

        return returnData;



    }

    //async Calculate() {
    //    // Define an aggregation pipeline with a match stage and a group stage
    //    const pipeline = [
    //        { $match: { categories: "BatchNo" } },
    //        { $group: { BatchNo: "$BatchNo"} }
    //    ];
    //    // Execute the aggregation
    //    const aggCursor = coll.aggregate(pipeline);
    //    // Print the aggregated results
    //    for await (const doc of aggCursor) {
    //        console.log(doc);
    //    }
    //}


}

export default RevenueSummaryx;
