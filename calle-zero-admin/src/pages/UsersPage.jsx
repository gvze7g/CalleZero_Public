import React, { useMemo, useState, useEffect } from "react";
import { Filter, ArrowUpDown, UserPlus, Users } from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "../components/layout/AdminLayout";
import StatCard from "../components/shared/StatCard";
import Pagination from "../components/shared/Pagination";
import Modal from "../components/shared/Modal";
import UsersTabs from "../components/users/UsersTabs";
import UsersGrid from "../components/users/UsersGrid";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [stats, setStats] = useState({});
    const [activeTab, setActiveTab] = useState("Todos");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortMode, setSortMode] = useState("name");
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "",
    });

    // Cargar usuarios y roles al montar
    useEffect(() => {
        loadUsers();
        loadRoles();
        loadStats();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/admin/users");
            const data = await response.json();

            if (data.success) {
                setUsers(data.users);
            } else {
                toast.error("Error al cargar usuarios");
            }
        } catch (error) {
            toast.error("Error de conexión");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const loadRoles = async () => {
        try {
            // Aquí asumimos que tienes una ruta para obtener roles
            // Si no la tienes, podemos usar los roles hardcodeados por ahora
            setRoles(["Administrador", "Cliente"]);
        } catch (error) {
            console.error(error);
            setRoles(["Administrador", "Cliente"]);
        }
    };

    const loadStats = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/admin/users/stats");
            const data = await response.json();

            if (data.success) {
                setStats(data.stats);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const filteredUsers = useMemo(() => {
        let result = [...users];

        if (activeTab === "Administradores") {
            result = result.filter((user) => user.role === "Administrador");
        }

        if (activeTab === "Clientes") {
            result = result.filter((user) => user.role === "Cliente");
        }

        if (sortMode === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sortMode === "role") {
            result.sort((a, b) => a.role.localeCompare(b.role));
        }

        return result;
    }, [users, activeTab, sortMode]);

    const openCreateModal = () => {
        setEditingUser(null);
        setFormData({
            fullName: "",
            email: "",
            role: roles[0] || "Cliente",
        });
        setIsUserModalOpen(true);
    };

    const openEditModal = (user) => {
        setEditingUser(user);
        setFormData({
            fullName: user.name,
            email: user.email,
            role: user.role,
        });
        setSelectedUser(null);
        setIsUserModalOpen(true);
    };

    const handleSubmitUser = async (event) => {
        event.preventDefault();

        if (!formData.fullName.trim() || !formData.email.trim()) {
            toast.error("Debes completar nombre y correo");
            return;
        }

        if (!formData.role) {
            toast.error("Debes seleccionar un rol");
            return;
        }

        try {
            let response;

            if (editingUser) {
                // Actualizar usuario
                response = await fetch(
                    `http://localhost:4000/api/admin/users/${editingUser._id}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            fullName: formData.fullName,
                            email: formData.email,
                            role: formData.role,
                        }),
                    }
                );
            } else {
                // Crear usuario
                response = await fetch("http://localhost:4000/api/admin/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        email: formData.email,
                        role: formData.role,
                    }),
                });
            }

            const data = await response.json();

            if (data.success) {
                toast.success(
                    editingUser
                        ? "Usuario actualizado correctamente"
                        : "Usuario creado correctamente"
                );
                setIsUserModalOpen(false);
                loadUsers();
                loadStats();
            } else {
                toast.error(data.message || "Error al procesar el usuario");
            }
        } catch (error) {
            toast.error("Error de conexión");
            console.error(error);
        }
    };

    const handleDeleteUser = async (user) => {
        try {
            const response = await fetch(
                `http://localhost:4000/api/admin/users/${user._id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (data.success) {
                toast.error(`Usuario eliminado: ${user.name}`);
                setSelectedUser(null);
                loadUsers();
                loadStats();
            } else {
                toast.error(data.message || "Error al eliminar usuario");
            }
        } catch (error) {
            toast.error("Error de conexión");
            console.error(error);
        }
    };

    const handleSort = () => {
        const nextSort = sortMode === "name" ? "role" : "name";
        setSortMode(nextSort);
        toast.info(
            nextSort === "name"
                ? "Usuarios ordenados por nombre"
                : "Usuarios ordenados por rol"
        );
    };

    const userStats = [
        {
            title: "Total de Usuarios",
            value: stats.totalUsers || 0,
            percentage: "+12%",
        },
        {
            title: "Usuarios Activos",
            value: stats.activeUsers || 0,
            percentage: "+5%",
        },
        {
            title: "Administradores",
            value: stats.admins || 0,
            percentage: "",
        },
    ];

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center py-20">
                    <p className="text-white">Cargando usuarios...</p>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <section className="w-full max-w-full overflow-hidden">
                <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="min-w-0">
                        <p className="flex items-center gap-2 font-[Open_Sans] text-[12px] font-bold uppercase tracking-[0.18em] text-white/35 sm:text-[13px] sm:tracking-[0.25em]">
                            <Users size={17} className="shrink-0" />
                            <span className="truncate">Administración</span>
                        </p>

                        <h1 className="mt-2 font-[Montserrat] text-[30px] font-extrabold text-white sm:text-[34px] md:text-[42px]">
                            Usuarios
                        </h1>

                        <p className="mt-2 max-w-[620px] font-[Open_Sans] text-[14px] leading-6 text-white/72 sm:text-[15px]">
                            Gestiona los accesos, roles y perfiles de los clientes y personal
                            administrativo de Calle Zero.
                        </p>
                    </div>

                    <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto">
                        <button
                            type="button"
                            onClick={() => toast.info("Usa las pestañas para filtrar usuarios")}
                            className="inline-flex h-[46px] min-w-0 items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-black px-4 font-[Open_Sans] text-[14px] font-bold text-white"
                        >
                            <Filter size={17} className="shrink-0" />
                            <span className="truncate">Filtrar</span>
                        </button>

                        <button
                            type="button"
                            onClick={handleSort}
                            className="inline-flex h-[46px] min-w-0 items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-black px-4 font-[Open_Sans] text-[14px] font-bold text-white"
                        >
                            <ArrowUpDown size={17} className="shrink-0" />
                            <span className="truncate">Ordenar</span>
                        </button>

                        <button
                            type="button"
                            onClick={openCreateModal}
                            className="inline-flex h-[46px] min-w-0 items-center justify-center gap-2 rounded-[10px] bg-[#6F6A68] px-4 font-[Open_Sans] text-[14px] font-bold text-white"
                        >
                            <UserPlus size={17} className="shrink-0" />
                            <span className="truncate">Nuevo Usuario</span>
                        </button>
                    </div>
                </div>

                <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {userStats.map((item) => (
                        <StatCard key={item.title} {...item} />
                    ))}
                </section>

                <UsersTabs activeTab={activeTab} onChangeTab={setActiveTab} />

                <UsersGrid users={filteredUsers} onViewUser={setSelectedUser} />

                <section className="mt-8 flex min-w-0 flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                    <p className="font-[Open_Sans] text-[14px] text-white/75 sm:text-[15px]">
                        Mostrando {filteredUsers.length} de{" "}
                        <strong className="text-white">{users.length}</strong> usuarios
                    </p>

                    <Pagination
                        currentPage={currentPage}
                        onChangePage={(page) => {
                            setCurrentPage(page);
                            toast.info(`Mostrando página ${page} de usuarios`);
                        }}
                    />
                </section>
            </section>

            {isUserModalOpen ? (
                <Modal
                    title={editingUser ? "Editar Usuario" : "Nuevo Usuario"}
                    onClose={() => setIsUserModalOpen(false)}
                >
                    <form onSubmit={handleSubmitUser} className="space-y-4">
                        <input
                            value={formData.fullName}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    fullName: event.target.value,
                                }))
                            }
                            placeholder="Nombre completo"
                            className="h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                        />

                        <input
                            value={formData.email}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    email: event.target.value,
                                }))
                            }
                            placeholder="Correo electrónico"
                            className="h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                        />

                        <select
                            value={formData.role}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    role: event.target.value,
                                }))
                            }
                            className="h-[42px] w-full rounded-[8px] border border-white/10 bg-black px-4 font-[Open_Sans] text-white outline-none"
                        >
                            {roles.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => setIsUserModalOpen(false)}
                                className="h-[44px] rounded-[10px] border border-white/10 bg-black font-[Open_Sans] text-[14px] font-bold text-white"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="h-[44px] rounded-[10px] bg-[#6F6A68] font-[Open_Sans] text-[14px] font-bold text-white"
                            >
                                {editingUser ? "Guardar Cambios" : "Crear Usuario"}
                            </button>
                        </div>
                    </form>
                </Modal>
            ) : null}

            {selectedUser ? (
                <Modal title="Detalles del Usuario" onClose={() => setSelectedUser(null)}>
                    <div className="text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-600 font-[Montserrat] text-[24px] font-extrabold text-white">
                            {selectedUser.avatar}
                        </div>

                        <h3 className="mt-4 font-[Montserrat] text-[22px] font-extrabold text-white">
                            {selectedUser.name}
                        </h3>

                        <p className="mt-1 font-[Open_Sans] text-[14px] text-white/65">
                            {selectedUser.email}
                        </p>

                        <div className="mt-5 rounded-[12px] bg-black/40 p-4 text-left">
                            <p className="font-[Open_Sans] text-[14px] text-white/70">
                                <strong className="text-white">Rol:</strong> {selectedUser.role}
                            </p>
                            <p className="mt-2 font-[Open_Sans] text-[14px] text-white/70">
                                <strong className="text-white">Registro:</strong>{" "}
                                {selectedUser.date}
                            </p>
                            <p className="mt-2 font-[Open_Sans] text-[14px] text-white/70">
                                <strong className="text-white">Estado:</strong>{" "}
                                {selectedUser.status}
                            </p>
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => openEditModal(selectedUser)}
                                className="h-[44px] rounded-[10px] bg-[#6F6A68] font-[Open_Sans] text-[14px] font-bold text-white"
                            >
                                Editar
                            </button>

                            <button
                                type="button"
                                onClick={() => handleDeleteUser(selectedUser)}
                                className="h-[44px] rounded-[10px] border border-[#582233] bg-[#2B1820] font-[Open_Sans] text-[14px] font-bold text-[#FF4D73]"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </AdminLayout>
    );
};

export default UsersPage;