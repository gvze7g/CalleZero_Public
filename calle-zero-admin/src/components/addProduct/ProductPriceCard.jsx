import React from "react";
import { DollarSign } from "lucide-react";
import SectionCard from "../shared/SectionCard";

const ProductPriceCard = ({ formData, onChange }) => {
    return (
        <SectionCard className="p-5">
            <h3 className="flex items-center gap-3 font-[Montserrat] text-[20px] font-extrabold text-white">
                <DollarSign size={20} className="text-white/25" />
                Precio
            </h3>

            <label className="mt-6 block">
                <span className="font-[Open_Sans] text-[14px] font-bold text-white">
                    Precio de Venta (USD)
                </span>
                <div className="mt-2 flex h-[42px] items-center rounded-[8px] border border-white/10 bg-black px-4">
                    <span className="font-[Open_Sans] text-white/70">$</span>
                    <input
                        value={formData.price}
                        onChange={(event) => onChange("price", event.target.value)}
                        className="ml-2 w-full bg-transparent font-[Open_Sans] text-white outline-none"
                        placeholder="0.00"
                    />
                </div>
            </label>

            <div className="mt-5 flex items-center gap-3 rounded-[8px] border border-white/5 bg-[#1C2430] p-4">
                <span className="inline-flex h-[24px] items-center justify-center rounded-full border border-white/10 px-3 font-[Open_Sans] text-[12px] font-bold text-white">
                    Sugerencia
                </span>
                <p className="font-[Open_Sans] text-[12px] leading-5 text-white/70">
                    Incluye impuestos locales de El Salvador (13% IVA).
                </p>
            </div>
        </SectionCard>
    );
};

export default ProductPriceCard;