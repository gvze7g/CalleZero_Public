import React from "react";

const tabs = ["Todos", "Administradores", "Clientes"];

const UsersTabs = ({ activeTab, onChangeTab }) => {
    return (
        <div className="mt-8 max-w-full overflow-x-auto border-b border-white/10">
            <div className="flex w-max min-w-full gap-6 sm:gap-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onChangeTab(tab)}
                        className={`shrink-0 border-b-2 px-1 pb-4 font-[Open_Sans] text-[14px] font-semibold transition ${activeTab === tab
                                ? "border-white text-white"
                                : "border-transparent text-white/45 hover:text-white"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UsersTabs;