import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Sousse, Tunisia' },
  { icon: Phone, label: 'Phone', value: '+216 50 364 632' },
  { icon: Mail, label: 'Email', value: 'Majdi.Melliti@esprit.tn' },
];

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/majdi-melliti', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Majdi-ML', label: 'GitHub' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // mailto fallback
    const mailtoLink = `mailto:Majdi.Melliti@esprit.tn?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailtoLink, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[#27272a] bg-[#0a0a0b] text-white placeholder-[#52525b] focus:border-[#6366f1]/50 focus:outline-none focus:ring-1 focus:ring-[#6366f1]/30 transition-all';

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#6366f1] tracking-widest uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Work{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#27272a] bg-[#161618]/60"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#71717a] mb-0.5">{c.label}</div>
                  <div className="text-sm text-[#d4d4d8]">{c.value}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-[#6366f1]/50 transition-all"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5 p-8 rounded-2xl border border-[#27272a] bg-[#161618]/60"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6366f1] hover:bg-[#818cf8] text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-50"
              disabled={sent}
            >
              {sent ? 'Message Sent!' : 'Send Message'}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
