// 移动端导航菜单切换
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// 导航到对应板块
function navigateToSection(sectionId) {
    // 这里可以添加跳转逻辑
    // 目前先显示提示信息
    const sectionNames = {
        'academic': '学术服务',
        'marketplace': '二手交易',
        'social': '社交分享',
        'jobs': '兼职对接'
    };
    
    alert(`即将跳转到${sectionNames[sectionId]}板块（功能开发中）`);
    
    // 未来可以添加实际跳转逻辑：
    // window.location.href = `#${sectionId}`;
    // 或者
    // window.location.href = `./${sectionId}.html`;
}

// 平滑滚动（如果使用锚点链接）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 图片加载错误处理
const campusImage = document.getElementById('campusImage');
if (campusImage) {
    campusImage.addEventListener('error', function() {
        // 如果图片加载失败，使用备用图片或占位符
        this.src = 'https://via.placeholder.com/1200x600/e8e8e8/1a4d7a?text=Sydney+Campus+Hub';
        this.alt = '校园场景占位图';
    });
}
