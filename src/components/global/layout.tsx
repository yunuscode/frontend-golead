import React from "react";
import Nav from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <div className="flex-col flex">{children}</div>
    </>
  );
}
