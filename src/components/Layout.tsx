import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="bg-slate-900/90 text-slate-300 py-6 flex flex-col min-h-screen">
            <header className="bg-slate-900/80 text-white backdrop-blur-sm shadow-sm">
                <div className="container mx-auto px-4">
                  <Header />
                </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-10">
                <div className="max-w-7xl mx-auto">
                  <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}