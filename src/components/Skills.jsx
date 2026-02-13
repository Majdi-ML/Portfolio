import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#6366f1',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    color: '#8b5cf6',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python / Flask', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Java / J2EE', level: 85 },
    ],
  },
  {
    category: 'Data & BI',
    color: '#06b6d4',
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'SQL / PL-SQL', level: 90 },
      { name: 'Talend / ETL', level: 80 },
      { name: 'Python (Pandas, NumPy)', level: 85 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#10b981',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux', level: 80 },
      { name: 'Jira / Scrum', level: 85 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-[#d4d4d8]">{name}</span>
        <span className="text-xs text-[#71717a]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#27272a] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#6366f1] tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg leading-relaxed">
            A versatile toolkit spanning full-stack development, data analytics, and DevOps —
            continuously expanded through professional experience and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="p-8 rounded-2xl border border-[#27272a] bg-[#161618]/60"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              </div>
              {group.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  color={group.color}
                  delay={gi * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
