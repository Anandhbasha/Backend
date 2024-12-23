import express,{Router} from "express"
import { 
    // Crud_delete, 
    Crud_insert, 
    Crud_read, 
    Crud_update,
    login,
    login_token,
    register,
 } from "../Controller/Crud_Controller.js";


const CrudRoute = express.Router();

CrudRoute.get("/", login_token,Crud_read);

CrudRoute.post("/register", register)
CrudRoute.post("/login", login)
CrudRoute.post("/", Crud_insert)
CrudRoute.put("/:id", Crud_update)
// CrudRoute.delete("/:id", Crud_delete)

export default CrudRoute;