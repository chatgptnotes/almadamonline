import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-gold mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('Page Not Found', 'الصفحة غير موجودة')}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('The page you are looking for does not exist.', 'الصفحة التي تبحث عنها غير موجودة.')}</p>
        <Link to="/" className="px-6 py-2.5 bg-green-uae text-white rounded-lg font-medium hover:bg-green-uae-dark transition-colors">{t('Go Home', 'العودة للرئيسية')}</Link>
      </div>
    </div>
  );
}
