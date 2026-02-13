import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/Majdi-ML' },
  { icon: Linkedin, href: 'https://linkedin.com/in/majdi-melliti' },
  { icon: Mail, href: 'mailto:Majdi.Melliti@esprit.tn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0b]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="text-2xl font-bold gradient-text inline-block mb-3"
            >
              Majdi.
            </a>
            <p className="text-sm text-[#71717a] leading-relaxed max-w-xs">
              Full-stack developer & data analytics engineer passionate about building
              digital experiences that matter.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#71717a] hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-[#27272a] text-[#71717a] hover:text-white hover:border-[#6366f1]/50 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#27272a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#52525b]">
            &copy; {new Date().getFullYear()} Majdi Melliti. All rights reserved.
          </p>
          <p className="text-xs text-[#52525b] flex items-center gap-1">
            Built with <Heart size={12} className="text-[#6366f1]" /> using React &amp;
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
