import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { FileText, Users, CheckCircle, Clock, TrendingUp, AlertTriangle } from 'lucide-react';
import { useLang } from '../../contexts/LanguageContext';

const monthlyData = [
  { month: 'Jan', requests: 45 }, { month: 'Feb', requests: 62 }, { month: 'Mar', requests: 38 },
  { month: 'Apr', requests: 55 }, { month: 'May', requests: 70 }, { month: 'Jun', requests: 48 },
];

const categoryData = [
  { name: 'General', value: 35, color: '#006633' },
  { name: 'Environmental', value: 28, color: '#C9A14A' },
  { name: 'Agricultural', value: 20, color: '#2563eb' },
  { name: 'Smart', value: 17, color: '#7c3aed' },
];

const statusData = [
  { name: 'Pending', value: 12, color: '#eab308' },
  { name: 'In Progress', value: 18, color: '#3b82f6' },
  { name: 'Completed', value: 45, color: '#22c55e' },
  { name: 'Rejected', value: 5, color: '#ef4444' },
];

const recentRequests = [
  { id: 'REQ-001', citizen: 'Ahmed Al Mansouri', service: 'Road Construction', status: 'pending', priority: 'high', date: '2026-02-26' },
  { id: 'REQ-002', citizen: 'Fatima Al Hashimi', service: 'Pest Control', status: 'in_progress', priority: 'medium', date: '2026-02-25' },
  { id: 'REQ-003', citizen: 'Mohammed Al Ketbi', service: 'Seedlings Request', status: 'completed', priority: 'low', date: '2026-02-24' },
  { id: 'REQ-004', citizen: 'Sara Al Shamsi', service: 'Sand Leveling', status: 'in_review', priority: 'medium', date: '2026-02-24' },
  { id: 'REQ-005', citizen: 'Khalid Al Nuaimi', service: 'Sewage Removal', status: 'pending', priority: 'urgent', date: '2026-02-23' },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  in_review: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  in_progress: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

const priorityColors: Record<string, string> = {
  low: 'text-gray-500', medium: 'text-yellow-500', high: 'text-orange-500', urgent: 'text-red-500',
};

export default function AdminDashboard() {
  const { t } = useLang();
  const [tab, setTab] = useState<'overview' | 'requests'>('overview');

  const stats = [
    { label: t('Total Requests', 'إجمالي الطلبات'), value: '318', icon: FileText, color: 'bg-green-uae', change: '+12%' },
    { label: t('Active Citizens', 'المواطنون النشطون'), value: '156', icon: Users, color: 'bg-gold', change: '+8%' },
    { label: t('Completed', 'المكتملة'), value: '245', icon: CheckCircle, color: 'bg-emerald-500', change: '+15%' },
    { label: t('Pending', 'قيد الانتظار'), value: '30', icon: Clock, color: 'bg-yellow-500', change: '-5%' },
    { label: t('Avg. Resolution', 'متوسط الإنجاز'), value: '4.2d', icon: TrendingUp, color: 'bg-blue-500', change: '-0.8d' },
    { label: t('Urgent', 'عاجل'), value: '3', icon: AlertTriangle, color: 'bg-red-500', change: '0' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('Admin Dashboard', 'لوحة الإدارة')}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('Al Madam Municipality Management Portal', 'بوابة إدارة بلدية منطقة المدام')}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setTab('overview')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === 'overview' ? 'bg-green-uae text-white' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'}`}>{t('Overview', 'نظرة عامة')}</button>
            <button onClick={() => setTab('requests')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab === 'requests' ? 'bg-green-uae text-white' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800'}`}>{t('Requests', 'الطلبات')}</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
              <div className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center mb-2`}>
                <s.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{s.label}</div>
              <div className={`text-xs mt-1 ${s.change.startsWith('+') ? 'text-green-500' : s.change.startsWith('-') ? 'text-red-500' : 'text-gray-400'}`}>{s.change}</div>
            </div>
          ))}
        </div>

        {tab === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Trends */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('Monthly Requests', 'الطلبات الشهرية')}</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Line type="monotone" dataKey="requests" stroke="#006633" strokeWidth={2} dot={{ fill: '#C9A14A' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* By Category */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('By Category', 'حسب الفئة')}</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}>
                    {categoryData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* By Status */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('By Status', 'حسب الحالة')}</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {statusData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('Recent Activity', 'النشاط الأخير')}</h3>
              <div className="space-y-3">
                {recentRequests.slice(0, 4).map((r) => (
                  <div key={r.id} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{r.service}</div>
                      <div className="text-xs text-gray-500">{r.citizen} · {r.date}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[r.status]}`}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Requests Table */
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">{t('ID', 'الرقم')}</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">{t('Citizen', 'المواطن')}</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">{t('Service', 'الخدمة')}</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">{t('Status', 'الحالة')}</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">{t('Priority', 'الأولوية')}</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-gray-400">{t('Date', 'التاريخ')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {recentRequests.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-mono text-gray-900 dark:text-white">{r.id}</td>
                      <td className="px-4 py-3 text-gray-900 dark:text-white">{r.citizen}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{r.service}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[r.status]}`}>{r.status}</span></td>
                      <td className={`px-4 py-3 font-medium capitalize ${priorityColors[r.priority]}`}>{r.priority}</td>
                      <td className="px-4 py-3 text-gray-500">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
