"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [type, setType] = useState('general');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, type }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Cadastro realizado com sucesso!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Ocorreu um erro. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Erro de conexão. Verifique sua internet e tente novamente.');
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl mx-auto px-6 relative z-10 text-center">
        
        {/* Texts */}
        <div className="mb-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary"
          >
            Faça parte da evolução
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-white mt-3 mb-4"
          >
            Acompanhe o lançamento do BeBar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-xs md:text-sm"
          >
            Inscreva seu e-mail abaixo e seja notificado em primeira mão assim que a plataforma estiver pronta para operar.
          </motion.p>
        </div>

        {/* Form panel with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-panel rounded-3xl p-8 border border-white/10 text-left shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              // Success Screen
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                  className="text-primary mb-4"
                >
                  <CheckCircle2 className="w-16 h-16" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Inscrição Confirmada!</h3>
                <p className="text-slate-300 text-xs md:text-sm max-w-sm">
                  {message}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-xs text-primary font-bold hover:underline"
                >
                  Cadastrar outro e-mail
                </motion.button>
              </motion.div>
            ) : (
              // Active Form Screen
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Interest Type selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                    Quem é você?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'establishment', label: 'Dono de Bar' },
                      { id: 'client', label: 'Cliente' },
                      { id: 'general', label: 'Curioso' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setType(item.id)}
                        className={`py-2 px-3 text-center text-xs font-semibold rounded-xl border transition-all duration-200 ${
                          type === item.id
                            ? 'bg-primary/10 border-primary text-primary shadow-inner'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Endereço de E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Feedback messages */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-left"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{message}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={status === 'loading'}
                  type="submit"
                  className="glow-btn flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary hover:bg-primary-hover text-slate-950 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Cadastrando...</span>
                    </>
                  ) : (
                    <>
                      <span>Quero Fazer Parte</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
