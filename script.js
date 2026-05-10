document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. МУЛЬТИМОВНІСТЬ (Переклади та Транслітерація)
    // ==========================================
    const translations = {
        uk: {
            nav_small: "Малі", nav_prep: "Підготовча", nav_teen: "Підліткова", nav_about: "Про нас",
            theme_light: "Світла", theme_dark: "Темна",
            search_placeholder: "Пошук танцю...",
            search_no_results: "Нічого не знайдено",
            footer_social: "Соціальні мережі",
            intro_text: "ВІДЕО ПОСТУПОВО ОНОВЛЮВАТИМУТЬСЯ, АДЖЕ ЧАСТИНА З НИХ — У НИЗЬКІЙ ЯКОСТІ!!!",
            modal_close: "Закрити",
            about_parents: "Батько і мати", about_vocal: "Викладачі вокалу", about_teachers: "Наші викладачі", about_creator: "Творець сайту",
            about_bayan: "Наші баяністи",

            desc_vchmyr: "Засновник «Веселих черевичок»<br>У випадку можливих пропусків занять, дзвонити за цим номером:<br>+380676950810<br>(для підготовчої групи)",
            desc_mchmyr: "Засновниця «Веселих черевичок»<br>У випадку можливих пропусків занять, дзвонити за цим номером:<br>+380680404628<br>(для підліткової групи)",
            desc_vocal_senior: "Викладач вокалу<br>(Старші групи)",
            desc_vocal_junior: "Викладачка вокалу<br>(Молодші групи)",
            desc_bayan: "Баяніст<br>&#8203;",
            desc_choreo_both_m: "Викладач хореографії<br>(молодші та старші групи)<br>Соліст",
            desc_choreo_both_f: "Викладачка хореографії<br>(молодші та старші групи)<br>Солістка",
            desc_choreo_junior_m: "Викладач хореографії<br>(молодші групи)<br>Соліст",
            desc_choreo_junior_f: "Викладачка хореографії<br>(молодші групи)<br>Солістка",
            desc_fr_choreo_f: "Викладачка французької мови та хореографії<br>Солістка<br>&#8203;",
            desc_acro_choreo_m: "Викладач акробатики та хореографії<br>Соліст<br>&#8203;",
            desc_air_choreo_f: "Викладачка повітряної гімнастики та хореографії<br>(молодші групи)<br>Солістка",
            desc_acro_m: "Викладач акробатики<br>Соліст<br>&#8203;<br>&#8203;",
            desc_air_fr_f: "Викладачка повітряної гімнастики та французької мови<br>Солістка<br>&#8203;",
            desc_solist_m: "Соліст"
        },
        en: {
            nav_small: "Kids", nav_prep: "Preparatory", nav_teen: "Teenagers", nav_about: "About Us",
            theme_light: "Light", theme_dark: "Dark",
            search_placeholder: "Search dance...",
            search_no_results: "Nothing found",
            footer_social: "Social Media",
            intro_text: "VIDEOS WILL BE GRADUALLY UPDATED, AS SOME OF THEM ARE IN LOW QUALITY!!!",
            modal_close: "Close",
            about_parents: "Father and Mother", about_vocal: "Vocal Teachers", about_teachers: "Our Teachers", about_creator: "Site Creator",
            about_bayan: "Our Accordionists",

            desc_vchmyr: "Founder of «Veseli Cherevychky»<br>In case of possible absences, call this number:<br>+380676950810<br>(for preparatory group)",
            desc_mchmyr: "Founder of «Veseli Cherevychky»<br>In case of possible absences, call this number:<br>+380680404628<br>(for teenage group)",
            desc_vocal_senior: "Vocal Teacher<br>(Senior groups)",
            desc_vocal_junior: "Vocal Teacher<br>(Junior groups)",
            desc_bayan: "Accordionist<br>&#8203;",
            desc_choreo_both_m: "Choreography Teacher<br>(junior & senior groups)<br>Soloist",
            desc_choreo_both_f: "Choreography Teacher<br>(junior & senior groups)<br>Soloist",
            desc_choreo_junior_m: "Choreography Teacher<br>(junior groups)<br>Soloist",
            desc_choreo_junior_f: "Choreography Teacher<br>(junior groups)<br>Soloist",
            desc_fr_choreo_f: "French & Choreography Teacher<br>Soloist<br>&#8203;",
            desc_acro_choreo_m: "Acrobatics & Choreography Teacher<br>Soloist<br>&#8203;",
            desc_air_choreo_f: "Aerial Gymnastics & Choreography Teacher<br>(junior groups)<br>Soloist",
            desc_acro_m: "Acrobatics Teacher<br>Soloist<br>&#8203;<br>&#8203;",
            desc_air_fr_f: "Aerial Gymnastics & French Teacher<br>Soloist<br>&#8203;",
            desc_solist_m: "Soloist"
        },
        fr: {
            nav_small: "Enfants", nav_prep: "Préparatoire", nav_teen: "Adolescents", nav_about: "À propos",
            theme_light: "Clair", theme_dark: "Sombre",
            search_placeholder: "Chercher une danse...",
            search_no_results: "Rien trouvé",
            footer_social: "Réseaux Sociaux",
            intro_text: "LES VIDÉOS SERONT PROGRESSIVEMENT MISES À JOUR, CAR CERTAINES SONT DE BASSE QUALITÉ\u00a0!!!",
            modal_close: "Fermer",
            about_parents: "Père et Mère", about_vocal: "Professeurs de chant", about_teachers: "Nos Professeurs", about_creator: "Créateur du site",
            about_bayan: "Nos Accordéonistes",

            desc_vchmyr: "Fondateur de «\u00a0Veseli Cherevychky\u00a0»<br>En cas d'absences éventuelles, appelez ce numéro\u00a0:<br>+380676950810<br>(pour le groupe préparatoire)",
            desc_mchmyr: "Fondatrice de «\u00a0Veseli Cherevychky\u00a0»<br>En cas d'absences éventuelles, appelez ce numéro\u00a0:<br>+380680404628<br>(pour le groupe d'adolescents)",
            desc_vocal_senior: "Professeur de chant<br>(Groupes aînés)",
            desc_vocal_junior: "Professeur de chant<br>(Groupes cadets)",
            desc_bayan: "Accordéoniste<br>&#8203;",
            desc_choreo_both_m: "Professeur de chorégraphie<br>(groupes cadets et aînés)<br>Soliste",
            desc_choreo_both_f: "Professeur de chorégraphie<br>(groupes cadets et aînés)<br>Soliste",
            desc_choreo_junior_m: "Professeur de chorégraphie<br>(groupes cadets)<br>Soliste",
            desc_choreo_junior_f: "Professeur de chorégraphie<br>(groupes cadets)<br>Soliste",
            desc_fr_choreo_f: "Professeur de français et de chorégraphie<br>Soliste<br>&#8203;",
            desc_acro_choreo_m: "Professeur d'acrobatie et de chorégraphie<br>Soliste<br>&#8203;",
            desc_air_choreo_f: "Professeur de gymnastique aérienne et de chorégraphie<br>(groupes cadets)<br>Soliste",
            desc_acro_m: "Professeur d'acrobatie<br>Soliste<br>&#8203;<br>&#8203;",
            desc_air_fr_f: "Professeur de gymnastique aérienne et de français<br>Soliste<br>&#8203;",
            desc_solist_m: "Soliste"
        }
    };

    // Словник для слів у дужках
    const parenthesesTranslations = {
        "стара версія": { en: "old version", fr: "ancienne version" },
        "стара": { en: "old", fr: "ancienne" },
        "нова": { en: "new", fr: "nouvelle" },
        "молитва": { en: "prayer", fr: "prière" },
        "Анастасія Кульчицька": { en: "Anastasiia Kulchytska", fr: "Anastasiia Kulchytska" },
        "Пролог": { en: "Prologue", fr: "Prologue" },
        "Вільна Україна": { en: "Free Ukraine", fr: "Ukraine libre" },
        "повна версія": { en: "full version", fr: "version complète" },
        "повна": { en: "full", fr: "complète" }
    };

    const cyrillicToLatinMap = {
        'А':'A','Б':'B','В':'V','Г':'H','Ґ':'G','Д':'D','Е':'E','Є':'Ye','Ж':'Zh','З':'Z',
        'И':'Y','І':'I','Ї':'Yi','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P',
        'Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Х':'Kh','Ц':'Ts','Ч':'Ch','Ш':'Sh','Щ':'Shch',
        'Ь':'','Ю':'Yu','Я':'Ya',
        'а':'a','б':'b','в':'v','г':'h','ґ':'g','д':'d','е':'e','є':'ye','ж':'zh','з':'z',
        'и':'y','і':'i','ї':'yi','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p',
        'р':'r','с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch',
        'ь':'','ю':'yu','я':'ya',
        '\'':'','\u2019':'','\u02bc':''
    };

    function transliterate(text) {
        return text.split('').map(char =>
            cyrillicToLatinMap[char] !== undefined ? cyrillicToLatinMap[char] : char
        ).join('');
    }

    // Обробка назви танцю: перекладає вміст дужок, решту транслітерує
    function processDanceName(name, lang) {
        if (lang === 'uk') return name;

        const match = name.match(/^(.*?)\s*\((.*?)\)(.*?)$/);
        if (match) {
            const before = transliterate(match[1].trim());
            const insideOriginal = match[2].trim();
            const after = match[3] ? ' ' + transliterate(match[3].trim()) : '';

            let insideTranslated = insideOriginal;
            if (parenthesesTranslations[insideOriginal] && parenthesesTranslations[insideOriginal][lang]) {
                insideTranslated = parenthesesTranslations[insideOriginal][lang];
            } else {
                insideTranslated = transliterate(insideOriginal);
            }
            return `${before} (${insideTranslated})${after}`;
        }
        return transliterate(name);
    }

    let currentLang = localStorage.getItem('lang') || 'uk';

    const flagMap = {
        uk: 'https://flagcdn.com/w40/ua.png',
        en: 'https://flagcdn.com/w40/gb.png',
        fr: 'https://flagcdn.com/w40/fr.png'
    };

    const langLabels = { uk: 'UA', en: 'EN', fr: 'FR' };

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Оновлюємо атрибут мови на <html>
        document.documentElement.lang = lang;

        // Оновлюємо прапор
        const flagEl = document.getElementById('current-lang-flag');
        if (flagEl) flagEl.src = flagMap[lang];

        // Оновлюємо тексти через data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Плейсхолдер пошуку
        const searchInput = document.getElementById('search-input');
        if (searchInput && translations[lang]) {
            searchInput.placeholder = translations[lang].search_placeholder;
        }

        // Транслітерація назв танців
        document.querySelectorAll('.card-title, h5.mt-3').forEach(el => {
            if (!el.dataset.origText) el.dataset.origText = el.innerText;
            el.innerText = processDanceName(el.dataset.origText, lang);
        });

        // Підсвічуємо активну мову у дропдауні
        document.querySelectorAll('.lang-switch').forEach(btn => {
            btn.classList.toggle('active-lang', btn.dataset.lang === lang);
        });
    }

    // BUG FIX: використовуємо closest() замість e.target, щоб клік по <img> всередині кнопки теж спрацьовував
    document.querySelectorAll('.lang-switch').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    // ==========================================
    // 0.1 ПЕРЕВІРКА ТЕМИ
    // ==========================================
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') document.body.classList.add('dark-theme');

    applyLanguage(currentLang);

    // ==========================================
    // 1. АНІМАЦІЯ ПРИ ЗАВАНТАЖЕННІ (ТІЛЬКИ index.html)
    // ==========================================
    const introOverlay = document.getElementById('intro-overlay');
    const introLogo = document.getElementById('intro-logo');
    const realLogo = document.querySelector('.navbar-brand .logo');

    if (introOverlay && introLogo && realLogo) {
        if (!sessionStorage.getItem('introPlayed')) {
            document.body.style.overflow = 'hidden';

            const startAnimation = () => {
                setTimeout(() => {
                    const rect = realLogo.getBoundingClientRect();
                    introLogo.style.top = rect.top + 'px';
                    introLogo.style.left = rect.left + 'px';
                    introLogo.style.height = rect.height + 'px';
                    introLogo.style.transform = 'translate(0, 0)';
                    introOverlay.classList.add('hidden');

                    setTimeout(() => {
                        introOverlay.style.display = 'none';
                        document.body.style.overflow = '';
                        sessionStorage.setItem('introPlayed', 'true');
                    }, 1000);
                }, 100);
            };

            if (realLogo.complete && realLogo.naturalHeight !== 0) {
                startAnimation();
            } else {
                realLogo.addEventListener('load', startAnimation);
                realLogo.addEventListener('error', startAnimation);
            }
        } else {
            introOverlay.style.display = 'none';
        }
    }

    // ==========================================
    // 2. ГЕНЕРАЦІЯ КАРУСЕЛІ
    // ==========================================
    const carouselElement = document.getElementById('photoCarousel');
    if (carouselElement) {
        const carouselInner = carouselElement.querySelector('.carousel-inner');
        const carouselIndicators = carouselElement.querySelector('.carousel-indicators');
        const totalImages = 940;

        carouselInner.innerHTML = '';
        if (carouselIndicators) carouselIndicators.innerHTML = '';

        // Генеруємо масив індексів і перемішуємо
        let indices = Array.from({ length: totalImages }, (_, i) => i + 1);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        const fragment = document.createDocumentFragment();
        const indicatorsFragment = document.createDocumentFragment();

        indices.forEach((imgIndex, position) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('carousel-item');
            if (position === 0) slideDiv.classList.add('active');

            const img = document.createElement('img');
            img.src = `photos/${imgIndex}.jpg`;
            img.classList.add('d-block', 'w-100', 'carousel-image');
            img.alt = `Фото ${imgIndex}`;
            img.loading = 'lazy';

            slideDiv.appendChild(img);
            fragment.appendChild(slideDiv);

            if (carouselIndicators) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.setAttribute('data-bs-target', '#photoCarousel');
                btn.setAttribute('data-bs-slide-to', position);
                btn.setAttribute('aria-label', `Слайд ${position + 1}`);
                if (position === 0) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-current', 'true');
                }
                indicatorsFragment.appendChild(btn);
            }
        });

        carouselInner.appendChild(fragment);
        if (carouselIndicators) carouselIndicators.appendChild(indicatorsFragment);

        if (typeof bootstrap !== 'undefined') {
            new bootstrap.Carousel(carouselElement, {
                interval: 3000,
                ride: 'carousel'
            }).cycle();
        }
    }

    // ==========================================
    // 3. ВІДЕО-МОДАЛ (нова функція: перегляд відео без переходу зі сторінки)
    // ==========================================
    // Створюємо модал один раз і використовуємо повторно
    if (!document.getElementById('video-modal')) {
        const modalHTML = `
        <div id="video-modal" role="dialog" aria-modal="true" aria-label="Перегляд відео">
            <div id="video-modal-backdrop"></div>
            <div id="video-modal-content">
                <button id="video-modal-close" aria-label="Закрити відео">✕</button>
                <div id="video-modal-title"></div>
                <div id="video-modal-player"></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const videoModal = document.getElementById('video-modal');
    const videoModalPlayer = document.getElementById('video-modal-player');
    const videoModalTitle = document.getElementById('video-modal-title');
    const videoModalClose = document.getElementById('video-modal-close');
    const videoModalBackdrop = document.getElementById('video-modal-backdrop');

    function openVideoModal(youtubeId, title) {
        videoModalTitle.textContent = title || '';
        videoModalPlayer.innerHTML = `<iframe
            src="https://www.youtube.com/embed/${youtubeId}?autoplay=1"
            title="${title || 'YouTube video player'}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>`;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        videoModalClose.focus();
    }

    function closeVideoModal() {
        videoModal.classList.remove('active');
        videoModalPlayer.innerHTML = ''; // Зупиняємо відео
        document.body.style.overflow = '';
    }

    if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
    if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

    // Закриття по клавіші Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // ==========================================
    // 4. ЗАВАНТАЖЕННЯ ВІДЕО ПО КЛІКУ (з підтримкою модала)
    // ==========================================
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', () => {
            const youtubeId = placeholder.dataset.youtubeId;
            if (!youtubeId) return;

            // Знаходимо назву з h5 в тій самій картці
            const card = placeholder.closest('.video-card');
            const title = card ? (card.querySelector('.card-title')?.dataset.origText || card.querySelector('.card-title')?.innerText || '') : '';

            openVideoModal(youtubeId, title);
        });

        // Доступність: підтримка клавіатурного Enter/Space
        placeholder.setAttribute('role', 'button');
        placeholder.setAttribute('tabindex', '0');
        placeholder.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                placeholder.click();
            }
        });
    });

    // ==========================================
    // 5. КНОПКА "НАВЕРХ"
    // ==========================================
    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.pageYOffset > 200);
        }, { passive: true });
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ==========================================
    // 6. ПЕРЕМИКАЧ ТЕМ
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
        } else {
            document.body.classList.remove('dark-theme');
            if (themeIconContainer) themeIconContainer.innerHTML = sunIcon;
        }
        localStorage.setItem('theme', theme);
    };

    updateTheme(currentTheme);
    if (lightThemeBtn) lightThemeBtn.addEventListener('click', () => updateTheme('light'));
    if (darkThemeBtn) darkThemeBtn.addEventListener('click', () => updateTheme('dark'));

    // ==========================================
    // 7. БАЗА ДАНИХ ТАНЦІВ І ЛОГІКА ПОШУКУ
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
        { name: "Опришки", page: "teenage.html", yt: "YqZ8e8gK7Ss" },
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

    // Тріграми для нечіткого пошуку
    function getTrigrams(str) {
        const grams = [];
        for (let i = 0; i <= str.length - 3; i++) grams.push(str.substring(i, i + 3));
        return grams;
    }

    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            const isHidden = searchContainer.classList.contains('d-none');
            searchContainer.classList.toggle('d-none', !isHidden);
            if (isHidden) {
                searchInput.focus();
                searchInput.select();
            }
        });
    }

    document.addEventListener('click', (event) => {
        if (searchContainer && !searchContainer.classList.contains('d-none')) {
            if (!searchContainer.contains(event.target) && searchToggle && !searchToggle.contains(event.target)) {
                searchContainer.classList.add('d-none');
            }
        }
    });

    // НОВЕ: клавіатурна навігація у результатах пошуку
    let focusedResultIndex = -1;

    if (searchInput) {
        let searchDebounceTimer;

        searchInput.addEventListener('keydown', (e) => {
            const items = searchResults.querySelectorAll('.list-group-item');
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                focusedResultIndex = Math.min(focusedResultIndex + 1, items.length - 1);
                items[focusedResultIndex]?.focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                focusedResultIndex = Math.max(focusedResultIndex - 1, -1);
                if (focusedResultIndex === -1) searchInput.focus();
                else items[focusedResultIndex]?.focus();
            } else if (e.key === 'Escape') {
                searchContainer.classList.add('d-none');
                searchToggle?.focus();
            }
        });

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchDebounceTimer);
            // Debounce: 150ms затримка, щоб не обчислювати при кожному символі
            searchDebounceTimer = setTimeout(() => {
                focusedResultIndex = -1;
                const query = e.target.value.toLowerCase().trim();
                searchResults.innerHTML = '';

                if (query.length < 2) {
                    searchResults.classList.add('d-none');
                    return;
                }

                const queryGrams = getTrigrams(query);
                const filtered = danceDatabase.filter(dance => {
                    const targetName = processDanceName(dance.name, currentLang);
                    const nameLower = targetName.toLowerCase();
                    if (nameLower.includes(query)) return true;
                    if (queryGrams.length > 0) {
                        const nameGrams = getTrigrams(nameLower);
                        const matches = queryGrams.filter(g => nameGrams.includes(g));
                        return (matches.length / queryGrams.length) >= 0.45 || matches.length >= 2;
                    }
                    return false;
                });

                if (filtered.length > 0) {
                    filtered.forEach(dance => {
                        const item = document.createElement('div');
                        item.className = 'list-group-item list-group-item-action d-flex align-items-center';
                        item.setAttribute('tabindex', '0');
                        item.setAttribute('role', 'option');
                        const displayName = processDanceName(dance.name, currentLang);
                        item.innerHTML = `<img src="https://img.youtube.com/vi/${dance.yt}/default.jpg" class="search-preview" alt="" loading="lazy">
                                          <span class="dance-name fw-bold">${displayName}</span>`;

                        // НОВА ЛОГІКА: клік у пошуку відкриває модал замість переходу на сторінку
                        const openResult = () => {
                            openVideoModal(dance.yt, displayName);
                            searchContainer.classList.add('d-none');
                            searchInput.value = '';
                            searchResults.innerHTML = '';
                            searchResults.classList.add('d-none');
                        };

                        item.addEventListener('click', openResult);
                        item.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openResult();
                            } else if (e.key === 'ArrowDown') {
                                e.preventDefault();
                                const next = item.nextElementSibling;
                                if (next) { focusedResultIndex++; next.focus(); }
                            } else if (e.key === 'ArrowUp') {
                                e.preventDefault();
                                const prev = item.previousElementSibling;
                                if (prev) { focusedResultIndex--; prev.focus(); }
                                else { focusedResultIndex = -1; searchInput.focus(); }
                            } else if (e.key === 'Escape') {
                                searchContainer.classList.add('d-none');
                                searchToggle?.focus();
                            }
                        });

                        searchResults.appendChild(item);
                    });
                    searchResults.classList.remove('d-none');
                } else {
                    // Показуємо "нічого не знайдено"
                    const noResult = document.createElement('div');
                    noResult.className = 'list-group-item text-muted text-center';
                    noResult.textContent = translations[currentLang]?.search_no_results || 'Нічого не знайдено';
                    searchResults.appendChild(noResult);
                    searchResults.classList.remove('d-none');
                }
            }, 150);
        });
    }

    // ==========================================
    // 8. ЛОГІКА СКРОЛУ (jump) — пошук по data-youtube-id для надійності
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    const jumpTo = urlParams.get('jump');
    if (jumpTo) {
        // Спочатку шукаємо за YouTube ID (надійніший метод)
        const dbEntry = danceDatabase.find(d => d.name === jumpTo);
        if (dbEntry) {
            setTimeout(() => {
                const placeholder = document.querySelector(`.video-placeholder[data-youtube-id="${dbEntry.yt}"]`);
                if (placeholder) {
                    const card = placeholder.closest('.video-card') || placeholder;
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('highlight-card');
                    setTimeout(() => card.classList.remove('highlight-card'), 3000);
                }
            }, 400);
        } else {
            // Запасний варіант: пошук по тексту заголовка
            setTimeout(() => {
                document.querySelectorAll('.video-card h5').forEach(h5 => {
                    const origText = h5.dataset.origText || h5.innerText;
                    if (origText.includes(jumpTo)) {
                        const card = h5.closest('.video-card');
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.classList.add('highlight-card');
                        setTimeout(() => card.classList.remove('highlight-card'), 3000);
                    }
                });
            }, 400);
        }
    }

    // ==========================================
    // 9. ПІДСВІЧУВАННЯ АКТИВНОГО ПУНКТУ МЕНЮ
    // ==========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active-nav-link');
        }
    });

});
