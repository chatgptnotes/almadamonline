import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wvxinbwxbbljxawmavlc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2eGluYnd4YmJsanhhd21hdmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MjAxMzcsImV4cCI6MjA4NzQ5NjEzN30.BdRgcqA54s3GuRCJ-De1f7E-1nn37mmVVNZWhx9z4C0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
