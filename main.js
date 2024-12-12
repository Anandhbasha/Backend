import express from "express";
import CrudRoute from "./Router/route.js";
import Data_base from "./db.js";

const app = express();
const PORT = 4006;

Data_base();
app.use("/Crud", CrudRoute)

app.listen(express.Router)

app.listen(PORT,()=>{
    console.log(`This port is running : http://localhost:${PORT}`);
})