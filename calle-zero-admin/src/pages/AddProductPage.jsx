import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AdminLayout from "../components/layout/AdminLayout";
import ProductGeneralForm from "../components/addProduct/ProductGeneralForm";
import ProductClassificationForm from "../components/addProduct/ProductClassificationForm";
import ProductPriceCard from "../components/addProduct/ProductPriceCard";
import ProductMediaCard from "../components/addProduct/ProductMediaCard";
import ProductAdviceCard from "../components/addProduct/ProductAdviceCard";

const AddProductPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const mode = location.state?.mode || "create";
    const product = location.state?.product;

    const [selectedSize, setSelectedSize] = useState("M");
    const [formData, setFormData] = useState({
        name: product?.name || "",
        description: product
            ? `Producto ${product.name} perteneciente a la categoría ${product.category}.`
            : "",
        category: product?.category || "",
        sku: product?.code || "",
        price: product?.price?.replace("$", "") || "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.name.trim() || !formData.category.trim() || !formData.price.trim()) {
            toast.error("Completa nombre, categoría y precio del producto");
            return;
        }

        if (mode === "edit") {
            toast.success("Producto actualizado correctamente");
        } else {
            toast.success("Producto agregado correctamente");
        }

        navigate("/products");
    };

    return (
        <AdminLayout>
            <section className="mx-auto max-w-[980px]">
                <button
                    type="button"
                    onClick={() => navigate("/products")}
                    className="flex items-center gap-2 font-[Open_Sans] text-[14px] font-semibold text-white/70 hover:text-white"
                >
                    <ChevronLeft size={17} />
                    Volver a Productos
                </button>

                <h1 className="mt-6 font-[Montserrat] text-[32px] font-extrabold text-white md:text-[40px]">
                    {mode === "edit" ? "Editar Producto" : "Agregar Nuevo Producto"}
                </h1>

                <p className="mt-2 font-[Open_Sans] text-[16px] text-white/72">
                    {mode === "edit"
                        ? "Actualiza la información del producto seleccionado."
                        : "Complete los detalles para añadir un nuevo artículo al catálogo de Calle Zero."}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]"
                >
                    <div className="space-y-6">
                        <ProductGeneralForm formData={formData} onChange={handleChange} />

                        <ProductClassificationForm
                            formData={formData}
                            onChange={handleChange}
                            selectedSize={selectedSize}
                            onSelectSize={setSelectedSize}
                        />
                    </div>

                    <div className="space-y-6">
                        <ProductPriceCard formData={formData} onChange={handleChange} />
                        <ProductMediaCard />

                        <button
                            type="submit"
                            className="h-[52px] w-full rounded-[10px] bg-[#6F6A68] font-[Montserrat] text-[17px] font-extrabold text-white"
                        >
                            {mode === "edit" ? "✓ Actualizar Producto" : "✓ Guardar Producto"}
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                toast.info("Operación cancelada");
                                navigate("/products");
                            }}
                            className="h-[46px] w-full rounded-[10px] border border-white/10 bg-black font-[Open_Sans] text-[14px] font-bold text-white"
                        >
                            Cancelar
                        </button>
                    </div>

                    <div className="lg:col-span-2">
                        <ProductAdviceCard />
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
};

export default AddProductPage;