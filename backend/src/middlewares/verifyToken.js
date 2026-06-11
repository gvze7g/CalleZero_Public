import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.authCookie;

    if (!token) {
      return res.status(401).json({ message: "No token, acceso denegado" });
    }

    const decoded = jsonwebtoken.verify(token, config.JWT.secret);
    console.log("✅ Token verificado:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("❌ Error verificando token:", error.message);
    return res.status(401).json({ message: "Token inválido" });
  }
};