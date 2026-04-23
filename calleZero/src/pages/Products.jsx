import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
    const navigate = useNavigate();

    const [showCategorias, setShowCategorias] = useState(true);
    const [showPrecio, setShowPrecio] = useState(true);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [price, setPrice] = useState(5);

    const productos = Array(12).fill(null).map((_, i) => ({
        id: i + 1,
        nombre: "Cyber-Purple Hoodie",
        categoria: "HOODIE",
        precio: "$85.00",
    }));

    return (
        <div className="bg-black text-white font-opensans">

            <Navbar />

            <div className="bg-[#111] px-6 md:px-16 py-12 flex flex-col md:flex-row md:justify-between gap-6">

                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-black font-montserrat">
                        PRODUCTOS
                    </h1>

                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                        Explora nuestra colección curada de streetwear esencial.
                        Diseños minimalistas con materiales de primera calidad
                        para el entorno urbano.
                    </p>
                </div>

                <div className="text-gray-400 text-sm md:text-base self-end">
                    {productos.length} productos
                </div>

            </div>

            <div className="sticky top-[60px] z-40 bg-black border-b border-white/10 px-6 md:px-16 py-4 flex flex-col md:flex-row md:justify-between gap-4">

                <input
                    placeholder="Buscar productos..."
                    className="w-full md:w-[300px] px-4 py-2 bg-[#111] border border-white/10 rounded-full outline-none font-opensans"
                />

                <div className="flex items-center gap-3 font-montserrat">

                    <button className="px-3 py-2 bg-[#111] rounded-lg">▦</button>
                    <button className="px-3 py-2 bg-[#111] rounded-lg">☰</button>

                    <select className="bg-[#111] text-white text-sm px-3 py-2 rounded-lg border border-white/10">
                        <option>Novedades</option>
                        <option>Precio</option>
                    </select>

                </div>

            </div>

            <div className="px-6 md:px-16 py-10 flex flex-col lg:flex-row gap-10">

                <aside className="w-full lg:w-64 lg:sticky lg:top-32 h-fit">

                    <div className="lg:hidden mb-6">
                        <details className="bg-[#111] p-3 rounded-lg">
                            <summary className="cursor-pointer font-montserrat font-semibold">
                                Filtros
                            </summary>

                            <div className="mt-4 space-y-4 text-sm text-gray-400">

                                <div>
                                    <p className="text-white mb-2 font-montserrat">Categorías</p>
                                    <label className="block"><input type="checkbox" /> Hoodies</label>
                                    <label className="block"><input type="checkbox" /> Camisetas</label>
                                    <label className="block"><input type="checkbox" /> Pantalones</label>
                                    <label className="block"><input type="checkbox" /> Accesorios</label>
                                </div>

                                <div>
                                    <p className="text-white mb-2 font-montserrat">Precio</p>

                                    <input
                                        type="range"
                                        min="5"
                                        max="100"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full accent-purple-500"
                                    />

                                    <div className="flex justify-between text-xs mt-2 font-montserrat">
                                        <span className="text-purple-500">
                                            ${price}
                                        </span>
                                        <span>$100</span>
                                    </div>
                                </div>

                            </div>
                        </details>
                    </div>

                    <div className="hidden lg:block">

                        <h3 className="font-montserrat font-bold mb-4">FILTROS</h3>

                        <div className="mb-6 text-sm text-gray-400 space-y-2">

                            <div
                                onClick={() => setShowCategorias(!showCategorias)}
                                className="cursor-pointer text-white font-montserrat"
                            >
                                Categorías ▾
                            </div>

                            {showCategorias && (
                                <>
                                    <label className="block"><input type="checkbox" /> Hoodies</label>
                                    <label className="block"><input type="checkbox" /> Camisetas</label>
                                    <label className="block"><input type="checkbox" /> Pantalones</label>
                                    <label className="block"><input type="checkbox" /> Accesorios</label>
                                </>
                            )}

                        </div>

                        <div className="text-sm text-gray-400">

                            <div
                                onClick={() => setShowPrecio(!showPrecio)}
                                className="cursor-pointer text-white mb-2 font-montserrat"
                            >
                                Precio ▾
                            </div>

                            {showPrecio && (
                                <>
                                    <input
                                        type="range"
                                        min="5"
                                        max="100"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full accent-purple-500"
                                    />

                                    <div className="flex justify-between text-xs mt-2 font-montserrat">
                                        <span className="text-purple-500">
                                            ${price}
                                        </span>
                                        <span>$100</span>
                                    </div>
                                </>
                            )}

                        </div>

                        <button className="mt-6 w-full border border-white/20 rounded-full py-2 text-sm font-montserrat">
                            Limpiar Filtros
                        </button>

                    </div>

                </aside>

                <div className="flex-1">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">

                        {productos.slice(0, visibleProducts).map((p) => (
                            <div
                                key={p.id}
                                onClick={() => navigate(`/products/${p.id}`)}
                                className="bg-[#0a0a0a] rounded-xl overflow-hidden hover:scale-[1.03] transition cursor-pointer"
                            >

                                <div className="relative">

                                    <span className="absolute top-2 left-2 bg-black text-[10px] px-2 py-1 rounded-full z-10 font-montserrat">
                                        {p.categoria}
                                    </span>

                                    <div className="aspect-3/4 bg-[#222]"></div>

                                </div>

                                <div className="p-2 md:p-3">
                                    <h4 className="text-xs md:text-sm font-semibold font-montserrat">
                                        {p.nombre}
                                    </h4>
                                    <p className="text-purple-500 text-xs md:text-sm mt-1 font-montserrat">
                                        {p.precio}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="text-center mt-10 flex gap-4 justify-center font-montserrat">

                        {visibleProducts < productos.length && (
                            <button
                                onClick={() => setVisibleProducts((prev) => prev + 4)}
                                className="border border-purple-500 text-purple-500 px-5 py-2 rounded-full"
                            >
                                Ver más
                            </button>
                        )}

                        {visibleProducts > 8 && (
                            <button
                                onClick={() => setVisibleProducts(8)}
                                className="border border-white/30 px-5 py-2 rounded-full"
                            >
                                Ver menos
                            </button>
                        )}

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Products;