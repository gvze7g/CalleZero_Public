import express from "express";
import promotionRoute from "../controller/promotionController.js";


//Ocupo Router() para asignar los métodos
const router = express.Router();

router
  .route("/")
  .get(promotionRoute.getAll)
  .post(promotionRoute.InsertPromotions)

router
  .route("/:id")
  .put(promotionRoute.updatePromotion)
  .delete(promotionRoute.deletePromotion)
  .get(promotionRoute.getPromotionById)

export default router;