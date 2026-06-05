"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Propósito', href: '#proposito' },
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Segurança & Tech', href: '#tech' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-[#090d16]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="BeBar Logo" 
              fill
              className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-110"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Be<span className="text-primary amber-glow">Bar</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="glow-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-slate-950 text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200"
          >
            Fazer Parte
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/5 bg-[#090d16]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-primary hover:bg-primary-hover text-slate-950 font-bold shadow-lg shadow-primary/20 transition-all"
              >
                Fazer Parte
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
