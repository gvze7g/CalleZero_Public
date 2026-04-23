import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/logo-1.png";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        accepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-black font-opensans relative overflow-hidden">

            {/* FONDO */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black" />

                <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 
                w-[800px] h-[800px] bg-purple-500 opacity-20 blur-[180px] rounded-full" />

                <div className="absolute bottom-[-200px] right-[-100px] 
                w-[600px] h-[600px] bg-purple-700 opacity-10 blur-[160px] rounded-full" />
            </div>

            {/* BOTÓN VOLVER (RESPONSIVE FIX) */}
            <div
                onClick={() => navigate("/")}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-xs text-white cursor-pointer hover:text-purple-400 z-20"
            >
                ← VOLVER AL INICIO
            </div>

            {/* CONTENIDO */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 sm:pt-0 relative z-10">

                <div className="w-[90%] max-w-sm bg-[#111]/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.25)]">

                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} className="w-14 sm:w-16 mb-2" />
                        <h3 className="text-purple-500 text-lg font-montserrat font-semibold">
                            Calle Zero
                        </h3>
                    </div>

                    <h2 className="text-white text-center text-xl font-montserrat font-bold">
                        Crear Cuenta
                    </h2>

                    <p className="text-gray-400 text-center text-sm mb-6">
                        Únete al movimiento urbano
                    </p>

                    <div className="space-y-4">
                        <Input label="Nombre" name="name" value={form.name} onChange={handleChange} />
                        <Input label="Correo" name="email" value={form.email} onChange={handleChange} />
                        <Input label="Contraseña" name="password" type="password" value={form.password} onChange={handleChange} />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
                        <input type="checkbox" name="accepted" onChange={handleChange} />
                        <span>Acepto términos y condiciones</span>
                    </div>

                    <Button text="Registrarse →" />

                    <p className="text-gray-400 text-center text-sm mt-4">
                        ¿Ya tienes cuenta?{" "}
                        <span onClick={() => navigate("/login")} className="text-purple-500 cursor-pointer">
                            Inicia sesión
                        </span>
                    </p>
                </div>

                {/* TEXTO DIFUMINADO */}
                <div className="text-center mt-10 pointer-events-none">
                    <p className="text-white opacity-17 tracking-[6px] sm:tracking-[8px] text-[10px] sm:text-xs">
                        MINIMALISMO URBANO
                    </p>
                    <p className="text-white opacity-17 tracking-[6px] sm:tracking-[8px] text-[10px] sm:text-xs mt-2">
                        DISEÑADO PARA EL AHORA
                    </p>
                </div>

            </div>

            {/* FOOTER */}
            <div className="w-full text-center text-gray-500 text-xs border-t border-white/10 py-4 relative z-10">
                © 2026 Calle Zero — Todos los derechos reservados
            </div>

        </div>
    );
};

export default Register;