import React from "react";

const ProductFilters = ({
    selectedCategories,
    toggleCategory,
    showCategories,
    setShowCategories,
    showPrice,
    setShowPrice,
    price,
    setPrice,
    hasFilters,
    clearFilters,
}) => {
    return (
        <>
            <h3 className="mb-4 font-[Montserrat] font-bold text-white">FILTROS</h3>

            <div className="mb-6 space-y-2 text-sm text-gray-400">
                <div
                    onClick={() => setShowCategories(!showCategories)}
                    className="cursor-pointer font-[Montserrat] text-white"
                >
                    Categorías ▾
                </div>

                {showCategories ? (
                    <>
                        {[
                            ["hoodies", "Hoodies"],
                            ["tshirts", "Camisetas"],
                            ["pants", "Pantalones"],
                            ["accessories", "Accesorios"],
                        ].map(([value, label]) => (
                            <label key={value} className="block cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(value)}
                                    onChange={() => toggleCategory(value)}
                                />{" "}
                                {label}
                            </label>
                        ))}
                    </>
                ) : null}
            </div>

            <div className="text-sm text-gray-400">
                <div
                    onClick={() => setShowPrice(!showPrice)}
                    className="mb-2 cursor-pointer font-[Montserrat] text-white"
                >
                    Precio ▾
                </div>

                {showPrice ? (
                    <>
                        <input
                            type="range"
                            min="5"
                            max="100"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full accent-purple-500"
                        />

                        <div className="mt-2 flex justify-between font-[Montserrat] text-xs">
                            <span className="text-purple-500">${price}</span>
                            <span>$100</span>
                        </div>
                    </>
                ) : null}
            </div>

            {hasFilters ? (
                <button
                    onClick={clearFilters}
                    className="mt-6 w-full rounded-full border border-white/20 py-2 font-[Montserrat] text-sm text-white"
                >
                    Limpiar Filtros
                </button>
            ) : null}
        </>
    );
};

export default ProductFilters;