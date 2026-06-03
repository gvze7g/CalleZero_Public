import React, { useState } from "react";
import { Mail, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import AuthInput from "./AuthInput";

const ForgotPasswordCard = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      toast.error("Debes ingresar tu correo electrónico");
      return;
    }

    toast.success("Mensaje enviado correctamente");
    setEmail("");
  };

  return (
    <div className="relative w-full max-w-[440px] rounded-[16px] border border-white/5 bg-[#171724] px-6 py-8 shadow-[0_0_120px_rgba(103,25,180,0.16),0_20px_60px_rgba(0,0,0,0.45)] md:px-10 md:py-10">
      <div className="absolute left-0 top-0 h-[3px] w-full rounded-t-[16px] bg-[#B56CFF]" />

      <div className="text-center">
        <h1 className="font-[Montserrat] text-[34px] font-extrabold leading-none tracking-[-0.04em] text-white md:text-[36px]">
          Recuperar contraseña
        </h1>

        <p className="mx-auto mt-4 max-w-[320px] font-[Open_Sans] text-[15px] leading-6 text-white/65">
          Ingresa tu correo electrónico y te enviaremos un enlace para
          restablecer tu acceso.
        </p>
      </div>

      <form className="mt-9 space-y-4" onSubmit={handleSubmit} noValidate>
        <AuthInput
          label="Correo Electrónico"
          type="email"
          placeholder="ejemplo@callezero.com"
          icon={Mail}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          type="submit"
          className="h-[50px] w-full rounded-[12px] bg-[#B57AF6] font-[Montserrat] text-[16px] font-extrabold text-[#1C1023] shadow-[0_10px_25px_rgba(181,122,246,0.32)] transition hover:brightness-105"
        >
          Enviar enlace de recuperación
        </button>
      </form>

      <button
        type="button"
        onClick={onBackToLogin}
        className="mx-auto mt-8 flex items-center gap-2 font-[Open_Sans] text-[15px] font-semibold text-white/70 transition hover:text-white"
      >
        <ChevronLeft size={18} strokeWidth={2.2} />
        <span>Volver al inicio de sesión</span>
      </button>
    </div>
  );
};

export default ForgotPasswordCard;