import React, { useState } from "react";
import { Save, ShieldCheck, User, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "../components/layout/AdminLayout";
import SectionCard from "../components/shared/SectionCard";

const ProfilePage = () => {
    const [formData, setFormData] = useState({
        name: "Admin Calle Zero",
        email: "admin@callezero.com",
        phone: "+503 7000-0000",
        location: "San Salvador, El Salvador",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Perfil actualizado correctamente");
    };

    return (
        <AdminLayout>
            <section className="mx-auto max-w-[920px]">
                <div>
                    <p className="font-[Open_Sans] text-[13px] font-bold uppercase tracking-[0.22em] text-white/35">
                        Cuenta administrativa
                    </p>

                    <h1 className="mt-2 font-[Montserrat] text-[32px] font-extrabold text-white md:text-[40px]">
                        Mi Perfil
                    </h1>

                    <p className="mt-2 font-[Open_Sans] text-[15px] text-white/72">
                        Administra tu información personal y los datos visibles dentro del panel.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
                    <SectionCard className="p-5 text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-neutral-300 font-[Montserrat] text-[34px] font-extrabold text-black">
                            AC
                        </div>

                        <h2 className="mt-5 font-[Montserrat] text-[22px] font-extrabold text-white">
                            Admin Calle Zero
                        </h2>

                        <p className="mt-2 font-[Open_Sans] text-[14px] text-white/60">
                            Administrador principal
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-[Open_Sans] text-[12px] font-bold text-white">
                            <ShieldCheck size={15} />
                            Acceso completo
                        </div>
                    </SectionCard>

                    <SectionCard className="p-5">
                        <h3 className="font-[Montserrat] text-[20px] font-extrabold text-white">
                            Información del Perfil
                        </h3>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <label className="block">
                                <span className="flex items-center gap-2 font-[Open_Sans] text-[14px] font-bold text-white">
                                    <User size={15} />
                                    Nombre
                                </span>
                                <input
                                    value={formData.name}
                                    onChange={(event) => handleChange("name", event.target.value)}
                                    className="mt-2 h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="flex items-center gap-2 font-[Open_Sans] text-[14px] font-bold text-white">
                                    <Mail size={15} />
                                    Correo
                                </span>
                                <input
                                    value={formData.email}
                                    onChange={(event) => handleChange("email", event.target.value)}
                                    className="mt-2 h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                                />
                            </label>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <label className="block">
                                    <span className="flex items-center gap-2 font-[Open_Sans] text-[14px] font-bold text-white">
                                        <Phone size={15} />
                                        Teléfono
                                    </span>
                                    <input
                                        value={formData.phone}
                                        onChange={(event) => handleChange("phone", event.target.value)}
                                        className="mt-2 h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                                    />
                                </label>

                                <label className="block">
                                    <span className="flex items-center gap-2 font-[Open_Sans] text-[14px] font-bold text-white">
                                        <MapPin size={15} />
                                        Ubicación
                                    </span>
                                    <input
                                        value={formData.location}
                                        onChange={(event) =>
                                            handleChange("location", event.target.value)
                                        }
                                        className="mt-2 h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                                    />
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[10px] bg-[#6F6A68] px-5 font-[Open_Sans] text-[14px] font-bold text-white"
                            >
                                <Save size={17} />
                                Guardar Cambios
                            </button>
                        </form>
                    </SectionCard>
                </div>
            </section>
        </AdminLayout>
    );
};

export default ProfilePage;