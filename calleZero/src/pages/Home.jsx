import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/common/ProductCard";
import CategoryCard from "../components/common/CategoryCard";
import products from "../data/products";
import homeImage from "../assets/Home.png";
import hoodiesImg from "../assets/Hoodie.png";
import tshirtsImg from "../assets/Camisetas.png";
import accessoriesImg from "../assets/Accesorios.png";

const categoryLabels = {
    hoodies: "Hoodies",
    tshirts: "Camisetas",
    accessories: "Accesorios",
};

const categoryImages = {
    hoodies: hoodiesImg,
    tshirts: tshirtsImg,
    accessories: accessoriesImg,
};

const Home = () => {
    const navigate = useNavigate();
    const collections = ["hoodies", "tshirts", "accessories"];

    return (
        <div className="bg-black text-white font-[Open_Sans] overflow-x-hidden">
            <Navbar />

            <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 md:px-16">
                <img
                    src={homeImage}
                    alt="Calle Zero Streetwear"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
                />

                <div className="relative z-10 max-w-4xl">
                    <h1 className="font-[Montserrat] text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
                        DEFINE TU <br />
                        <span className="font-[Montserrat] font-black italic text-purple-500">
                            PROPIO
                        </span>{" "}
                        CAMINO
                    </h1>

                    <p className="mt-6 max-w-md text-sm text-gray-400 md:text-base">
                        Estilo urbano minimalista diseñado para aquellos que no siguen reglas.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate("/products")}
                            className="rounded-full bg-purple-500 px-5 py-2 font-[Montserrat] font-semibold text-black"
                        >
                            Explorar Productos
                        </button>

                        <button
                            onClick={() => navigate("/categories")}
                            className="rounded-full border border-white px-5 py-2 font-[Montserrat] font-semibold transition hover:bg-white hover:text-black"
                        >
                            Ver Categorías
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#0f0f0f] px-6 py-16 md:px-16">
                <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                    <div className="max-w-xl">
                        <h2 className="font-[Montserrat] text-3xl font-black md:text-5xl">
                            PIEZAS ESENCIALES
                        </h2>

                        <div className="my-3 h-[2px] w-20 bg-purple-500" />

                        <p className="text-sm text-gray-400 md:text-base">
                            Nuestra selección curada de los artículos más vendidos de esta temporada.
                        </p>
                    </div>

                    <span
                        onClick={() => navigate("/products")}
                        className="cursor-pointer font-[Montserrat] text-purple-500 hover:underline"
                    >
                        Ver todos →
                    </span>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => navigate(`/product/${product.id}`)}
                        />
                    ))}
                </div>
            </section>

            <section className="bg-black px-6 py-16 md:px-16">
                <h2 className="mb-10 font-[Montserrat] text-3xl font-black md:text-5xl">
                    EXPLORA COLECCIONES
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {collections.map((item) => (
                        <CategoryCard
                            key={item}
                            compact
                            name={categoryLabels[item]}
                            image={categoryImages[item]}
                            onClick={() => navigate(`/products?category=${item}`)}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;