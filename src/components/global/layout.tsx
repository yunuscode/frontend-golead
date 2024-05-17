import React from "react";
import Nav from "./nav";
import useAuth from "@/hooks/useAuth";
import { LoadingSpinner } from "./spinner";
import Login from "@/pages/auth/login";
import Onboarding from "../dashboard/onboarding";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, isLoading } = useAuth();

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

  return (
    <>
      <Nav />
      <Onboarding />
      {/* <div className="flex-col flex">{children}</div> */}
    </>
  );
}
