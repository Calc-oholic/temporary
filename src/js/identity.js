document.addEventListener('DOMContentLoaded', () => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Handle login events
    netlifyIdentity.on('login', user => {
        netlifyIdentity.close();
        // Redirect to dashboard after login
        window.location.href = '/pages/user/dashboard.html';
    });

    // Handle signup events
    netlifyIdentity.on('signup', user => {
        netlifyIdentity.close();
        // Redirect to onboarding or profile setup
        window.location.href = '/pages/user/profile.html';
    });

    // Handle logout events
    netlifyIdentity.on('logout', () => {
        // Redirect to home page after logout
        window.location.href = '/index.html';
    });
});