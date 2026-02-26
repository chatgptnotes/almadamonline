import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLang } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Signup() {
  const { t } = useLang();
  const { signUp } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) { toast.error(t('All fields required', 'جميع الحقول مطلوبة')); return; }
    setLoading(true);
    try {
      await signUp(form.email, form.password, form.name);
      toast.success(t('Account created! Check your email to verify.', 'تم إنشاء الحساب! تحقق من بريدك للتأكيد.'));
      nav('/login');
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-green-uae flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">م</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('Create Account', 'إنشاء حساب')}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('Register to submit and track service requests', 'سجّل لتقديم وتتبع طلبات الخدمة')}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <form onSubmit={handle} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Full Name', 'الاسم الكامل')}</label>
              <div className="relative">
                <User className="absolute left-3 rtl:right-3 rtl:left-auto top-2.5 w-4 h-4 text-gray-400" />
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Email', 'البريد الإلكتروني')}</label>
              <div className="relative">
                <Mail className="absolute left-3 rtl:right-3 rtl:left-auto top-2.5 w-4 h-4 text-gray-400" />
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Password', 'كلمة المرور')}</label>
              <div className="relative">
                <Lock className="absolute left-3 rtl:right-3 rtl:left-auto top-2.5 w-4 h-4 text-gray-400" />
                <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full py-2.5 bg-green-uae hover:bg-green-uae-dark text-white font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {t('Create Account', 'إنشاء حساب')}
            </button>
          </form>
        </div>
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          {t('Already have an account?', 'لديك حساب بالفعل؟')} <Link to="/login" className="text-green-uae dark:text-gold font-medium hover:underline">{t('Sign In', 'تسجيل الدخول')}</Link>
        </p>
      </div>
    </div>
  );
}
