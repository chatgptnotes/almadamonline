import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle, XCircle, Plus } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { t } = useLang();
  const { profile } = useAuth();

  const stats = [
    { label: t('Total Requests', 'إجمالي الطلبات'), value: '3', icon: FileText, color: 'bg-blue-500' },
    { label: t('In Progress', 'قيد التنفيذ'), value: '1', icon: Clock, color: 'bg-yellow-500' },
    { label: t('Completed', 'مكتمل'), value: '1', icon: CheckCircle, color: 'bg-green-500' },
    { label: t('Rejected', 'مرفوض'), value: '1', icon: XCircle, color: 'bg-red-500' },
  ];

  const requests = [
    { id: 'REQ-A1B2C', service: t('Road Construction', 'إنشاء طريق'), status: 'in_progress', date: '2026-02-20', statusLabel: t('In Progress', 'قيد التنفيذ'), statusColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
    { id: 'REQ-D3E4F', service: t('Pest Control', 'مكافحة الآفات'), status: 'completed', date: '2026-02-15', statusLabel: t('Completed', 'مكتمل'), statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
    { id: 'REQ-G5H6I', service: t('Sand Leveling', 'تسوية الرمال'), status: 'rejected', date: '2026-02-10', statusLabel: t('Rejected', 'مرفوض'), statusColor: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('My Dashboard', 'لوحة التحكم')}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('Welcome', 'مرحباً')}, {profile?.full_name || t('Citizen', 'مواطن')}</p>
          </div>
          <Link to="/services" className="px-4 py-2 bg-green-uae text-white rounded-lg font-medium flex items-center gap-2 hover:bg-green-uae-dark transition-colors">
            <Plus className="w-4 h-4" /> {t('New Request', 'طلب جديد')}
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">{t('My Requests', 'طلباتي')}</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {requests.map((r) => (
              <div key={r.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{r.service}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{r.id} · {r.date}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${r.statusColor}`}>{r.statusLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
