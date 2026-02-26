import { useLang } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-uae flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">{t('Al Madam Municipality', 'بلدية منطقة المدام')}</div>
                <div className="text-xs text-gray-500">{t('Sharjah, UAE', 'الشارقة، الإمارات')}</div>
              </div>
            </div>
            <p className="text-sm">{t('Serving the Al Madam community with excellence and innovation.', 'خدمة مجتمع المدام بالتميز والابتكار.')}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">{t('Quick Links', 'روابط سريعة')}</h3>
            <div className="space-y-2 text-sm">
              <div>{t('Services', 'الخدمات')}</div>
              <div>{t('Track Request', 'تتبع الطلب')}</div>
              <div>{t('About Us', 'عنا')}</div>
              <div>{t('Contact', 'اتصل بنا')}</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">{t('Contact Info', 'معلومات الاتصال')}</h3>
            <div className="space-y-2 text-sm">
              <div>{t('Al Madam, Sharjah', 'المدام، الشارقة')}</div>
              <div>{t('United Arab Emirates', 'الإمارات العربية المتحدة')}</div>
              <div>info@almadamonline.ae</div>
              <div>+971 6 XXX XXXX</div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          © 2026 {t('Al Madam Area Municipality. All rights reserved.', 'بلدية منطقة المدام. جميع الحقوق محفوظة.')}
        </div>
      </div>
    </footer>
  );
}
