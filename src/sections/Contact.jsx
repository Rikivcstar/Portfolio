import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimateOnScroll } from "@/components/MotionWrappers";
import { motion, AnimatePresence } from "framer-motion";
import Beams from "@/components/bits/Beams";
import SpotlightCard from "@/components/bits/SpotlightCard";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Rikivcstar", value: "@Rikivcstar" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/riki-reza", value: "Riki Reza" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/riki.reza", value: "@riki.reza" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "ryansyah3r@gmail.com", href: "mailto:ryansyah3r@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bogor, Indonesia", href: "#" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      // Logic for EmailJS...
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus({ type: "success", message: "Message sent! I'll be in touch soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus({ type: "error", message: "Failed to send. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative min-h-screen flex items-center bg-[#0b0b0d] overflow-hidden">
      {/* Three.js Background Beams */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Beams 
          lightColor="#b0fb3a" 
          beamNumber={15} 
          speed={0.8} 
          noiseIntensity={2} 
          scale={0.15} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Header & Info */}
          <div className="lg:col-span-6 space-y-12">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
                <span className="text-xl">✦</span>
                <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">Contact</span>
              </div>
              <h2 className="text-[4rem] md:text-[6.5rem] font-bold tracking-tighter text-white font-heading leading-[0.9] mb-8">
                Let's Build <br /> <span className="text-[#b0fb3a]">Something</span> <br /> Great.
              </h2>
              <p className="text-[#a3a3a3] text-lg md:text-xl leading-relaxed font-sans max-w-md">
                I'm currently available for new projects and collaborations. Send a message or reach out via socials.
              </p>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <AnimateOnScroll key={idx} delay={0.1 * idx}>
                  <SpotlightCard className="p-6 border-white/5 bg-[#0b0b0d]/50 backdrop-blur-sm">
                    <info.icon size={24} className="text-[#b0fb3a] mb-4" />
                    <p className="text-xs font-bold text-[#666] uppercase tracking-widest mb-1">{info.label}</p>
                    <a href={info.href} className="text-white font-bold hover:text-[#b0fb3a] transition-colors">{info.value}</a>
                  </SpotlightCard>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8">
              {socialLinks.map((social, idx) => (
                <AnimateOnScroll key={idx} delay={0.3 + (idx * 0.1)}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    className="group flex items-center gap-2 text-[#a3a3a3] hover:text-white transition-colors"
                  >
                    <social.icon size={18} className="group-hover:text-[#b0fb3a] transition-colors" />
                    <span className="font-bold text-sm uppercase tracking-wider">{social.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-6">
            <AnimateOnScroll delay={0.4}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#b0fb3a]/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-[#0b0b0d] border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2 group/input">
                      <label className="text-[11px] font-black text-[#666] uppercase tracking-[0.2em]">Your Name</label>
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white outline-none focus:border-[#b0fb3a] transition-colors placeholder:text-white/5"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2 group/input">
                      <label className="text-[11px] font-black text-[#666] uppercase tracking-[0.2em]">Email Address</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white outline-none focus:border-[#b0fb3a] transition-colors placeholder:text-white/5"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2 group/input">
                      <label className="text-[11px] font-black text-[#666] uppercase tracking-[0.2em]">Project Brief</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white outline-none focus:border-[#b0fb3a] transition-colors resize-none placeholder:text-white/5"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button 
                      disabled={isLoading}
                      className="group/btn w-full bg-[#b0fb3a] hover:bg-white text-black py-6 rounded-full font-black text-lg uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden relative"
                    >
                      <span className="relative z-10">{isLoading ? "Sending..." : "Send Message"}</span>
                      {!isLoading && <Send size={20} className="relative z-10 transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />}
                      <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    </button>

                    <AnimatePresence>
                      {submitStatus.type && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className={`flex items-center gap-3 p-4 rounded-2xl ${
                            submitStatus.type === "success" 
                              ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                              : "bg-red-500/10 text-red-400 border border-red-500/20"
                          }`}
                        >
                          {submitStatus.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                          <span className="text-sm font-bold uppercase tracking-tight">{submitStatus.message}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
