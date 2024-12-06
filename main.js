import express from "express";
import CrudRoute from "./Router/route.js";

const app = express();
const PORT = 4006;

app.use("/Crud", CrudRoute)

app.listen(express.Router)

app.listen(PORT,()=>{
    console.log(`This port is running : http://localhost:${PORT}`);
})