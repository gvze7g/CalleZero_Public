import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/common/ProductCard";
import products from "../data/products";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);

    const product = products.find((p) => p.id === parseInt(id));

    const relatedProducts = products
        .filter((p) => p.id !== product?.id)
        .slice(0, 4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="bg-black p-10 text-white">Producto no encontrado</div>;
    }

    return (
        <div className="bg-black text-white">
            <Navbar />

            <section className="px-5 py-10 sm:px-6 md:px-16">
                <p className="mb-6 font-[Open_Sans] text-xs text-gray-500">
                    Inicio &gt; {product.category} &gt;{" "}
                    <span className="text-white">{product.name}</span>
                </p>

                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-3">
                            <div className="h-20 w-16 rounded-md bg-[#222]" />
                            <div className="h-20 w-16 rounded-md bg-[#222]" />
                            <div className="h-20 w-16 rounded-md bg-[#222]" />
                        </div>

                        <div className="h-[400px] flex-1 rounded-xl bg-[#222] sm:h-[500px] md:h-[600px]" />
                    </div>

                    <div>
                        <span className="rounded-full bg-purple-500/20 px-3 py-1 font-[Montserrat] text-xs text-purple-400">
                            {product.tag}
                        </span>

                        <h1 className="mt-4 font-[Montserrat] text-3xl font-black md:text-4xl">
                            {product.name}
                        </h1>

                        <div className="mt-4 flex items-center gap-3">
                            <span className="font-[Montserrat] text-xl font-bold">
                                {product.price}
                            </span>
                            <span className="font-[Open_Sans] text-sm text-gray-400">
                                IVA incluido. Envío gratis +100€
                            </span>
                        </div>

                        <p className="mt-6 max-w-md font-[Open_Sans] text-sm leading-relaxed text-gray-400">
                            {product.description}
                        </p>

                        <div className="mt-8">
                            <div className="mb-3 flex justify-between text-sm">
                                <span className="font-[Montserrat]">TALLA</span>
                                <span className="text-xs text-gray-400">Guía de tallas</span>
                            </div>

                            <div className="flex gap-2">
                                {["S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`rounded-md border px-4 py-2 font-[Montserrat] text-sm ${selectedSize === size
                                                ? "border-purple-500 bg-purple-500 text-black"
                                                : "border-white/20 hover:border-purple-500"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="mb-2 font-[Montserrat] text-sm">CANTIDAD</p>

                            <div className="flex w-fit items-center rounded-md border border-white/20">
                                <button
                                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                    className="px-3 py-2"
                                >
                                    -
                                </button>

                                <span className="px-4">{quantity}</span>

                                <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="px-3 py-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <button className="flex-1 rounded-lg bg-purple-500 py-3 font-[Montserrat] font-semibold text-black transition hover:opacity-90">
                                Añadir al carrito
                            </button>

                            <button className="rounded-lg border border-white/20 px-4">
                                ♥
                            </button>
                        </div>

                        <div className="mt-8 flex gap-8 font-[Open_Sans] text-xs text-gray-400">
                            <span>Envío 24/48H</span>
                            <span>14 días devolución</span>
                            <span>Pago seguro</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#111] px-5 py-12 sm:px-6 md:px-16">
                <h2 className="mb-6 font-[Montserrat] text-lg">
                    Especificaciones Técnicas
                </h2>

                <div className="grid gap-6 font-[Open_Sans] text-sm text-gray-400 md:grid-cols-2">
                    <ul className="space-y-2">
                        <li>• 100% Algodón Orgánico</li>
                        <li>• Alta calidad</li>
                    </ul>

                    <ul className="space-y-2">
                        <li>• Corte Oversize</li>
                        <li>• Diseño urbano</li>
                    </ul>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-6 md:px-16">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="font-[Montserrat] text-xs text-purple-500">
                            COMPLETA EL LOOK
                        </p>
                        <h2 className="font-[Montserrat] text-xl font-black md:text-2xl">
                            TAMBIÉN TE PUEDE GUSTAR
                        </h2>
                    </div>

                    <span
                        onClick={() => navigate("/products")}
                        className="cursor-pointer text-sm text-purple-500"
                    >
                        VER TODO
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {relatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => navigate(`/product/${product.id}`)}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetail;