import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap, Wrench, Globe, Award } from 'lucide-react';
import { profile, skills, experiences, education, languages, softSkills, activities } from '../../data/profile';
import majdiPhoto from '../../assets/majdi.png';

export default function CvContent() {
  const topSkills = skills.slice(0, 12);

  return (
    <div className="p-7 space-y-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div className="flex items-center gap-3">
          <img src={majdiPhoto} alt="Majdi" className="w-16 h-16 rounded-xl object-cover border border-blue-500/20" />
          <div>
            <h2 className="text-2xl font-bold text-white/90">{profile.name}</h2>
            <p className="text-blue-400 text-base font-medium">{profile.title}</p>
            <p className="text-sm text-white/40 mt-1">{profile.location} • {profile.email} • {profile.phone}</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500/15
                           border border-blue-500/25 text-sm text-blue-400
                           hover:bg-blue-500/25 transition-colors cursor-pointer shrink-0">
          <Download size={13} /> Download PDF
        </button>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
      >
        <div className="flex items-center gap-2.5 mb-2">
          <FileText size={15} className="text-blue-400" />
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Summary</h3>
        </div>
        <p className="text-sm text-white/55 leading-relaxed">{profile.bio}</p>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
      >
        <div className="flex items-center gap-2.5 mb-3">
          <Briefcase size={15} className="text-blue-400" />
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Experience</h3>
        </div>
        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-3">
              <div className="w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 shrink-0" />
              <div>
                <div className="text-sm font-medium text-white/85">{exp.role}</div>
                <div className="text-xs text-white/45">{exp.company} • {exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
      >
        <div className="flex items-center gap-2.5 mb-3">
          <GraduationCap size={15} className="text-purple-400" />
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Education</h3>
        </div>
        <div className="space-y-2.5">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 shrink-0" />
              <div>
                <div className="text-sm font-medium text-white/85">{edu.degree}</div>
                <div className="text-xs text-white/45">{edu.school} • {edu.period}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <Wrench size={15} className="text-emerald-400" />
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {topSkills.map((s) => (
              <span key={s.name} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-xs text-white/60">
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Languages & Activities */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <Globe size={15} className="text-cyan-400" />
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Languages</h3>
          </div>
          <div className="space-y-1.5 mb-4">
            {languages.map((l) => (
              <div key={l.name} className="flex justify-between text-xs">
                <span className="text-white/60">{l.name}</span>
                <span className="text-white/35">{l.level}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2.5 mb-2">
            <Award size={15} className="text-amber-400" />
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Activities</h3>
          </div>
          {activities.map((a) => (
            <div key={a} className="text-xs text-white/50">• {a}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
