// Чекаємо, поки сторінка завантажиться
document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо контейнер, в якому лежать слайди
    // Важливо: цей код спрацює тільки на index.html, 
    // де існує #photoCarousel. На інших сторінках він просто
    // нічого не зробить і не викличе помилки, бо carouselInner буде null.
    const carouselInner = document.querySelector('#photoCarousel .carousel-inner');
    
    // Перевіряємо, чи ми взагалі на сторінці з каруселлю
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
});