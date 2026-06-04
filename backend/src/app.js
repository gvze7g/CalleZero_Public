import express from "express";
import adminRoutes from "./routes/administrador.js"
import registerAdminRoutes from "./routes/registerAdmin.js"
import categoriesRoutes from "./routes/categories.js"

import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    // permitir el envio de cookies y credenciales
    credentials: true
}))

app.use(cookieParser());

//Que acepte JSON desde postman
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/registerAdmin", registerAdminRoutes);
app.use("/api/categories", categoriesRoutes);

export default app;