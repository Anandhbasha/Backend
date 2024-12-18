import express from "express";
import CrudRoute from "./Router/route.js";
import Data_base from "./Data_base.js";


const app = express();
const PORT = 5004;
app.use(express.json());
Data_base();
app.use("/Crud", CrudRoute)



app.listen(PORT,()=>{
    console.log(`This port is running : http://localhost:${PORT}`);
})