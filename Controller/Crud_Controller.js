import User from "../Model/Model.js";



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
