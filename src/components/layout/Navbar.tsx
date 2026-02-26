import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import { useLang } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { dark, toggle } = useTheme();
  const { user, profile, signOut } = useAuth();
  const nav = useNavigate();

  const links = [
    { to: '/', label: t('Home', 'الرئيسية') },
    { to: '/services', label: t('Services', 'الخدمات') },
    { to: '/track', label: t('Track Request', 'تتبع الطلب') },
    { to: '/about', label: t('About', 'عن البلدية') },
    { to: '/contact', label: t('Contact', 'اتصل بنا') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-uae flex items-center justify-center">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <div>
              <div className="font-bold text-green-uae dark:text-gold text-sm leading-tight">
                {t('Al Madam Municipality', 'بلدية منطقة المدام')}
              </div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                {t('Sharjah, UAE', 'الشارقة، الإمارات')}
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-uae dark:hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400" title="Toggle language">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={toggle} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {user ? (
              <>
                <button onClick={() => nav(profile?.role === 'admin' ? '/admin' : '/dashboard')} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-green-uae dark:text-gold">
                  <LayoutDashboard className="w-5 h-5" />
                </button>
                <button onClick={signOut} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400">
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-uae text-white text-sm font-medium hover:bg-green-uae-dark transition-colors">
                <LogIn className="w-4 h-4" />
                {t('Login', 'دخول')}
              </Link>
            )}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pb-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-uae dark:hover:text-gold">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
