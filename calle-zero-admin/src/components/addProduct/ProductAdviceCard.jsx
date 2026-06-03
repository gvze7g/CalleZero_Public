import React from "react";
import { CirclePlus } from "lucide-react";
import SectionCard from "../shared/SectionCard";

const ProductAdviceCard = () => {
    return (
        <SectionCard className="p-5">
            <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/25">
                    <CirclePlus size={22} />
                </div>

                <div>
                    <h3 className="font-[Montserrat] text-[18px] font-extrabold text-white">
                        Consejo de Administración
                    </h3>

                    <p className="mt-2 font-[Open_Sans] text-[14px] leading-6 text-white/72">
                        Para obtener mejores resultados visuales en la tienda, asegúrese de que todas las fotos tengan un fondo neutro y una iluminación uniforme. Los productos con descripciones detalladas tienen un 40% más de probabilidad de conversión.
                    </p>
                </div>
            </div>
        </SectionCard>
    );
};

export default ProductAdviceCard;