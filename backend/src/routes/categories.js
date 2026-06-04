import express from "express";
import {
  getCategories,
  deleteCategories,
  insertCategories,
  updateCategories,
} from "../controller/categoriesController.js";

//Router() nos ayuda a colocar los métodos
//que tendrá mi endpoint

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(insertCategories);

router
  .route("/:id")
  .put(updateCategories)
  .delete(deleteCategories);

export default router;
