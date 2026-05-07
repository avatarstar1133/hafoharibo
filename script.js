document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiệu ứng Fade-in mượt mà
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 200);

    // 2. Chức năng Đổi Theme & Lưu vào LocalStorage
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Kiểm tra xem trước đó user đã chọn theme nào chưa (lấy từ bộ nhớ trình duyệt)
    const savedTheme = localStorage.getItem('hafo_portfolio_theme');
    
    // Nếu có theme đã lưu, áp dụng ngay lập tức
    if (savedTheme) {
        body.className = savedTheme; // Ghi đè class của body
        updateActiveButton(savedTheme);
    }

    // Lắng nghe sự kiện click trên các nút chọn theme
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newTheme = btn.getAttribute('data-theme');
            
            // Đổi class của body
            body.className = newTheme;
            
            // Lưu vào LocalStorage
            localStorage.setItem('hafo_portfolio_theme', newTheme);
            
            // Cập nhật giao diện của nút đang được chọn
            updateActiveButton(newTheme);
        });
    });

    // Hàm cập nhật viền sáng cho nút theme đang active
    function updateActiveButton(themeName) {
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 3. Hiệu ứng haptic phản hồi nhẹ trên mobile
    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.transform = "scale(0.96)";
        });
        link.addEventListener('touchend', () => {
            link.style.transform = ""; // Reset về CSS mặc định
        });
    });
});