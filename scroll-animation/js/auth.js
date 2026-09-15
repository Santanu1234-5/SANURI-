/**
 * Shared Authentication Module for SANURI
 * Initializes Supabase and manages global authentication state.
 */

window.supabaseClient = null;

window.initAuth = async () => {
    if (window.supabaseClient) return window.supabaseClient;

    try {
        // Fetch Supabase public config from Vercel API
        const response = await fetch('/api/auth-config');
        if (!response.ok) {
            throw new Error('Could not fetch authentication configuration.');
        }
        
        const config = await response.json();
        
        if (!config.supabaseUrl || !config.supabaseAnonKey) {
            throw new Error('Supabase environment variables are missing on Vercel.');
        }

        // Initialize Supabase Client
        window.supabaseClient = window.supabase.createClient(
            config.supabaseUrl, 
            config.supabaseAnonKey
        );
        
        return window.supabaseClient;
    } catch (err) {
        console.error("Auth Initialization Error:", err);
        throw err;
    }
};

// Global session listener (optional global redirects)
document.addEventListener("DOMContentLoaded", async () => {
    // If the page isn't one of the auth pages, we can check auth state silently
    const path = window.location.pathname;
    const isAuthPage = path.includes('login.html') || 
                       path.includes('signup.html') || 
                       path.includes('forgot-password.html') || 
                       path.includes('reset-password.html');

    if (isAuthPage) {
        // If user is already logged in and visits an auth page, redirect to dashboard
        try {
            await window.initAuth();
            const { data: { session } } = await window.supabaseClient.auth.getSession();
            
            // Only redirect if they are actually logged in AND not trying to reset their password
            if (session && !window.location.hash.includes('access_token') && !path.includes('reset-password.html')) {
                window.location.replace('dashboard.html');
            }
        } catch (e) {
            // Ignore init errors here, let the form submissions catch them
        }
    }
});
