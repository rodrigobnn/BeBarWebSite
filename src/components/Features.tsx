"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShoppingBag, BellRing, ChefHat, BarChart3, Users, Landmark } from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const clientFeatures = [
    {
      icon: <QrCode className="w-6 h-6 text-primary" />,
      title: "Check-in Rápido via QR Code",
      description: "Acesse o cardápio e vincule-se à mesa instantaneamente aproximando a câmera do celular, sem precisar baixar apps."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-primary" />,
      title: "Cardápio e Pedidos na Palma da Mão",
      description: "Navegue pelo cardápio atualizado, monte seu carrinho e envie os pedidos diretamente à cozinha de forma rápida."
    },
    {
      icon: <BellRing className="w-6 h-6 text-primary" />,
      title: "Chamar Garçom Instantâneo",
      description: "Precisa de ajuda ou guardanapos extras? Solicite a presença do garçom com apenas um clique no navegador."
    }
  ];

  const adminFeatures = [
    {
      icon: <ChefHat className="w-6 h-6 text-violet-400" />,
      title: "Painel Kanban da Cozinha",
      description: "Acompanhe e mova os pedidos pendentes, em preparo e prontos em tempo real com facilidade e zero desperdício de papel."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
      title: "Dashboard Comercial & Relatórios",
      description: "Tenha controle do faturamento diário, tempo médio de entrega e exporte relatórios financeiros completos em PDF."
    },
    {
      icon: <Users className="w-6 h-6 text-violet-400" />,
      title: "Gestão Operacional de Equipe",
      description: "Cadastre mesas, adicione garçons específicos a setores e monitore chamados de atendimento instantâneos."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#070a12]/60 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Uma plataforma, <span className="text-primary">duas soluções</span> perfeitamente integradas.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base"
          >
            Conectamos a ponta do cliente que consome na mesa à gerência que pilota o estabelecimento, reduzindo atritos operacionais de ponta a ponta.
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* BeBar Cliente Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                Para o Consumidor
              </span>
              <h3 className="text-xl font-bold text-white">BeBar Cliente</h3>
            </div>
            
            <div className="space-y-6">
              {clientFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-start gap-4 border border-white/5"
                >
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{feat.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BeBar Estabelecimento Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                Para o Estabelecimento
              </span>
              <h3 className="text-xl font-bold text-white">BeBar Back-office</h3>
            </div>

            <div className="space-y-6">
              {adminFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-start gap-4 border border-white/5"
                >
                  <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{feat.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
