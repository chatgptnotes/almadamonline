export type UserRole = 'citizen' | 'staff' | 'admin';
export type RequestStatus = 'pending' | 'in_review' | 'approved' | 'in_progress' | 'completed' | 'rejected';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type ContactStatus = 'new' | 'read' | 'replied';
export type Language = 'en' | 'ar';

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url: string | null;
  role: UserRole;
  phone: string | null;
  emirate: string | null;
  area: string | null;
  language_pref: Language;
  created_at: string;
}

export interface ServiceCategory {
  id: string;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  icon: string;
  sort_order: number;
}

export interface Service {
  id: string;
  category_id: string;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  required_documents: string | null;
  estimated_days: number;
  is_active: boolean;
  category?: ServiceCategory;
}

export interface ServiceRequest {
  id: string;
  service_id: string;
  user_id: string;
  status: RequestStatus;
  description: string;
  location_lat: number | null;
  location_lng: number | null;
  address: string | null;
  attachments: string[];
  assigned_to: string | null;
  priority: Priority;
  notes: string | null;
  created_at: string;
  updated_at: string;
  service?: Service;
  profile?: Profile;
}

export interface Announcement {
  id: string;
  title_en: string;
  title_ar: string;
  content_en: string;
  content_ar: string;
  image_url: string | null;
  is_published: boolean;
  published_at: string | null;
  created_by: string | null;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: ContactStatus;
  created_at: string;
}
