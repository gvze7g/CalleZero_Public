import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/common/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import products from "../data/products";

const Products = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [price, setPrice] = useState(200);
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const [showCategories, setShowCategories] = useState(true);
    const [showPrice, setShowPrice] = useState(true);

    useEffect(() => {
        if (!showMobileFilters) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = prev;
        };
    }, [showMobileFilters]);

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setPrice(200);
    };

    const filteredProducts = products.filter((p) => {
        const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(p.category);

        const matchPrice =
            Number(p.price.replace("$", "")) <= price;

        return matchCategory && matchPrice;
    });

    const hasFilters =
        selectedCategories.length > 0 || price < 200;

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <div className="px-6 md:px-16 py-10">
                {/* header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="font-[Montserrat] text-3xl font-black">
                        PRODUCTOS
                    </h1>

                    {/* botón móvil */}
                    <button
                        onClick={() => setShowMobileFilters(true)}
                        className="md:hidden border border-white/10 px-4 py-2 rounded-md text-sm"
                    >
                        Filtros
                    </button>
                </div>

                <div className="grid md:grid-cols-[260px_1fr] gap-10">
                    {/* sidebar desktop */}
                    <div className="hidden md:block">
                        <ProductFilters
                            selectedCategories={selectedCategories}
                            toggleCategory={toggleCategory}
                            showCategories={showCategories}
                            setShowCategories={setShowCategories}
                            showPrice={showPrice}
                            setShowPrice={setShowPrice}
                            price={price}
                            setPrice={setPrice}
                            hasFilters={hasFilters}
                            clearFilters={clearFilters}
                        />
                    </div>

                    {/* productos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            {showMobileFilters && (
                <div
                    className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm"
                    onClick={() => setShowMobileFilters(false)}
                >
                    <div
                        className="fixed left-0 top-0 h-dvh w-[85vw] max-w-sm bg-[#111] p-6 overflow-y-auto border-r border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-[Montserrat] font-bold">
                                FILTROS
                            </h3>

                            <button onClick={() => setShowMobileFilters(false)}>
                                ✕
                            </button>
                        </div>

                        <ProductFilters
                            selectedCategories={selectedCategories}
                            toggleCategory={toggleCategory}
                            showCategories={showCategories}
                            setShowCategories={setShowCategories}
                            showPrice={showPrice}
                            setShowPrice={setShowPrice}
                            price={price}
                            setPrice={setPrice}
                            hasFilters={hasFilters}
                            clearFilters={() => {
                                clearFilters();
                                setShowMobileFilters(false);
                            }}
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Products;