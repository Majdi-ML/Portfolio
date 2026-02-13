import { motion } from 'framer-motion';
import { Code2, BarChart3, Server, Palette } from 'lucide-react';

const cards = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'End-to-end web applications with React, Angular, Spring Boot, Node.js and scalable REST APIs.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    desc: 'Interactive dashboards, ETL pipelines, and predictive models using Power BI, Tableau, Python & SQL.',
  },
  {
    icon: Server,
    title: 'Cloud & DevOps',
    desc: 'Docker containerization, CI/CD pipelines, and cloud deployments for reliable infrastructure.',
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    desc: 'Responsive, modern interfaces with thoughtful user experiences and clean design systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#6366f1] tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Polyvalent Developer &{' '}
            <span className="gradient-text">Data Engineer</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg leading-relaxed">
            Currently pursuing a Master&apos;s in MDSI at ESPRIT Business School, I combine software
            engineering expertise with data analytics skills to deliver end-to-end digital solutions
            — from pixel-perfect UIs to automated BI pipelines.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '10+', label: 'Projects Completed' },
            { value: '5', label: 'Professional Stages' },
            { value: '15+', label: 'Technologies' },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl border border-[#27272a] bg-[#161618]/60"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-sm text-[#a1a1aa]">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card group p-8 rounded-2xl border border-[#27272a] bg-[#161618]/60 hover:border-[#6366f1]/30 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] mb-5 group-hover:bg-[#6366f1]/20 transition-colors">
                <c.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
