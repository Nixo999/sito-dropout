import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const CONSENT_KEY = 'dropout-cookie-consent';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      setShowBanner(true);
    } else if (consent === 'true') {
      loadTrackingScripts();
    }
  }, []);

  const loadTrackingScripts = () => {
    console.log('Caricamento script di tracciamento...');
    // Qui andrebbero inseriti i reali script di tracciamento
    // Esempio per Google Analytics:
    /*
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_ID";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_ID');
    */
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    setShowBanner(false);
    loadTrackingScripts();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'false');
    setShowBanner(false);
  };

  const handleClose = () => {
    handleReject(); // GDPR: se chiudi senza accettare, è come rifiutare il tracciamento
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto glass-panel border border-gold/20 rounded-lg p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-6 box-glow relative">
            <button 
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/40 hover:text-gold transition-colors"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>

            <div className="flex-1 text-sm md:text-base text-white/80 leading-relaxed pr-4">
              <p>
                Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito. 
                Puoi scoprire di più su quali cookie stiamo utilizzando o disattivarli nella nostra{' '}
                <a href="/privacy" className="text-gold hover:underline font-medium">Privacy Policy</a>.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={handleReject}
                className="px-6 py-2 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-2 bg-gold text-black font-bold uppercase tracking-widest rounded hover:bg-gold-dim transition-all hover:scale-105 active:scale-95"
              >
                Accetta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
