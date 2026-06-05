"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Layers, Lock } from 'lucide-react';

export default function TechSec() {
  const cards = [
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Segurança de Ponta a Ponta",
      desc: "Autenticação moderna baseada em tokens JWT e controle de acesso rigoroso via escopos dinâmicos (RBAC). A segurança dos dados operacionais e informações financeiras do estabelecimento é nossa maior prioridade."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Tempo Real com WebSockets",
      desc: "Sincronização instantânea de pedidos e chamados aos garçons via protocolo STOMP e SockJS. Com escalabilidade horizontal habilitada por meio de pub/sub integrado ao Redis, garantindo tempo de resposta zero."
    },
    {
      icon: <Layers className="w-8 h-8 text-violet-400" />,
      title: "Arquitetura Moderna",
      desc: "Desenvolvido sobre as tecnologias mais robustas do mercado. Backend escalável construído em Java 25 e Spring Boot 4. Frontends em React 19 e TypeScript com compilação ultra rápida pelo Vite 6."
    }
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary"
          >
            Engenharia & Confiabilidade
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4"
          >
            Feito para ser rápido. Estruturado para ser seguro.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base"
          >
            Unimos as melhores práticas de criptografia, comunicação distribuída e desenvolvimento moderno para entregar estabilidade do primeiro ao último pedido do dia.
          </motion.p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col items-start hover:border-primary/25 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Security Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 glass-panel rounded-3xl p-8 border border-white/5 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
            <ShieldAlert className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1.5">Conformidade e Proteção de Dados</h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              O BeBar segue princípios rígidos de desenvolvimento seguro. O controle de privilégios assegura que cada funcionário (garçom, cozinheiro, gerente) acesse estritamente o necessário para sua operação, mitigando o risco de acessos não autorizados.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
