import { useState } from "react";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/MotionWrappers";

const categories = [
  "Landing Page",
  "Web Company Profile",
  "Web Travel & Tour",
  "Web Toko Online",
  "Web Sistem Management",
  "Optimasi SEO",
];

const pricingData = {
  "Landing Page": [
    {
      name: "Starter",
      price: "1.500.000",
      tagline: "Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "1 Halaman Landing Page (scroll panjang)",
        "1 Email Bisnis",
        "1 GB Disk Storage",
        "Free SSL",
        "1x Revisi Gratis",
        "Garansi Maintenance 15 Hari",
        "Video Panduan Akses Website",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Growth",
      price: "2.750.000",
      tagline: "Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.",
      features: [
        "Semua yang ada di Starter, plus:",
        "Hosting 1 Tahun",
        "Desain Visual Lebih Kompleks (CTA, Form, Galeri)",
        "Direct WhatsApp Chat",
        "2 Email Bisnis",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "Free SSL",
        "SEO On-Page Basic",
        "Garansi Maintenance 1 Bulan",
      ],
      popular: true,
      featured: false,
    },
    {
      name: "Ultimate",
      price: "3.750.000",
      tagline: "Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.",
      features: [
        "Semua yang ada di Growth, plus:",
        "Up to 2 Halaman Tambahan (About / FAQ / Blog Preview)",
        "Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)",
        "Desain Interaktif (Animated Scroll, Parallax, dll)",
        "Speed Optimization (Lazy Load + Caching Tools)",
        "5x Revisi Gratis",
        "Garansi Maintenance 1,5 Bulan",
      ],
      popular: false,
      featured: true,
    },
  ],
  "Web Company Profile": [
    {
      name: "Starter",
      price: "2.000.000",
      tagline: "Solusi company profile sederhana dan profesional untuk UMKM.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "Up to 3 Halaman (Home, About, Contact)",
        "1 Email Bisnis",
        "2 GB Disk Storage",
        "Free SSL",
        "1x Revisi Gratis",
        "Garansi Maintenance 15 Hari",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Growth",
      price: "3.500.000",
      tagline: "Company profile lengkap untuk perusahaan yang ingin tampil profesional secara online.",
      features: [
        "Semua yang ada di Starter, plus:",
        "Hosting 1 Tahun",
        "Up to 6 Halaman",
        "Galeri Foto/Video",
        "Direct WhatsApp Chat",
        "3 Email Bisnis",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "SEO On-Page Basic",
        "Garansi Maintenance 1 Bulan",
      ],
      popular: true,
      featured: false,
    },
    {
      name: "Ultimate",
      price: "5.000.000",
      tagline: "Company profile premium dengan fitur lengkap & desain custom.",
      features: [
        "Semua yang ada di Growth, plus:",
        "Unlimited Halaman",
        "Blog/News Section",
        "Multi-Language Support",
        "Desain Interaktif & Animasi Custom",
        "Speed Optimization",
        "5x Revisi Gratis",
        "Garansi Maintenance 2 Bulan",
      ],
      popular: false,
      featured: true,
    },
  ],
  "Web Travel & Tour": [
    {
      name: "Starter",
      price: "2.500.000",
      tagline: "Website travel sederhana untuk menampilkan paket wisata.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif",
        "Up to 5 Halaman",
        "Katalog Paket Tour",
        "WhatsApp Chat Integration",
        "Free SSL",
        "1x Revisi Gratis",
        "Garansi Maintenance 15 Hari",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Growth",
      price: "4.500.000",
      tagline: "Website travel profesional dengan fitur booking sederhana.",
      features: [
        "Semua yang ada di Starter, plus:",
        "Hosting 1 Tahun",
        "Sistem Booking Sederhana (via Form)",
        "Galeri Destinasi",
        "Testimonial Section",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "SEO On-Page Basic",
        "Garansi Maintenance 1 Bulan",
      ],
      popular: true,
      featured: false,
    },
    {
      name: "Ultimate",
      price: "7.000.000",
      tagline: "Website travel premium dengan booking system & payment gateway.",
      features: [
        "Semua yang ada di Growth, plus:",
        "Booking System + Payment Gateway",
        "Dashboard Admin untuk Manage Tour",
        "Review & Rating System",
        "Desain Interaktif & Animasi",
        "Speed Optimization",
        "5x Revisi Gratis",
        "Garansi Maintenance 2 Bulan",
      ],
      popular: false,
      featured: true,
    },
  ],
  "Web Toko Online": [
    {
      name: "Starter",
      price: "3.000.000",
      tagline: "Toko online sederhana untuk mulai berjualan online.",
      features: [
        "Free Domain (.com)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif",
        "Up to 50 Produk",
        "Keranjang Belanja",
        "WhatsApp Order",
        "Free SSL",
        "1x Revisi Gratis",
        "Garansi Maintenance 15 Hari",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Growth",
      price: "5.500.000",
      tagline: "Toko online profesional dengan payment gateway terintegrasi.",
      features: [
        "Semua yang ada di Starter, plus:",
        "Hosting 1 Tahun",
        "Unlimited Produk",
        "Payment Gateway (Midtrans/Xendit)",
        "Dashboard Admin",
        "Manajemen Stok",
        "10 GB Disk Storage",
        "3x Revisi Gratis",
        "SEO On-Page Basic",
        "Garansi Maintenance 1 Bulan",
      ],
      popular: true,
      featured: false,
    },
    {
      name: "Ultimate",
      price: "8.500.000",
      tagline: "E-commerce full-featured untuk bisnis digital serius.",
      features: [
        "Semua yang ada di Growth, plus:",
        "Kupon & Diskon System",
        "Multi-variant Produk",
        "Laporan Penjualan",
        "Integrasi Ongkir (RajaOngkir)",
        "Speed Optimization",
        "5x Revisi Gratis",
        "Garansi Maintenance 2 Bulan",
      ],
      popular: false,
      featured: true,
    },
  ],
  "Optimasi SEO": [
    {
      name: "Starter",
      price: "750.000",
      tagline: "Optimasi dasar untuk meningkatkan visibilitas website di Google.",
      features: [
        "Audit Website SEO",
        "Keyword Research (5 Keywords)",
        "On-Page SEO Optimization",
        "Meta Tags & Open Graph Setup",
        "Google Search Console Setup",
        "1x Laporan SEO",
        "Durasi: 1 Bulan",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Growth",
      price: "1.500.000",
      tagline: "Optimasi SEO berkelanjutan untuk meningkatkan ranking secara konsisten.",
      features: [
        "Semua yang ada di Starter, plus:",
        "Keyword Research (15 Keywords)",
        "Content Strategy & Blog Optimization",
        "Technical SEO (Speed, Mobile, Schema)",
        "Backlink Strategy",
        "2x Laporan SEO per Bulan",
        "Durasi: 3 Bulan",
      ],
      popular: true,
      featured: false,
    },
    {
      name: "Ultimate",
      price: "3.000.000",
      tagline: "Paket SEO premium untuk dominasi halaman pertama Google.",
      features: [
        "Semua yang ada di Growth, plus:",
        "Keyword Research (30+ Keywords)",
        "Competitor Analysis",
        "Content Creation (4 Artikel/Bulan)",
        "Link Building Premium",
        "Monthly SEO Report + Consultation",
        "Durasi: 6 Bulan",
      ],
      popular: false,
      featured: true,
    },
  ],
  "Web Sistem Management": [
    {
      name: "Skala Kecil",
      price: "5.000.000",
      tagline: "Sistem web sederhana untuk kebutuhan internal atau UMKM. Cocok untuk digitalisasi proses bisnis skala kecil.",
      features: [
        "Free Domain (.com)",
        "Hosting 1 Tahun",
        "Desain Responsif (Mobile & Desktop)",
        "Up to 5 Modul/Fitur",
        "Dashboard Admin Sederhana",
        "CRUD Data (Create, Read, Update, Delete)",
        "Login & Role Management (2 Role)",
        "Database MySQL",
        "Free SSL",
        "2x Revisi Gratis",
        "Garansi Maintenance 1 Bulan",
        "Source Code & Dokumentasi",
      ],
      popular: false,
      featured: false,
    },
    {
      name: "Skala Menengah",
      price: "10.000.000",
      tagline: "Sistem web profesional untuk perusahaan yang butuh manajemen data & proses bisnis yang lebih kompleks.",
      features: [
        "Semua yang ada di Skala Kecil, plus:",
        "Up to 12 Modul/Fitur",
        "Multi-Role Management (4+ Role)",
        "Laporan & Export Data (PDF/Excel)",
        "Notifikasi Email / WhatsApp",
        "API Integration",
        "Search, Filter & Pagination",
        "Activity Log & Audit Trail",
        "3x Revisi Gratis",
        "SEO On-Page Basic",
        "Garansi Maintenance 2 Bulan",
      ],
      popular: true,
      featured: false,
    },
    {
      name: "Skala Besar",
      price: "18.000.000",
      tagline: "Sistem web enterprise-level untuk organisasi besar dengan kebutuhan custom & integrasi kompleks.",
      features: [
        "Semua yang ada di Skala Menengah, plus:",
        "Unlimited Modul/Fitur",
        "Multi-Tenant / Multi-Branch Support",
        "Payment Gateway Integration",
        "Real-time Dashboard & Analytics",
        "REST API untuk Integrasi Pihak Ketiga",
        "Automated Backup System",
        "Performance & Security Optimization",
        "CI/CD Deployment Pipeline",
        "5x Revisi Gratis",
        "Garansi Maintenance 3 Bulan",
        "Training & Onboarding Tim",
      ],
      popular: false,
      featured: true,
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
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateOnScroll>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Pricelist Layanan
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Solusi lengkap untuk{" "}
              <span className="font-serif italic font-normal text-white">
                bisnis digital Anda.
              </span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-muted-foreground">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket
              termasuk support dan garansi maintenance.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Category Tabs */}
        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              key={`${activeCategory}-${plan.name}`}
              className={`relative rounded-2xl overflow-hidden transition-colors duration-500 ${plan.popular
                  ? "border-2 border-primary shadow-[0_0_40px_rgba(32,178,166,0.15)] md:scale-105 md:-my-4 z-10"
                  : plan.featured
                    ? "border border-foreground/20 bg-foreground/[0.03]"
                    : "border border-border/50"
                } ${plan.featured ? "glass-strong" : "glass"
                }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary py-1.5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground tracking-wider uppercase">
                      Popular
                    </span>
                  </div>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                {/* Plan header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${plan.featured ? "text-foreground" : ""
                      }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-sm text-muted-foreground">Rp</span>
                    <span
                      className={`text-4xl font-bold tracking-tight ${plan.popular ? "text-primary" : ""
                        }`}
                    >
                      {plan.price}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${plan.popular
                      ? "bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                      : "bg-border/50"
                    }`}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => {
                    const isInherited =
                      feature.startsWith("Semua yang ada di") ||
                      feature.startsWith("*");
                    return (
                      <li key={i} className="flex items-start gap-3">
                        {isInherited ? (
                          <span className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular
                                ? "bg-primary/20 text-primary"
                                : plan.featured
                                  ? "bg-primary/15 text-primary"
                                  : "bg-surface text-muted-foreground"
                              }`}
                          >
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                        )}
                        <span
                          className={`text-sm leading-relaxed ${isInherited
                              ? "text-primary font-medium italic -ml-8"
                              : "text-muted-foreground"
                            }`}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsAppLink(activeCategory, plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {plan.popular ? (
                    <Button className="w-full" size="lg">
                      Order Sekarang <ArrowRight className="w-5 h-5" />
                    </Button>
                  ) : (
                    <button
                      className={`w-full py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${plan.featured
                          ? "bg-foreground/10 text-foreground border border-foreground/20 hover:bg-foreground/20"
                          : "bg-surface text-foreground border border-border hover:border-primary/50 hover:text-primary"
                        }`}
                    >
                      Order Sekarang <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <AnimateOnScroll delay={0.4} className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Butuh paket custom?{" "}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "HALO KAK SAYA MAU PESAN WEBSITE\n\nSaya ingin konsultasi untuk paket custom. Bisa dibantu?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Hubungi saya
            </a>{" "}
            untuk diskusi kebutuhan Anda.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
