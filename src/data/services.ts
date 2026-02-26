import type { ServiceCategory, Service } from '../types';

export const categories: ServiceCategory[] = [
  {
    id: 'general',
    name_en: 'General Services',
    name_ar: 'الخدمات العامة',
    description_en: 'Road construction, concreting, sand operations, and infrastructure maintenance',
    description_ar: 'إنشاء الطرق، التسوية، عمليات الرمال، وصيانة البنية التحتية',
    icon: 'Building2',
    sort_order: 1,
  },
  {
    id: 'environmental',
    name_en: 'Environmental & Sanitation',
    name_ar: 'الخدمات البيئية والصحية',
    description_en: 'Pest control, farm services, sewage, tree management, and permits',
    description_ar: 'مكافحة الآفات، خدمات المزارع، الصرف الصحي، إدارة الأشجار، والتصاريح',
    icon: 'Leaf',
    sort_order: 2,
  },
  {
    id: 'agricultural',
    name_en: 'Agricultural Services',
    name_ar: 'خدمات الإدارة الزراعية',
    description_en: 'Seedlings, consultations, landscaping, and event decoration',
    description_ar: 'الشتلات، الاستشارات، تنسيق الحدائق، وتزيين المناسبات',
    icon: 'Flower2',
    sort_order: 3,
  },
  {
    id: 'smart',
    name_en: 'Smart Services',
    name_ar: 'الخدمات الذكية',
    description_en: 'Interactive maps, digital request management, and bilingual support',
    description_ar: 'الخرائط التفاعلية، إدارة الطلبات الرقمية، والدعم ثنائي اللغة',
    icon: 'Smartphone',
    sort_order: 4,
  },
];

