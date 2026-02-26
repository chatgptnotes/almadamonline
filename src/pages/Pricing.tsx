import { Check } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLang();
  const plans = [
    {
      name: t('Citizen', 'مواطن'),
      price: t('Free', 'مجاني'),
      desc: t('Basic access to all municipal services', 'وصول أساسي لجميع الخدمات البلدية'),
      features: [t('Submit service requests', 'تقديم طلبات الخدمة'), t('Track request status', 'تتبع حالة الطلب'), t('View announcements', 'عرض الإعلانات'), t('Contact municipality', 'التواصل مع البلدية')],
      cta: t('Get Started', 'ابدأ الآن'),
      featured: false,
    },
    {
      name: t('Business', 'أعمال'),
      price: t('AED 500/yr', '500 درهم/سنة'),
      desc: t('Enhanced access for businesses and contractors', 'وصول محسّن للشركات والمقاولين'),
      features: [t('Everything in Citizen', 'كل ما في خطة المواطن'), t('Priority processing', 'معالجة ذات أولوية'), t('Bulk service requests', 'طلبات خدمة بالجملة'), t('Dedicated support', 'دعم مخصص'), t('API access', 'وصول API')],
      cta: t('Subscribe', 'اشترك'),
      featured: true,
    },
    {
      name: t('Government', 'حكومي'),
      price: t('Custom', 'مخصص'),
      desc: t('Full integration for government entities', 'تكامل كامل للجهات الحكومية'),
      features: [t('Everything in Business', 'كل ما في خطة الأعمال'), t('Custom integrations', 'تكاملات مخصصة'), t('Admin dashboard access', 'وصول لوحة الإدارة'), t('Analytics & reports', 'التحليلات والتقارير'), t('SLA guarantee', 'ضمان اتفاقية الخدمة'), t('White-label option', 'خيار العلامة البيضاء')],
      cta: t('Contact Us', 'اتصل بنا'),
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-green-uae dark:bg-green-uae-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{t('Service Plans', 'خطط الخدمة')}</h1>
          <p className="text-white/70">{t('Choose the plan that fits your needs', 'اختر الخطة التي تناسب احتياجاتك')}</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-6 ${plan.featured ? 'border-gold bg-gold/5 dark:bg-gold/10 shadow-lg scale-105' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'}`}>
              {plan.featured && <div className="text-xs font-bold text-gold uppercase mb-2">{t('Most Popular', 'الأكثر شيوعاً')}</div>}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <div className="text-3xl font-bold text-green-uae dark:text-gold mt-2 mb-1">{plan.price}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{plan.desc}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-gold hover:bg-gold-dark text-gray-900' : 'bg-green-uae hover:bg-green-uae-dark text-white'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
