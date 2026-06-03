export const sidebarLinks = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard",
    path: "/dashboard",
  },
  {
    key: "products",
    label: "Productos",
    icon: "Box",
    path: "/products",
  },
  {
    key: "add-product",
    label: "Agregar Producto",
    icon: "CirclePlus",
    path: "/add-product",
  },
  {
    key: "categories",
    label: "Categorías",
    icon: "Tags",
    path: "/categories",
  },
  {
    key: "orders",
    label: "Pedidos",
    icon: "ShoppingCart",
    path: "/orders",
  },
  {
    key: "users",
    label: "Usuarios",
    icon: "Users",
    path: "/users",
  },
];

export const dashboardStats = [
  {
    title: "Total Productos",
    value: "1,248",
    helper: "vs. mes anterior",
    change: "+12%",
    changeType: "positive",
    icon: "Package",
  },
  {
    title: "Pedidos del Mes",
    value: "456",
    helper: "vs. mes anterior",
    change: "+18.5%",
    changeType: "positive",
    icon: "ShoppingCart",
  },
  {
    title: "Usuarios Activos",
    value: "3,892",
    helper: "vs. mes anterior",
    change: "-2.4%",
    changeType: "negative",
    icon: "Users",
  },
];

export const dashboardOrders = [
  {
    id: "#CZ-8901",
    customer: "Carlos Martínez",
    date: "Hoy, 14:30",
    total: "$85.50",
    status: "Enviado",
    statusType: "default",
    avatar: "CM",
  },
  {
    id: "#CZ-8900",
    customer: "Elena Rodríguez",
    date: "Hoy, 12:15",
    total: "$120.00",
    status: "Entregado",
    statusType: "default",
    avatar: "ER",
  },
  {
    id: "#CZ-8899",
    customer: "Roberto Gómez",
    date: "Ayer, 18:45",
    total: "$45.99",
    status: "Pendiente",
    statusType: "default",
    avatar: "RG",
  },
  {
    id: "#CZ-8898",
    customer: "Ana Lucía Peña",
    date: "Ayer, 16:20",
    total: "$155.00",
    status: "Entregado",
    statusType: "default",
    avatar: "AP",
  },
  {
    id: "#CZ-8897",
    customer: "Kevin Vásquez",
    date: "12 Oct, 11:00",
    total: "$72.25",
    status: "Cancelado",
    statusType: "danger",
    avatar: "KV",
  },
];

export const inventoryAlerts = [
  {
    name: "Camiseta Oversized Black",
    category: "Streetwear",
    stock: "3 unidades",
    type: "low",
  },
  {
    name: "Jordan 1 Retro High",
    category: "Calzado",
    stock: "Agotado",
    type: "out",
  },
  {
    name: "Hoodie Essential Purple",
    category: "Sudaderas",
    stock: "5 unidades",
    type: "low",
  },
];

export const productStats = [
  { title: "TOTAL PRODUCTOS", value: "5", icon: "Package" },
  { title: "CATEGORÍAS", value: "4", icon: "Tags", highlighted: true },
  { title: "STOCK BAJO", value: "2", icon: "ArrowUpDown" },
  { title: "VALOR INVENTARIO", value: "$3,450.00", icon: "ShoppingCart" },
];

export const productRows = [
  {
    image: "HS",
    code: "CZ-001",
    name: "Hoodie Oversize 'San Salvador' Black",
    category: "Streetwear",
    price: "$45.00",
    stock: "24 un.",
  },
  {
    image: "CP",
    code: "CZ-002",
    name: "Cargo Pants Techwear V1",
    category: "Pantalones",
    price: "$55.00",
    stock: "12 un.",
  },
  {
    image: "TS",
    code: "CZ-003",
    name: "T-Shirt 'Zero Limit' White",
    category: "Streetwear",
    price: "$25.00",
    stock: "45 un.",
  },
  {
    image: "GS",
    code: "CZ-004",
    name: "Gorra Snapback 'Calle' Edition",
    category: "Accesorios",
    price: "$20.00",
    stock: "8 un.",
  },
  {
    image: "CN",
    code: "CZ-005",
    name: "Chaqueta Cortavientos Neon",
    category: "Streetwear",
    price: "$65.00",
    stock: "15 un.",
  },
];

export const orderStats = [
  {
    title: "Pedidos Hoy",
    value: "24",
    helper: "+12% que ayer↑",
    icon: "ShoppingCart",
  },
  {
    title: "Por Procesar",
    value: "12",
    helper: "Requieren atención",
    icon: "Clock3",
  },
  {
    title: "Ventas del Mes",
    value: "$4,285.50",
    helper: "Meta: $5,000",
    icon: "ArrowUpDown",
  },
  {
    title: "Cumplimiento",
    value: "98.2%",
    helper: "Tasa de entrega",
    icon: "BadgeCheck",
  },
];

