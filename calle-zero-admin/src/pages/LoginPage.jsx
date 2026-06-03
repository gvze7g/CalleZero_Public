import React from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/auth/AuthHeader";
import AuthFooter from "../components/auth/AuthFooter";
import LoginCard from "../components/auth/LoginCard";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <div className="flex h-full w-full flex-col border border-[#0F1230]">
        <AuthHeader />

        <main className="flex min-h-0 flex-1 items-center justify-center px-4 py-6 md:px-8">
          <LoginCard
            onForgotPassword={() => navigate("/forgot-password")}
            onLogin={() => navigate("/dashboard")}
          />
        </main>

        <AuthFooter />
      </div>
    </div>
  );
};

export default LoginPage;