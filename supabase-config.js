
// Supabase Configuration
// WICHTIG: Ersetze die Werte unten mit deinen echten Supabase Keys!

// Deine Supabase Project URL (von Supabase Dashboard → Settings → API)
const SUPABASE_URL = 'https://hfbkmqzffrletmqwzvme.supabase.co';

// Dein anon/public Key (von Supabase Dashboard → Settings → API)
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmYmttcXpmZnJsZXRtcXd6dm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1Mzc1MjksImV4cCI6MjA4NTExMzUyOX0.bfBRAlsqdoK776x3HwkZkz-nIIQ0xBEg_c36oTBuG4s';

// Supabase Client erstellen (nutzt das globale window.supabase Object)
if (typeof window.supabase !== 'undefined') {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase Client created successfully!');
} else {
    console.error('❌ Supabase library not loaded! Check internet connection.');
}