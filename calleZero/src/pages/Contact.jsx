import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageCircle, Globe, Camera, X } from "lucide-react";

const Contact = () => {
    return (
        <div className="bg-black text-white">

            <Navbar />

            <div className="px-6 md:px-16 py-12 grid lg:grid-cols-2 gap-10">

                <div>

                    <h1 className="text-4xl md:text-6xl font-black font-montserrat">
                        CONTACTO
                    </h1>

                    <p className="text-gray-400 mt-4 max-w-md font-opensans">
                        Estamos aquí para ayudarte. Escríbenos y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                    </p>

                    <div className="mt-8 space-y-5">

                        <div className="grid md:grid-cols-2 gap-4">
                            <input className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg outline-none" placeholder="Ej. Alex Zero" />
                            <input className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg outline-none" placeholder="alex@callezero.com" />
                        </div>

                        <input className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg outline-none" placeholder="¿En qué podemos ayudarte?" />

                        <textarea rows="5" className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg outline-none" placeholder="Cuéntanos más detalles..." />

                        <button className="bg-purple-500 text-black px-6 py-3 rounded-lg font-montserrat font-semibold">
                            Enviar Mensaje →
                        </button>

                    </div>

                </div>

                <div className="bg-[#111] rounded-2xl p-6 space-y-8">

                    <div>
                        <h2 className="text-xl font-bold font-montserrat mb-4">
                            Canales Directos
                        </h2>

                        <div className="space-y-5 text-sm">

                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold">CORREO ELECTRÓNICO</p>
                                    <p className="text-gray-400">soporte@callezero.com</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold">CHAT EN VIVO</p>
                                    <p className="text-gray-400">Disponible Lun-Vie</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <Globe size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold">PRENSA Y COLABORACIONES</p>
                                    <p className="text-gray-400">media@callezero.com</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold font-montserrat mb-3">
                            Nuestra Comunidad
                        </h2>

                        <div className="flex gap-3">

                            <button className="flex items-center gap-2 border border-purple-500 text-purple-500 px-4 py-2 rounded-full text-sm">
                                <Camera size={16} />
                                Instagram
                            </button>

                            <button className="flex items-center gap-2 border border-purple-500 text-purple-500 px-4 py-2 rounded-full text-sm">
                                <X size={16} />
                                antes "Twitter"
                            </button>

                            <button className="flex items-center gap-2 border border-purple-500 text-purple-500 px-4 py-2 rounded-full text-sm">
                                <span className="font-bold">F</span>
                                Facebook
                            </button>

                        </div>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
};

export default Contact;