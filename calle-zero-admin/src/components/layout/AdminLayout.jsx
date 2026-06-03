import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AdminFooter from "./AdminFooter";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <div className="flex h-full w-full border border-[#0F1230]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex min-h-0 flex-1 flex-col">
          <Topbar onOpenSidebar={() => setIsSidebarOpen(true)} />

          <main className="min-h-0 flex-1 overflow-y-auto px-4 py-4 md:px-6 lg:px-8 lg:py-6">
            {children}
          </main>

          <AdminFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;