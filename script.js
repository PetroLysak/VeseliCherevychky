// Чекаємо, поки сторінка завантажиться
document.addEventListener('DOMContentLoaded', () => {
    
    // === (НОВА ЛОГІКА) Генерація КАРУСЕЛІ (на index.html) ===
    const carouselElement = document.getElementById('photoCarousel');
    
    if (carouselElement) {
        const carouselInner = carouselElement.querySelector('.carousel-inner');
        const carouselIndicators = carouselElement.querySelector('.carousel-indicators');
        const totalImages = 940; // Ваша кількість фотографій

        // Очищаємо контейнери (про всяк випадок, якщо там щось було)
        carouselInner.innerHTML = '';
        carouselIndicators.innerHTML = '';

        // Масив для зберігання згенерованих слайдів перед перемішуванням
        let slidesArray = [];

        // Генеруємо слайди та індикатори
        for (let i = 1; i <= totalImages; i++) {
            // --- Створюємо слайд ---
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('carousel-item');
            // Перший слайд робимо активним (до перемішування)
            // if (i === 1) { 
            //     slideDiv.classList.add('active'); 
            // }

            const img = document.createElement('img');
            img.src = `photos/${i}.jpg`;
            img.classList.add('d-block', 'w-100', 'carousel-image');
            img.alt = `Фото ${i}`;
            img.loading = 'lazy'; // Додаємо ліниве завантаження для всіх фото в каруселі

            slideDiv.appendChild(img);
            // Додаємо згенерований слайд у тимчасовий масив
            slidesArray.push(slideDiv);

            // --- Створюємо індикатор ---
            const indicatorButton = document.createElement('button');
            indicatorButton.type = 'button';
            indicatorButton.setAttribute('data-bs-target', '#photoCarousel');
            indicatorButton.setAttribute('data-bs-slide-to', i - 1);
            indicatorButton.setAttribute('aria-label', `Slide ${i}`);
            // Перший індикатор робимо активним (до перемішування)
            // if (i === 1) {
            //     indicatorButton.classList.add('active');
            //     indicatorButton.setAttribute('aria-current', 'true');
            // }
            carouselIndicators.appendChild(indicatorButton);
        }

        // === Логіка для РАНДОМНОГО ПОРЯДКУ СЛАЙДІВ (тепер тут) ===
        
        // Перемішуємо масив слайдів
        for (let i = slidesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slidesArray[i], slidesArray[j]] = [slidesArray[j], slidesArray[i]];
        }

        // Додаємо перемішані слайди в DOM
        slidesArray.forEach((slide, index) => {
             // Перший слайд у *новому* порядку робимо активним
            if (index === 0) {
                slide.classList.add('active');
            }
            carouselInner.appendChild(slide);
        });

        // Активуємо перший індикатор після перемішування
        const firstIndicator = carouselIndicators.querySelector('button');
        if (firstIndicator) {
             firstIndicator.classList.add('active');
             firstIndicator.setAttribute('aria-current', 'true');
        }
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
                scrollTopBtn.style.opacity = '0.1'; // Ваша прозорість 10%
            
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