import express from "express";
import recoveryPasswordAdminController from "../controller/recoveryPasswordAdminController.js";

const router = express.Router();

router.post("/request-code", recoveryPasswordAdminController.requestCode);
router.post("/verify-code", recoveryPasswordAdminController.verifyCode);
router.post("/new-password", recoveryPasswordAdminController.newPassword);

export default router;