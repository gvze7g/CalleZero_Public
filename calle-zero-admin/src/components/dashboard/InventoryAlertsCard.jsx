import React from "react";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../shared/SectionCard";
import StatusBadge from "../shared/StatusBadge";

const InventoryAlertsCard = ({ items }) => {
  const navigate = useNavigate();

  return (
    <SectionCard className="p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <AlertCircle size={20} className="mt-1 text-white" />
        <div>
          <h3 className="font-[Montserrat] text-[20px] font-extrabold text-white">
            Alertas de Inventario
          </h3>
          <p className="mt-1 font-[Open_Sans] text-[14px] text-white/70">
            Productos con stock crítico o agotados.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-[12px] border border-white/5 bg-[#151A24] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h4 className="font-[Open_Sans] text-[15px] font-bold text-white">
                  {item.name}
                </h4>
                <p className="mt-1 font-[Open_Sans] text-[13px] text-white/60">
                  {item.category}
                </p>
              </div>

              <StatusBadge type={item.type === "out" ? "out" : "low"}>
                {item.stock}
              </StatusBadge>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => navigate("/products")}
        className="mt-6 w-full font-[Open_Sans] text-[14px] font-semibold text-white/75"
      >
        Gestionar Inventario Completo
      </button>
    </SectionCard>
  );
};

export default InventoryAlertsCard;