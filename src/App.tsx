/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Users, 
  MessageCircle, 
  PenTool, 
  ShieldCheck, 
  ChevronDown,
  ChevronUp,
  Library,
  Star,
  Share2
} from 'lucide-react';

export default function App() {
  const [showCreators, setShowCreators] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
      title: "Dijital Keşif",
      description: "Binlerce kitabı akıllı filtreleme ve kategori sistemleri ile anında keşfedin."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Sosyal Etkileşim",
      description: "Arkadaşlarınızın ne okuduğunu görün, yorum yapın ve okuma listelerinizi paylaşın."
    },
    {
      icon: <PenTool className="w-6 h-6 text-orange-400" />,
      title: "Yazarlık Platformu",
      description: "Kendi sanal kitaplarınızı oluşturun, bölümler paylaşın ve bir yazar olarak tanının."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-sky-400" />,
      title: "Anlık Mesajlaşma",
      description: "Kitaplar üzerine grup sohbetleri başlatın veya arkadaşlarınızla özel olarak iletişime geçin."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      title: "AI Destekli Denetim",
      description: "Yapay zeka sistemimiz okul ortamına uygun, güvenli ve saygılı bir platform sağlar."
    },
    {
      icon: <Star className="w-6 h-6 text-amber-400" />,
      title: "Başarı Sistemi",
      description: "Okudukça puan kazanın, rozetler toplayın ve kütüphane liderlik tablosunda yükselin."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <Library className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">EMAİHL <span className="text-indigo-400">Kütüphane</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#ozellikler" className="hover:text-white transition-colors">Özellikler</a>
            <a href="#indirme" className="hover:text-white transition-colors">İndir</a>
            <a href="https://ekutuphane.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              Canlı Demo <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <a 
            href="https://drive.google.com/file/d/1DafC0efpxu70E0a8qOnrg5RboVdLMCUo/view?usp=sharing"
            className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
          >
            Hemen İndir
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8">
              YENİ NESİL DİJİTAL KÜTÜPHANE
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              OKU, PAYLAŞ,<br />
              KEŞFET, <span className="text-indigo-500">ÜRET.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-12">
              Okul kütüphanesini sadece kitap alınan bir yer olmaktan çıkarıp sosyal, 
              modern ve etkileşimli bir dijital deneyime dönüştürür.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/file/d/1DafC0efpxu70E0a8qOnrg5RboVdLMCUo/view?usp=sharing"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-indigo-500/20 hover:bg-indigo-500 transition-colors"
              >
                <Download className="w-5 h-5" />
                Android (APK) İndir
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://ekutuphane.vercel.app"
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Web Sitesine Git
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent z-10" />
            <img 
              src="https://picsum.photos/seed/library/1200/800" 
              alt="Platform Mockup" 
              className="rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="ozellikler" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Bir Kütüphaneden Fazlası</h2>
            <p className="text-white/40 max-w-xl mx-auto">Modern öğrenci topluluğu için tasarlanmış geniş özellik yelpazesi.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-indigo-400 mb-4 font-bold tracking-widest text-xs uppercase italic">
              <Share2 className="w-4 h-4" /> ETKİLEŞİM ODAKLI
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1]">
              Sadece Okuma,<br />
              <span className="text-indigo-500">Paylaş ve Tartış.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Arkadaşlarınızın okuma listelerini takip edin, favori bölümlerinizi paylaşın ve kitaplar hakkında derin sohbetlere dalın. 
              EMAİHL Kütüphane, kütüphaneyi yaşayan bir topluluk haline getirir.
            </p>
            <ul className="space-y-4">
              {['Okuma Durumu Takibi', 'Bölüm Paylaşımları', 'Arkadaş Listesi ve Mesajlaşma'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center flex-col p-6 text-center">
                  <Users className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-2xl font-bold">500+</span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">Aktif Öğrenci</span>
                </div>
                <div className="aspect-[4/3] bg-indigo-600 rounded-3xl p-6 flex flex-col justify-end">
                  <MessageCircle className="w-6 h-6 text-white mb-2" />
                  <span className="font-bold">Canlı Tartışmalar</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-white text-black rounded-3xl p-6 flex flex-col justify-between">
                  <span className="text-4xl font-black">2.4k</span>
                  <span className="font-bold leading-tight uppercase text-xs tracking-widest">Paylaşılan<br />Kitap Notu</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-3xl border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="indirme" className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-indigo-600 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            Kütüphaneni her an<br />yanında taşı.
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
            Hemen EMAİHL Kütüphane'yi indir ve okul kütüphanenin yeni yüzüyle tanış. 
            Okuyan değil, üreten tarafta yer al.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://drive.google.com/file/d/1DafC0efpxu70E0a8qOnrg5RboVdLMCUo/view?usp=sharing"
              className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl"
            >
              <Download className="w-6 h-6" /> İNDİR
            </a>
            <span className="text-white/60 font-medium">veya</span>
            <a 
              href="https://ekutuphane.vercel.app"
              target="_blank"
              className="text-white font-bold border-b-2 border-white/30 hover:border-white transition-all pb-1"
            >
              Web versiyonuna göz at
            </a>
          </div>
        </div>
      </section>

      {/* Footer & Creators Button */}
      <footer className="py-12 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Library className="w-4 h-4" />
              <span>EMAİHL Kütüphane © 2024</span>
            </div>
            
            {/* Creators Section */}
            <div className="relative inline-block">
              <button 
                onClick={() => setShowCreators(!showCreators)}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm font-bold uppercase tracking-wider"
              >
                Yapımcılar
                {showCreators ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              <AnimatePresence>
                {showCreators && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-6 rounded-2xl bg-[#121215] border border-white/10 shadow-2xl z-20"
                  >
                    <div className="space-y-4">
                      <div className="text-left">
                        <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block mb-1">Geliştirici</span>
                        <p className="text-sm font-bold text-white">İbrahim ARSLAN</p>
                      </div>
                      <div className="h-px bg-white/5" />
                      <div className="text-left">
                        <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block mb-1">Geliştirici</span>
                        <p className="text-sm font-bold text-white">Muhammed Yasin ERGÜN</p>
                      </div>
                    </div>
                    {/* Arrow decorator */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-[#121215]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <p className="text-xs text-white/20 italic">
              “Oku, paylaş, keşfet, üret — hepsi EMAİHL Kütüphane’de.”
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

