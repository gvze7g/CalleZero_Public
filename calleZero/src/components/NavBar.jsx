import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({});

    const linksRef = useRef({});

    const goTo = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    useEffect(() => {
        const el = linksRef.current[location.pathname];
        if (el) {
            setIndicatorStyle({
                width: el.offsetWidth + "px",
                transform: `translateX(${el.offsetLeft}px)`
            });
        }
    }, [location]);

    const NavItem = ({ path, label }) => (
        <span
            ref={(el) => (linksRef.current[path] = el)}
            onClick={() => goTo(path)}
            className={`cursor-pointer py-1 transition ${location.pathname === path
                    ? "text-purple-500"
                    : "text-white hover:text-purple-500"
                }`}
        >
            {label}
        </span>
    );

    return (
        <nav className="sticky top-0 z-50 bg-black border-b border-white/10">

            <div className="flex items-center justify-between px-6 py-4">

                <div
                    onClick={() => goTo("/")}
                    className="text-purple-500 font-bold text-lg font-[Montserrat] cursor-pointer"
                >
                    Calle Zero
                </div>

                {/* DESKTOP */}
                <div className="hidden md:flex items-center gap-8 text-sm relative font-[Montserrat]">

                    <NavItem path="/" label="Inicio" />
                    <NavItem path="/products" label="Productos" />
                    <NavItem path="/categories" label="Categorías" />
                    <NavItem path="/contact" label="Contacto" />

                    <span
                        className="absolute bottom-0 left-0 h-[2px] bg-purple-500 rounded transition-all duration-300"
                        style={indicatorStyle}
                    />
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4 text-white">

                    <Search
                        size={20}
                        strokeWidth={1.5}
                        onClick={() => goTo("/products")}
                        className="cursor-pointer hover:text-purple-500 transition"
                    />

                    <div className="relative cursor-pointer">
                        <ShoppingCart
                            size={20}
                            strokeWidth={1.5}
                            className="hover:text-purple-500 transition"
                        />
                        <span className="absolute -top-2 -right-2 bg-purple-500 text-black text-[10px] px-1.5 rounded-full">
                            0
                        </span>
                    </div>

                    <button
                        onClick={() => goTo("/login")}
                        className="hidden md:block border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-black transition font-[Montserrat]"
                    >
                        Iniciar Sesión
                    </button>

                    <div
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-2xl cursor-pointer"
                    >
                        ☰
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div
                className={`
                    fixed inset-0 bg-black/95 z-50
                    flex flex-col items-center justify-center gap-8 text-xl font-[Montserrat]
                    transition-all duration-300
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            >
                <span onClick={() => goTo("/")}>Inicio</span>
                <span onClick={() => goTo("/products")}>Productos</span>
                <span onClick={() => goTo("/categories")}>Categorías</span>
                <span onClick={() => goTo("/contact")}>Contacto</span>

                <button
                    onClick={() => goTo("/login")}
                    className="mt-6 border border-purple-500 text-purple-500 px-6 py-2 rounded-full"
                >
                    Iniciar Sesión
                </button>

                <div
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-2xl cursor-pointer"
                >
                    ✕
                </div>
            </div>

        </nav>
    );
};

export default Navbar;