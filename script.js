// 博客文章数据
const articlesData = [
    {
        id: 1,
        title: "Cesium.js 入门指南",
        date: "2024-07-15",
        description: "深入了解 Cesium.js 库，学习如何创建交互式 3D 地球应用。",
        tags: ["Cesium", "3D", "GIS"],
        emoji: "🌍"
    },
    {
        id: 2,
        title: "Vue.js 最佳实践",
        date: "2024-07-10",
        description: "分享 Vue.js 开发中的最佳实践和常见陷阱的避免方法。",
        tags: ["Vue.js", "前端", "JavaScript"],
        emoji: "⚡"
    },
    {
        id: 3,
        title: "Three.js 3D 渲染入门",
        date: "2024-07-05",
        description: "学习如何使用 Three.js 创建令人印象深刻的 3D 可视化效果。",
        tags: ["Three.js", "3D", "WebGL"],
        emoji: "🎨"
    },
    {
        id: 4,
        title: "GIS 空间数据处理",
        date: "2024-06-28",
        description: "探索地理信息系统中的空间数据处理和分析技术。",
        tags: ["GIS", "空间分析", "地图"],
        emoji: "🗺️"
    },
    {
        id: 5,
        title: "React Hooks 深度解析",
        date: "2024-06-20",
        description: "全面理解 React Hooks，以及如何在实际项目中应用。",
        tags: ["React", "Hooks", "前端"],
        emoji: "⚛️"
    },
    {
        id: 6,
        title: "WebGL 性能优化技巧",
        date: "2024-06-15",
        description: "掌握 WebGL 应用的性能优化策略和最佳实践。",
        tags: ["WebGL", "性能", "3D"],
        emoji: "⚙️"
    }
];

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function () {
    loadArticles();
    setupNavigation();
    setupSmoothScroll();
});

// 加载文章列表
function loadArticles() {
    const articlesContainer = document.getElementById('articles-container');
    
    if (!articlesContainer) return;
    
    articlesContainer.innerHTML = '';
    
    articlesData.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesContainer.appendChild(articleCard);
    });
}

// 创建文章卡片
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    
    const tagsHTML = article.tags.map(tag => 
        `<span class="article-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="article-card-image">${article.emoji}</div>
        <div class="article-card-content">
            <h3 class="article-card-title">${article.title}</h3>
            <p class="article-card-date">📅 ${formatDate(article.date)}</p>
            <p class="article-card-description">${article.description}</p>
            <div class="article-card-tags">
                ${tagsHTML}
            </div>
        </div>
    `;
    
    card.addEventListener('click', function () {
        alert(`文章: ${article.title}\n\n即将推出完整内容...`);
    });
    
    return card;
}

// 日期格式化
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}

// 设置导航功能
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            navLinks.forEach(l => l.style.borderBottom = 'none');
            this.style.borderBottom = '2px solid var(--primary-color)';
        });
    });
}

// 平滑滚动
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                const offsetTop = targetElement.offsetTop - 60;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 返回顶部按钮
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 99;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createBackToTopButton();

console.log('%c欢迎来到 mldlbs 的博客！', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%c如有任何问题或建议，欢迎通过 GitHub 与我联系。', 'color: #666; font-size: 14px;');