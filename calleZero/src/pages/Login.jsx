import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import AuthLayout from "../components/auth/AuthLayout";
import AuthFooterText from "../components/auth/AuthFooterText";
import logo from "../assets/logo-1.png";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Actualizar valores del formulario
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // Función para enviar login
  const handleLogin = async (event) => {
    event.preventDefault();

    // Validación básica
    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Debes completar correo y contraseña");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // importante para cookies
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Credenciales incorrectas");
        return;
      }

      toast.success(data.message || "Inicio de sesión exitoso");

      // Redirigir al home
      setTimeout(() => {
        navigate("/");
      }, 700);
    } catch (error) {
      console.error(error);
      toast.error("Error al conectar con el servidor");
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleLogin}
        className="w-[90%] max-w-sm rounded-2xl bg-[#111]/95 p-6 shadow-[0_10px_40px_rgba(168,85,247,0.25)] backdrop-blur-md sm:p-8"
      >
        <div className="mb-6 flex flex-col items-center">
          <img src={logo} className="mb-2 w-14 sm:w-16" alt="Calle Zero" />
          <h3 className="font-[Montserrat] text-lg font-semibold text-purple-500">
            Calle Zero
          </h3>
        </div>

        <h2 className="text-center font-[Montserrat] text-xl font-bold text-white">
          Bienvenido de nuevo
        </h2>

        <p className="mb-6 text-center text-sm text-gray-400">
          Accede a tu cuenta
        </p>

        <div className="space-y-4">
          <Input
            label="Correo Electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <Button text="Iniciar Sesión →" type="submit" />

        <AuthFooterText
          text="¿No tienes cuenta?"
          actionText="Crear cuenta"
          onClick={() => navigate("/register")}
        />

        <p
          onClick={() => navigate("/")}
          className="mt-3 cursor-pointer text-center text-xs text-gray-500 hover:text-purple-400"
        >
          ← Volver a la tienda
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;