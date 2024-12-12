import express,{Router} from "express"
import { Crud_delete, Crud_insert, Crud_read, Crud_update } from "../Controller/Crud_Controller.js";


const CrudRoute = express.Router();

CrudRoute.get("/", Crud_read);

CrudRoute.post("/", Crud_insert)
CrudRoute.put("/:name", Crud_update)
CrudRoute.delete("/:name", Crud_delete)

export default CrudRoute;