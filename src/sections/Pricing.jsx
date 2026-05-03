import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/MotionWrappers";
import SpotlightCard from "@/components/bits/SpotlightCard";

const categories = [
  "Landing Page",
  "Web Company Profile",
  "Web Travel & Tour",
  "Web Toko Online",
  "Web Sistem Management",
  "Optimasi SEO",
];

const pricingData = {
  // ... (keeping the same pricingData structure as in the original file)
  "Landing Page": [
    {
      name: "Starter",
      price: "1.500.000",
      tagline: "Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.",
      features: ["Free Domain (.com)", "Shared Hosting (6 Bulan)", "Desain Responsif (Mobile & Desktop)", "1 Halaman Landing Page", "1 Email Bisnis", "Free SSL"],
      popular: false,
    },
    {
      name: "Growth",
      price: "2.750.000",
      tagline: "Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.",
      features: ["Semua di Starter", "Hosting 1 Tahun", "Direct WhatsApp Chat", "10 GB Disk Storage", "SEO On-Page Basic", "Garansi Maintenance 1 Bulan"],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "3.750.000",
      tagline: "Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.",
      features: ["Semua di Growth", "Up to 2 Halaman Tambahan", "Request Fitur Khusus", "Desain Interaktif", "Speed Optimization", "5x Revisi Gratis"],
      popular: false,
    },
  ],
  "Web Company Profile": [
    {
      name: "Starter",
      price: "2.000.000",
      tagline: "Solusi company profile sederhana dan profesional untuk UMKM.",
      features: ["Free Domain (.com)", "Desain Responsif", "Up to 3 Halaman", "1 Email Bisnis", "Free SSL"],
      popular: false,
    },
    {
      name: "Growth",
      price: "3.500.000",
      tagline: "Company profile lengkap untuk perusahaan yang ingin tampil profesional secara online.",
      features: ["Semua di Starter", "Hosting 1 Tahun", "Up to 6 Halaman", "WhatsApp Chat", "SEO Basic"],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "5.000.000",
      tagline: "Company profile premium dengan fitur lengkap & desain custom.",
      features: ["Semua di Growth", "Unlimited Halaman", "Blog/News Section", "Multi-Language", "Speed Optimization"],
      popular: false,
    },
  ],
  "Web Travel & Tour": [
    {
      name: "Starter",
      price: "2.500.000",
      tagline: "Website travel sederhana untuk menampilkan paket wisata.",
      features: ["Free Domain (.com)", "Katalog Paket Tour", "WhatsApp Integration", "1x Revisi"],
      popular: false,
    },
    {
      name: "Growth",
      price: "4.500.000",
      tagline: "Website travel profesional dengan fitur booking sederhana.",
      features: ["Semua di Starter", "Sistem Booking Form", "Galeri Destinasi", "SEO On-Page"],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "7.000.000",
      tagline: "Website travel premium dengan booking system & payment gateway.",
      features: ["Semua di Growth", "Payment Gateway", "Dashboard Admin", "Speed Optimization"],
      popular: false,
    },
  ],
  "Web Toko Online": [
    {
      name: "Starter",
      price: "3.000.000",
      tagline: "Toko online sederhana untuk mulai berjualan online.",
      features: ["Free Domain (.com)", "Keranjang Belanja", "WhatsApp Order", "Free SSL"],
      popular: false,
    },
    {
      name: "Growth",
      price: "5.500.000",
      tagline: "Toko online profesional dengan payment gateway terintegrasi.",
      features: ["Semua di Starter", "Payment Gateway", "Dashboard Admin", "Manajemen Stok"],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "8.500.000",
      tagline: "E-commerce full-featured untuk bisnis digital serius.",
      features: ["Semua di Growth", "Kupon & Diskon", "Multi-variant Produk", "Integrasi Ongkir"],
      popular: false,
    },
  ],
  "Web Sistem Management": [
    {
      name: "Small",
      price: "5.000.000",
      tagline: "Sistem web sederhana untuk kebutuhan internal atau UMKM.",
      features: ["Hosting 1 Tahun", "Up to 5 Modul", "Dashboard Admin", "CRUD Data"],
      popular: false,
    },
    {
      name: "Medium",
      price: "10.000.000",
      tagline: "Sistem web profesional untuk manajemen data & proses bisnis.",
      features: ["Semua di Small", "Up to 12 Modul", "Multi-Role Admin", "Export PDF/Excel"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "18.000.000",
      tagline: "Sistem web enterprise-level untuk organisasi besar.",
      features: ["Semua di Medium", "Unlimited Modul", "Payment Integration", "Real-time Analytics"],
      popular: false,
    },
  ],
  "Optimasi SEO": [
    {
      name: "Starter",
      price: "750.000",
      tagline: "Optimasi dasar untuk meningkatkan visibilitas di Google.",
      features: ["Audit Website", "Keyword Research", "On-Page Setup", "Search Console"],
      popular: false,
    },
    {
      name: "Growth",
      price: "1.500.000",
      tagline: "Optimasi SEO berkelanjutan untuk ranking konsisten.",
      features: ["Semua di Starter", "Keyword (15 items)", "Content Strategy", "Monthly Report"],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "3.000.000",
      tagline: "Paket SEO premium untuk dominasi halaman pertama.",
      features: ["Semua di Growth", "Competitor Analysis", "4 Artikel/Bulan", "Link Building"],
      popular: false,
    },
  ],
};

const whatsappNumber = "6288221975726";

const getWhatsAppLink = (category, plan) => {
  const message = encodeURIComponent(
    `HALO KAK SAYA MAU PESAN WEBSITE\n\nPaket: *${plan}*\nLayanan: *${category}*\n\nBisa minta info lebih lanjut?`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

export const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState("Landing Page");
  const plans = pricingData[activeCategory];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-[#0b0b0d]">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-20">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 text-[#b0fb3a] mb-6">
              <span className="text-xl">✦</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                Pricing
              </span>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter text-white font-heading leading-[1.1]">
                Service Plans
              </h2>
              <p className="text-[#a3a3a3] text-[17px] md:text-lg leading-relaxed font-sans max-w-sm pb-2">
                Transparent pricing for every stage of your digital journey. Select a category to explore options.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Category Tabs */}
        <AnimateOnScroll delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-sm font-bold font-sans transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-[#b0fb3a] text-black border-[#b0fb3a]"
                    : "bg-transparent text-[#a3a3a3] border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <AnimateOnScroll key={idx} delay={0.1 * idx}>
              <SpotlightCard className={`relative group h-full ${plan.popular ? "border-[#b0fb3a]/30" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 bg-[#b0fb3a] rounded-full">
                    <Sparkles size={12} className="text-black" />
                    <span className="text-[10px] font-bold text-black uppercase tracking-wider">Popular</span>
                  </div>
                )}

                <div className="p-10 flex flex-col h-full">
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white font-heading mb-2 uppercase tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-[#b0fb3a] font-bold text-lg">Rp</span>
                      <span className="text-4xl font-black text-white font-heading">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-[#a3a3a3] text-sm font-sans leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="h-px bg-white/10 w-full mb-8" />

                  <ul className="space-y-4 mb-12 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-[#b0fb3a]/40 flex items-center justify-center">
                          <Check size={10} className="text-[#b0fb3a]" />
                        </div>
                        <span className="text-[#d1d1d1] text-[15px] font-sans leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppLink(activeCategory, plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-[15px] transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#b0fb3a] text-black hover:bg-white"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
                    }`}
                  >
                    Select Plan
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </SpotlightCard>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Footer Note */}
        <AnimateOnScroll delay={0.4} className="mt-20 pt-12 border-t border-white/5 text-center">
           <p className="text-[#a3a3a3] font-sans">
            Need a custom solution for your enterprise? {" "}
            <a href={`https://wa.me/${whatsappNumber}`} className="text-[#b0fb3a] font-bold hover:underline">
              Contact us for consultation
            </a>
           </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
