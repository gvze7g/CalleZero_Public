import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import products from "../data/products";
import { initialCart } from "../data/cartData";
import {
    Shield,
    Truck,
    RotateCcw,
    Trash2,
    CreditCard,
    X,
} from "lucide-react";

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState(initialCart);
    const [discount, setDiscount] = useState("");
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const [checkoutForm, setCheckoutForm] = useState({
        fullName: "",
        address: "",
        city: "",
        zipCode: "",
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        ccv: "",
    });

    const getProduct = (id) => products.find((product) => product.id === id);

    const parsePrice = (price) => Number(price.replace("$", ""));

    const subtotal = cart.reduce((total, item) => {
        const product = getProduct(item.productId);
        if (!product) return total;
        return total + parsePrice(product.price) * item.quantity;
    }, 0);

    const taxes = subtotal * 0.21;
    const total = subtotal + taxes;

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
        setCart((prev) => prev.filter((item) => item.productId !== id));
        toast.error("Producto eliminado del carrito");
    };

    const handleCheckoutChange = (field, value) => {
        setCheckoutForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const openCheckout = () => {
        if (cart.length === 0) {
            toast.error("Tu carrito está vacío");
            return;
        }

        setIsCheckoutOpen(true);
    };

    const submitCheckout = (event) => {
        event.preventDefault();

        const hasEmptyFields = Object.values(checkoutForm).some(
            (value) => !value.trim()
        );

        if (hasEmptyFields) {
            toast.error("Debes completar todos los datos de pago y envío");
            return;
        }

        toast.success("Compra procesada correctamente");
        setIsCheckoutOpen(false);
        setCart([]);
        setCheckoutForm({
            fullName: "",
            address: "",
            city: "",
            zipCode: "",
            cardName: "",
            cardNumber: "",
            expiryDate: "",
            ccv: "",
        });
    };

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <main className="mx-auto max-w-6xl px-6 py-16 md:px-16">
                <button
                    onClick={() => navigate("/products")}
                    className="font-[Open_Sans] text-sm text-gray-400 hover:text-purple-400"
                >
                    ← Continuar Comprando
                </button>

                <div className="mt-8 flex items-end justify-between border-b border-white/10 pb-6">
                    <h1 className="font-[Montserrat] text-4xl font-black md:text-5xl">
                        TU CARRITO
                    </h1>

                    <p className="font-[Montserrat] text-gray-400">
                        {cart.length} Artículos
                    </p>
                </div>

                <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
                    <div>
                        <div className="space-y-6">
                            {cart.length === 0 ? (
                                <div className="rounded-xl border border-white/10 bg-[#111] p-8 text-center">
                                    <p className="font-[Montserrat] text-xl font-bold">
                                        Tu carrito está vacío
                                    </p>
                                    <button
                                        onClick={() => navigate("/products")}
                                        className="mt-5 rounded-lg bg-purple-500 px-6 py-3 font-[Montserrat] font-bold text-black"
                                    >
                                        Ir a productos
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => {
                                    const product = getProduct(item.productId);

                                    if (!product) return null;

                                    return (
                                        <div
                                            key={item.productId}
                                            className="grid gap-4 border-b border-white/10 pb-6 sm:grid-cols-[130px_1fr_auto]"
                                        >
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-32 w-32 rounded-xl object-cover"
                                                />
                                            ) : (
                                                <div className="h-32 w-32 rounded-xl bg-[#222]" />
                                            )}

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

                                                <div className="mt-3 flex w-fit items-center rounded-full border border-white/10 bg-black">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.productId, "decrease")
                                                        }
                                                        className="px-3 py-1"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="px-4">{item.quantity}</span>

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.productId, "increase")
                                                        }
                                                        className="px-3 py-1"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex flex-row justify-between gap-5 sm:flex-col sm:items-end">
                                                <p className="font-[Montserrat] text-lg font-bold">
                                                    ${parsePrice(product.price).toFixed(2)}
                                                </p>

                                                <button
                                                    onClick={() => removeItem(item.productId)}
                                                    className="flex items-center gap-2 font-[Open_Sans] text-xs text-gray-400 hover:text-red-400"
                                                >
                                                    <Trash2 size={14} />
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

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
                                    <p className="text-xs text-gray-400">Garantía total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-5">
                        <div className="rounded-xl bg-[#1B1B22] p-6">
                            <h3 className="mb-6 font-[Montserrat] text-sm font-bold uppercase tracking-[0.25em]">
                                Resumen del Pedido
                            </h3>

                            <div className="space-y-4 font-[Open_Sans] text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Subtotal</span>
                                    <strong>${subtotal.toFixed(2)}</strong>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">Envío</span>
                                    <strong>Gratis</strong>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">Impuestos</span>
                                    <strong>${taxes.toFixed(2)}</strong>
                                </div>
                            </div>

                            <div className="mt-6 flex gap-2">
                                <input
                                    value={discount}
                                    onChange={(event) => setDiscount(event.target.value)}
                                    placeholder="Código de descuento"
                                    className="min-w-0 flex-1 rounded-lg bg-black px-3 py-3 text-sm outline-none"
                                />

                                <button
                                    onClick={() => {
                                        if (!discount.trim()) {
                                            toast.error("Debes ingresar un código");
                                            return;
                                        }

                                        toast.success("Código aplicado");
                                    }}
                                    className="rounded-lg bg-black px-4 font-[Montserrat] text-xs font-bold"
                                >
                                    Aplicar
                                </button>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                                <span className="font-[Montserrat] text-xl font-black">
                                    TOTAL
                                </span>

                                <span className="font-[Montserrat] text-3xl font-black text-purple-500">
                                    ${total.toFixed(2)}
                                </span>
                            </div>

                            <button
                                onClick={openCheckout}
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
                            <h4 className="font-[Montserrat] font-bold">¿NECESITAS AYUDA?</h4>

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
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="aspect-square rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="aspect-square rounded-lg bg-[#222]" />
                                )}

                                <h3 className="mt-4 font-[Montserrat] text-sm font-bold">
                                    {item.name}
                                </h3>

                                <p className="mt-1 font-[Open_Sans] text-sm text-gray-400">
                                    {item.price}
                                </p>

                                <button
                                    onClick={() => toast.success(`${item.name} añadido`)}
                                    className="mt-3 w-full border border-purple-500 py-2 font-[Montserrat] text-sm font-bold text-purple-500"
                                >
                                    Añadir
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {isCheckoutOpen && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
                    <form
                        onSubmit={submitCheckout}
                        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111] p-6"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="font-[Montserrat] text-2xl font-black">
                                    Datos de Pago
                                </h2>
                                <p className="mt-1 font-[Open_Sans] text-sm text-gray-400">
                                    Completa los datos para finalizar tu compra.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsCheckoutOpen(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <input
                                value={checkoutForm.fullName}
                                onChange={(event) =>
                                    handleCheckoutChange("fullName", event.target.value)
                                }
                                placeholder="Nombre completo"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500"
                            />

                            <input
                                value={checkoutForm.city}
                                onChange={(event) =>
                                    handleCheckoutChange("city", event.target.value)
                                }
                                placeholder="Ciudad"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500"
                            />

                            <input
                                value={checkoutForm.address}
                                onChange={(event) =>
                                    handleCheckoutChange("address", event.target.value)
                                }
                                placeholder="Dirección"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500 md:col-span-2"
                            />

                            <input
                                value={checkoutForm.zipCode}
                                onChange={(event) =>
                                    handleCheckoutChange("zipCode", event.target.value)
                                }
                                placeholder="Código postal"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500"
                            />

                            <input
                                value={checkoutForm.cardName}
                                onChange={(event) =>
                                    handleCheckoutChange("cardName", event.target.value)
                                }
                                placeholder="Nombre del titular"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500"
                            />

                            <input
                                value={checkoutForm.cardNumber}
                                onChange={(event) =>
                                    handleCheckoutChange("cardNumber", event.target.value)
                                }
                                placeholder="Número de tarjeta"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500 md:col-span-2"
                            />

                            <input
                                value={checkoutForm.expiryDate}
                                onChange={(event) =>
                                    handleCheckoutChange("expiryDate", event.target.value)
                                }
                                placeholder="Fecha de vencimiento MM/AA"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500"
                            />

                            <input
                                value={checkoutForm.ccv}
                                onChange={(event) =>
                                    handleCheckoutChange("ccv", event.target.value)
                                }
                                placeholder="CCV"
                                className="rounded-lg border border-white/10 bg-black px-4 py-3 outline-none focus:border-purple-500"
                            />
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                            <span className="font-[Montserrat] text-lg font-bold">
                                Total a pagar
                            </span>
                            <span className="font-[Montserrat] text-2xl font-black text-purple-500">
                                ${total.toFixed(2)}
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-lg bg-purple-500 py-4 font-[Montserrat] font-bold text-black"
                        >
                            Confirmar Pago
                        </button>
                    </form>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Cart;