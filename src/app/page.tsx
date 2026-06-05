import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechSec from '@/components/TechSec';
import Waitlist from '@/components/Waitlist';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Purpose and Features Section */}
        <div id="proposito">
          <Features />
        </div>

        {/* Technology & Security Section */}
        <TechSec />

        {/* Waitlist Call To Action Section */}
        <Waitlist />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#05080f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Be<span className="text-primary">Bar</span></span>
            <span>&copy; {new Date().getFullYear()} • Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#proposito" className="hover:text-primary transition-colors">Propósito</a>
            <a href="#features" className="hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#tech" className="hover:text-primary transition-colors">Segurança</a>
            <a href="#waitlist" className="hover:text-primary transition-colors">Lista de Espera</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
