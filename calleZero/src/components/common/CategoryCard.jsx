import React from "react";

const CategoryCard = ({ name, items, tag, img, onClick, compact = false }) => {
    if (compact) {
        return (
            <article
                onClick={onClick}
                className="flex aspect-3/4 cursor-pointer flex-col justify-end rounded-xl bg-[#111] p-5 transition hover:scale-[1.03]"
            >
                <h3 className="font-[Montserrat] font-bold text-white">{name}</h3>

                <button className="mt-2 w-fit rounded-full bg-black px-4 py-1 font-[Montserrat] text-sm text-white">
                    Ver Colección
                </button>
            </article>
        );
    }

    return (
        <article
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-2xl"
        >
            <div
                className="h-[340px] bg-cover bg-center transition duration-500 group-hover:scale-105 sm:h-[380px] md:h-[420px] lg:h-[480px]"
                style={{ backgroundImage: `url(${img})` }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

            <span className="absolute right-4 top-4 rounded-full bg-purple-500 px-3 py-1 font-[Montserrat] text-xs text-black">
                {tag}
            </span>

            <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-1 font-[Open_Sans] text-xs text-gray-400">
                    {items} ITEMS
                </p>

                <h3 className="font-[Montserrat] text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {name}
                </h3>

                <button className="mt-3 flex items-center gap-2 font-[Montserrat] text-sm text-white transition group-hover:text-purple-400">
                    Ver todo →
                </button>
            </div>
        </article>
    );
};

export default CategoryCard;