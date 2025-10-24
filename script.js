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
    
    // === Завантаження відео по кліку ===
    
    const placeholders = document.querySelectorAll('.video-placeholder');

    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const youtubeId = placeholder.dataset.youtubeId;

            let iframeSrc = '';

            if (youtubeId) {
                iframeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`; 
            } 

            if (iframeSrc) {
                const container = document.createElement('div');
                container.classList.add('embed-responsive-container');

                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', iframeSrc);
                iframe.setAttribute('title', 'YouTube video player'); 
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin'); 
                iframe.setAttribute('allowfullscreen', '');

                container.appendChild(iframe);

                if (placeholder.parentNode) {
                    placeholder.parentNode.replaceChild(container, placeholder);
                } else {
                    console.error("Не вдалося знайти батьківський елемент для плейсхолдера.");
                }
            }
        }, { once: true }); 
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
	
    // === (ОНОВЛЕНО) Перемикач Тем з SVG ===
    
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const themeIconContainer = document.getElementById('theme-icon-container'); // Тепер це контейнер
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'; // За замовчуванням світла

    // SVG код іконок (Bootstrap Icons)
    const sunIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>`;
    const moonIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162h1.234a.217.217 0 0 1 .153.372l-.986.754.387 1.162a.217.217 0 0 1-.316.242l-.986-.754-.986.754a.217.217 0 0 1-.316-.242l.387-1.162-.986-.754a.217.217 0 0 1 .153-.372h1.234l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/></svg>`;

    // Функція встановлення іконки
    const setIcon = (theme) => {
        if (themeIconContainer) {
            themeIconContainer.innerHTML = theme === 'dark' ? moonIconSVG : sunIconSVG;
        }
    }

    // Функція застосування темної теми
    const enableDarkMode = () => {
        document.body.classList.add('dark-theme');
        setIcon('dark'); // Встановлюємо SVG місяця
        localStorage.setItem('theme', 'dark');
    }

    // Функція застосування світлої теми
    const enableLightMode = () => {
        document.body.classList.remove('dark-theme');
        setIcon('light'); // Встановлюємо SVG сонця
        localStorage.setItem('theme', 'light');
    }

    // Перевіряємо збережену тему при завантаженні сторінки
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode(); // Застосовуємо світлу (і встановлюємо іконку сонця)
    }

    // Додаємо обробники кліків на кнопки вибору теми
    if (lightThemeBtn) {
        lightThemeBtn.addEventListener('click', enableLightMode);
    }
    if (darkThemeBtn) {
        darkThemeBtn.addEventListener('click', enableDarkMode);
    }

}); // Кінець DOMContentLoaded