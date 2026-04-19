// Чекаємо, поки сторінка завантажиться
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. ПЕРЕВІРКА ТЕМИ (Робимо першим, щоб фон анімації одразу був правильним)
    // ==========================================
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    // ==========================================
    // 1. АНІМАЦІЯ ПРИ ЗАХОДІ НА САЙТ (тільки для index.html)
    // ==========================================
    const introOverlay = document.getElementById('intro-overlay');
    const introLogo = document.getElementById('intro-logo');
    
    if (introOverlay && introLogo) {
        // Перевіряємо, чи людина вже бачила анімацію в цій сесії (вкладці)
        if (!sessionStorage.getItem('introPlayed')) {
            document.body.style.overflow = 'hidden'; // Забороняємо скрол під час анімації
            
            setTimeout(() => {
                introLogo.classList.add('fly');
                introOverlay.classList.add('hidden');
                
                setTimeout(() => {
                    introOverlay.style.display = 'none';
                    document.body.style.overflow = ''; // Повертаємо скрол
                    sessionStorage.setItem('introPlayed', 'true');
                }, 1000); 
            }, 300);
        } else {
            // Якщо вже бачили — просто ховаємо overlay
            introOverlay.style.display = 'none';
        }
    }

    // ==========================================
    // 2. ГЕНЕРАЦІЯ КАРУСЕЛІ (на index.html)
    // ==========================================
    const carouselElement = document.getElementById('photoCarousel');
    if (carouselElement) {
        const carouselInner = carouselElement.querySelector('.carousel-inner');
        const carouselIndicators = carouselElement.querySelector('.carousel-indicators');
        const totalImages = 940; 

        carouselInner.innerHTML = '';
        if (carouselIndicators) carouselIndicators.innerHTML = '';
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
        }

        // Рандом
        for (let i = slidesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slidesArray[i], slidesArray[j]] = [slidesArray[j], slidesArray[i]];
        }

        slidesArray.forEach((slide, index) => {
            if (index === 0) slide.classList.add('active');
            carouselInner.appendChild(slide);
        });
    }

    // ==========================================
    // 3. ЗАВАНТАЖЕННЯ ВІДЕО ПО КЛІКУ
    // ==========================================
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const youtubeId = placeholder.dataset.youtubeId;
            if (youtubeId) {
                const container = document.createElement('div');
                container.classList.add('embed-responsive-container');
                container.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>`;
                placeholder.parentNode.replaceChild(container, placeholder);
            }
        }, { once: true });
    });

    // ==========================================
    // 4. КНОПКА "НАВЕРХ"
    // ==========================================
    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollTopBtn.style.visibility = 'visible';
                scrollTopBtn.style.opacity = '1';
            } else {
                scrollTopBtn.style.visibility = 'hidden';
                scrollTopBtn.style.opacity = '0';
            }
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // 5. ПЕРЕМИКАЧ ТЕМ
    // ==========================================
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const themeIconContainer = document.getElementById('theme-icon-container');

    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162h1.234a.217.217 0 0 1 .153.372l-.986.754.387 1.162a.217.217 0 0 1-.316.242l-.986-.754-.986.754a.217.217 0 0 1-.316-.242l.387-1.162-.986-.754a.217.217 0 0 1 .153-.372h1.234l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/></svg>`;

    const updateTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (themeIconContainer) themeIconContainer.innerHTML = moonIcon;
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            if (themeIconContainer) themeIconContainer.innerHTML = sunIcon;
            localStorage.setItem('theme', 'light');
        }
    };

    updateTheme(currentTheme); // Ініціалізація

    if (lightThemeBtn) lightThemeBtn.addEventListener('click', () => updateTheme('light'));
    if (darkThemeBtn) darkThemeBtn.addEventListener('click', () => updateTheme('dark'));

    // ==========================================
    // 6. ЛОГІКА ПОШУКУ
    // ==========================================
    const danceDatabase = [
        { name: "Адажіо", page: "teenage.html", yt: "W6OKLnUVVbA" },
        { name: "Алилуя", page: "teenage.html", yt: "sHfZ4wW2GDE" },
        { name: "Аркан", page: "teenage.html", yt: "lOsnlZNoMTA" },
        { name: "Березнянка", page: "teenage.html", yt: "2YzkDJejB48" },
        { name: "Бойківська легонька", page: "teenage.html", yt: "teBjkwEBj3E" },
        { name: "Бондар (Анастасія Кульчицька)", page: "teenage.html", yt: "EC4LUTZEpaQ" },
        { name: "Буковина", page: "teenage.html", yt: "MRxzPi-FCmQ" },
        { name: "Веснянки", page: "teenage.html", yt: "e3FNAz3Hg60" },
        { name: "Війна 2022 (Пролог)", page: "teenage.html", yt: "hUNGarBi7Sk" },
        { name: "Вітальний", page: "teenage.html", yt: "Ivru4TARau0" },
        { name: "Вітер", page: "teenage.html", yt: "wFfqSS5FB4M" },
        { name: "Галочки", page: "teenage.html", yt: "x-i4RTPBFG4" },
        { name: "Голубка", page: "teenage.html", yt: "KAawED-S0p4" },
        { name: "Гопак", page: "teenage.html", yt: "s59ypEgbg-E" },
        { name: "Гуцулія (стара)", page: "teenage.html", yt: "H6dqA8Uo-LM" },
        { name: "Два кольори (стара версія)", page: "teenage.html", yt: "uroowFgg2mM" },
        { name: "Дев'ятка", page: "teenage.html", yt: "FCuvpxXhD9U" },
        { name: "Дубо-танець", page: "teenage.html", yt: "FrjCq-1dX2M" },
        { name: "Їхали козаки", page: "teenage.html", yt: "wFBU3qpxFuM" },
        { name: "Квіти", page: "teenage.html", yt: "K_cdI7uD5kM" },
        { name: "Кокетка", page: "teenage.html", yt: "opBb8Gnkfbs" },
        { name: "Коломийки", page: "teenage.html", yt: "qURSxTOCzcc" },
        { name: "Куделиця", page: "teenage.html", yt: "y0w0r61eJfE" },
        { name: "Кум до куми (стара версія)", page: "teenage.html", yt: "zOullSL43vE" },
        { name: "Лелеки", page: "teenage.html", yt: "_j4KUa4gDt8" },
        { name: "Ліричний", page: "teenage.html", yt: "4_m5bu4xcww" },
        { name: "Любисток", page: "teenage.html", yt: "WwAH_pZGVC0" },
        { name: "Народження Ісуса", page: "teenage.html", yt: "ip1R8xL8r14" },
        { name: "Небесна сотня", page: "teenage.html", yt: "CK-zHP8Avj0" },
        { name: "Ніч", page: "teenage.html", yt: "ZlLM_GI7COo" },
        { name: "Опришка", page: "teenage.html", yt: "YqZ8e8gK7Ss" },
        { name: "Пліткарки", page: "teenage.html", yt: "QVYZTjErNf8" },
        { name: "Подолянка", page: "teenage.html", yt: "qk70uRcYA4U" },
        { name: "Полька богдашівська", page: "teenage.html", yt: "j2kqIAHatTM" },
        { name: "Полька львівська", page: "teenage.html", yt: "GKbv4mJW3zk" },
        { name: "Притупи", page: "teenage.html", yt: "bzpTHqUXYaQ" },
        { name: "Рипуни (стара версія)", page: "teenage.html", yt: "N2nBb5EqjXc" },
        { name: "Ти ж мене підманула", page: "teenage.html", yt: "-hdqJSpWnYE" },
        { name: "Україна (молитва)", page: "teenage.html", yt: "otAvqzEG7yc" },
        { name: "Україна (нова)", page: "teenage.html", yt: "PcsbSXD7nbQ" },
        { name: "Україна (стара)", page: "teenage.html", yt: "XnFYmHdbjAU" },
        { name: "Чепурненька", page: "teenage.html", yt: "IKZBsEFOh2Y" },
        { name: "Чорнобривці", page: "teenage.html", yt: "D42BNdl9CR0" },
        { name: "Чумацькі радощі", page: "teenage.html", yt: "9dtm2rwn6j4" },
        { name: "Шевчики", page: "teenage.html", yt: "ia5AMSa5Xmk" },
        { name: "Щедрик", page: "teenage.html", yt: "L7mM_yXExO0" },
        { name: "Бубни", page: "preparatory.html", yt: "65K6dfnR2X0" },
        { name: "Веснянки (повна версія)", page: "preparatory.html", yt: "KmQoCk1yzQ4" },
        { name: "Вітальний", page: "preparatory.html", yt: "OPDJijAvz84" },
        { name: "Вітальний (стара)", page: "preparatory.html", yt: "J9VpciOkIHk" },
        { name: "Ворітця", page: "preparatory.html", yt: "t59jINljqao" },
        { name: "Гуцулія (стара)", page: "preparatory.html", yt: "o5JpIm6itqc" },
        { name: "Дощик/Шум", page: "preparatory.html", yt: "a98Dj9aNqUE" },
        { name: "Жук", page: "preparatory.html", yt: "IR3op_1-KFo" },
        { name: "Івана Купала (Вільна Україна)", page: "preparatory.html", yt: "yTJk1ejqBOo" },
        { name: "Карпатські забави", page: "preparatory.html", yt: "wvpdjT7HRLw" },
        { name: "Козачок", page: "preparatory.html", yt: "wPIg6rEJY8Y" },
        { name: "Козачок (стара версія)", page: "preparatory.html", yt: "EeFKMGdOMS8" },
        { name: "Колядники", page: "preparatory.html", yt: "Fylq7uLlse4" },
        { name: "Котигорошко", page: "preparatory.html", yt: "Ctuz6Hgdtow" },
        { name: "Кухар лемко", page: "preparatory.html", yt: "UFgucy4GnLM" },
        { name: "Метелиця", page: "preparatory.html", yt: "fD8zvhmq098" },
        { name: "Музики", page: "preparatory.html", yt: "XwlAnVNuRII" },
        { name: "На ставочку", page: "preparatory.html", yt: "vPI66z5sszU" },
        { name: "Ой-ра", page: "preparatory.html", yt: "9fn0ppauTU4" },
        { name: "Перепілка", page: "preparatory.html", yt: "OgsTpmTyKhE" },
        { name: "Свіча", page: "preparatory.html", yt: "a8y-LulsaQ4" },
        { name: "Співаночки", page: "preparatory.html", yt: "Q5tZ6I239n0" },
        { name: "Страшидла", page: "preparatory.html", yt: "fu978Ud_xOk" },
        { name: "Черевики", page: "preparatory.html", yt: "T3cj_tCcDxc" },
        { name: "Чумаки", page: "preparatory.html", yt: "d2Go8H5Yxec" },
        { name: "Шир", page: "preparatory.html", yt: "q4P1EIlC0K4" },
        { name: "Шопка", page: "preparatory.html", yt: "qm2s9WpQVj0" },
        { name: "Ангелятка", page: "small.html", yt: "wbnHEurtieA" },
        { name: "Баранята", page: "small.html", yt: "PWC0oI630m8" },
        { name: "Бузьки", page: "small.html", yt: "0iriJ6W2WXg" },
        { name: "Веселі черевички", page: "small.html", yt: "HJ3IoO9y7zI" },
        { name: "Дударики", page: "small.html", yt: "YWiWJmEliFA" },
        { name: "Забавлянки", page: "small.html", yt: "I9DaQqo14gY" },
        { name: "Каченята", page: "small.html", yt: "x8hmZKAehSg" },
        { name: "Кирпата", page: "small.html", yt: "u3fBLxjKoXk" },
        { name: "Козачки", page: "small.html", yt: "48nJp0r86zA" },
        { name: "Коломийки", page: "small.html", yt: "jtZbG_GIuso" },
        { name: "Кутя", page: "small.html", yt: "x-w7mJQJERE" },
        { name: "Ми веселі гуцулята", page: "small.html", yt: "siQcfyJUpYo" },
        { name: "Немовлята", page: "small.html", yt: "lD3WvfjEwGc" },
        { name: "Сміховертики", page: "small.html", yt: "1J4_YVzaH6Q" },
        { name: "Солохи", page: "small.html", yt: "evRU09GQ8xw" },
        { name: "Чоботята", page: "small.html", yt: "dJdSI_hhW30" }
    ];

    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    function getTrigrams(str) {
        const s = str.toLowerCase();
        let grams = [];
        for (let i = 0; i <= s.length - 3; i++) grams.push(s.substring(i, i + 3));
        return grams;
    }

    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchContainer.classList.toggle('d-none');
            if (!searchContainer.classList.contains('d-none')) searchInput.focus();
        });
    }

    document.addEventListener('click', (event) => {
        if (searchContainer && !searchContainer.classList.contains('d-none')) {
            const isClickInsideSearch = searchContainer.contains(event.target);
            const isClickOnToggle = searchToggle.contains(event.target);
            if (!isClickInsideSearch && !isClickOnToggle) {
                searchContainer.classList.add('d-none');
            }
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';
            if (query.length < 2) { searchResults.classList.add('d-none'); return; }

            const queryGrams = getTrigrams(query);
            const filtered = danceDatabase.filter(dance => {
                const name = dance.name.toLowerCase();
                if (name.includes(query)) return true;
                if (queryGrams.length > 0) {
                    const nameGrams = getTrigrams(name);
                    const matches = queryGrams.filter(g => nameGrams.includes(g));
                    return (matches.length / queryGrams.length) >= 0.45 || matches.length >= 2;
                }
                return false;
            });

            if (filtered.length > 0) {
                filtered.forEach(dance => {
                    const item = document.createElement('div');
                    item.className = 'list-group-item list-group-item-action d-flex align-items-center';
                    item.innerHTML = `<img src="https://img.youtube.com/vi/${dance.yt}/default.jpg" class="search-preview" style="width:60px; height:40px; object-fit:cover; border-radius:4px; margin-right:15px;">
                                      <span class="dance-name fw-bold">${dance.name}</span>`;
                    item.addEventListener('click', () => window.location.href = `${dance.page}?jump=${encodeURIComponent(dance.name)}`);
                    searchResults.appendChild(item);
                });
                searchResults.classList.remove('d-none');
            } else {
                searchResults.classList.add('d-none');
            }
        });
    }

    // ==========================================
    // 7. ЛОГІКА СКРОЛУ (jump)
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    const jumpTo = urlParams.get('jump');
    if (jumpTo) {
        setTimeout(() => {
            document.querySelectorAll('.video-card h5').forEach(h5 => {
                if (h5.innerText.includes(jumpTo)) {
                    const card = h5.closest('.video-card');
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('border-warning'); 
                    setTimeout(() => card.classList.remove('border-warning'), 3000);
                }
            });
        }, 500); 
    }
});