import { useState } from "react";
import { toast } from "sonner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    Bell,
    Camera,
    Mail,
    MapPin,
    Package,
    Phone,
    Save,
    ShieldCheck,
    User,
} from "lucide-react";

const Profile = () => {
    const [form, setForm] = useState({
        name: "Eduardo Gálvez",
        email: "eduardo@callezero.com",
        phone: "+503 7000-0000",
        city: "San Salvador, El Salvador",
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const saveProfile = (e) => {
        e.preventDefault();
        toast.success("Perfil actualizado correctamente");
    };

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <main className="mx-auto max-w-6xl px-6 py-14 md:px-16">
                <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#17171d] p-8 md:p-12">
                    <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-purple-500/20 blur-[90px]" />

                    <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-500 font-[Montserrat] text-3xl font-black text-black">
                                    EG
                                </div>
                                <button className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-black text-purple-500">
                                    <Camera size={16} />
                                </button>
                            </div>

                            <div>
                                <p className="font-[Open_Sans] text-xs uppercase tracking-[0.25em] text-purple-400">
                                    Mi cuenta
                                </p>
                                <h1 className="mt-2 font-[Montserrat] text-3xl font-black md:text-5xl">
                                    Perfil de Usuario
                                </h1>
                                <p className="mt-2 font-[Open_Sans] text-sm text-gray-400">
                                    Administra tus datos personales y preferencias de compra.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-full bg-black px-5 py-3 font-[Montserrat] text-sm text-purple-400">
                            Cliente Activo
                        </div>
                    </div>
                </section>

                <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
                    <form
                        onSubmit={saveProfile}
                        className="rounded-2xl border border-white/10 bg-[#111] p-6"
                    >
                        <h2 className="font-[Montserrat] text-2xl font-black">
                            Información Personal
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">
                            <label>
                                <span className="mb-2 flex items-center gap-2 font-[Open_Sans] text-sm font-bold text-gray-300">
                                    <User size={16} />
                                    Nombre completo
                                </span>
                                <input
                                    value={form.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 font-[Open_Sans] outline-none focus:border-purple-500"
                                />
                            </label>

                            <label>
                                <span className="mb-2 flex items-center gap-2 font-[Open_Sans] text-sm font-bold text-gray-300">
                                    <Mail size={16} />
                                    Correo electrónico
                                </span>
                                <input
                                    value={form.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 font-[Open_Sans] outline-none focus:border-purple-500"
                                />
                            </label>

                            <label>
                                <span className="mb-2 flex items-center gap-2 font-[Open_Sans] text-sm font-bold text-gray-300">
                                    <Phone size={16} />
                                    Teléfono
                                </span>
                                <input
                                    value={form.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 font-[Open_Sans] outline-none focus:border-purple-500"
                                />
                            </label>

                            <label>
                                <span className="mb-2 flex items-center gap-2 font-[Open_Sans] text-sm font-bold text-gray-300">
                                    <MapPin size={16} />
                                    Ubicación
                                </span>
                                <input
                                    value={form.city}
                                    onChange={(e) => handleChange("city", e.target.value)}
                                    className="h-12 w-full rounded-lg border border-white/10 bg-black px-4 font-[Open_Sans] outline-none focus:border-purple-500"
                                />
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-purple-500 px-6 py-3 font-[Montserrat] font-bold text-black"
                        >
                            <Save size={17} />
                            Guardar Cambios
                        </button>
                    </form>

                    <div className="space-y-6">
                        <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
                            <h3 className="font-[Montserrat] text-xl font-black">
                                Estado de Cuenta
                            </h3>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-purple-500" />
                                    <div>
                                        <p className="font-[Open_Sans] text-sm font-bold">
                                            Cuenta verificada
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Tus datos han sido confirmados.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Package className="text-purple-500" />
                                    <div>
                                        <p className="font-[Open_Sans] text-sm font-bold">
                                            4 pedidos realizados
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Último pedido hace 2 días.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Bell className="text-purple-500" />
                                    <div>
                                        <p className="font-[Open_Sans] text-sm font-bold">
                                            Notificaciones activas
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Recibirás avisos sobre drops y pedidos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-purple-500 p-6 text-black">
                            <h3 className="font-[Montserrat] text-xl font-black">
                                Preferencias
                            </h3>

                            <div className="mt-5 space-y-3 font-[Open_Sans] text-sm font-semibold">
                                <label className="flex items-center justify-between">
                                    Recibir ofertas
                                    <input type="checkbox" defaultChecked />
                                </label>

                                <label className="flex items-center justify-between">
                                    Avisos de pedidos
                                    <input type="checkbox" defaultChecked />
                                </label>

                                <label className="flex items-center justify-between">
                                    Drops exclusivos
                                    <input type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;