document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('fbclid')) {
        urlParams.delete('fbclid');
        const newSearch = urlParams.toString();
        const cleanUrl = window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
    }

    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 200);

    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    const savedTheme = localStorage.getItem('hafo_portfolio_theme');

    if (savedTheme) {
        body.className = savedTheme;
        updateActiveButton(savedTheme);
    }

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newTheme = btn.getAttribute('data-theme');
            body.className = newTheme;
            localStorage.setItem('hafo_portfolio_theme', newTheme);
            updateActiveButton(newTheme);
        });
    });

    function updateActiveButton(themeName) {
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.transform = "scale(0.96)";
        });
        link.addEventListener('touchend', () => {
            link.style.transform = "";
        });
    });
});