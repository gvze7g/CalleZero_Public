import express from "express";
import loginUsersController from "../controller/loginUsersController.js";

const router = express.Router();

router.post("/", loginUsersController.login);

export default router;