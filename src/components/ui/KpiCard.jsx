import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LayoutDashboard, Cpu, Building2 } from 'lucide-react';

const iconMap = {
  BarChart3,
  LayoutDashboard,
  Cpu,
  Building2,
};

function AnimatedCounter({ target, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function KpiCard({ kpi, index }) {
  const Icon = iconMap[kpi.icon] || BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      className="group relative p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]
                 hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300
                 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-blue-500/5
                      group-hover:bg-blue-500/10 transition-colors blur-xl" />
      
      <div className="relative flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center
                        group-hover:bg-blue-500/20 transition-colors">
          <Icon size={18} className="text-blue-400" />
        </div>
        <div>
          <div className="text-xl font-bold text-white/90 leading-none mb-1">
            <AnimatedCounter target={kpi.value} suffix={kpi.suffix} />
          </div>
          <div className="text-xs text-white/40 uppercase tracking-wider">{kpi.label}</div>
        </div>
      </div>
    </motion.div>
  );
}
