import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contatto da Sito Web: ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`);
    window.location.href = `mailto:info@dropoutevents.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel border border-gold/20 rounded-2xl p-8 md:p-12 box-glow relative overflow-hidden"
        >
          {/* Background Accents */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/5 blur-[100px] rounded-full"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gold text-glow mb-4">CONTATTACI</h2>
            <p className="text-white/60 tracking-wide uppercase text-sm">Esci dal corso, entra nel mood. Scrivici per info o collaborazioni.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gold/70 uppercase tracking-widest ml-1">Nome</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    placeholder="Il tuo nome"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gold/70 uppercase tracking-widest ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    placeholder="la-tua@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gold/70 uppercase tracking-widest ml-1">Messaggio</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gold/50" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Di cosa hai bisogno?"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full notched-ticket bg-gold text-black font-black py-5 uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-white transition-colors group"
            >
              <span>Invia Messaggio</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
