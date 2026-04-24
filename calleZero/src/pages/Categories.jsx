import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/common/PageHeader";
import CategoryCard from "../components/common/CategoryCard";
import hoodiesImg from "../assets/Hoodie.png";
import tshirtsImg from "../assets/Camisetas.png";
import accessoriesImg from "../assets/Accesorios.png";
import pantsImg from "../assets/Pantalones.png";

const Categories = () => {
    const navigate = useNavigate();

    const categories = [
        {
            name: "Hoodies & Sudaderas",
            slug: "hoodies",
            items: 24,
            tag: "Essential",
            image: hoodiesImg,
        },
        {
            name: "Camisetas Gráficas",
            slug: "tshirts",
            items: 42,
            tag: "Popular",
            image: tshirtsImg,
        },
        {
            name: "Pantalones & Cargo",
            slug: "pants",
            items: 18,
            tag: "Technical",
            image: pantsImg,
        },
        {
            name: "Accesorios",
            slug: "accessories",
            items: 31,
            tag: "Details",
            image: accessoriesImg,
        },
    ];

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

            <section className="px-5 pb-10 sm:px-6 md:px-16">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.slug}
                            name={category.name}
                            items={category.items}
                            tag={category.tag}
                            image={category.image}
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