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
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] md:w-96 pointer-events-none"
        >
          <div className="pointer-events-auto bg-surface border border-gold/20 rounded-lg p-5 md:p-6 flex flex-col gap-5 box-glow relative">
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 text-white/40 hover:text-gold transition-colors"
              aria-label="Chiudi"
            >
              <X size={18} />
            </button>

            <div className="text-xs md:text-sm text-white/80 leading-relaxed pr-2">
              <p>
                Utilizziamo i cookie per offrirti la migliore esperienza. 
                Scopri di più nella nostra{' '}
                <a href="/privacy" className="text-gold hover:underline font-medium">Privacy Policy</a>.
              </p>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={handleReject}
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-1.5 bg-gold text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-gold-dim transition-all hover:scale-105 active:scale-95"
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
