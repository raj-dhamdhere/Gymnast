import db, { ArtificialIntelligence,CloudComputing,Contract,DataScience,Industry,MachineLearning} from "../DB.js";



class Faqx {
    constructor() { }

    async faqFunction(req) {
        let module = "";
        //console.log(req)
        if (req.Faqtype == "ArtificialIntelligence"){
            module = ArtificialIntelligence;
        }else if (req.Faqtype  == "CloudComputing"){
            module = CloudComputing;
        }else if (req.Faqtype  == "Contract"){
            module = Contract;
        }else if (req.Faqtype  == "DataScience"){
            module = DataScience;
        }else if (req.Faqtype  == "Industry"){
            module = Industry;
        }else if (req.Faqtype  == "MachineLearning"){
            module = MachineLearning;
        }

        let data = await db
            .collection(module)
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

export default Faqx;
