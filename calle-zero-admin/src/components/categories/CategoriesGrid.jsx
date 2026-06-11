import React from "react";
import { Edit3, Trash2, Package } from "lucide-react";
import { toast } from "sonner";
import SectionCard from "../shared/SectionCard";

const CategoriesGrid = ({
    categories = [],
    onEditCategory,
    onDeleteCategory,
    isLoading = false,
}) => {
    if (isLoading) {
        return (
            <SectionCard className="mt-7">
                <div className="flex items-center justify-center py-12">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                </div>
            </SectionCard>
        );
    }

    if (categories.length === 0) {
        return (
            <SectionCard className="mt-7">
                <div className="flex flex-col items-center justify-center py-12">
                    <Package size={40} className="text-white/30 mb-4" />
                    <p className="text-white/60 text-center">
                        No hay categorías registradas aún
                    </p>
                </div>
            </SectionCard>
        );
    }

    return (
        <SectionCard className="mt-7">
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => {
                    const productCount = category.productsCount || 0;

                    return (
                        <div
                            key={category._id}
                            className="group rounded-[12px] border border-white/10 bg-[#0F1419] p-5 transition hover:bg-[#151C26] hover:border-white/20"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-white text-[16px] line-clamp-2">
                                        {category.name}
                                    </h4>
                                    <p className="mt-1 text-[12px] text-white/60 line-clamp-2">
                                        {category.description || "Sin descripción"}
                                    </p>
                                </div>

                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition ml-2">
                                    <button
                                        onClick={() => onEditCategory(category)}
                                        className="rounded-lg bg-blue-600/20 p-2 text-blue-400 hover:bg-blue-600/30 transition flex-shrink-0"
                                        title="Editar"
                                    >
                                        <Edit3 size={16} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (productCount > 0) {
                                                toast.error("No puedes eliminar una categoría con productos");
                                                return;
                                            }
                                            onDeleteCategory(category);
                                        }}
                                        className="rounded-lg bg-red-600/20 p-2 text-red-400 hover:bg-red-600/30 transition flex-shrink-0"
                                        title="Eliminar"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="border-t border-white/5 pt-4">
                                <div>
                                    <p className="text-[11px] text-white/50 uppercase">Productos</p>
                                    <p className="mt-2 font-bold text-white text-[24px]">
                                        {productCount}
                                    </p>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="mt-3 border-t border-white/5 pt-3">
                                <span 
                                    className="inline-block px-2 py-1 rounded-full text-[11px] font-semibold"
                                    style={{
                                        backgroundColor: category.isActive ? '#065f46' : '#7f1d1d',
                                        color: category.isActive ? '#10b981' : '#fca5a5'
                                    }}
                                >
                                    {category.isActive ? "✓ Activa" : "⊗ Inactiva"}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionCard>
    );
};

export default CategoriesGrid;