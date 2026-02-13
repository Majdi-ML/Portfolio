import { motion } from 'framer-motion';
import { ExternalLink, Globe, Monitor } from 'lucide-react';

const projects = [
  {
    title: 'Chahed — Ulmus Platform',
    category: 'Web Application',
    icon: Globe,
    description:
      'An enterprise web platform built for Ulmus Technologie. Features include real-time data visualization, role-based access control, and responsive dashboards for monitoring key business metrics.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API'],
    link: 'https://chahed.ulmus.io',
    color: '#6366f1',
    metrics: [
      { label: 'Active Users', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    title: 'Chevreuse Navette & Cab',
    category: 'Web Application',
    icon: Globe,
    description:
      'A shuttle and cab booking platform with real-time availability, online reservation management, route optimization, and an admin back-office for fleet management.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    link: 'https://chevreuse-navette-cab.com',
    color: '#8b5cf6',
    metrics: [
      { label: 'Daily Bookings', value: '100+' },
      { label: 'Routes', value: '25+' },
    ],
  },
  {
    title: 'Syndic Management System',
    category: 'Desktop Application',
    icon: Monitor,
    description:
      'A comprehensive desktop application for property syndicate management — tenant tracking, payment history, expense reporting, meeting management, and automated document generation.',
    tech: ['Java', 'JavaFX', 'MySQL', 'JasperReports', 'FXML'],
    link: null,
    color: '#06b6d4',
    metrics: [
      { label: 'Properties', value: '200+' },
      { label: 'Modules', value: '8' },
    ],
  },
  {
    title: 'General Doctor Management',
    category: 'Desktop Application',
    icon: Monitor,
    description:
      'A desktop solution for general practitioners to manage patient records, appointments, prescriptions, consultation history, and generate medical certificates with a streamlined UI.',
    tech: ['Java', 'JavaFX', 'MySQL', 'Scene Builder', 'FXML'],
    link: null,
    color: '#10b981',
    metrics: [
      { label: 'Patients', value: '1 000+' },
      { label: 'Features', value: '12' },
    ],
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative rounded-2xl border border-[#27272a] bg-[#161618]/60 overflow-hidden hover:border-[#6366f1]/30 transition-all duration-300"
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span
              className="inline-block text-xs font-medium tracking-wider uppercase mb-2 px-3 py-1 rounded-full"
              style={{
                color: project.color,
                backgroundColor: `${project.color}15`,
              }}
            >
              {project.category}
            </span>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          </div>
          <div
            className="w-11 h-11 flex items-center justify-center rounded-xl"
            style={{ backgroundColor: `${project.color}15` }}
          >
            <project.icon size={22} style={{ color: project.color }} />
          </div>
        </div>

        {/* Description */}
        <p className="text-[#a1a1aa] leading-relaxed mb-6">{project.description}</p>

        {/* Metrics */}
        <div className="flex gap-6 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-lg font-bold text-white">{m.value}</div>
              <div className="text-xs text-[#71717a]">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full border border-[#27272a] text-[#a1a1aa] bg-[#0a0a0b]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: project.color }}
          >
            Visit Live Site
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#6366f1] tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of recent web and desktop applications I&apos;ve designed, developed,
            and deployed — each solving real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
