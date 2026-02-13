import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, kpis } from '../../data/profile';
import AnimatedProgress from '../ui/AnimatedProgress';
import KpiCard from '../ui/KpiCard';
import TechIcon from '../ui/TechIcon';

const categoryColors = {
  'Data & BI': { bg: 'bg-blue-500/10', text: 'text-blue-400', bar: 'from-blue-500 to-cyan-400' },
  'Programming': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', bar: 'from-emerald-500 to-green-400' },
  'Web': { bg: 'bg-purple-500/10', text: 'text-purple-400', bar: 'from-purple-500 to-pink-400' },
  'Databases': { bg: 'bg-amber-500/10', text: 'text-amber-400', bar: 'from-amber-500 to-orange-400' },
  'ML & AI': { bg: 'bg-rose-500/10', text: 'text-rose-400', bar: 'from-rose-500 to-red-400' },
  'DevOps': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', bar: 'from-cyan-500 to-sky-400' },
};

const categories = [...new Set(skills.map((s) => s.category))];

export default function SkillsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="p-7 space-y-7">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <KpiCard key={kpi.label} kpi={kpi} index={i} />
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer
                       ${activeCategory === cat
                         ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                         : 'bg-white/5 text-white/50 border border-white/8 hover:bg-white/10'
                       }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="space-y-3">
        {filtered.map((skill, i) => {
          const colors = categoryColors[skill.category] || categoryColors['DevOps'];
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]
                         hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md ${colors.bg} flex items-center justify-center`}>
                    <TechIcon iconKey={skill.icon} size={17} />
                  </div>
                  <span className="text-base font-medium text-white/90">{skill.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-md ${colors.bg} ${colors.text}`}>
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm text-white/50 font-mono">{skill.level}%</span>
              </div>
              <AnimatedProgress value={skill.level} gradient={colors.bar} delay={i * 0.04} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
