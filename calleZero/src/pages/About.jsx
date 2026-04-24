import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Shield, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

import photo4 from "../assets/photo-4.jpg";
import photo3 from "../assets/photo-3.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo1 from "../assets/photo-1.jpg";

const pillars = [
    {
        icon: Shield,
        title: "Calidad Obsesiva",
        text: "Utilizamos solo materiales de primera calidad que soportan el ritmo urbano sin perder su forma.",
    },
    {
        icon: Zap,
        title: "Diseño Funcional",
        text: "Cada bolsillo, cremallera y corte tiene una función. Estética y utilidad en perfecto equilibrio.",
    },
    {
        icon: Users,
        title: "Cultura Consciente",
        text: "Colaboramos con artistas locales y promovemos una producción ética que respeta a quienes crean nuestras piezas.",
    },
];

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 text-center">
                <img
                    src={photo4}
                    alt="Calle Zero"
                    className="absolute inset-0 h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10">
                    <h1 className="font-[Montserrat] text-5xl font-black italic md:text-7xl">
                        CALLE <span className="text-purple-500">ZERO</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-xl font-[Open_Sans] text-base text-gray-300 md:text-xl">
                        Donde el asfalto se encuentra con el minimalismo. Redefiniendo el
                        uniforme urbano desde 2026.
                    </p>
                </div>
            </section>

            <section className="grid gap-10 px-6 py-20 md:px-16 lg:grid-cols-2 lg:px-28">
                <div className="flex flex-col justify-center">
                    <span className="w-fit rounded-full border border-purple-500 px-3 py-1 font-[Montserrat] text-xs text-purple-500">
                        Nuestro Manifiesto
                    </span>

                    <h2 className="mt-6 font-[Montserrat] text-4xl font-black md:text-5xl">
                        Menos es Más. El Ruido es Cero.
                    </h2>

                    <div className="mt-8 space-y-4 font-[Open_Sans] text-sm leading-7 text-gray-300 md:text-base">
                        <p>
                            Calle Zero nació en las sombras de las grandes metrópolis.
                            Observamos la saturación del diseño convencional y decidimos
                            volver al origen.
                        </p>

                        <p className="font-bold text-white">
                            Creemos que la verdadera sofisticación reside en la ausencia de lo
                            innecesario. Cada costura, cada tejido y cada silueta está diseñada
                            para resistir el paso del tiempo y las tendencias efímeras.
                        </p>

                        <p>
                            No vendemos solo ropa; curamos la identidad de aquellos que
                            caminan por la ciudad con un propósito claro y una estética
                            impecable.
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-[#15111d] p-3">
                    <img
                        src={photo3}
                        alt="Manifiesto Calle Zero"
                        className="h-[360px] w-full rounded-xl object-cover md:h-[520px]"
                    />
                </div>
            </section>

            <section className="bg-[#1B1B20] px-6 py-20 md:px-16">
                <div className="text-center">
                    <span className="rounded-full border border-purple-500 px-3 py-1 font-[Montserrat] text-xs text-purple-500">
                        Valores
                    </span>
                    <h2 className="mt-5 font-[Montserrat] text-4xl font-black">
                        Nuestros Pilares
                    </h2>
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;

                        return (
                            <div key={pillar.title} className="rounded-xl bg-[#17171c] p-7">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-500">
                                    <Icon size={20} />
                                </div>
                                <h3 className="mt-6 font-[Montserrat] font-bold">
                                    {pillar.title}
                                </h3>
                                <p className="mt-4 font-[Open_Sans] text-sm leading-6 text-gray-400">
                                    {pillar.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="bg-white px-6 py-20 text-center text-black md:px-16">
                <p className="font-[Montserrat] text-6xl text-purple-300">”</p>
                <h2 className="mx-auto max-w-4xl font-[Montserrat] text-3xl font-black md:text-5xl">
                    La moda urbana no es lo que llevas puesto, es cómo te mueves a través
                    del caos de la ciudad manteniendo tu esencia intacta.
                </h2>
                <p className="mt-5 font-[Montserrat] text-xs uppercase tracking-[0.25em] text-purple-400">
                    Fundadores de Calle Zero
                </p>
            </section>

            <section className="grid gap-5 px-6 py-14 md:px-16 lg:grid-cols-[1.2fr_0.8fr]">
                <img
                    src={photo1}
                    alt="Colección Calle Zero"
                    className="h-[500px] w-full rounded-xl object-cover object-center"
                />
                <div className="grid gap-5 md:grid-rows-[220px_1fr]">
                    <div className="relative h-[220px] overflow-hidden rounded-xl">
                        <img
                            src={photo2}
                            alt="Movimiento Calle Zero"
                            className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="flex min-h-[260px] flex-col justify-end rounded-xl bg-purple-500 p-8 text-black">
                        <h3 className="font-[Montserrat] text-2xl font-black">
                            Únete al Movimiento
                        </h3>
                        <p className="mt-3 font-[Open_Sans] text-sm">
                            Descubre por qué miles de personas eligen Calle Zero como su
                            uniforme diario.
                        </p>
                        <button
                            onClick={() => navigate("/products")}
                            className="mt-5 w-fit rounded-lg bg-black px-4 py-2 font-[Montserrat] text-sm font-bold text-white"
                        >
                            Explorar Productos →
                        </button>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    );
};

export default About;