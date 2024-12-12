import { ObjectId } from "mongodb";
import Data_base from "../db.js"

let  data = await Data_base();
export const Crud_read = async(req,res)=>{
    try {
       
        const all_data = await data.collection("shopping").find().toArray();
        res.json(all_data);
    } catch (error) {
        res.json(error);
    }
}
export const Crud_insert =async(req,res)=>{
    try {
        const insert = await data.collection("shopping").insertOne({name:"abcd",age:28})
        res.json(`Data insert Sucessfully `)
    } catch (error) {
        res.json(error);
    }
}

export const Crud_update =async(req,res)=>{
    try {
        const {name} = req.params;
        const Update_user = await data.collection("shopping").updateMany({name:"dgyu"},{$set:{name:"Anandh"}})
        res.json("Updated");
    } catch (error) {
        res.json(error)
    }
}

export const Crud_delete = async(req,res)=>{
    try {
        const {id} = req.params;
        const delete_user = await data.collection("shopping").deleteOne({name:"veera"});
        res.json(`Deleted`)
    } catch (error) {
        res.json(error);
    }
}