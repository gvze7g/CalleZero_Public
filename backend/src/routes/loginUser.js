import express from "express";
import loginUserController from "../controller/loginUsersController.js";

const router = express.Router();

router.route("/").post(loginUserController.login);

export default router;
