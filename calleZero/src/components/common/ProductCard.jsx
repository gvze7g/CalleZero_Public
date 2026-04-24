import React from "react";

const categoryLabels = {
    hoodies: "Hoodies",
    tshirts: "Camisetas",
    pants: "Pantalones",
    accessories: "Accesorios",
};

const ProductCard = ({ product, onClick, compact = false }) => {
    if (!product) return null;

    return (
        <article
            onClick={onClick}
            className="group cursor-pointer overflow-hidden rounded-xl bg-[#0a0a0a] transition hover:scale-[1.03]"
        >
            <div className="relative">
                <span className="absolute left-2 top-2 z-10 rounded-full bg-black px-2 py-1 font-[Montserrat] text-[10px] text-white">
                    {categoryLabels[product.category] || product.category}
                </span>

                <div className="aspect-3/4 bg-[#222]" />
            </div>

            <div className={compact ? "p-2 md:p-3" : "p-3"}>
                <h4 className="font-[Montserrat] text-xs font-semibold text-white md:text-sm">
                    {product.name}
                </h4>

                <p className="mt-1 font-[Montserrat] text-xs text-purple-500 md:text-sm">
                    {product.price}
                </p>
            </div>
        </article>
    );
};

export default ProductCard;