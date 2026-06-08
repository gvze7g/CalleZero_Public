import express from "express";
import controllerUsers from "../controller/UsersController.js";


//Ocupo Router() para asignar los métodos
const router = express.Router();

router
  .route("/")
  .get(controllerUsers.getAll)

router
  .route("/:id")
  .put(controllerUsers.updateUsers)
  .delete(controllerUsers.deleteUsers)

export default router;