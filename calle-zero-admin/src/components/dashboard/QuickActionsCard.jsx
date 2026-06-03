import React from "react";
import { Package, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../shared/SectionCard";

const QuickActionsCard = () => {
  const navigate = useNavigate();

  return (
    <SectionCard className="overflow-hidden">
      <div className="border-b border-white/5 px-4 py-4 sm:px-5">
        <h3 className="font-[Montserrat] text-[20px] font-extrabold text-white/35">
          + Acciones Rápidas
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => navigate("/add-product")}
          className="flex min-h-[92px] flex-col items-center justify-center rounded-[10px] bg-black px-4 text-center text-white"
        >
          <Package size={20} />
          <span className="mt-3 font-[Open_Sans] text-[14px] font-bold">
            Nuevo Producto
          </span>
        </button>

        <button
          type="button"
          onClick={() => navigate("/categories")}
          className="flex min-h-[92px] flex-col items-center justify-center rounded-[10px] bg-black px-4 text-center text-white"
        >
          <Plus size={20} />
          <span className="mt-3 font-[Open_Sans] text-[14px] font-bold">
            Nueva Categoría
          </span>
        </button>
      </div>
    </SectionCard>
  );
};

export default QuickActionsCard;