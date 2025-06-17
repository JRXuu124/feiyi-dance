// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('非遗舞鉴网站已加载！');
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // 更新URL而不跳转
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
    
    // 卡片悬停效果
    const cards = document.querySelectorAll('.feature-card, .education-card, .product-card, .team-member');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // 演示按钮点击效果
    const demoButtons = document.querySelectorAll('.demo-button');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('这是演示版本，完整功能将在正式版中提供！');
        });
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 在实际应用中，这里会有表单验证和AJAX提交
            // 对于Netlify表单，不需要额外处理
            console.log('表单已提交');
        });
    }
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});