import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import userModel from '../models/users.js';
import { config } from "../config.js";

const registerUserController = {};

registerUserController.register = async (req, res) => {
  try {
    console.log("POST /register recibido:", req.body);

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }

    // Verificar si el correo ya está registrado
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardar en la base de datos
    const newUser = await userModel.create({
      fullName,
      email,
      password: passwordHash,
      isActive: true,
      isVerified: false,
    });

    console.log("Usuario registrado:", email);

    // Generar token
    const token = jsonwebtoken.sign(
      { id: newUser._id, userType: "user" },
      config.JWT.secret,
      { expiresIn: "30d" },
    );

    // Guardar token en cookie
    res.cookie("authCookie", token, { 
      httpOnly: true, 
      maxAge: 30 * 24 * 60 * 60 * 1000 
    });

    return res.status(201).json({ 
      message: "Cuenta creada exitosamente",
      user: { email: newUser.email, fullName: newUser.fullName }
    });
  } catch (error) {
    console.error("Error en registro:", error);
    return res.status(500).json({ message: "Error al registrar" });
  }
};

export default registerUserController;