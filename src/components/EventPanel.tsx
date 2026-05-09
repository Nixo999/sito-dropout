import React from 'react';
import { Calendar, MapPin, Ticket, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const EventPanel: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto mt-24 mb-12"
      id="event-details"
    >
      <div className="glass-panel border border-gold/20 rounded-2xl overflow-hidden box-glow flex flex-col">
        {/* Top Image */}
        <div className="h-64 md:h-80 w-full relative overflow-hidden">
          <img 
            src="/event_vol1.png" 
            alt="Drop Out Vol 1 Event" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-black text-[10px] font-extrabold px-3 py-1 rounded-full tracking-widest uppercase">
              Prossimo Evento
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gold text-glow tracking-tight">
              DROP OUT | Vol. 1
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-white/90">
              Esci dal corso, entra nel mood.
            </p>
          </div>

          <p className="text-white/70 leading-relaxed text-lg">
            Il countdown è iniziato. Martedì <span className="text-gold font-bold">19 maggio</span>, il martedì della Bicocca cambia marcia.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {[
              { icon: <Sparkles className="w-4 h-4" />, text: "Vibe in crescita" },
              { icon: <CheckCircle2 className="w-4 h-4" />, text: "Mettici la firma" },
              { icon: <Sparkles className="w-4 h-4" />, text: "Solo Good Vibes" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gold-dim/80">
                {item.icon}
                <span className="font-sans font-bold text-sm uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {/* Event Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gold/10">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-gold/60 uppercase tracking-widest mb-1">Dove</p>
                <p className="text-white font-medium">Pan per Focaccia - Bicocca</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gold/10">
                <Ticket className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-gold/60 uppercase tracking-widest mb-1">Promo</p>
                <p className="text-white font-medium">2 Spritz + 1 Shot = 8€</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gold/10">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-gold/60 uppercase tracking-widest mb-1">Quando</p>
                <p className="text-white font-medium">Martedì 19 Maggio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
