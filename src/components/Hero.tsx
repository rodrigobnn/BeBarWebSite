"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, QrCode, ClipboardList, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 w-full">
        {/* Left column: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-primary mb-8"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Solução Completa em Desenvolvimento</span>
          </motion.div>

          {/* Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Revolucione a experiência no bar, do <span className="text-primary bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">pedido à gestão</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
          >
            O BeBar conecta clientes e estabelecimentos em um ecossistema inteligente em tempo real. Faça pedidos diretamente da mesa via QR Code, acompanhe a preparação e gerencie tudo por um painel back-office moderno.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#waitlist"
              className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-slate-950 font-bold shadow-lg shadow-primary/25 transition-all duration-200"
            >
              Entrar na Lista de Espera
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold transition-all duration-200"
            >
              Conhecer Funcionalidades
            </a>
          </motion.div>
        </div>

        {/* Right column: Glassmorphic Concepts mockup */}
        <div className="lg:col-span-5 relative flex justify-center items-center w-full">
          <div className="relative w-full max-w-[420px]">
            {/* Card 1: BeBar Cliente simulation */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-3xl p-6 shadow-2xl relative z-20 mb-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">BeBar Cliente</h3>
                    <p className="text-[10px] text-slate-400">Mesa 07 • Sessão Ativa</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  Conectado
                </span>
              </div>

              {/* Simulated Order Items */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">1x Hambúrguer Artesanal</span>
                  <span className="font-bold text-white">R$ 38,90</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">1x Chopp Pilsen 500ml</span>
                  <span className="font-bold text-white">R$ 14,00</span>
                </div>
              </div>

              {/* Progress status */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Status do Pedido:</span>
                <span className="font-bold text-primary animate-pulse">Em preparo na cozinha</span>
              </div>
            </motion.div>

            {/* Card 2: BeBar Estabelecimento simulation */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: 5 }}
              className="glass-panel rounded-3xl p-6 shadow-2xl relative z-10 lg:-ml-12 border border-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 text-violet-400">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">Painel Gestão</h3>
                    <p className="text-[10px] text-slate-400">Painel do Estabelecimento</p>
                  </div>
                </div>
              </div>

              {/* Statistics simulation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-slate-400">Pedidos Ativos</p>
                  <p className="text-lg font-extrabold text-white mt-1">12</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-slate-400">Tempo de Espera</p>
                  <p className="text-lg font-extrabold text-green-400 mt-1">~9 min</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
