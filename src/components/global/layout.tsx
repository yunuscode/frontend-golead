import React, { useEffect, useMemo } from "react";
import Nav from "./nav";
import useAuth from "@/hooks/useAuth";
import { LoadingSpinner } from "./spinner";
import Login from "@/pages/auth/login";
import Onboarding from "../dashboard/onboarding";
import useAccountStore from "@/stores/account.provider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, isLoading } = useAuth();
  const { accounts } = useAccountStore();

  const isOnboardingEnabled = useMemo(() => {
    return accounts.length === 0 || !user?.stripe_price_id;
  }, [accounts, user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isLoading && !user) {
    return <Login />;
  }

  if (isOnboardingEnabled) {
    return (
      <>
        <Nav />
        <Onboarding />
      </>
    );
  }

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
