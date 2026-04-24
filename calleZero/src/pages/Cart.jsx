import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import {
    Shield,
    Truck,
    RotateCcw,
    Trash2,
    CreditCard,
} from "lucide-react";

import products from "../data/products";
import { initialCart } from "../data/cartData";

const Cart = () => {
    const navigate = useNavigate();

    const [cart, setCart] = useState(initialCart);
    const [discount, setDiscount] = useState("");

    // 🔹 helpers
    const getProduct = (id) => products.find((p) => p.id === id);

    const parsePrice = (price) =>
        Number(price.replace("$", ""));

    // 🔹 totals
    const subtotal = cart.reduce((total, item) => {
        const product = getProduct(item.productId);
        return total + parsePrice(product.price) * item.quantity;
    }, 0);

    const taxes = subtotal * 0.21;
    const total = subtotal + taxes;

    // 🔹 actions
    const updateQuantity = (id, type) => {
        setCart((prev) =>
            prev.map((item) =>
                item.productId === id
                    ? {
                        ...item,
                        quantity:
                            type === "increase"
                                ? item.quantity + 1
                                : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart((prev) =>
            prev.filter((item) => item.productId !== id)
        );
        toast.error("Producto eliminado del carrito");
    };

    return (
        <div className="bg-black text-white">
            <Navbar />

            <main className="mx-auto max-w-6xl px-6 py-16 md:px-16">
                {/* volver */}
                <button
                    onClick={() => navigate("/products")}
                    className="font-[Open_Sans] text-sm text-gray-400 hover:text-purple-400"
                >
                    ← Continuar Comprando
                </button>

                {/* header */}
                <div className="mt-8 flex items-end justify-between border-b border-white/10 pb-6">
                    <h1 className="font-[Montserrat] text-4xl font-black md:text-5xl">
                        TU CARRITO
                    </h1>

                    <p className="font-[Montserrat] text-gray-400">
                        {cart.length} Artículos
                    </p>
                </div>

                {/* layout */}
                <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
                    {/* LEFT */}
                    <div>
                        <div className="space-y-6">
                            {cart.map((item) => {
                                const product = getProduct(item.productId);

                                return (
                                    <div
                                        key={item.productId}
                                        className="grid gap-4 border-b border-white/10 pb-6 sm:grid-cols-[130px_1fr_auto]"
                                    >
                                        {/* imagen placeholder */}
                                        <div className="h-32 w-32 rounded-xl bg-[#222]" />

                                        {/* info */}
                                        <div>
                                            <h3 className="font-[Montserrat] text-xl font-black">
                                                {product.name}
                                            </h3>

                                            <p className="font-[Open_Sans] text-sm text-gray-400">
                                                {product.category}
                                            </p>

                                            <span className="mt-2 inline-block rounded-full border border-white/10 px-3 py-1 font-[Open_Sans] text-xs">
                                                Talla: {item.size}
                                            </span>

                                            {/* cantidad */}
                                            <div className="mt-3 flex w-fit items-center rounded-full border border-white/10 bg-black">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.productId,
                                                            "decrease"
                                                        )
                                                    }
                                                    className="px-3 py-1"
                                                >
                                                    -
                                                </button>

                                                <span className="px-4">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.productId,
                                                            "increase"
                                                        )
                                                    }
                                                    className="px-3 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* precio + eliminar */}
                                        <div className="flex flex-row justify-between gap-5 sm:flex-col sm:items-end">
                                            <p className="font-[Montserrat] text-lg font-bold">
                                                $
                                                {parsePrice(
                                                    product.price
                                                ).toFixed(2)}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    removeItem(item.productId)
                                                }
                                                className="flex items-center gap-2 font-[Open_Sans] text-xs text-gray-400 hover:text-red-400"
                                            >
                                                <Trash2 size={14} />
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* beneficios */}
                        <div className="mt-10 grid gap-5 border-b border-white/10 pb-10 md:grid-cols-3">
                            <div className="flex gap-3">
                                <Truck className="text-purple-500" />
                                <div>
                                    <h4 className="font-[Montserrat] text-sm font-bold">
                                        ENVÍO GRATUITO
                                    </h4>
                                    <p className="text-xs text-gray-400">
                                        En pedidos superiores a $150
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Shield className="text-purple-500" />
                                <div>
                                    <h4 className="font-[Montserrat] text-sm font-bold">
                                        PAGO SEGURO
                                    </h4>
                                    <p className="text-xs text-gray-400">
                                        Encriptación SSL 256 bits
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <RotateCcw className="text-purple-500" />
                                <div>
                                    <h4 className="font-[Montserrat] text-sm font-bold">
                                        30 DÍAS DE DEVOLUCIÓN
                                    </h4>
                                    <p className="text-xs text-gray-400">
                                        Garantía total
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <aside className="space-y-5">
                        <div className="rounded-xl bg-[#1B1B22] p-6">
                            <h3 className="mb-6 font-[Montserrat] text-sm font-bold uppercase tracking-[0.25em]">
                                Resumen del Pedido
                            </h3>

                            <div className="space-y-4 font-[Open_Sans] text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        Subtotal
                                    </span>
                                    <strong>
                                        ${subtotal.toFixed(2)}
                                    </strong>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        Envío
                                    </span>
                                    <strong>Gratis</strong>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        Impuestos
                                    </span>
                                    <strong>
                                        ${taxes.toFixed(2)}
                                    </strong>
                                </div>
                            </div>

                            {/* descuento */}
                            <div className="mt-6 flex gap-2">
                                <input
                                    value={discount}
                                    onChange={(e) =>
                                        setDiscount(e.target.value)
                                    }
                                    placeholder="Código de descuento"
                                    className="min-w-0 flex-1 rounded-lg bg-black px-3 py-3 text-sm outline-none"
                                />

                                <button
                                    onClick={() =>
                                        toast.success("Código aplicado")
                                    }
                                    className="rounded-lg bg-black px-4 font-[Montserrat] text-xs font-bold"
                                >
                                    Aplicar
                                </button>
                            </div>

                            {/* total */}
                            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                                <span className="font-[Montserrat] text-xl font-black">
                                    TOTAL
                                </span>

                                <span className="font-[Montserrat] text-3xl font-black text-purple-500">
                                    ${total.toFixed(2)}
                                </span>
                            </div>

                            <button
                                onClick={() =>
                                    toast.success("Compra completada")
                                }
                                className="mt-6 w-full rounded-lg bg-purple-500 py-4 font-[Montserrat] font-bold text-black"
                            >
                                Finalizar Compra
                            </button>

                            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                                <CreditCard size={16} />
                                VISA · MASTERCARD · AMEX · PAYPAL
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#0D0D10] p-6">
                            <h4 className="font-[Montserrat] font-bold">
                                ¿NECESITAS AYUDA?
                            </h4>

                            <p className="mt-3 font-[Open_Sans] text-sm text-gray-400">
                                Estamos aquí para ayudarte con tu pedido.
                            </p>

                            <button
                                onClick={() => navigate("/contact")}
                                className="mt-4 font-[Montserrat] text-sm font-bold text-purple-500"
                            >
                                Contactar Soporte
                            </button>
                        </div>
                    </aside>
                </section>

                {/* sugerencias */}
                <section className="mt-16 border-t border-white/10 pt-14">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="font-[Montserrat] text-2xl font-black">
                            COMPLETA TU LOOK
                        </h2>

                        <button
                            onClick={() => navigate("/products")}
                            className="font-[Montserrat] text-sm text-purple-500"
                        >
                            Ver todo ›
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                        {products.slice(0, 4).map((item) => (
                            <div key={item.id}>
                                <div className="aspect-square rounded-lg bg-[#222]" />

                                <h3 className="mt-4 font-[Montserrat] text-sm font-bold">
                                    {item.name}
                                </h3>

                                <p className="mt-1 font-[Open_Sans] text-sm text-gray-400">
                                    {item.price}
                                </p>

                                <button
                                    onClick={() =>
                                        toast.success(
                                            `${item.name} añadido`
                                        )
                                    }
                                    className="mt-3 w-full border border-purple-500 py-2 font-[Montserrat] text-sm font-bold text-purple-500"
                                >
                                    Añadir
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Cart;