import express,{Router} from "express"
import { Crur_delete, Crur_insert, Crur_read, Crur_update } from "../Controller/Crud_Controller.js";



CrudRoute.get("/", Crur_read);

CrudRoute.post("/", Crur_insert)
CrudRoute.put("/:id", Crur_update)
CrudRoute.delete("/:id", Crur_delete)

export default CrudRoute;