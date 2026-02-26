import { useState } from 'react';
import { Search, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  in_review: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  approved: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  in_progress: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  completed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

export default function Track() {
  const { t } = useLang();
  const [requestId, setRequestId] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (requestId.trim()) setSearched(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-green-uae dark:bg-green-uae-dark py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{t('Track Your Request', 'تتبع طلبك')}</h1>
          <p className="text-white/70">{t('Enter your request ID to check the current status', 'أدخل رقم طلبك للتحقق من الحالة الحالية')}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input type="text" value={requestId} onChange={(e) => setRequestId(e.target.value)} placeholder={t('Enter Request ID (e.g. REQ-XXXXX)', 'أدخل رقم الطلب (مثال REQ-XXXXX)')} className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg focus:ring-2 focus:ring-gold outline-none" />
          <button type="submit" className="px-6 py-3 bg-gold hover:bg-gold-dark text-gray-900 font-semibold rounded-xl shadow-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </form>

        {searched && (
          <div className="mt-8 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            {/* Demo result */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">{t('Request', 'الطلب')} #{requestId}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors.in_progress}`}>
                {t('In Progress', 'قيد التنفيذ')}
              </span>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { status: 'completed', label: t('Request Submitted', 'تم تقديم الطلب'), date: '2026-02-24', icon: CheckCircle },
                { status: 'completed', label: t('Under Review', 'قيد المراجعة'), date: '2026-02-25', icon: CheckCircle },
                { status: 'active', label: t('In Progress', 'قيد التنفيذ'), date: '2026-02-26', icon: Loader2 },
                { status: 'pending', label: t('Completed', 'مكتمل'), date: '', icon: Clock },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 ${step.status === 'completed' ? 'text-green-500' : step.status === 'active' ? 'text-gold' : 'text-gray-300 dark:text-gray-700'}`}>
                    <step.icon className={`w-5 h-5 ${step.status === 'active' ? 'animate-spin' : ''}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${step.status === 'pending' ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-white'}`}>{step.label}</div>
                    {step.date && <div className="text-xs text-gray-500">{step.date}</div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <span>{t('Your request is being processed. Estimated completion in 3-5 business days.', 'طلبك قيد المعالجة. الإنجاز المتوقع خلال 3-5 أيام عمل.')}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
