import User from "../Model/Model.js";
import New_User from "../Model/new_model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const login_token = async(req,res)=>{
    const auth = req.header["authorization"]
}

export const Crud_read = async(req,res)=>{
    try {       
        const all_data = await User.find();
        console.log(all_data);        
        res.json(all_data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const Crud_insert = async (req, res) => {
    try {
        const insert  = new User ({
            name:req.body.name,
            age:req.body.age
        })
        const new_insert = await insert.save();
        res.status(201).json({message:"Succesfully Inserted",data:new_insert})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error:error})
    
    }
};


export const register = async(req,res)=>{
    try{ 
        const{user_name,user_email,password}=req.body;
        const existing_user = await New_User.findOne({user_email});
        if(existing_user){
            return res.status(409).json({status:false,error:"User already exist"})
        }
        const keys = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password,keys);
        const new_user = new New_User({
            user_name:user_name,
            user_email:user_email,
            password:hassedPassword

        })
        const saved_user = await new_user.save();
        res.status(200).json({message:"Registered Successfully",data:saved_user})
    } catch (error) {
        res.status(500).json({message:"Internal Error",message:error})
    }
}
export const login = async(req,res)=>{
    try {
        const {user_email,password} =req.body;
    const match = await New_User.findOne({user_email});
    if(!match){
        return res.status(408).json({status:false,error:"No match Found"});
    }
    const joined = await bcrypt.compare(password,match.password);
    if(!joined){
        return res.status(409).json({status:false,error:"Password is Incorrect"})
    }
    const token = jwt.sign({id:match._id},"abcdefgh",{expiresIn:"1h"});
    res.status(202).json({
        token,
        data:{
            email:match.user_email,
            name:match.user_name
        }

    }) 
    } catch (error) {
        res.status(500).json({status:false,error:"Internal Server Error"})
    }
}

// Update User
export const Crud_update = async (req, res) => {
    try {
        const {id} = req.body;
        if(!id){
            return res.status(502).json({message:"Please Enter the IDs"})
        }
        const Update = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({message:"Succesfully Updated",data:Update})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}



    








    //     const { id } = req.body;
    //     if (!id) {
    //         return res.status(400).json({ error: "User ID is required" });
    //     }
    //     const updatedUser = await User.findByIdAndUpdate(
    //         id,
    //         { $set: req.body },
    //         { new: true }
    //     )

    //     if (!updatedUser) {
    //         return res.status(404).json({ error: "User not found" });
    //     }

    //     res.status(200).json({
    //         message: "User updated successfully",
    //         data: updatedUser,
    //     });
    // } catch (error) {
    //     console.error("Error updating user:", error);
    //     res.status(500).json({ error: "Internal server error" });
    // }



// // Delete User
// export const Crud_delete = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deletedUser = await User.findByIdAndDelete(id);

//         if (!deletedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         res.status(200).json({
//             message: `User with ID ${id} deleted successfully`,
//             data: deletedUser,
//         });
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
