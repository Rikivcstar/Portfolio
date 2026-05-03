import { Github, Linkedin, Instagram, ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/Rikivcstar", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/riki-reza", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/riki.reza", label: "Instagram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b0b0d] pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="text-3xl font-black tracking-tighter text-white font-heading">
              3R<span className="text-[#b0fb3a]">.</span>
            </a>
            <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs font-sans">
              Crafting premium digital experiences through minimal design and robust engineering. Available for global collaborations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#a3a3a3] hover:text-[#b0fb3a] hover:border-[#b0fb3a] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7 space-y-6">
            <h4 className="text-[11px] font-black text-[#666] uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-bold text-[#d1d1d1] hover:text-[#b0fb3a] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[11px] font-black text-[#666] uppercase tracking-[0.2em]">Say Hello</h4>
            <div className="space-y-2">
              <a href="mailto:ryansyah3r@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-[#b0fb3a] transition-colors block">
                ryansyah3r@gmail.com
              </a>
              <p className="text-sm text-[#666]">Bogor, Indonesia (GMT+7)</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black text-[#666] uppercase tracking-[0.2em]">
            © {currentYear} Riki Reza Ryansyah — All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[11px] font-black text-[#666] uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute -bottom-10 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h2 className="text-[20vw] font-black text-white whitespace-nowrap leading-none tracking-tighter uppercase translate-y-1/2">
          RIKI REZA
        </h2>
      </div>
    </footer>
  );
};
