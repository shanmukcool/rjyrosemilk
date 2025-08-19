import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import newlogoImg from "../assets/newlogo.png";
import newlogosmallImg from "../assets/rs.png"; // <-- make sure you have a smaller version, or reuse same logo

const RoseStreetButton = () => {
  const [showRoseStreet, setShowRoseStreet] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Closed (square button with logo) */}
      {!showRoseStreet && (
        <button
          onClick={() => setShowRoseStreet(true)}
          className="w-12 h-12 flex transition-all duration-500"
        >
          <img
            src={newlogosmallImg}
            alt="Rose Street Logo"
            className="w-12 h-12 object-contain"
          />
        </button>
      )}

      {/* Expanded (landscape card) — open anim only, instant close */}
      {showRoseStreet && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          // no `exit` prop => instant vanish on close
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-cream rounded-2xl text-center border-2 border-gold/30 rounded-2xl shadow-2xl py-5 px-0 flex flex-col items-center relative origin-bottom-right will-change-transform transform-gpu"
          >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="flex-shrink-0"
          >
            <img
              src={newlogoImg}
              alt="Rose Street Logo"
              className="w-48 h-20 object-cover rounded-xl"
            />
          </motion.div>

          {/* Text + Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.18 }}
            className="flex flex-col gap-2 text-center"
          >
            <h3 className="text-xl font-bold text-dark font-serif">Our Sub-brand</h3>
            <a
              href="https://rrosestreet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-rose-500 text-cream px-5 py-2 rounded-full text-sm font-bold hover:bg-dark transition-all duration-300 border border-gold/50"
            >
              Experience
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>

          {/* Close button */}
          <button
            onClick={() => setShowRoseStreet(false)}
            className="absolute top-2 right-2 text-dark/60 hover:text-dark"
          >
            ✕
          </button>
        </motion.div>
      )}

    </div>
  );
};

export default RoseStreetButton;
