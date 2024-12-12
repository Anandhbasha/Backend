import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const Data_base = async()=>{
    try {
        await client.connect();
        console.log("Success");
        const collection = client.db("shopping");
        
        return collection;
        
        
    } catch (error) {
        console.log(error);
        
    }
}
export default Data_base