import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WindowManagerProvider } from './context/WindowManager';
import wallpaper from './assets/windows11wallpapper.png';
import { Desktop, Taskbar } from './components/Desktop';
import Window from './components/Window';
import BootScreen from './components/BootScreen';
import AboutContent from './components/windows/AboutContent';
import ProjectsContent from './components/windows/ProjectsContent';
import SkillsContent from './components/windows/SkillsContent';
import ExperienceContent from './components/windows/ExperienceContent';
import ContactContent from './components/windows/ContactContent';
import CvContent from './components/windows/CvContent';
import {
  User,
  FolderKanban,
  Briefcase,
  BarChart3,
  Mail,
  FileText,
} from 'lucide-react';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      <WindowManagerProvider>
        {/* Desktop Background */}
        <div className="fixed inset-0 bg-[#0a0a1a] overflow-hidden select-none">
          {/* Windows 11 Wallpaper */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${wallpaper})` }}
          />
          {/* Slight vignette overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

          {/* Desktop Icons */}
          <Desktop />

          {/* Windows */}
          <Window id="about" title="About Me" icon={User}>
            <AboutContent />
          </Window>
          <Window id="projects" title="Projects" icon={FolderKanban}>
            <ProjectsContent />
          </Window>
          <Window id="skills" title="Skills & Analytics" icon={BarChart3}>
            <SkillsContent />
          </Window>
          <Window id="experience" title="Experience" icon={Briefcase}>
            <ExperienceContent />
          </Window>
          <Window id="contact" title="Contact" icon={Mail}>
            <ContactContent />
          </Window>
          <Window id="cv" title="Curriculum Vitae" icon={FileText}>
            <CvContent />
          </Window>

          {/* Taskbar */}
          <Taskbar />
        </div>
      </WindowManagerProvider>
    </>
  );
}

export default App;
