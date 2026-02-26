import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileText, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLang } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { services, categories } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const { user } = useAuth();
  const svc = services.find((s) => s.id === id);
  const cat = svc ? categories.find((c) => c.id === svc.category_id) : null;

  const [form, setForm] = useState({ description: '', address: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!svc) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('Service Not Found', 'الخدمة غير موجودة')}</h2>
        <Link to="/services" className="text-green-uae dark:text-gold">{t('Back to Services', 'العودة إلى الخدمات')}</Link>
      </div>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { toast.error(t('Please login to submit a request', 'يرجى تسجيل الدخول لتقديم الطلب')); return; }
    if (!form.description) { toast.error(t('Please describe your request', 'يرجى وصف طلبك')); return; }
    setSubmitted(true);
    toast.success(t('Request submitted successfully!', 'تم تقديم الطلب بنجاح!'));
  };

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 p-4">
      <div className="text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('Request Submitted!', 'تم تقديم الطلب!')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{t('Your request ID:', 'رقم طلبك:')} <span className="font-mono font-bold text-green-uae dark:text-gold">REQ-{Date.now().toString(36).toUpperCase()}</span></p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">{t('You can track your request status using this ID.', 'يمكنك تتبع حالة طلبك باستخدام هذا الرقم.')}</p>
        <div className="flex gap-3 justify-center">
          <Link to="/track" className="px-6 py-2 bg-green-uae text-white rounded-lg font-medium">{t('Track Request', 'تتبع الطلب')}</Link>
          <Link to="/services" className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium">{t('More Services', 'المزيد من الخدمات')}</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-green-uae dark:bg-green-uae-dark py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-1 text-white/70 hover:text-white mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> {t('All Services', 'جميع الخدمات')}
          </Link>
          <h1 className="text-2xl font-bold text-white">{lang === 'ar' ? svc.name_ar : svc.name_en}</h1>
          {cat && <p className="text-gold text-sm mt-1">{lang === 'ar' ? cat.name_ar : cat.name_en}</p>}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('Service Details', 'تفاصيل الخدمة')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{lang === 'ar' ? svc.description_ar : svc.description_en}</p>
              {svc.estimated_days > 0 && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Clock className="w-4 h-4 text-gold" />
                  {t('Estimated:', 'المدة المتوقعة:')} {svc.estimated_days} {t('days', 'يوم')}
                </div>
              )}
              {svc.required_documents && (
                <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FileText className="w-4 h-4 text-gold mt-0.5" />
                  <div>
                    <span className="font-medium">{t('Required Documents:', 'المستندات المطلوبة:')}</span>
                    <br />{svc.required_documents}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('Submit Request', 'تقديم الطلب')}</h3>
              {!user && (
                <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-sm text-yellow-800 dark:text-yellow-200">
                  {t('Please', 'يرجى')} <Link to="/login" className="underline font-medium">{t('login', 'تسجيل الدخول')}</Link> {t('to submit a request', 'لتقديم الطلب')}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Description *', 'الوصف *')}</label>
                <textarea rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae dark:focus:ring-gold outline-none" placeholder={t('Describe your request in detail...', 'صف طلبك بالتفصيل...')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Address / Location', 'العنوان / الموقع')}</label>
                <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae dark:focus:ring-gold outline-none" placeholder={t('Enter location details', 'أدخل تفاصيل الموقع')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Phone Number', 'رقم الهاتف')}</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae dark:focus:ring-gold outline-none" placeholder="+971 5X XXX XXXX" />
              </div>
              <button type="submit" className="w-full py-3 bg-green-uae hover:bg-green-uae-dark text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> {t('Submit Request', 'تقديم الطلب')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
