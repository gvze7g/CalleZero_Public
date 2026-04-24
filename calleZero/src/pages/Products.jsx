import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/common/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import products from "../data/products";

const Products = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const categoryParam = searchParams.get("category");
    const selectedCategories = categoryParam ? categoryParam.split(",") : [];

    const [showCategories, setShowCategories] = useState(true);
    const [showPrice, setShowPrice] = useState(true);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [price, setPrice] = useState(200);
    const [priceFilterActive, setPriceFilterActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("new");
    const [viewMode, setViewMode] = useState("grid");

    useEffect(() => {
        if (!showMobileFilters) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [showMobileFilters]);

    const parsePrice = (productPrice) => {
        return Number(productPrice.replace("$", ""));
    };

    const toggleCategory = (cat) => {
        let updatedCategories;

        if (selectedCategories.includes(cat)) {
            updatedCategories = selectedCategories.filter((c) => c !== cat);
        } else {
            updatedCategories = [...selectedCategories, cat];
        }

        if (updatedCategories.length === 0) {
            navigate("/products");
        } else {
            navigate(`/products?category=${updatedCategories.join(",")}`);
        }

        setVisibleProducts(12);
    };

    const clearFilters = () => {
        navigate("/products");
        setPrice(200);
        setPriceFilterActive(false);
        setSearchTerm("");
        setSortOption("new");
        setVisibleProducts(12);
    };

    const filteredProducts = products
        .filter((product) =>
            selectedCategories.length > 0
                ? selectedCategories.includes(product.category)
                : true
        )
        .filter((product) =>
            priceFilterActive ? parsePrice(product.price) <= price : true
        )
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "price-low") {
                return parsePrice(a.price) - parsePrice(b.price);
            }

            if (sortOption === "price-high") {
                return parsePrice(b.price) - parsePrice(a.price);
            }

            return a.id - b.id;
        });

    const hasFilters =
        selectedCategories.length > 0 ||
        priceFilterActive ||
        searchTerm.trim() !== "" ||
        sortOption !== "new";

    const showMore = () => {
        setVisibleProducts((prev) => prev + 4);
    };

    const showLess = () => {
        setVisibleProducts(12);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-black text-white font-[Open_Sans] overflow-x-hidden">
            <Navbar />

            {showMobileFilters && (
                <div
                    className="fixed inset-0 z-9999 overflow-hidden bg-black/70 backdrop-blur-sm"
                    onClick={() => setShowMobileFilters(false)}
                >
                    <div
                        className="fixed left-0 top-0 h-dvh w-[86vw] max-w-sm overflow-y-auto border-r border-white/10 bg-[#111] p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="font-[Montserrat] font-bold">FILTROS</h3>
                            <button
                                type="button"
                                onClick={() => setShowMobileFilters(false)}
                            >
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
                            priceFilterActive={priceFilterActive}
                            setPriceFilterActive={setPriceFilterActive}
                            hasFilters={hasFilters}
                            clearFilters={() => {
                                clearFilters();
                                setShowMobileFilters(false);
                            }}
                        />
                    </div>
                </div>
            )}

            <section className="flex flex-col gap-6 bg-[#111] px-6 py-12 md:flex-row md:justify-between md:px-16">
                <div className="max-w-xl">
                    <h1 className="font-[Montserrat] text-4xl font-black md:text-5xl">
                        PRODUCTOS
                    </h1>

                    <p className="mt-3 text-sm text-gray-400 md:text-base">
                        Explora nuestra colección curada de streetwear esencial.
                    </p>
                </div>

                <div className="self-end text-sm text-gray-400 md:text-base">
                    {filteredProducts.length} productos
                </div>
            </section>

            <section className="sticky top-[73px] z-40 flex flex-col gap-4 border-b border-white/10 bg-black px-6 py-4 md:flex-row md:items-center md:justify-between md:px-16">
                <input
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                        setVisibleProducts(12);
                    }}
                    placeholder="Buscar productos..."
                    className="w-full rounded-full border border-white/10 bg-[#111] px-4 py-2 font-[Open_Sans] outline-none focus:border-purple-500 md:w-[300px]"
                />

                <div className="flex flex-wrap items-center gap-3 font-[Montserrat]">
                    <button
                        type="button"
                        onClick={() => setShowMobileFilters(true)}
                        className="rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm transition hover:border-purple-500 lg:hidden"
                    >
                        Filtros
                    </button>

                    <button
                        type="button"
                        onClick={() => setViewMode("grid")}
                        className={`rounded-lg px-3 py-2 transition ${viewMode === "grid"
                            ? "bg-purple-500 text-black"
                            : "bg-[#111] text-white hover:text-purple-500"
                            }`}
                    >
                        ▦
                    </button>

                    <button
                        type="button"
                        onClick={() => setViewMode("list")}
                        className={`rounded-lg px-3 py-2 transition ${viewMode === "list"
                            ? "bg-purple-500 text-black"
                            : "bg-[#111] text-white hover:text-purple-500"
                            }`}
                    >
                        ☰
                    </button>

                    <select
                        value={sortOption}
                        onChange={(event) => {
                            setSortOption(event.target.value);
                            setVisibleProducts(12);
                        }}
                        className="rounded-lg border border-white/10 bg-[#111] px-3 py-2 text-sm text-white outline-none"
                    >
                        <option value="new">Novedades</option>
                        <option value="price-low">Precio menor</option>
                        <option value="price-high">Precio mayor</option>
                    </select>
                </div>
            </section>

            <section className="flex flex-col gap-10 px-6 py-10 md:px-16 lg:flex-row">
                <aside className="hidden h-fit w-full lg:sticky lg:top-[155px] lg:block lg:w-64">
                    <ProductFilters
                        selectedCategories={selectedCategories}
                        toggleCategory={toggleCategory}
                        showCategories={showCategories}
                        setShowCategories={setShowCategories}
                        showPrice={showPrice}
                        setShowPrice={setShowPrice}
                        price={price}
                        setPrice={setPrice}
                        priceFilterActive={priceFilterActive}
                        setPriceFilterActive={setPriceFilterActive}
                        hasFilters={hasFilters}
                        clearFilters={clearFilters}
                    />
                </aside>

                <div className="flex-1">
                    <div
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
                                : "grid grid-cols-1 gap-4"
                        }
                    >
                        {filteredProducts.slice(0, visibleProducts).map((product) =>
                            viewMode === "grid" ? (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    compact
                                    onClick={() => navigate(`/product/${product.id}`)}
                                />
                            ) : (
                                <div
                                    key={product.id}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className="flex cursor-pointer gap-4 rounded-xl bg-[#0a0a0a] p-4 transition hover:bg-[#111]"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-24 w-20 shrink-0 rounded-lg object-cover"
                                    />

                                    <div className="flex flex-1 flex-col justify-center">
                                        <p className="font-[Montserrat] text-sm font-bold text-white">
                                            {product.name}
                                        </p>

                                        <p className="mt-1 font-[Open_Sans] text-xs text-gray-400">
                                            {product.description}
                                        </p>

                                        <p className="mt-2 font-[Montserrat] text-sm font-bold text-purple-500">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {filteredProducts.length === 0 && (
                        <p className="mt-10 text-center text-sm text-gray-400">
                            No se encontraron productos.
                        </p>
                    )}

                    <div className="mt-10 flex justify-center gap-4">
                        {visibleProducts < filteredProducts.length && (
                            <button
                                type="button"
                                onClick={showMore}
                                className="rounded-full border border-white/20 px-6 py-2 text-sm transition hover:bg-white hover:text-black"
                            >
                                Ver más productos
                            </button>
                        )}

                        {visibleProducts >= filteredProducts.length &&
                            filteredProducts.length > 12 && (
                                <button
                                    type="button"
                                    onClick={showLess}
                                    className="rounded-full border border-white/20 px-6 py-2 text-sm transition hover:bg-white hover:text-black"
                                >
                                    Ver menos
                                </button>
                            )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Products;