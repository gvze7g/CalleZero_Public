import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AuthHeader from "../components/auth/AuthHeader";
import AuthFooter from "../components/auth/AuthFooter";
import LoginCard from "../components/auth/LoginCard";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Manejo de inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Función de login
  const handleLogin = async () => {
    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Error al iniciar sesión");
        return;
      }

      toast.success("Login exitoso");

      setTimeout(() => {
        navigate("/dashboard");
      }, 600);

    } catch (error) {
      console.error(error);
      toast.error("Error al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-y-auto">
      <div className="flex min-h-screen w-full flex-col border border-[#0F1230]">
        <AuthHeader />

        <main className="flex flex-1 items-center justify-center px-4 py-8 sm:py-10 md:px-8">
          <div className="w-full flex justify-center">
            <LoginCard
              email={form.email}
              password={form.password}
              onChange={handleChange}
              onLogin={handleLogin}
              onForgotPassword={() => navigate("/forgot-password")}
            />
          </div>
        </main>

        <AuthFooter />
      </div>
    </div>
  );
};

export default LoginPage;