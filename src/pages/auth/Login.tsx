import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLang } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const { t } = useLang();
  const { signIn, signInWithGoogle, signInWithMagicLink } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      toast.success(t('Welcome back!', 'مرحباً بعودتك!'));
      nav('/dashboard');
    } catch (err: unknown) {
      toast.error((err as Error).message || t('Login failed', 'فشل تسجيل الدخول'));
    }
    setLoading(false);
  };

  const handleMagicLink = async () => {
    if (!email) { toast.error(t('Enter your email first', 'أدخل بريدك الإلكتروني أولاً')); return; }
    try {
      await signInWithMagicLink(email);
      setMagicLinkSent(true);
      toast.success(t('Check your email for the login link!', 'تحقق من بريدك للحصول على رابط الدخول!'));
    } catch (err: unknown) {
      toast.error((err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-green-uae flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">م</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('Welcome Back', 'مرحباً بعودتك')}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('Sign in to access municipal services', 'سجّل دخولك للوصول إلى الخدمات البلدية')}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <button onClick={signInWithGoogle} className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            {t('Continue with Google', 'المتابعة بحساب Google')}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-gray-800" /></div>
            <div className="relative flex justify-center"><span className="bg-white dark:bg-gray-900 px-3 text-xs text-gray-500">{t('or', 'أو')}</span></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Email', 'البريد الإلكتروني')}</label>
              <div className="relative">
                <Mail className="absolute left-3 rtl:right-3 rtl:left-auto top-2.5 w-4 h-4 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('Password', 'كلمة المرور')}</label>
              <div className="relative">
                <Lock className="absolute left-3 rtl:right-3 rtl:left-auto top-2.5 w-4 h-4 text-gray-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-green-uae outline-none" placeholder="••••••••" />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full py-2.5 bg-green-uae hover:bg-green-uae-dark text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {t('Sign In', 'تسجيل الدخول')}
            </button>
          </form>

          <button onClick={handleMagicLink} className="w-full mt-3 py-2 text-sm text-green-uae dark:text-gold hover:underline">
            {magicLinkSent ? t('✓ Link sent! Check your email', '✓ تم إرسال الرابط! تحقق من بريدك') : t('Send me a Magic Link instead', 'أرسل لي رابط سحري بدلاً من ذلك')}
          </button>
        </div>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          {t("Don't have an account?", 'ليس لديك حساب؟')} <Link to="/signup" className="text-green-uae dark:text-gold font-medium hover:underline">{t('Sign Up', 'سجّل الآن')}</Link>
        </p>
      </div>
    </div>
  );
}
