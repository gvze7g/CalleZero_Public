import express from "express";
import productController from "../controller/productController.js";


//Ocupo Router() para asignar los métodos
const router = express.Router();

router
  .route("/")
  .get(productController.getAll)
  .post(productController.InsertProducts)

router
  .route("/:id")
  .put(productController.updateProduct)
  .delete(productController.deleteProudct)
  .get(productController.getProductById)

export default router;