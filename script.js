// Чекаємо, поки сторінка завантажиться
document.addEventListener('DOMContentLoaded', () => {
    
    // === Генерація КАРУСЕЛІ (на index.html) ===
    const carouselElement = document.getElementById('photoCarousel');
    
    if (carouselElement) {
        const carouselInner = carouselElement.querySelector('.carousel-inner');
        const carouselIndicators = carouselElement.querySelector('.carousel-indicators');
        const totalImages = 940; // Ваша кількість фотографій

        carouselInner.innerHTML = '';
        carouselIndicators.innerHTML = '';
        let slidesArray = [];

        for (let i = 1; i <= totalImages; i++) {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('carousel-item');
            
            const img = document.createElement('img');
            img.src = `photos/${i}.jpg`;
            img.classList.add('d-block', 'w-100', 'carousel-image');
            img.alt = `Фото ${i}`;
            img.loading = 'lazy'; 

            slideDiv.appendChild(img);
            slidesArray.push(slideDiv);

            const indicatorButton = document.createElement('button');
            indicatorButton.type = 'button';
            indicatorButton.setAttribute('data-bs-target', '#photoCarousel');
            indicatorButton.setAttribute('data-bs-slide-to', i - 1);
            indicatorButton.setAttribute('aria-label', `Slide ${i}`);
            carouselIndicators.appendChild(indicatorButton);
        }

        // === Рандомний порядок слайдів ===
        for (let i = slidesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slidesArray[i], slidesArray[j]] = [slidesArray[j], slidesArray[i]];
        }

        slidesArray.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add('active');
            }
            carouselInner.appendChild(slide);
        });

        const firstIndicator = carouselIndicators.querySelector('button');
        if (firstIndicator) {
             firstIndicator.classList.add('active');
             firstIndicator.setAttribute('aria-current', 'true');
        }
    }
    
    // === (НОВА ЛОГІКА) Завантаження відео по кліку ===
    
    const placeholders = document.querySelectorAll('.video-placeholder');

    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const youtubeId = placeholder.dataset.youtubeId;
            // const vimeoId = placeholder.dataset.vimeoId; // Залишено, якщо знадобиться

            let iframeSrc = '';

            if (youtubeId) {
                // Витягуємо 'si' параметр, якщо він є в URL поточної сторінки 
                // (або використовуємо статичний, якщо потрібно)
                const urlParams = new URLSearchParams(window.location.search);
                const siParam = urlParams.get('si') ? `&si=${urlParams.get('si')}` : ''; // Або просто залиште ''
                
                iframeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1${siParam}`; 
                // Додаємо autoplay=1
            } 
            /*
            else if (vimeoId) {
                 iframeSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`; 
            }
            */

            if (iframeSrc) {
                const container = document.createElement('div');
                container.classList.add('embed-responsive-container');

                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', iframeSrc);
                iframe.setAttribute('title', 'YouTube video player'); // Додав стандартний title
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                 iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin'); // Додав стандартний referrerpolicy
                iframe.setAttribute('allowfullscreen', '');

                container.appendChild(iframe);

                if (placeholder.parentNode) {
                    placeholder.parentNode.replaceChild(container, placeholder);
                } else {
                    console.error("Не вдалося знайти батьківський елемент для плейсхолдера.");
                }
            }
        }, { once: true }); // Додаємо { once: true }, щоб клік спрацював лише один раз
    });


    // === Кнопка "Наверх" ===
    
    const scrollTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollTopBtn) {
        const scrollFunction = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopBtn.style.visibility = 'visible';
                scrollTopBtn.style.opacity = '0.1'; 
            } else {
                scrollTopBtn.style.visibility = 'hidden';
                scrollTopBtn.style.opacity = '0';
            }
        };

        window.onscroll = () => {
            scrollFunction();
        };

        const topFunction = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        };

        scrollTopBtn.addEventListener('click', topFunction);
    }

});