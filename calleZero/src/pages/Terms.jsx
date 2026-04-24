import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FileText, Shield, Truck, RotateCcw, Mail } from "lucide-react";

const sections = [
    {
        number: "01.",
        title: "ACEPTACIÓN DE TÉRMINOS",
        text: [
            "Al utilizar el sitio web de Calle Zero, el usuario acepta de manera íntegra y sin reservas los presentes Términos y Condiciones.",
            "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.",
        ],
    },
    {
        number: "02.",
        title: "PROPIEDAD INTELECTUAL",
        text: [
            "Todo el contenido disponible en este sitio, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Calle Zero.",
        ],
    },
    {
        number: "03.",
        title: "CONDICIONES DE VENTA Y PAGOS",
        text: [
            "Todos los precios mostrados en el sitio están expresados en dólares estadounidenses e incluyen los impuestos aplicables.",
            "Los pedidos están sujetos a disponibilidad de inventario. El pago debe realizarse al momento de la compra.",
        ],
    },
    {
        number: "04.",
        title: "ENVÍOS Y ENTREGAS",
        icon: Truck,
        text: [
            "Realizamos envíos a todo el territorio nacional. Los tiempos de entrega son estimaciones y pueden variar según la ubicación del cliente.",
        ],
    },
    {
        number: "05.",
        title: "POLÍTICA DE DEVOLUCIONES",
        icon: RotateCcw,
        text: [
            "Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del producto. El artículo debe estar en su estado original, sin usar y con sus etiquetas intactas.",
        ],
    },
    {
        number: "06.",
        title: "PRIVACIDAD Y DATOS",
        text: [
            "Tu privacidad es fundamental para nosotros. La recopilación y el uso de tus datos personales se rige por nuestra Política de Privacidad.",
        ],
    },
];

const Terms = () => {
    const navigate = useNavigate();

    const handleContentClick = (label) => {
        toast.info(`Sección seleccionada: ${label}`);
    };

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <section className="bg-[#1A1A1F] px-6 py-16 md:px-16 lg:px-32">
                <p className="mb-3 flex items-center gap-2 font-[Montserrat] text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                    <FileText size={15} />
                    Información legal
                </p>

                <h1 className="font-[Montserrat] text-4xl font-black md:text-6xl">
                    TÉRMINOS Y <span className="text-purple-500">CONDICIONES</span>
                </h1>

                <p className="mt-6 max-w-3xl font-[Open_Sans] text-sm leading-7 text-gray-300 md:text-base">
                    Bienvenido a Calle Zero. Estos términos rigen el uso de nuestra
                    plataforma y la compra de nuestros productos. Al acceder a nuestro
                    sitio, aceptas cumplir con estas normas diseñadas para garantizar una
                    experiencia justa y segura para todos.
                </p>

                <p className="mt-8 font-[Open_Sans] text-xs italic text-gray-500">
                    Última actualización: 15 de febrero de 2026
                </p>
            </section>

            <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[220px_1fr] md:px-16">
                <aside className="hidden md:block">
                    <div className="sticky top-28">
                        <h3 className="mb-5 font-[Montserrat] text-sm font-bold">
                            CONTENIDO
                        </h3>

                        <ul className="space-y-3 font-[Open_Sans] text-sm text-gray-400">
                            {[
                                "Uso del Sitio",
                                "Propiedad Intelectual",
                                "Envíos y Entregas",
                                "Devoluciones",
                                "Privacidad",
                            ].map((item) => (
                                <li
                                    key={item}
                                    onClick={() => handleContentClick(item)}
                                    className="cursor-pointer transition hover:text-purple-500"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <div className="space-y-12">
                    {sections.map((section, index) => {
                        const Icon = section.icon;

                        return (
                            <article
                                key={section.title}
                                className="border-b border-white/10 pb-10"
                            >
                                <h2 className="font-[Montserrat] text-2xl font-black">
                                    <span className="mr-3 text-purple-500">{section.number}</span>
                                    {section.title}
                                </h2>

                                <div className="mt-6 space-y-4 font-[Open_Sans] text-sm leading-7 text-gray-300">
                                    {Icon && (
                                        <Icon
                                            size={22}
                                            className="float-left mr-3 mt-1 text-purple-500"
                                        />
                                    )}

                                    {section.text.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>

                                {index === 0 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toast.info("Tu seguridad está protegida en Calle Zero")
                                        }
                                        className="mt-8 flex w-full gap-4 rounded-xl border border-white/10 bg-[#1B1B22] p-5 text-left transition hover:border-purple-500/60"
                                    >
                                        <Shield className="shrink-0 text-purple-500" size={24} />
                                        <div>
                                            <h4 className="font-[Montserrat] font-bold">
                                                Tu Seguridad es Prioridad
                                            </h4>
                                            <p className="mt-1 font-[Open_Sans] text-sm text-gray-400">
                                                En Calle Zero utilizamos protocolos de protección para
                                                cuidar tus transacciones y datos personales.
                                            </p>
                                        </div>
                                    </button>
                                )}

                                {index === 3 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toast.info("El envío gratuito aplica en compras mayores a $150")
                                        }
                                        className="mt-8 flex w-full gap-4 rounded-xl border border-white/10 bg-[#1B1B22] p-5 text-left transition hover:border-purple-500/60"
                                    >
                                        <Truck className="shrink-0 text-purple-500" size={24} />
                                        <div>
                                            <h4 className="font-[Montserrat] font-bold">
                                                Envío Gratuito
                                            </h4>
                                            <p className="mt-1 font-[Open_Sans] text-sm text-gray-400">
                                                Ofrecemos envío gratuito en compras superiores a $150.
                                            </p>
                                        </div>
                                    </button>
                                )}
                            </article>
                        );
                    })}

                    <div className="rounded-2xl bg-[#1B1B22] p-8 text-center">
                        <FileText className="mx-auto text-purple-500" size={42} />

                        <h3 className="mt-5 font-[Montserrat] text-xl font-black">
                            ¿Tienes alguna pregunta legal?
                        </h3>

                        <p className="mx-auto mt-3 max-w-md font-[Open_Sans] text-sm text-gray-400">
                            Nuestro equipo legal está disponible para aclarar cualquier duda
                            relacionada con estos términos.
                        </p>

                        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => toast.info("Próximamente se abrirá Gmail")}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-500 px-5 py-3 font-[Montserrat] text-sm font-bold text-black"
                            >
                                <Mail size={16} />
                                Escríbenos un Correo
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/about")}
                                className="rounded-lg bg-black px-5 py-3 font-[Montserrat] text-sm font-bold text-white transition hover:text-purple-500"
                            >
                                Sobre Nosotros
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;