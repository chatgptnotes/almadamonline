import { Building, Users, Target, Award } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-green-uae dark:bg-green-uae-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{t('About Al Madam Municipality', 'عن بلدية منطقة المدام')}</h1>
          <p className="text-white/70">{t('Serving the community with excellence since establishment', 'خدمة المجتمع بالتميز منذ التأسيس')}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { icon: Building, title: t('Our Municipality', 'بلديتنا'), desc: t('Al Madam Area Municipality is dedicated to providing top-quality municipal services to all residents and visitors of the Al Madam area in Sharjah.', 'بلدية منطقة المدام مكرسة لتقديم خدمات بلدية عالية الجودة لجميع سكان وزوار منطقة المدام في الشارقة.') },
            { icon: Target, title: t('Our Mission', 'مهمتنا'), desc: t('To enhance the quality of life in Al Madam through smart, efficient, and citizen-centric municipal services powered by digital transformation.', 'تعزيز جودة الحياة في المدام من خلال خدمات بلدية ذكية وفعالة ومرتكزة على المواطن مدعومة بالتحول الرقمي.') },
            { icon: Users, title: t('Our Team', 'فريقنا'), desc: t('A dedicated team of professionals committed to serving the Al Madam community with integrity, transparency, and innovation.', 'فريق متفاني من المحترفين ملتزم بخدمة مجتمع المدام بنزاهة وشفافية وابتكار.') },
            { icon: Award, title: t('Our Values', 'قيمنا'), desc: t('Excellence, Innovation, Transparency, Community Service, and Environmental Sustainability guide everything we do.', 'التميز والابتكار والشفافية وخدمة المجتمع والاستدامة البيئية توجه كل ما نقوم به.') },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <item.icon className="w-8 h-8 text-green-uae dark:text-gold mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
