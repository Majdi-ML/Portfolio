import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const techs = ['React', 'Python', 'Power BI', 'SQL', 'Talend', 'Tableau'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#27272a] bg-[#161618] text-sm text-[#a1a1aa] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          I Build{' '}
          <span className="gradient-text">Data-Driven</span>
          <br />
          Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Full-stack developer & data analytics engineer crafting high-performance
          web applications and intelligent dashboards that turn raw data into
          actionable business insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-[#27272a] hover:border-[#6366f1]/50 text-[#a1a1aa] hover:text-white font-medium transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          {[
            { icon: Github, href: 'https://github.com/Majdi-ML' },
            { icon: Linkedin, href: 'https://linkedin.com/in/majdi-melliti' },
            { icon: Mail, href: 'mailto:Majdi.Melliti@esprit.tn' },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-[#6366f1]/50 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs text-[#a1a1aa] mr-2">Built with</span>
          {techs.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full border border-[#27272a] text-[#a1a1aa] bg-[#161618]"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-[#a1a1aa] hover:text-white transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
