import { motion } from 'framer-motion';

export default function AnimatedProgress({ value, gradient = 'from-blue-500 to-blue-400', delay = 0 }) {
  return (
    <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.2, delay: 0.3 + delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                        animate-shimmer" />
      </motion.div>
    </div>
  );
}
