import express from "express";
import registerUserController from "../controller/registerUsersController.js";

const router = express.Router();

router.post("/", registerUserController.register);

export default router;