export const services: Service[] = [
  // General Services
  { id: 'gs-1', category_id: 'general', name_en: 'Road Construction for Homes & Mosques', name_ar: 'طلب إنشاء طريق يخدم المنازل والمساجد', description_en: 'Request construction of roads serving residential areas and mosques', description_ar: 'طلب إنشاء طريق يخدم المنازل والمساجد في المنطقة', required_documents: 'Location map, Property documents', estimated_days: 30, is_active: true },
  { id: 'gs-2', category_id: 'general', name_en: 'House Concreting', name_ar: 'طلب تسوية المنزل بالخرسانة', description_en: 'Request concreting services for residential properties', description_ar: 'طلب خدمات صب الخرسانة للعقارات السكنية', required_documents: 'Property ownership, Site photos', estimated_days: 14, is_active: true },
  { id: 'gs-3', category_id: 'general', name_en: 'Sand Leveling', name_ar: 'طلب تسوية الرمال', description_en: 'Request sand leveling for plots and areas', description_ar: 'طلب تسوية الرمال للأراضي والمناطق', required_documents: 'Location details', estimated_days: 7, is_active: true },
  { id: 'gs-4', category_id: 'general', name_en: 'Sand Filling', name_ar: 'طلب ردم بالرمال', description_en: 'Request sand filling services for designated areas', description_ar: 'طلب خدمات ردم الرمال للمناطق المحددة', required_documents: 'Location map', estimated_days: 7, is_active: true },
  { id: 'gs-5', category_id: 'general', name_en: 'Sand Removal', name_ar: 'طلب إزالة الرمال', description_en: 'Request sand removal from specified locations', description_ar: 'طلب إزالة الرمال من المواقع المحددة', required_documents: 'Location details, Photos', estimated_days: 5, is_active: true },
  { id: 'gs-6', category_id: 'general', name_en: 'Dirt Road Construction & Maintenance', name_ar: 'طلب إنشاء وصيانة الطرق الترابية', description_en: 'Construction and maintenance of unpaved dirt roads', description_ar: 'إنشاء وصيانة الطرق الترابية غير المعبدة', required_documents: 'Location map, Road details', estimated_days: 21, is_active: true },
  // Environmental & Sanitation
  { id: 'es-1', category_id: 'environmental', name_en: 'Public Health Pest Control', name_ar: 'طلب مكافحة آفات الصحة العامة', description_en: 'Pest control services for public health areas', description_ar: 'خدمات مكافحة الآفات في مناطق الصحة العامة', required_documents: 'Location, Type of pest', estimated_days: 3, is_active: true },
  { id: 'es-2', category_id: 'environmental', name_en: 'Farm Concreting (Ezba)', name_ar: 'طلب صب الخرسانة للمزارع (العزبة)', description_en: 'Concreting services for farm areas', description_ar: 'خدمات صب الخرسانة لمناطق المزارع', required_documents: 'Farm ownership, Location', estimated_days: 14, is_active: true },
  { id: 'es-3', category_id: 'environmental', name_en: 'Stray Dog & Cat Control', name_ar: 'طلب مكافحة الكلاب والقطط الضالة', description_en: 'Control and management of stray animals', description_ar: 'مكافحة وإدارة الحيوانات الضالة', required_documents: 'Location, Description', estimated_days: 2, is_active: true },
  { id: 'es-4', category_id: 'environmental', name_en: 'Farm Leveling', name_ar: 'طلب تسوية المزارع', description_en: 'Leveling services for agricultural farms', description_ar: 'خدمات تسوية المزارع الزراعية', required_documents: 'Farm details, Location', estimated_days: 10, is_active: true },
  { id: 'es-5', category_id: 'environmental', name_en: 'Sewage Water Removal', name_ar: 'طلب إزالة مياه الصرف الصحي', description_en: 'Sewage removal from government buildings and residential areas', description_ar: 'إزالة مياه الصرف الصحي من المباني الحكومية والمناطق السكنية', required_documents: 'Location, Building type', estimated_days: 2, is_active: true },
  { id: 'es-6', category_id: 'environmental', name_en: 'Harmful Tree Removal', name_ar: 'طلب تنظيف وإزالة الأشجار الضارة', description_en: 'Cleaning and removal of harmful trees from city and residential areas', description_ar: 'تنظيف وإزالة الأشجار الضارة من المدينة والمناطق السكنية', required_documents: 'Location, Photos of trees', estimated_days: 5, is_active: true },
  { id: 'es-7', category_id: 'environmental', name_en: 'Road Leveling', name_ar: 'طلب تسوية الطرق', description_en: 'Road leveling and grading services', description_ar: 'خدمات تسوية وتمهيد الطرق', required_documents: 'Location map', estimated_days: 7, is_active: true },
  { id: 'es-8', category_id: 'environmental', name_en: 'Food & Agricultural Permits', name_ar: 'تصاريح الأنشطة الغذائية والزراعية', description_en: 'Permits for food and agricultural activities', description_ar: 'تصاريح للأنشطة الغذائية والزراعية', required_documents: 'Business license, Activity details', estimated_days: 10, is_active: true },
  { id: 'es-9', category_id: 'environmental', name_en: 'Report Environmental Violations', name_ar: 'الإبلاغ عن المخالفات البيئية والصحية', description_en: 'Report environmental and health violations', description_ar: 'الإبلاغ عن المخالفات البيئية والصحية', required_documents: 'Photos, Location, Description', estimated_days: 3, is_active: true },
  // Agricultural
  { id: 'ag-1', category_id: 'agricultural', name_en: 'Seedlings & Trees for Citizens', name_ar: 'توفير الشتلات والأشجار للمواطنين', description_en: 'Provision of seedlings and trees to citizens', description_ar: 'توفير الشتلات والأشجار للمواطنين', required_documents: 'Emirates ID', estimated_days: 7, is_active: true },
  { id: 'ag-2', category_id: 'agricultural', name_en: 'Agricultural Consultation', name_ar: 'خدمات الاستشارة الزراعية', description_en: 'Professional agricultural consultation services', description_ar: 'خدمات الاستشارة الزراعية المهنية', required_documents: 'Farm details', estimated_days: 5, is_active: true },
  { id: 'ag-3', category_id: 'agricultural', name_en: 'Garden & Façade Landscaping', name_ar: 'تنسيق الحدائق الداخلية وواجهات المنازل', description_en: 'Landscaping of internal gardens and residential front façades', description_ar: 'تنسيق الحدائق الداخلية وواجهات المنازل السكنية', required_documents: 'Property details, Design preferences', estimated_days: 14, is_active: true },
  { id: 'ag-4', category_id: 'agricultural', name_en: 'Event Decoration with Plants', name_ar: 'تزيين مواقع المناسبات بالنباتات', description_en: 'Decoration of public and private event locations with ornamental plant arrangements', description_ar: 'تزيين مواقع المناسبات العامة والخاصة بترتيبات النباتات الزينة', required_documents: 'Event details, Location, Date', estimated_days: 5, is_active: true },
  // Smart Services
  { id: 'ss-1', category_id: 'smart', name_en: 'Interactive Service Map', name_ar: 'خريطة تفاعلية للخدمات والمرافق', description_en: 'Interactive map of service and facility locations', description_ar: 'خريطة تفاعلية لمواقع الخدمات والمرافق', required_documents: null, estimated_days: 0, is_active: true },
  { id: 'ss-2', category_id: 'smart', name_en: 'Digital Request Management', name_ar: 'إدارة الطلبات الرقمية', description_en: 'Integration with the municipality main request management system', description_ar: 'التكامل مع نظام إدارة الطلبات الرئيسي للبلدية', required_documents: null, estimated_days: 0, is_active: true },
];
