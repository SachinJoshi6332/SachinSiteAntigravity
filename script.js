document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.style.cssText = `
        color: var(--accent-color);
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
    `;

    const sidebar = document.querySelector('.sidebar');
    const navMenu = document.querySelector('.nav-menu');

    // Only show toggle on mobile (check via CSS media query logic or just append and let CSS handle display)
    // Actually, let's add it to the sidebar for mobile view
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        sidebar.appendChild(menuToggle);
    }

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPath) {
            item.classList.add('active');
        }
    });

    // Handle resizing to reset menu state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.style.display = 'none';
            navMenu.classList.remove('active');
            navMenu.style.display = 'flex';
        } else {
            menuToggle.style.display = 'block';
            navMenu.style.display = ''; // Revert to CSS control (none by default, flex when active)
        }
    });
});
