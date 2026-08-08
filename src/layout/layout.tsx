import { ReactNode } from "react";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 w-screen">
      <Navbar  />
      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}