import React, { useMemo, useState } from "react";
import { Edit3, Filter, MoreVertical, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SectionCard from "../shared/SectionCard";
import StatusBadge from "../shared/StatusBadge";
import UserAvatar from "../shared/UserAvatar";
import Pagination from "../shared/Pagination";

const ProductsTable = ({ rows }) => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = useMemo(() => {
    if (selectedFilter === "price") {
      return [...rows].sort(
        (a, b) =>
          Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""))
      );
    }

    if (selectedFilter === "category") {
      return [...rows].sort((a, b) => a.category.localeCompare(b.category));
    }

    if (selectedFilter === "stock") {
      return [...rows].sort(
        (a, b) => parseInt(a.stock, 10) - parseInt(b.stock, 10)
      );
    }

    return rows;
  }, [rows, selectedFilter]);

  const handleEdit = (product) => {
    navigate("/add-product", {
      state: {
        mode: "edit",
        product,
      },
    });
  };

  const handleDelete = (product) => {
    toast.error(`Producto eliminado: ${product.name}`);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
    toast.info(`Mostrando página ${page} de productos`);
  };

  return (
    <SectionCard className="overflow-visible">
      <div className="flex flex-col gap-4 border-b border-white/5 px-4 py-5 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <h3 className="font-[Montserrat] text-[20px] font-extrabold text-white">
            Catálogo de Productos
          </h3>
          <p className="mt-1 font-[Open_Sans] text-[14px] text-white/70">
            Mostrando todos los artículos disponibles en la tienda.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 self-start rounded-[10px] border border-white/10 bg-black px-4 py-3 font-[Open_Sans] text-[14px] font-semibold text-white"
          >
            <Filter size={18} />
            Filtrar
          </button>

          {isFilterOpen ? (
            <div className="absolute right-0 z-20 mt-2 w-[220px] rounded-[12px] border border-white/10 bg-[#151A24] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              {[
                { label: "Todos", value: "all" },
                { label: "Precio", value: "price" },
                { label: "Categoría", value: "category" },
                { label: "Stock", value: "stock" },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(item.value);
                    setIsFilterOpen(false);
                    toast.info(`Filtro aplicado: ${item.label}`);
                  }}
                  className={`w-full rounded-[8px] px-3 py-2 text-left font-[Open_Sans] text-[14px] ${selectedFilter === item.value
                      ? "bg-[#6F6A68] text-white"
                      : "text-white/75 hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="block md:hidden">
        <div className="space-y-3 p-4">
          {filteredRows.map((row) => (
            <div
              key={row.code}
              className="rounded-[14px] border border-white/5 bg-[#171C26] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <UserAvatar label={row.image} />
                  <div className="min-w-0">
                    <p className="font-[Open_Sans] text-[13px] text-white/45">
                      {row.code}
                    </p>
                    <p className="mt-1 font-[Open_Sans] text-[15px] font-bold leading-5 text-white">
                      {row.name}
                    </p>
                  </div>
                </div>

                <button className="text-white/70">
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="font-[Open_Sans] text-[12px] text-white/45">
                    Categoría
                  </p>
                  <div className="mt-1">
                    <StatusBadge>{row.category}</StatusBadge>
                  </div>
                </div>

                <div>
                  <p className="font-[Open_Sans] text-[12px] text-white/45">
                    Precio
                  </p>
                  <p className="mt-1 font-[Open_Sans] text-[15px] font-bold text-white">
                    {row.price}
                  </p>
                </div>

                <div>
                  <p className="font-[Open_Sans] text-[12px] text-white/45">
                    Stock
                  </p>
                  <p className="mt-1 font-[Open_Sans] text-[15px] font-bold text-white/90">
                    {row.stock}
                  </p>
                </div>

                <div>
                  <p className="font-[Open_Sans] text-[12px] text-white/45">
                    Acciones
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-white/75">
                    <button type="button" onClick={() => handleEdit(row)}>
                      <Edit3 size={16} />
                    </button>
                    <button type="button" onClick={() => handleDelete(row)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[980px]">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-4 font-[Open_Sans] text-[14px] font-bold uppercase tracking-[0.04em] text-white/60">
                Miniatura
              </th>
              <th className="px-6 py-4 font-[Open_Sans] text-[14px] font-bold uppercase tracking-[0.04em] text-white/60">
                ID / Nombre
              </th>
              <th className="px-6 py-4 font-[Open_Sans] text-[14px] font-bold uppercase tracking-[0.04em] text-white/60">
                Categoría
              </th>
              <th className="px-6 py-4 font-[Open_Sans] text-[14px] font-bold uppercase tracking-[0.04em] text-white/60">
                Precio
              </th>
              <th className="px-6 py-4 font-[Open_Sans] text-[14px] font-bold uppercase tracking-[0.04em] text-white/60">
                Stock
              </th>
              <th className="px-6 py-4 text-right font-[Open_Sans] text-[14px] font-bold uppercase tracking-[0.04em] text-white/60">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.code}>
                <td className="border-t border-white/5 px-6 py-4">
                  <UserAvatar label={row.image} />
                </td>

                <td className="border-t border-white/5 px-6 py-4">
                  <p className="font-[Open_Sans] text-[14px] text-white/50">
                    {row.code}
                  </p>
                  <p className="mt-1 font-[Open_Sans] text-[15px] font-bold text-white">
                    {row.name}
                  </p>
                </td>

                <td className="border-t border-white/5 px-6 py-4">
                  <StatusBadge>{row.category}</StatusBadge>
                </td>

                <td className="border-t border-white/5 px-6 py-4 font-[Open_Sans] text-[15px] font-bold text-white">
                  {row.price}
                </td>

                <td className="border-t border-white/5 px-6 py-4 font-[Open_Sans] text-[15px] font-bold text-white/90">
                  {row.stock}
                </td>

                <td className="border-t border-white/5 px-6 py-4">
                  <div className="flex items-center justify-end gap-4 text-white/75">
                    <button type="button" onClick={() => handleEdit(row)}>
                      <Edit3 size={17} />
                    </button>
                    <button type="button" onClick={() => handleDelete(row)}>
                      <Trash2 size={17} />
                    </button>
                    <MoreVertical size={17} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-[Open_Sans] text-[15px] text-white/80">
          Mostrando 5 de 24 productos
        </p>

        <Pagination currentPage={currentPage} onChangePage={handleChangePage} />
      </div>
    </SectionCard>
  );
};

export default ProductsTable;