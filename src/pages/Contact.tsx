import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLang } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('Message sent successfully!', 'تم إرسال الرسالة بنجاح!'));
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-green-uae dark:bg-green-uae-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{t('Contact Us', 'اتصل بنا')}</h1>
          <p className="text-white/70">{t('We would love to hear from you', 'يسعدنا سماع رأيكم')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon: Phone, label: '+971 6 XXX XXXX', sub: t('Mon-Thu 7:30AM-2:30PM', 'الإثنين-الخميس 7:30ص-2:30م') },
              { icon: Mail, label: 'info@almadamonline.ae', sub: t('Email us anytime', 'راسلنا في أي وقت') },
              { icon: MapPin, label: t('Al Madam, Sharjah', 'المدام، الشارقة'), sub: t('United Arab Emirates', 'الإمارات العربية المتحدة') },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <c.icon className="w-5 h-5 text-green-uae dark:text-gold mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">{c.label}</div>
                  <div className="text-xs text-gray-500">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handle} className="space-y-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t('Your Name', 'اسمك')} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" required />
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t('Email', 'البريد')} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" required />
              </div>
              <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder={t('Subject', 'الموضوع')} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" required />
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t('Your Message', 'رسالتك')} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" required />
              <button type="submit" className="w-full py-3 bg-green-uae hover:bg-green-uae-dark text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> {t('Send Message', 'إرسال الرسالة')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
