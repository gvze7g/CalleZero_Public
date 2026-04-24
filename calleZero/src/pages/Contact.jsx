import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import { Mail, MessageCircle, Globe, Camera, X } from "lucide-react";

const Contact = () => {
    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <section className="grid gap-10 px-4 py-10 sm:px-6 md:px-10 md:py-14 lg:grid-cols-2 lg:px-16">
                <div>
                    <h1 className="font-[Montserrat] text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
                        CONTACTO
                    </h1>

                    <p className="mt-4 max-w-md font-[Open_Sans] text-sm text-gray-400 sm:text-base">
                        Estamos aquí para ayudarte. Escríbenos y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                    </p>

                    <div className="mt-8 space-y-4 sm:space-y-5">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input
                                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none sm:text-base"
                                placeholder="Ej. Alex Zero"
                            />
                            <input
                                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none sm:text-base"
                                placeholder="alex@callezero.com"
                            />
                        </div>

                        <input
                            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none sm:text-base"
                            placeholder="¿En qué podemos ayudarte?"
                        />

                        <textarea
                            rows="5"
                            className="w-full resize-none rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none sm:text-base"
                            placeholder="Cuéntanos más detalles..."
                        />

                        <button className="w-full rounded-lg bg-purple-500 px-6 py-3 font-[Montserrat] text-sm font-semibold text-black sm:w-auto sm:text-base">
                            Enviar Mensaje →
                        </button>
                    </div>
                </div>

                <div className="space-y-8 rounded-2xl bg-[#111] p-5 sm:p-6">
                    <div>
                        <h2 className="mb-4 font-[Montserrat] text-lg font-bold sm:text-xl">
                            Canales Directos
                        </h2>

                        <div className="space-y-5 text-sm sm:text-base">
                            <ContactInfoCard
                                icon={Mail}
                                title="CORREO ELECTRÓNICO"
                                text="soporte@callezero.com"
                            />

                            <ContactInfoCard
                                icon={MessageCircle}
                                title="CHAT EN VIVO"
                                text="Disponible Lun-Vie"
                            />

                            <ContactInfoCard
                                icon={Globe}
                                title="PRENSA Y COLABORACIONES"
                                text="media@callezero.com"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-3 font-[Montserrat] text-base font-bold sm:text-lg">
                            Nuestra Comunidad
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 rounded-full border border-purple-500 px-4 py-2 text-xs text-purple-500 transition hover:bg-purple-500 hover:text-black sm:text-sm">
                                <Camera size={16} />
                                Instagram
                            </button>

                            <button className="flex items-center gap-2 rounded-full border border-purple-500 px-4 py-2 text-xs text-purple-500 transition hover:bg-purple-500 hover:text-black sm:text-sm">
                                <X size={16} />
                                X
                            </button>

                            <button className="flex items-center gap-2 rounded-full border border-purple-500 px-4 py-2 text-xs text-purple-500 transition hover:bg-purple-500 hover:text-black sm:text-sm">
                                <span className="font-bold">F</span>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;