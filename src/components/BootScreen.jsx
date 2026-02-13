import { motion } from 'framer-motion';
import majdiPhoto from '../assets/majdi.png';

export default function BootScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[99999] bg-[#0a0a1a] flex flex-col items-center justify-center"
    >
      {/* Photo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="mb-8"
      >
        <img
          src={majdiPhoto}
          alt="Majdi Melliti"
          className="w-24 h-24 rounded-full object-cover border-3 border-blue-500/40
                     shadow-2xl shadow-blue-500/30"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl font-bold text-white/90 mb-1"
      >
        Majdi Melliti
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-sm text-blue-400/80 mb-10"
      >
        Data Analytics & BI Engineer
      </motion.p>

      {/* Loading Dots */}
      <div className="flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        ))}
      </div>
    </motion.div>
  );
}
