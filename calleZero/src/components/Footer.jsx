import logo from "../assets/logo-1.png";
import { Camera, X, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-black text-white border-t border-white/10">

            <div className="max-w-6xl mx-auto px-6 py-16">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 pb-12 border-b border-white/10">

                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black font-[Montserrat] mb-4">
                            ÚNETE A LA ZERO-LIST
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base">
                            Acceso anticipado a drops exclusivos, eventos privados y 10% OFF en tu primera compra.
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto gap-3">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="w-full md:w-[280px] px-4 py-3 bg-[#111] rounded-md text-white outline-none border border-white/10 focus:border-purple-500"
                        />

                        <button className="px-6 py-3 bg-purple-500 text-black font-bold rounded-md hover:opacity-90 transition">
                            Unirme
                        </button>
                    </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">

                    <div className="col-span-2 md:col-span-1">
                        <div
                            onClick={() => navigate("/")}
                            className="flex items-center gap-3 mb-4 cursor-pointer"
                        >
                            <img src={logo} className="w-10 h-10" />
                            <h3 className="text-xl font-bold font-[Montserrat]">
                                Calle Zero
                            </h3>
                        </div>

                        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                            Estilo urbano minimalista para la generación que define su propio camino.
                        </p>

                        {/* ICONOS */}
                        <div className="flex gap-4">
                            <Camera
                                size={18}
                                strokeWidth={1.5}
                                className="cursor-pointer hover:text-purple-500 transition"
                            />
                            <X
                                size={18}
                                strokeWidth={1.5}
                                className="cursor-pointer hover:text-purple-500 transition"
                            />
                            <Users
                                size={18}
                                strokeWidth={1.5}
                                className="cursor-pointer hover:text-purple-500 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 font-[Montserrat]">TIENDA</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li onClick={() => navigate("/products")} className="hover:text-purple-500 cursor-pointer">
                                Todos los productos
                            </li>
                            <li onClick={() => navigate("/categories")} className="hover:text-purple-500 cursor-pointer">
                                Categorías
                            </li>
                            <li className="hover:text-purple-500 cursor-pointer">
                                Novedades
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 font-[Montserrat]">COMPAÑÍA</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-purple-500 cursor-pointer">
                                Sobre nosotros
                            </li>
                            <li onClick={() => navigate("/contact")} className="hover:text-purple-500 cursor-pointer">
                                Contacto
                            </li>
                            <li className="hover:text-purple-500 cursor-pointer">
                                Términos
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h4 className="font-semibold mb-4 font-[Montserrat]">AYUDA</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-purple-500 cursor-pointer">
                                Envíos
                            </li>
                            <li className="hover:text-purple-500 cursor-pointer">
                                Devoluciones
                            </li>
                            <li className="hover:text-purple-500 cursor-pointer">
                                FAQ
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6 text-xs text-gray-500">

                    <span>
                        © {new Date().getFullYear()} Calle Zero. Todos los derechos reservados.
                    </span>

                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer transition">
                            Privacidad
                        </span>
                        <span className="hover:text-white cursor-pointer transition">
                            Cookies
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;