export const orderRows = [
  {
    id: "#CZ-1082",
    customer: "Roberto Méndez",
    email: "roberto.m@gmail.com",
    date: "14 Oct, 2023",
    items: "3 items",
    total: "$85.00",
    status: "Completado",
    statusType: "default",
    avatar: "RM",
  },
  {
    id: "#CZ-1083",
    customer: "Elena Vásquez",
    email: "elena.v@outlook.com",
    date: "15 Oct, 2023",
    items: "2 items",
    total: "$120.50",
    status: "Procesando",
    statusType: "muted",
    avatar: "EV",
  },
  {
    id: "#CZ-1084",
    customer: "Carlos Figueroa",
    email: "cfigueroa@tigo.com.sv",
    date: "15 Oct, 2023",
    items: "1 items",
    total: "$45.99",
    status: "Pendiente",
    statusType: "default",
    avatar: "CF",
  },
  {
    id: "#CZ-1085",
    customer: "Gabriela Zelaya",
    email: "gaby.zelaya@gmail.com",
    date: "16 Oct, 2023",
    items: "5 items",
    total: "$210.00",
    status: "Enviado",
    statusType: "default",
    avatar: "GZ",
  },
  {
    id: "#CZ-1086",
    customer: "Mauricio Alfaro",
    email: "m.alfaro@empresa.com",
    date: "16 Oct, 2023",
    items: "2 items",
    total: "$62.50",
    status: "Completado",
    statusType: "default",
    avatar: "MA",
  },
];

export const userStats = [
  { title: "TOTAL USUARIOS", value: "1,248", icon: "Users" },
  { title: "ACTIVOS HOY", value: "86", icon: "User" },
  { title: "NUEVOS (MES)", value: "+12", icon: "UserPlus" },
];

export const userRows = [
  {
    name: "Rodrigo Henríquez",
    email: "r.henriquez@callezero.sv",
    role: "Administrador",
    date: "Desde 12 Oct 2023",
    avatar: "RH",
    status: "online",
  },
  {
    name: "Gabriela Martínez",
    email: "gabi.mtz99@gmail.com",
    role: "Cliente VIP",
    date: "Desde 05 Ene 2024",
    avatar: "GM",
    status: "away",
  },
  {
    name: "Carlos Villalta",
    email: "cvillalta@hotmail.com",
    role: "Cliente",
    date: "Desde 20 Feb 2024",
    avatar: "CV",
    status: "offline",
  },
  {
    name: "Andrea Solórzano",
    email: "andrea.zero@outlook.com",
    role: "Cliente",
    date: "Desde 15 Mar 2024",
    avatar: "AS",
    status: "online",
  },
  {
    name: "Fernando Quijano",
    email: "f.quijano@admin.sv",
    role: "Editor",
    date: "Desde 02 Jun 2023",
    avatar: "FQ",
    status: "busy",
  },
  {
    name: "Mónica Arévalo",
    email: "moni.arevalo@gmail.com",
    role: "Cliente",
    date: "Desde 28 Mar 2024",
    avatar: "MA",
    status: "offline",
  },
];

export const categoryStats = [
  { title: "TOTAL CATEGORÍAS", value: "06", icon: "Tags" },
  { title: "STOCK TOTAL", value: "309", icon: "Shirt", highlighted: true },
  { title: "ÚLTIMO LANZAMIENTO", value: "Limitada", icon: "Zap" },
];

export const categoryRows = [
  {
    name: "Oversized Tees",
    description: "Camisetas de corte ancho con diseños urbanos exclusivos.",
    products: "42",
    date: "2023-10-25",
    icon: "Shirt",
  },
  {
    name: "Accesorios",
    description: "Gorras, calcetines y joyería urbana para completar el look.",
    products: "128",
    date: "2023-11-02",
    icon: "Badge",
  },
  {
    name: "Hoodies & Sweatshirts",
    description: "Prendas de abrigo con materiales de alta calidad y estilo.",
    products: "85",
    date: "2023-10-15",
    icon: "Zap",
  },
  {
    name: "Edición Limitada",
    description: "Colaboraciones especiales y lanzamientos de stock bajo.",
    products: "12",
    date: "2023-11-05",
    icon: "Image",
  },
  {
    name: "Pantalones & Joggers",
    description: "Cortes cargo y joggers técnicos con estética streetwear.",
    products: "56",
    date: "2023-10-28",
    icon: "Layers",
  },
  {
    name: "Calzado",
    description: "Sneakers seleccionadas para complementar la colección.",
    products: "24",
    date: "2023-11-01",
    icon: "ShoppingBag",
  },
];