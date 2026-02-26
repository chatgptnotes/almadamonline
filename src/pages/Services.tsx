import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Leaf, Flower2, Smartphone, Clock, FileText, ArrowRight } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { categories, services } from '../data/services';

const iconMap: Record<string, React.ElementType> = { Building2, Leaf, Flower2, Smartphone };

export default function Services() {
  const { t, lang } = useLang();
  const [params] = useSearchParams();
  const [active, setActive] = useState(params.get('category') || 'all');

  const filtered = active === 'all' ? services : services.filter((s) => s.category_id === active);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-green-uae dark:bg-green-uae-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{t('Municipal Services', 'الخدمات البلدية')}</h1>
          <p className="text-white/70">{t('Browse all available services and submit your request online', 'تصفح جميع الخدمات المتاحة وقدّم طلبك إلكترونياً')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setActive('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === 'all' ? 'bg-green-uae text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
            {t('All Services', 'جميع الخدمات')}
          </button>
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Building2;
            return (
              <button key={cat.id} onClick={() => setActive(cat.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${active === cat.id ? 'bg-green-uae text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                <Icon className="w-4 h-4" /> {lang === 'ar' ? cat.name_ar : cat.name_en}
              </button>
            );
          })}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((svc, i) => (
            <motion.div key={svc.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
              <Link to={`/services/${svc.id}`} className="block p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-green-uae dark:hover:border-gold hover:shadow-md transition-all bg-white dark:bg-gray-900 group">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-uae dark:group-hover:text-gold transition-colors">
                  {lang === 'ar' ? svc.name_ar : svc.name_en}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {lang === 'ar' ? svc.description_ar : svc.description_en}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-3">
                    {svc.estimated_days > 0 && (
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {svc.estimated_days} {t('days', 'يوم')}</span>
                    )}
                    {svc.required_documents && (
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {t('Docs required', 'مستندات مطلوبة')}</span>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-uae dark:text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
