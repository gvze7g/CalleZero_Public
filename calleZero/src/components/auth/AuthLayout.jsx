import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-black font-[Open_Sans]">
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black" />

                <div className="absolute left-1/2 top-[-250px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500 opacity-20 blur-[180px]" />

                <div className="absolute bottom-[-200px] right-[-100px] h-[600px] w-[600px] rounded-full bg-purple-700 opacity-10 blur-[160px]" />
            </div>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
                {children}

                <div className="pointer-events-none mt-10 text-center">
                    <p className="text-[10px] tracking-[6px] text-white opacity-17 sm:text-xs sm:tracking-[8px]">
                        MINIMALISMO URBANO
                    </p>
                    <p className="mt-2 text-[10px] tracking-[6px] text-white opacity-17 sm:text-xs sm:tracking-[8px]">
                        DISEÑADO PARA EL AHORA
                    </p>
                </div>
            </div>

            <div className="relative z-10 w-full border-t border-white/10 py-4 text-center text-xs text-gray-500">
                © 2026 Calle Zero — Todos los derechos reservados
            </div>
        </div>
    );
};

export default AuthLayout;