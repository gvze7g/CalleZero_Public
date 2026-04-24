import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/common/PageHeader";
import CategoryCard from "../components/common/CategoryCard";

const Categories = () => {
    const navigate = useNavigate();

    const categories = [
        {
            name: "Hoodies & Sudaderas",
            slug: "hoodies",
            items: 24,
            tag: "Essential",
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        },
        {
            name: "Camisetas Gráficas",
            slug: "tshirts",
            items: 42,
            tag: "Popular",
            img: "https://images.unsplash.com/photo-1520975922284-9b9c6f0a3b0c",
        },
        {
            name: "Pantalones & Cargo",
            slug: "pants",
            items: 18,
            tag: "Technical",
            img: "https://images.unsplash.com/photo-1602810319428-019690571b5b",
        },
        {
            name: "Accesorios",
            slug: "accessories",
            items: 31,
            tag: "Details",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        },
    ];

    const filters = ["Ver Todo", "Oversize", "Essential", "Limited Edition", "Techwear"];

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <PageHeader
                breadcrumb={
                    <>
                        INICIO &gt; <span className="text-white"> CATEGORÍAS</span>
                    </>
                }
                eyebrow="EXPLORAR"
                title="Categorías"
                description="Navega por nuestras colecciones curadas."
            />

            <section className="px-5 pb-6 sm:px-6 md:px-16">
                <div className="flex flex-wrap gap-3">
                    {filters.map((filter, index) => (
                        <button
                            key={filter}
                            className={`rounded-full px-4 py-2 font-[Montserrat] text-sm transition ${index === 0
                                    ? "bg-purple-500 text-black"
                                    : "bg-[#1a1a1a] text-white hover:bg-purple-500 hover:text-black"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="mt-8 h-px w-full bg-white/10" />
            </section>

            <section className="px-5 pb-10 sm:px-6 md:px-16">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.slug}
                            name={category.name}
                            items={category.items}
                            tag={category.tag}
                            img={category.img}
                            onClick={() => navigate(`/products?category=${category.slug}`)}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Categories;