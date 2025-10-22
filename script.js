// Чекаємо, поки сторінка завантажиться
document.addEventListener('DOMContentLoaded', () => {
    
    // === Логіка для РАНДОМНОЇ КАРУСЕЛІ (на index.html) ===
    const carouselInner = document.querySelector('#photoCarousel .carousel-inner');
    
    if (carouselInner) {
        // Збираємо всі слайди в один масив
        const slides = Array.from(carouselInner.querySelectorAll('.carousel-item'));
        
        // Перемішуємо цей масив (алгоритм Фішера-Єйтса)
        for (let i = slides.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slides[i], slides[j]] = [slides[j], slides[i]];
        }
        
        // Очищуємо контейнер
        carouselInner.innerHTML = '';
        
        // Заливаємо слайди назад у контейнер у новому порядку
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === 0) {
                slide.classList.add('active');
            }
            carouselInner.appendChild(slide);
        });
        
        // Скидаємо індикатори (крапочки)
        const indicators = document.querySelectorAll('#photoCarousel .carousel-indicators button');
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === 0) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.removeAttribute('aria-current');
            }
        });
    }

    
    // === Кнопка "Наверх" ===
    
    // 1. Знаходимо кнопку
    const scrollTopBtn = document.getElementById('scrollToTopBtn');

    // 2. Перевіряємо, чи кнопка існує на сторінці
    if (scrollTopBtn) {
        
        // 3. Функція, яка показує/ховає кнопку
        const scrollFunction = () => {
            // Показуємо кнопку, якщо прокрутили більше 100px
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                
                scrollTopBtn.style.visibility = 'visible';
                
                // (ОНОВЛЕНО) Встановлюємо прозорість 0.1 (10%)
                scrollTopBtn.style.opacity = '0.1'; 
            
            } else {
                
                scrollTopBtn.style.visibility = 'hidden';
                scrollTopBtn.style.opacity = '0';
            }
        };

        // 4. Додаємо слухача події "scroll"
        window.onscroll = () => {
            scrollFunction();
        };

        // 5. Функція, яка прокручує сторінку наверх
        const topFunction = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавна прокрутка
            });
        };

        // 6. Додаємо слухача події "click"
        scrollTopBtn.addEventListener('click', topFunction);
    }

});