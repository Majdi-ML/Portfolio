import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { profile } from '../../data/profile';

export default function ContactContent() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'majdi-melliti', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'Majdi-ML', href: profile.github },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ];

  return (
    <div className="p-7 space-y-7">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-xl font-bold text-white/90 mb-2">Get in Touch</h3>
        <p className="text-base text-white/50">
          Open to opportunities in Data Engineering, BI, and Full-Stack Development
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-2 gap-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href?.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="group flex items-center gap-3 p-4 rounded-xl bg-white/[0.03]
                       border border-white/[0.06] hover:bg-white/[0.06]
                       hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center
                            group-hover:bg-blue-500/20 transition-colors">
              <c.icon size={18} className="text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{c.label}</div>
              <div className="text-base text-white/80">{c.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
      >
        <h4 className="text-base font-semibold text-white/80 mb-3">Send a Message</h4>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
                       placeholder:text-white/25 outline-none focus:border-blue-500/40
                       transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
                       placeholder:text-white/25 outline-none focus:border-blue-500/40
                       transition-colors"
          />
        </div>
        <textarea
          placeholder="Your message..."
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white
                     placeholder:text-white/25 outline-none focus:border-blue-500/40
                     transition-colors resize-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30
                     text-sm text-blue-400 hover:bg-blue-500/30 transition-colors cursor-pointer"
        >
          {sent ? (
            <>
              <CheckCircle size={14} /> Sent!
            </>
          ) : (
            <>
              <Send size={14} /> Send Message
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
}
