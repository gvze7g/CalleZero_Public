import React from "react";
import { Plus } from "lucide-react";

const AddCategoryCard = ({ onCreateCategory }) => {
    return (
        <button
            type="button"
            onClick={onCreateCategory}
            className="flex min-h-[280px] flex-col items-center justify-center rounded-[14px] border border-dashed border-white/20 bg-[#101218] p-6 text-center transition hover:border-[#B56CFF] hover:bg-[#151722]"
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2A2F3B] text-white">
                <Plus size={26} />
            </div>

            <h3 className="mt-6 font-[Montserrat] text-[18px] font-extrabold text-white">
                Añadir Categoría
            </h3>

            <p className="mt-3 max-w-[210px] font-[Open_Sans] text-[14px] leading-6 text-white/70">
                Crea un nuevo grupo para organizar tus productos urbanos.
            </p>
        </button>
    );
};

export default AddCategoryCard;