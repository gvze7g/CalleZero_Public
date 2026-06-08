import express from "express";
import registerUserController from "../controller/registerUsersController.js";

const router = express.Router();

router.route("/")
.post(registerUserController.register);
router.route("/verifyCodeEmail").post(registerUserController.verifyCode);

export default router;