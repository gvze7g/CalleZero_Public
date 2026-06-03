import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import StatCard from "../components/shared/StatCard";
import RecentOrdersTable from "../components/dashboard/RecentOrdersTable";
import InventoryAlertsCard from "../components/dashboard/InventoryAlertsCard";
import QuickActionsCard from "../components/dashboard/QuickActionsCard";
import DailyGoalCard from "../components/dashboard/DailyGoalCard";
import {
  dashboardOrders,
  dashboardStats,
  inventoryAlerts,
} from "../data/adminData";

const DashboardPage = () => {
  return (
    <AdminLayout>
      <section>
        <h1 className="font-[Montserrat] text-[28px] font-extrabold text-white sm:text-[32px] md:text-[40px]">
          Bienvenido, Admin
        </h1>

        <p className="mt-2 font-[Open_Sans] text-[15px] text-white/75 sm:text-[16px] md:text-[18px]">
          Aquí tienes el resumen de tu tienda hoy.
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardStats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.9fr_0.95fr]">
        <RecentOrdersTable rows={dashboardOrders} />

        <div className="space-y-6">
          <InventoryAlertsCard items={inventoryAlerts} />
          <QuickActionsCard />
          <DailyGoalCard />
        </div>
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;