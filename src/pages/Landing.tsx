import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Leaf, Flower2, Smartphone, ArrowRight, Search, Phone, Mail, MapPin } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { categories } from '../data/services';

const iconMap: Record<string, React.ElementType> = { Building2, Leaf, Flower2, Smartphone };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Landing() {
  const { t, lang } = useLang();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-uae via-green-uae-dark to-green-uae overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-medium">{t('Digital Municipal Services', 'الخدمات البلدية الرقمية')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('Al Madam Area', 'بلدية منطقة')}
              <br />
              <span className="text-gold">{t('Municipality', 'المدام')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {t(
                'Your gateway to smart municipal services. Submit requests, track progress, and access all services digitally.',
                'بوابتك للخدمات البلدية الذكية. قدّم طلباتك، تتبّع التقدم، واستفد من جميع الخدمات رقمياً.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services" className="px-8 py-3 bg-gold hover:bg-gold-dark text-gray-900 font-bold rounded-xl transition-all shadow-lg shadow-gold/25">
                {t('Browse Services', 'تصفح الخدمات')} →
              </Link>
              <Link to="/track" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl backdrop-blur border border-white/20 transition-all">
                <Search className="w-4 h-4 inline mr-2" />
                {t('Track My Request', 'تتبع طلبي')}
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Wave */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 80" fill="none"><path d="M0 40L60 36C120 32 240 24 360 28C480 32 600 48 720 52C840 56 960 48 1080 40C1200 32 1320 24 1380 20L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" className="fill-white dark:fill-gray-950" /></svg>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{t('Our Services', 'خدماتنا')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">{t('Access a wide range of municipal services digitally', 'الوصول إلى مجموعة واسعة من الخدمات البلدية رقمياً')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Building2;
              return (
                <motion.div key={cat.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                  <Link to={`/services?category=${cat.id}`} className="block p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-green-uae dark:hover:border-gold hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-green-uae/10 dark:bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-green-uae dark:text-gold" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{lang === 'ar' ? cat.name_ar : cat.name_en}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{lang === 'ar' ? cat.description_ar : cat.description_en}</p>
                    <div className="mt-4 text-sm font-medium text-green-uae dark:text-gold flex items-center gap-1">
                      {t('Explore', 'استكشف')} <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-uae dark:bg-green-uae-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '20+', label: t('Services Available', 'خدمة متاحة') },
              { num: '4', label: t('Service Categories', 'فئات الخدمات') },
              { num: '24/7', label: t('Digital Access', 'وصول رقمي') },
              { num: '100%', label: t('Bilingual Support', 'دعم ثنائي اللغة') },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-gold mb-1">{s.num}</div>
                <div className="text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">{t('How It Works', 'كيف يعمل')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: t('Choose Service', 'اختر الخدمة'), desc: t('Browse and select from our range of municipal services', 'تصفح واختر من مجموعة خدماتنا البلدية') },
              { step: '2', title: t('Submit Request', 'قدّم الطلب'), desc: t('Fill in details, upload documents, and submit your request', 'أدخل التفاصيل، ارفق المستندات، وقدّم طلبك') },
              { step: '3', title: t('Track Progress', 'تتبّع التقدم'), desc: t('Monitor your request status in real-time until completion', 'تابع حالة طلبك في الوقت الفعلي حتى الإنجاز') },
            ].map((s) => (
              <div key={s.step} className="p-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 dark:bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('Get in Touch', 'تواصل معنا')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t('Have questions? We are here to help.', 'لديك أسئلة؟ نحن هنا للمساعدة.')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Phone className="w-5 h-5 text-green-uae dark:text-gold" /> +971 6 XXX XXXX</div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Mail className="w-5 h-5 text-green-uae dark:text-gold" /> info@almadamonline.ae</div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><MapPin className="w-5 h-5 text-green-uae dark:text-gold" /> {t('Al Madam, Sharjah', 'المدام، الشارقة')}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
