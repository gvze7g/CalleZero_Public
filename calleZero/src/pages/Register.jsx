import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import AuthLayout from "../components/auth/AuthLayout";
import AuthFooterText from "../components/auth/AuthFooterText";
import logo from "../assets/logo-1.png";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        accepted: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleRegister = (event) => {
        event.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
            toast.error("Debes completar todos los campos");
            return;
        }

        if (!form.accepted) {
            toast.error("Debes aceptar los términos y condiciones");
            return;
        }

        toast.success("Cuenta creada correctamente");

        setTimeout(() => {
            navigate("/login");
        }, 700);
    };

    return (
        <AuthLayout>
            <div
                onClick={() => navigate("/")}
                className="absolute left-4 top-4 z-20 cursor-pointer text-[10px] text-white hover:text-purple-400 sm:left-6 sm:top-6 sm:text-xs"
            >
                ← VOLVER AL INICIO
            </div>

            <form
                onSubmit={handleRegister}
                className="w-[90%] max-w-sm rounded-2xl bg-[#111]/95 p-6 shadow-[0_10px_40px_rgba(168,85,247,0.25)] backdrop-blur-md sm:p-8"
            >
                <div className="mb-6 flex flex-col items-center">
                    <img src={logo} className="mb-2 w-14 sm:w-16" alt="Calle Zero" />
                    <h3 className="font-[Montserrat] text-lg font-semibold text-purple-500">
                        Calle Zero
                    </h3>
                </div>

                <h2 className="text-center font-[Montserrat] text-xl font-bold text-white">
                    Crear Cuenta
                </h2>

                <p className="mb-6 text-center text-sm text-gray-400">
                    Únete al movimiento urbano
                </p>

                <div className="space-y-4">
                    <Input
                        label="Nombre"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <Input
                        label="Correo"
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

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                    <input
                        type="checkbox"
                        name="accepted"
                        checked={form.accepted}
                        onChange={handleChange}
                        className="accent-purple-500"
                    />
                    <span>Acepto términos y condiciones</span>
                </div>

                <Button text="Registrarse →" type="submit" />

                <AuthFooterText
                    text="¿Ya tienes cuenta?"
                    actionText="Inicia sesión"
                    onClick={() => navigate("/login")}
                />
            </form>
        </AuthLayout>
    );
};

export default Register;