import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "../components/layout/AdminLayout";
import StatCard from "../components/shared/StatCard";
import Modal from "../components/shared/Modal";
import CategoriesGrid from "../components/categories/CategoriesGrid";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const [stats, setStats] = useState([
        { title: "Total Categorías", value: "0" },
        { title: "Productos en Categorías", value: "0" },
        { title: "Último Lanzamiento", value: "—" },
    ]);

    // ✅ Cargar categorías
    const loadCategories = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                "http://localhost:4000/api/categories"
            );

            if (!response.ok) {
                throw new Error("Error loading categories");
            }

            const data = await response.json();
            console.log("📍 Categorías cargadas:", data);
            
            setCategories(data);
            calculateStats(data);
        } catch (error) {
            console.error("❌ Error al cargar categorías:", error);
            toast.error("Error al cargar categorías");
        } finally {
            setIsLoading(false);
        }
    };

    // ✅ Calcular estadísticas dinámicamente
    const calculateStats = (categoriesData) => {
        console.log("📊 Calculando stats con:", categoriesData);

        // Total de categorías
        const totalCategories = categoriesData.length;

        // Total de PRODUCTOS en todas las categorías
        const totalProducts = categoriesData.reduce(
            (acc, cat) => acc + (cat.productsCount || 0),
            0
        );

        // ✅ Último lanzamiento (categoría más reciente por createdAt)
        let lastLaunch = "—";
        if (categoriesData.length > 0) {
            const sorted = [...categoriesData].sort((a, b) => {
                const dateA = new Date(a.createdAt || 0);
                const dateB = new Date(b.createdAt || 0);
                return dateB - dateA;
            });
            lastLaunch = sorted[0]?.name || "—";
        }

        console.log("✅ Stats calculados:", {
            totalCategories,
            totalProducts,
            lastLaunch,
        });

        setStats([
            { 
                title: "Total Categorías", 
                value: totalCategories,
                icon: "📦"
            },
            { 
                title: "Productos en Categorías", 
                value: totalProducts,
                icon: "📊"
            },
            { 
                title: "Último Lanzamiento", 
                value: lastLaunch,
                icon: "🚀"
            },
        ]);
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const openCreateModal = () => {
        setEditingCategory(null);
        setFormData({
            name: "",
            description: "",
        });
        setIsModalOpen(true);
    };

    const openEditModal = (category) => {
        setEditingCategory(category);
        setFormData({
            name: category.name || "",
            description: category.description || "",
        });
        setIsModalOpen(true);
    };

    const handleDeleteCategory = async (category) => {
        try {
            const response = await fetch(
                `http://localhost:4000/api/categories/${category._id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar");
            }

            toast.success("Categoría eliminada");
            await loadCategories();
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.description.trim()
        ) {
            toast.error("Debes completar nombre y descripción");
            return;
        }

        try {
            if (editingCategory) {
                const response = await fetch(
                    `http://localhost:4000/api/categories/${editingCategory._id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: formData.name,
                            description: formData.description,
                            isActive: true,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al actualizar");
                }

                toast.success("Categoría actualizada");
            } else {
                const response = await fetch(
                    "http://localhost:4000/api/categories",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: formData.name,
                            description: formData.description,
                            isActive: true,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al crear");
                }

                toast.success("Categoría creada");
            }

            await loadCategories();
            setIsModalOpen(false);
            setFormData({
                name: "",
                description: "",
            });
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    return (
        <AdminLayout>
            {/* HEADER */}
            <section className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="font-[Montserrat] text-[28px] font-extrabold text-white sm:text-[32px] md:text-[40px]">
                            Categorías
                        </h1>

                        <span className="rounded-full border border-white/10 px-3 py-1 font-[Open_Sans] text-[12px] text-white/35">
                            Admin
                        </span>
                    </div>

                    <p className="mt-2 font-[Open_Sans] text-[14px] text-white/72 sm:text-[15px]">
                        Administra las agrupaciones de productos de Calle Zero.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={openCreateModal}
                    className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[10px] bg-[#6F6A68] px-5 font-[Open_Sans] text-[13px] font-bold text-white transition hover:bg-[#7a7570] sm:text-[14px]"
                >
                    <Plus size={18} />
                    Nueva Categoría
                </button>
            </section>

            {/* STATS */}
            <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <StatCard 
                        key={item.title} 
                        title={item.title}
                        value={item.value}
                        isLoading={isLoading}
                    />
                ))}
            </section>

            {/* CATEGORÍAS GRID */}
            <CategoriesGrid
                categories={categories}
                onCreateCategory={openCreateModal}
                onEditCategory={openEditModal}
                onDeleteCategory={handleDeleteCategory}
                isLoading={isLoading}
            />

            {/* MODAL */}
            {isModalOpen && (
                <Modal
                    title={editingCategory ? "Editar Categoría" : "Nueva Categoría"}
                    onClose={() => setIsModalOpen(false)}
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="block">
                            <span className="font-[Open_Sans] text-[14px] font-bold text-white">
                                Nombre
                            </span>

                            <input
                                value={formData.name}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        name: event.target.value,
                                    }))
                                }
                                className="mt-2 h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none focus:border-white/30"
                                placeholder="Ej: Sneakers"
                            />
                        </label>

                        <label className="block">
                            <span className="font-[Open_Sans] text-[14px] font-bold text-white">
                                Descripción
                            </span>

                            <textarea
                                value={formData.description}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        description: event.target.value,
                                    }))
                                }
                                className="mt-2 h-[110px] w-full resize-none rounded-[8px] border border-white/10 bg-black p-4 font-[Open_Sans] text-white outline-none focus:border-white/30"
                                placeholder="Describe la categoría..."
                            />
                        </label>

                        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="h-[44px] rounded-[10px] border border-white/10 bg-black font-[Open_Sans] text-[14px] font-bold text-white transition hover:bg-white/5"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="h-[44px] rounded-[10px] bg-[#6F6A68] font-[Open_Sans] text-[14px] font-bold text-white transition hover:bg-[#7a7570]"
                            >
                                {editingCategory
                                    ? "Guardar Cambios"
                                    : "Crear Categoría"}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
        </AdminLayout>
    );
};

export default CategoriesPage;