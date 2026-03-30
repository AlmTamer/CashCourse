let isLoggedIn = false;
let isAdmin = false;
let currentChapter = -1;
let currentLesson = -1;

// AUTH
function doLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();
    const err = document.getElementById('loginError');
    
    if(email === 'demo@cashcourse.com' && pass === 'cashcourse') {
        isLoggedIn = true;
        isAdmin = false;
        document.getElementById('loginOverlay').classList.add('hidden');
        renderCurriculum();
        showPage('home');
    } else if(email === 'admin@cashcourse.com' && pass === 'cashcourse2025') {
        isLoggedIn = true;
        isAdmin = true;
        document.getElementById('loginOverlay').classList.add('hidden');
        renderCurriculum();
        showPage('home');
    } else {
        err.classList.add('show');
        setTimeout(() => err.classList.remove('show'), 4000);
    }
}

function doLogout() {
    isLoggedIn = false;
    isAdmin = false;
    document.getElementById('loginOverlay').classList.remove('hidden');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

// PAGES
function showPage(name) {
    if(!isLoggedIn) return;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + name);
    if(page) page.classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navLink = document.getElementById('nav-' + name);
    if(navLink) navLink.classList.add('active');
    
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    if(name === 'curriculum') renderCurriculum();
}

// CURRICULUM
function renderCurriculum() {
    const list = document.getElementById('modulesList');
    if(!list) return;
    
    list.innerHTML = '';
    
    CHAPTERS.forEach((chapter, ci) => {
        const card = document.createElement('div');
        card.className = 'module-card' + (ci === 0 ? ' open' : '');
        card.id = 'mod-' + ci;
        
        const header = document.createElement('div');
        header.className = 'module-header';
        header.onclick = () => toggleModule('mod-' + ci);
        header.innerHTML = `
            <div class="module-num">${chapter.num}</div>
            <div class="module-info">
                <div class="module-title">${chapter.icon} ${chapter.title}</div>
                <div class="module-meta">${chapter.meta}</div>
            </div>
            <div class="module-chevron">▾</div>
        `;
        card.appendChild(header);
        
        const lessonsDiv = document.createElement('div');
        lessonsDiv.className = 'module-lessons';
        lessonsDiv.id = 'lessons-' + ci;
        
        chapter.lessons.forEach((lesson, li) => {
            const row = document.createElement('div');
            row.className = 'lesson-row';
            
            const iconMap = {
                video: '▶',
                article: '📖',
                interactive: '🛠️',
                quiz: '✏️'
            };
            
            row.innerHTML = `
                <div class="lesson-type-icon">${iconMap[lesson.type] || '•'}</div>
                <div class="lesson-name">${lesson.title}</div>
                <span class="lesson-type-tag ${lesson.type}">${lesson.type}</span>
            `;
            
            row.onclick = () => openLesson(ci, li);
            lessonsDiv.appendChild(row);
        });
        
        const progress = document.createElement('div');
        progress.className = 'progress-module';
        progress.innerHTML = `
            <div class="pm-label">
                <span>Chapter Progress</span>
                <span>0 / 7 complete</span>
            </div>
            <div class="pm-bar">
                <div class="pm-fill" style="width: 0%"></div>
            </div>
        `;
        lessonsDiv.appendChild(progress);
        
        card.appendChild(lessonsDiv);
        list.appendChild(card);
    });
    
    renderTopicsGrid();
}

function renderTopicsGrid() {
    const grid = document.getElementById('topicsGrid');
    if(!grid) return;
    
    grid.innerHTML = '';
    CHAPTERS.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => showPage('curriculum');
        
        const colors = ['#e6f7f1', '#fdf5e6', '#eef5ff', '#fdf0f3'];
        const bgColor = colors[CHAPTERS.indexOf(ch) % colors.length];
        
        card.innerHTML = `
            <div class="topic-icon-wrap" style="background: ${bgColor}">${ch.icon}</div>
            <div class="topic-title">${ch.title}</div>
            <div class="topic-desc">${ch.meta.split('·')[0].trim()} of content on ${ch.title.toLowerCase()}</div>
            <div class="topic-lessons">7 Lessons →</div>
        `;
        
        grid.appendChild(card);
    });
}

function toggleModule(id) {
    const module = document.getElementById(id);
    const lessons = document.getElementById('lessons-' + id.split('-')[1]);
    if(module && lessons) {
        module.classList.toggle('open');
    }
}

function openLesson(ci, li) {
    currentChapter = ci;
    currentLesson = li;
    
    const chapter = CHAPTERS[ci];
    const lesson = chapter.lessons[li];
    
    document.getElementById('lessonBreadChapter').textContent = `Ch.${ci + 1}: ${chapter.title}`;
    document.getElementById('lessonBreadTitle').textContent = lesson.title;
    document.getElementById('lessonTitle').textContent = lesson.title;
    
    const metaHTML = `<span class="lesson-type-tag ${lesson.type}">${lesson.type}</span>
        <span>📚 Chapter ${ci + 1} · Lesson ${li + 1} of 7</span>`;
    document.getElementById('lessonMeta').innerHTML = metaHTML;
    
    const contentDiv = document.getElementById('lessonContent');
    const key = `${ci}-${li}`;
    
    if(LESSON_CONTENT[key]) {
        contentDiv.innerHTML = LESSON_CONTENT[key].html;
    } else {
        contentDiv.innerHTML = `<p>${lesson.desc}</p>`;
    }
    
    showPage('lesson');
}

// UTILITIES
function calcBudget() {
    const income = parseFloat(document.getElementById('income')?.value) || 0;
    const fixed = parseFloat(document.getElementById('fixed')?.value) || 0;
    const variable = parseFloat(document.getElementById('variable')?.value) || 0;
    const debt = parseFloat(document.getElementById('debt')?.value) || 0;
    
    if(!income) {
        const result = document.getElementById('budgetResult');
        if(result) result.style.display = 'none';
        return;
    }
    
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;
    const leftover = income - (fixed + variable + debt);
    
    document.getElementById('resNeeds').textContent = '$' + Math.round(needs).toLocaleString();
    document.getElementById('resWants').textContent = '$' + Math.round(wants).toLocaleString();
    document.getElementById('resSavings').textContent = '$' + Math.round(savings).toLocaleString();
    document.getElementById('resLeft').textContent = '$' + Math.round(leftover).toLocaleString();
    
    const result = document.getElementById('budgetResult');
    if(result) result.style.display = 'flex';
}

window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if(nav) {
        if(window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    if(!isLoggedIn) {
        document.getElementById('loginOverlay').classList.remove('hidden');
    }
});
