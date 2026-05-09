import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { DrinksSVG } from './components/Graphics';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import { EventPanel } from './components/EventPanel';

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-gold selection:text-black flex flex-col pb-12 px-6 sm:px-12">
      <AnimatedBackground />
      <Navbar />

      {/* Main Content Container */}
      <main id="home" className="flex-1 w-full max-w-3xl mx-auto flex flex-col items-center justify-center space-y-16 lg:space-y-24 z-10 pt-32 md:pt-40">
        
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Logo Container - Made larger as requested */}
          <div className="w-96 h-96 md:w-[35rem] md:h-[35rem] relative">
             <img src="/logo.png" alt="Drop Out Logo" className="w-full h-full object-contain logo-led" />
             {/* Nota: L'immagine non è presente di default. Chiediamo all'utente di caricarla. */}
          </div>
          
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-glow-intense">
              <span className="text-gold">DROP</span> <span className="text-white">OUT</span>
            </h1>
            <p className="font-serif italic text-2xl md:text-3xl text-gold text-glow">
              esci dal corso, entra nel mood
            </p>
          </div>
        </motion.section>

        {/* Promo Section */}
        <motion.section 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div className="relative glass-panel border border-yellow-500/20 rounded-md p-8 md:p-12 text-center flex flex-col items-center box-glow max-w-xl w-full">
            {/* Corner Bracket Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/50 rounded-tl-sm"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/50 rounded-tr-sm"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/50 rounded-bl-sm"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/50 rounded-br-sm"></div>

            <div className="w-32 h-16 md:w-40 md:h-20 mb-6">
               <DrinksSVG />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 text-gold text-glow">
              2 SPRITZ + 1 SHOT<br/>
              DELLA CASA
            </h2>
            <p className="font-sans font-semibold tracking-[0.15em] text-gold-dim text-sm md:text-base mb-8 uppercase">
              Promo Universitari
            </p>

            {/* The Ticket / Price point */}
            <div className="relative group cursor-default">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded border border-yellow-600 blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              {/* Actual ticket body */}
              <div className="relative notched-ticket bg-surface border border-gold-dim px-8 py-4 flex flex-col items-center">
                <span className="text-xs font-bold tracking-widest text-gold/70 uppercase mb-1">Solo</span>
                <span className="font-serif text-5xl md:text-6xl text-gold text-glow">8€</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Details Section */}
        <section className="w-full flex flex-col md:flex-row gap-6 md:gap-12 justify-center max-w-4xl pt-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="flex-1 glass-panel border border-yellow-500/10 rounded overflow-hidden relative group"
          >
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-500/0 via-gold/50 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="p-6 flex items-start gap-4">
                <div className="mt-1">
                   <Calendar className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-wide">TUTTI I MARTEDÌ</h3>
                  <p className="text-white/60">dalle 16:00</p>
                  <p className="text-gold/80 text-sm font-medium mt-2">Primo appuntamento: 19 Maggio</p>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="flex-1 glass-panel border border-yellow-500/10 rounded overflow-hidden relative group"
          >
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-500/0 via-gold/50 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="p-6 flex items-start gap-4">
                <div className="mt-1">
                   <MapPin className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-wide line-clamp-1">PAN PER FOCACCIA - BICOCCA</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Piazza della Trivulziana, 1<br/>
                    20126 Milano (MI)
                  </p>
                </div>
             </div>
          </motion.div>
        </section>

        {/* Next Event Panel */}
        <EventPanel />

        {/* Contact Form Section */}
        <ContactForm />

      </main>
      
      {/* Footer minimal */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full text-center mt-24 mb-4 hover:opacity-100 transition-opacity text-xs tracking-widest text-gold font-sans uppercase"
      >
        © {new Date().getFullYear()} DROP OUT. Tutti i diritti riservati.
      </motion.footer>
    </div>
  );
}

export default App;

