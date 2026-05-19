/* ── Translations ── */
  const translations = {
    English: {
      home_title: "Mock Interview Coach",
      home_subtitle: "Pick a category and practice with AI-powered feedback.",
      type_behavioral: "Behavioral", type_behavioral_desc: "STAR format questions",
      type_technical: "Technical", type_technical_desc: "DSA & Python questions",
      type_intro: "Introduction", type_intro_desc: "Tell me about yourself",
      btn_history: "📋 View History", btn_stats: "📊 View Stats",
      question_title: "Your Question",
      question_subtitle: "Read carefully and answer as you would in a real interview.",
      label_difficulty: "Difficulty", label_language: "Language", label_timer: "Timer Duration",
      diff_junior: "Junior", diff_intermediate: "Intermediate", diff_senior: "Senior",
      dur_2: "2 min", dur_3: "3 min", dur_5: "5 min",
      btn_start_timer: "▶ Start Timer", timer_remaining: "Time remaining",
      loading_question: "Loading question...",
      tab_text: "📝 Text Answer", tab_code: "💻 Code Editor",
      placeholder_answer: "Type your answer here...",
      btn_feedback: "Get Feedback", btn_back: "← Back",
      loading_analyzing: "Analyzing your answer...",
      feedback_title: "Your Feedback",
      feedback_subtitle: "Here's how you did and how to improve.",
      score_label: "Overall score",
      btn_try_again: "Try Another Question", btn_home: "← Home",
      history_title: "Your History",
      history_subtitle: "Your past interviews and feedback — click a card to expand",
      btn_back_home: "← Back to Home",
      stats_title: "Your Stats",
      stats_subtitle: "Your performance across all sessions.",
      stat_total: "Total Sessions", stat_avg: "Avg Score", stat_best: "Best Category",
      expand_hint: "Click to see full feedback ↓", collapse_hint: "Click to collapse ↑",
      no_sessions: "No interviews yet. Start your first session!",
      times_up: "Time's up!",
      label_type: "Type",
      label_score: "Score",
      label_date: "Date",
      cat_behavioral: "Behavioral",
      cat_technical: "Technical",
      cat_intro: "Introduction",
      cv_upload_title: "Upload CV (optional)",
      cv_btn: "📎 Choose PDF or DOCX",
      cv_no_file: "No file uploaded",
      cv_success: "✓ CV uploaded successfully",
      cv_error: "✗ Failed to extract text",
      job_desc_placeholder: "Paste job description here (optional)...",
    },
    Spanish: {
      home_title: "Entrenador de Entrevistas",
      home_subtitle: "Elige una categoría y practica con retroalimentación de IA.",
      type_behavioral: "Conductual", type_behavioral_desc: "Preguntas formato STAR",
      type_technical: "Técnico", type_technical_desc: "Preguntas de DSA y Python",
      type_intro: "Introducción", type_intro_desc: "Háblame de ti",
      btn_history: "📋 Ver Historial", btn_stats: "📊 Ver Estadísticas",
      question_title: "Tu Pregunta",
      question_subtitle: "Lee con cuidado y responde como en una entrevista real.",
      label_difficulty: "Dificultad", label_language: "Idioma", label_timer: "Duración del Temporizador",
      diff_junior: "Junior", diff_intermediate: "Intermedio", diff_senior: "Senior",
      dur_2: "2 min", dur_3: "3 min", dur_5: "5 min",
      btn_start_timer: "▶ Iniciar Temporizador", timer_remaining: "Tiempo restante",
      loading_question: "Cargando pregunta...",
      tab_text: "📝 Respuesta de texto", tab_code: "💻 Editor de código",
      placeholder_answer: "Escribe tu respuesta aquí...",
      btn_feedback: "Obtener Retroalimentación", btn_back: "← Atrás",
      loading_analyzing: "Analizando tu respuesta...",
      feedback_title: "Tu Retroalimentación",
      feedback_subtitle: "Así te fue y cómo mejorar.",
      score_label: "Puntuación general",
      btn_try_again: "Intentar otra pregunta", btn_home: "← Inicio",
      history_title: "Tu Historial",
      history_subtitle: "Tus entrevistas pasadas — haz clic para expandir",
      btn_back_home: "← Volver al Inicio",
      stats_title: "Tus Estadísticas",
      stats_subtitle: "Tu rendimiento en todas las sesiones.",
      stat_total: "Sesiones totales", stat_avg: "Puntuación media", stat_best: "Mejor categoría",
      expand_hint: "Clic para ver retroalimentación ↓", collapse_hint: "Clic para colapsar ↑",
      no_sessions: "Sin entrevistas aún. ¡Comienza tu primera sesión!",
      times_up: "¡Tiempo agotado!",
      label_type: "Tipo",
      label_score: "Puntuación",
      label_date: "Fecha",
      cat_behavioral: "Conductual",
      cat_technical: "Técnico",
      cat_intro: "Introducción",
      cv_upload_title: "Subir CV (opcional)", cv_btn: "📎 Elegir PDF o DOCX",
      cv_no_file: "Ningún archivo subido", cv_success: "✓ CV subido correctamente",
      cv_error: "✗ Error al extraer texto", job_desc_placeholder: "Pega la descripción del trabajo aquí (opcional)...",
    },
    French: {
      home_title: "Coach d'Entretien",
      home_subtitle: "Choisissez une catégorie et pratiquez avec des retours IA.",
      type_behavioral: "Comportemental", type_behavioral_desc: "Questions format STAR",
      type_technical: "Technique", type_technical_desc: "Questions DSA & Python",
      type_intro: "Introduction", type_intro_desc: "Parlez-moi de vous",
      btn_history: "📋 Voir l'Historique", btn_stats: "📊 Voir les Stats",
      question_title: "Votre Question",
      question_subtitle: "Lisez attentivement et répondez comme en vrai entretien.",
      label_difficulty: "Difficulté", label_language: "Langue", label_timer: "Durée du minuteur",
      diff_junior: "Junior", diff_intermediate: "Intermédiaire", diff_senior: "Senior",
      dur_2: "2 min", dur_3: "3 min", dur_5: "5 min",
      btn_start_timer: "▶ Démarrer", timer_remaining: "Temps restant",
      loading_question: "Chargement de la question...",
      tab_text: "📝 Réponse texte", tab_code: "💻 Éditeur de code",
      placeholder_answer: "Tapez votre réponse ici...",
      btn_feedback: "Obtenir un retour", btn_back: "← Retour",
      loading_analyzing: "Analyse de votre réponse...",
      feedback_title: "Votre Retour",
      feedback_subtitle: "Voici comment vous avez fait et comment vous améliorer.",
      score_label: "Score global",
      btn_try_again: "Essayer une autre question", btn_home: "← Accueil",
      history_title: "Votre Historique",
      history_subtitle: "Vos entretiens passés — cliquez pour développer",
      btn_back_home: "← Retour à l'accueil",
      stats_title: "Vos Statistiques",
      stats_subtitle: "Vos performances sur toutes les sessions.",
      stat_total: "Sessions totales", stat_avg: "Score moyen", stat_best: "Meilleure catégorie",
      expand_hint: "Cliquez pour voir le retour ↓", collapse_hint: "Cliquez pour réduire ↑",
      no_sessions: "Pas encore d'entretiens. Commencez votre première session !",
      times_up: "Temps écoulé !",
      label_type: "Type",
      label_score: "Score",
      label_date: "Date",
      cat_behavioral: "Comportemental",
      cat_technical: "Technique",
      cat_intro: "Introduction",
      cv_upload_title: "Télécharger CV (optionnel)", cv_btn: "📎 Choisir PDF ou DOCX",
      cv_no_file: "Aucun fichier téléchargé", cv_success: "✓ CV téléchargé avec succès",
      cv_error: "✗ Échec de l'extraction", job_desc_placeholder: "Collez la description du poste ici (optionnel)...",
    },
    German: {
      home_title: "Interview-Coach",
      home_subtitle: "Wähle eine Kategorie und übe mit KI-Feedback.",
      type_behavioral: "Verhaltensbasiert", type_behavioral_desc: "STAR-Format Fragen",
      type_technical: "Technisch", type_technical_desc: "DSA & Python Fragen",
      type_intro: "Einführung", type_intro_desc: "Erzähl mir von dir",
      btn_history: "📋 Verlauf ansehen", btn_stats: "📊 Statistiken ansehen",
      question_title: "Deine Frage",
      question_subtitle: "Lies sorgfältig und antworte wie in einem echten Interview.",
      label_difficulty: "Schwierigkeit", label_language: "Sprache", label_timer: "Timer-Dauer",
      diff_junior: "Junior", diff_intermediate: "Mittel", diff_senior: "Senior",
      dur_2: "2 Min", dur_3: "3 Min", dur_5: "5 Min",
      btn_start_timer: "▶ Timer starten", timer_remaining: "Verbleibende Zeit",
      loading_question: "Frage wird geladen...",
      tab_text: "📝 Textantwort", tab_code: "💻 Code-Editor",
      placeholder_answer: "Schreibe deine Antwort hier...",
      btn_feedback: "Feedback erhalten", btn_back: "← Zurück",
      loading_analyzing: "Antwort wird analysiert...",
      feedback_title: "Dein Feedback",
      feedback_subtitle: "So hast du abgeschnitten und wie du dich verbessern kannst.",
      score_label: "Gesamtpunktzahl",
      btn_try_again: "Andere Frage versuchen", btn_home: "← Startseite",
      history_title: "Dein Verlauf",
      history_subtitle: "Deine vergangenen Interviews — zum Erweitern klicken",
      btn_back_home: "← Zurück zur Startseite",
      stats_title: "Deine Statistiken",
      stats_subtitle: "Deine Leistung über alle Sitzungen.",
      stat_total: "Sitzungen gesamt", stat_avg: "Durchschnittspunktzahl", stat_best: "Beste Kategorie",
      expand_hint: "Klicken für vollständiges Feedback ↓", collapse_hint: "Klicken zum Einklappen ↑",
      no_sessions: "Noch keine Interviews. Starte deine erste Sitzung!",
      times_up: "Zeit abgelaufen!",
      label_type: "Typ",
      label_score: "Punktzahl",
      label_date: "Datum",
      cat_behavioral: "Verhaltensbasiert",
      cat_technical: "Technisch",
      cat_intro: "Einführung",
      cv_upload_title: "Lebenslauf hochladen (optional)", cv_btn: "📎 PDF oder DOCX wählen",
      cv_no_file: "Keine Datei hochgeladen", cv_success: "✓ Lebenslauf erfolgreich hochgeladen",
      cv_error: "✗ Textextraktion fehlgeschlagen", job_desc_placeholder: "Stellenbeschreibung hier einfügen (optional)...",
    },
    Turkish: {
      home_title: "Mülakat Koçu",
      home_subtitle: "Bir kategori seç ve yapay zeka destekli geri bildirimle pratik yap.",
      type_behavioral: "Davranışsal", type_behavioral_desc: "STAR format sorular",
      type_technical: "Teknik", type_technical_desc: "DSA & Python soruları",
      type_intro: "Tanışma", type_intro_desc: "Kendinden bahset",
      btn_history: "📋 Geçmişi Gör", btn_stats: "📊 İstatistikleri Gör",
      question_title: "Sorunuz",
      question_subtitle: "Dikkatlice oku ve gerçek bir mülakata gibi cevapla.",
      label_difficulty: "Zorluk", label_language: "Dil", label_timer: "Zamanlayıcı Süresi",
      diff_junior: "Junior", diff_intermediate: "Orta", diff_senior: "Senior",
      dur_2: "2 dk", dur_3: "3 dk", dur_5: "5 dk",
      btn_start_timer: "▶ Zamanlayıcıyı Başlat", timer_remaining: "Kalan süre",
      loading_question: "Soru yükleniyor...",
      tab_text: "📝 Metin Cevabı", tab_code: "💻 Kod Editörü",
      placeholder_answer: "Cevabını buraya yaz...",
      btn_feedback: "Geri Bildirim Al", btn_back: "← Geri",
      loading_analyzing: "Cevabın analiz ediliyor...",
      feedback_title: "Geri Bildiriminiz",
      feedback_subtitle: "Nasıl gittiği ve nasıl gelişebileceğin.",
      score_label: "Genel puan",
      btn_try_again: "Başka soru dene", btn_home: "← Ana Sayfa",
      history_title: "Geçmişiniz",
      history_subtitle: "Geçmiş mülakatlarınız — genişletmek için tıklayın",
      btn_back_home: "← Ana Sayfaya Dön",
      stats_title: "İstatistikleriniz",
      stats_subtitle: "Tüm oturumlardaki performansınız.",
      stat_total: "Toplam oturum", stat_avg: "Ortalama puan", stat_best: "En iyi kategori",
      expand_hint: "Tam geri bildirimi görmek için tıklayın ↓", collapse_hint: "Daraltmak için tıklayın ↑",
      no_sessions: "Henüz mülakat yok. İlk oturumunu başlat!",
      times_up: "Süre doldu!",
      label_type: "Tür",
      label_score: "Puan",
      label_date: "Tarih",
      cat_behavioral: "Davranışsal",
      cat_technical: "Teknik",
      cat_intro: "Tanışma",
      cv_upload_title: "CV Yükle (isteğe bağlı)", cv_btn: "📎 PDF veya DOCX Seç",
      cv_no_file: "Dosya yüklenmedi", cv_success: "✓ CV başarıyla yüklendi",
      cv_error: "✗ Metin çıkarılamadı", job_desc_placeholder: "İş tanımını buraya yapıştırın (isteğe bağlı)...",
    },
    Russian: {
      home_title: "Тренер по собеседованиям",
      home_subtitle: "Выберите категорию и практикуйтесь с обратной связью от ИИ.",
      type_behavioral: "Поведенческое", type_behavioral_desc: "Вопросы в формате STAR",
      type_technical: "Техническое", type_technical_desc: "Вопросы по DSA и Python",
      type_intro: "Знакомство", type_intro_desc: "Расскажите о себе",
      btn_history: "📋 История", btn_stats: "📊 Статистика",
      question_title: "Ваш вопрос",
      question_subtitle: "Читайте внимательно и отвечайте как на настоящем собеседовании.",
      label_difficulty: "Сложность", label_language: "Язык", label_timer: "Продолжительность таймера",
      diff_junior: "Junior", diff_intermediate: "Средний", diff_senior: "Senior",
      dur_2: "2 мин", dur_3: "3 мин", dur_5: "5 мин",
      btn_start_timer: "▶ Запустить таймер", timer_remaining: "Оставшееся время",
      loading_question: "Загрузка вопроса...",
      tab_text: "📝 Текстовый ответ", tab_code: "💻 Редактор кода",
      placeholder_answer: "Введите ваш ответ здесь...",
      btn_feedback: "Получить обратную связь", btn_back: "← Назад",
      loading_analyzing: "Анализ вашего ответа...",
      feedback_title: "Обратная связь",
      feedback_subtitle: "Как вы справились и как улучшиться.",
      score_label: "Общий балл",
      btn_try_again: "Попробовать другой вопрос", btn_home: "← Главная",
      history_title: "Ваша история",
      history_subtitle: "Прошлые собеседования — нажмите для раскрытия",
      btn_back_home: "← На главную",
      stats_title: "Ваша статистика",
      stats_subtitle: "Ваши результаты по всем сессиям.",
      stat_total: "Всего сессий", stat_avg: "Средний балл", stat_best: "Лучшая категория",
      expand_hint: "Нажмите для полной обратной связи ↓", collapse_hint: "Нажмите для сворачивания ↑",
      no_sessions: "Нет интервью. Начните свою первую сессию!",
      times_up: "Время вышло!",
      label_type: "Тип",
      label_score: "Оценка",
      label_date: "Дата",
      cat_behavioral: "Поведенческое",
      cat_technical: "Техническое",
      cat_intro: "Знакомство",
      cv_upload_title: "Загрузить резюме (необязательно)", cv_btn: "📎 Выбрать PDF или DOCX",
      cv_no_file: "Файл не загружен", cv_success: "✓ Резюме успешно загружено",
      cv_error: "✗ Не удалось извлечь текст", job_desc_placeholder: "Вставьте описание вакансии здесь (необязательно)...",
    }
  };

  function t(key) {
    return translations[currentLanguage][key] || translations['English'][key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });
  }

  /* ── State ── */
  let currentType       = '';
  let currentQuestion   = '';
  let currentDifficulty = 'intermediate';
  let currentDuration   = 180;
  let timerInterval     = null;
  let timeLeft          = 0;
  let currentLanguage   = 'English';
  let monacoEditor      = null;
  let monacoReady       = false;
  let activeTab         = 'text';
  let cvText = '';
  let jobDescription = '';
  /* ── Monaco setup ── */
  require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' }});
  require(['vs/editor/editor.main'], function() {
    monacoEditor = monaco.editor.create(document.getElementById('monaco-editor'), {
      value: '# Write your code here\n',
      language: 'python',
      theme: 'vs-dark',
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      automaticLayout: true,
    });
    monacoReady = true;
  });

  /* ── Theme toggle ── */
  function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('theme-btn');
    if (html.getAttribute('data-theme') === 'light') {
      html.removeAttribute('data-theme');
      btn.textContent = '☀️ Light mode';
      if (monacoReady) monaco.editor.setTheme('vs-dark');
    } else {
      html.setAttribute('data-theme', 'light');
      btn.textContent = '🌙 Dark mode';
      if (monacoReady) monaco.editor.setTheme('vs');
    }
  }

  /* ── Tab switching ── */
  function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active-tab'));
    event.target.classList.add('active-tab');

    if (tab === 'code') {
      document.getElementById('text-answer-wrap').classList.add('hidden');
      document.getElementById('code-editor-wrap').classList.add('visible');
      if (monacoReady) monacoEditor.layout();
    } else {
      document.getElementById('text-answer-wrap').classList.remove('hidden');
      document.getElementById('code-editor-wrap').classList.remove('visible');
    }
  }

  /* ── Helpers ── */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  }

  /* ── Difficulty ── */
  function setDifficulty(level) {
    currentDifficulty = level;
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active-diff'));
    event.target.classList.add('active-diff');
    startInterview(currentType);
  }

  /* ── Language ── */
  function setLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
    const onQuestionScreen = document.getElementById('screen-question').classList.contains('active');
    if (onQuestionScreen) startInterview(currentType);
  }
   /* Upload CV function */
  async function uploadCV(file) {
    const formData = new FormData();
    formData.append('file',file);

    const res = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const data = await res.json();
    if (data.cv_text) {
        cvText = data.cv_text;
        document.getElementById('cv-status').textContent = t('cv_success');
        document.getElementById('cv-status').style.color ='#22c55e';

    }else {
        document.getElementById('cv-status').textContent = t('cv_error');
        document.getElementById('cv-status').style.color = '#ef4444';
    }
  }

  /* ── Timer duration ── */
  function setDuration(seconds) {
    currentDuration = seconds;
    document.querySelectorAll('.dur-btn').forEach(b => b.classList.remove('active-diff'));
    event.target.classList.add('active-diff');
    document.getElementById('timer-clock').textContent = formatTime(seconds);
    document.getElementById('timer-clock').className = 'timer-clock';
    document.getElementById('timer-bar').style.width = '100%';
    document.getElementById('timer-bar').className = 'timer-bar';
    stopTimer();
    document.getElementById('start-timer-btn').textContent = t('btn_start_timer');
    document.getElementById('start-timer-btn').disabled = false;
  }

  /* ── Start timer ── */
  function startTimer() {
    stopTimer();
    timeLeft = currentDuration;
    const totalTime = currentDuration;
    const display  = document.getElementById('timer-display');
    const clock    = document.getElementById('timer-clock');
    const bar      = document.getElementById('timer-bar');
    const startBtn = document.getElementById('start-timer-btn');

    display.classList.add('visible');
    startBtn.textContent = '⏸ Running…';
    startBtn.disabled = true;
    clock.textContent = formatTime(timeLeft);

    timerInterval = setInterval(() => {
      timeLeft--;
      const pct = (timeLeft / totalTime) * 100;
      clock.textContent = formatTime(timeLeft);
      bar.style.width = pct + '%';

      if (timeLeft <= totalTime * 0.15) {
        clock.className = 'timer-clock danger';
        bar.className = 'timer-bar danger';
      } else if (timeLeft <= totalTime * 0.33) {
        clock.className = 'timer-clock warning';
        bar.className = 'timer-bar warning';
      }

      if (timeLeft <= 0) {
        stopTimer();
        clock.textContent = '0:00';
        bar.style.width = '0%';
        document.getElementById('timer-label').textContent = t('times_up');
        submitAnswer();
      }
    }, 1000);
  }

  /* ── Navigation ── */
  function goHome() {
    stopTimer();
    document.getElementById('timer-display').classList.remove('visible');
    document.getElementById('start-timer-btn').textContent = t('btn_start_timer');
    document.getElementById('start-timer-btn').disabled = false;
    showScreen('screen-home');
  }

  /* ── Interview flow ── */
 async function startInterview(type) {
    currentType = type;
    stopTimer();

    // Capture job description before switching screens
    jobDescription = document.getElementById('job-description').value.trim();

    document.getElementById('timer-display').classList.remove('visible');
    document.getElementById('timer-clock').textContent = formatTime(currentDuration);
    document.getElementById('timer-clock').className = 'timer-clock';
    document.getElementById('timer-bar').style.width = '100%';
    document.getElementById('timer-bar').className = 'timer-bar';
    document.getElementById('timer-label').textContent = t('timer_remaining');
    document.getElementById('start-timer-btn').textContent = t('btn_start_timer');
    document.getElementById('start-timer-btn').disabled = false;

    // Show code editor tabs only for technical
    const tabs = document.getElementById('answer-tabs');
    if (type === 'technical') {
      tabs.style.display = 'flex';
    } else {
      tabs.style.display = 'none';
      switchToTextTab();
    }

    showScreen('screen-question');
    document.getElementById('question-tag').textContent = type;
    document.getElementById('question-text').textContent = t('loading_question');
    document.getElementById('answer-input').value = '';
    if (monacoReady) monacoEditor.setValue('# Write your code here\n');
    document.getElementById('submit-btn').disabled = false;

    const res = await fetch('/question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        interview_type: type,
        difficulty: currentDifficulty,
        language: currentLanguage,
        cv_text: cvText || null,
        job_description: jobDescription || null
      })
    });
    const data = await res.json();
    currentQuestion = data.question;
    document.getElementById('question-text').textContent = data.question;
  }

  function switchToTextTab() {
    activeTab = 'text';
    document.querySelectorAll('.tab-btn').forEach((b, i) => {
      b.classList.toggle('active-tab', i === 0);
    });
    document.getElementById('text-answer-wrap').classList.remove('hidden');
    document.getElementById('code-editor-wrap').classList.remove('visible');
  }

  async function submitAnswer() {
    stopTimer();

    let answer = '';
    if (activeTab === 'code' && monacoReady) {
      answer = monacoEditor.getValue().trim();
    } else {
      answer = document.getElementById('answer-input').value.trim();
    }

    if (!answer || answer === '# Write your code here') {
      alert(t('placeholder_answer'));
      return;
    }

    document.getElementById('submit-btn').disabled = true;
    document.getElementById('loading-feedback').classList.add('active');

    const res = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: currentQuestion,
        answer: answer,
        interview_type: currentType,
        language: currentLanguage
      })
    });

    const data = await res.json();
    document.getElementById('loading-feedback').classList.remove('active');

    const scoreMatch = data.feedback.match(/(\d+)\/10/);
    const score = scoreMatch ? scoreMatch[1] + '/10' : '–/10';
    document.getElementById('score-display').textContent = score;
    document.getElementById('feedback-content').innerHTML = marked.parse(data.feedback);

    showScreen('screen-feedback');
  }

  function tryAgain() { startInterview(currentType); }

  async function loadHistory() {
    showScreen('screen-history');

    try {
        const res = await fetch("/history");
        const sessions = await res.json();

        const container = document.getElementById("history-list");
        container.innerHTML = "";

        if (sessions.length === 0) {
        container.innerHTML = `<p class="subtitle">${t('no_sessions')}</p>`;
        return;
        }

        sessions.forEach(session => {
        const item = document.createElement("div");

        item.className = "history-card";

        item.innerHTML = `
            <h3>${session.question}</h3>

            <p>
            <strong>${t('label_type')}:</strong>
            ${t('cat_' + session.interview_type)}
            </p>

            <p>
            <strong>${t('label_score')}:</strong>
            ${session.score}/10
            </p>

            <p>
            <strong>${t('label_date')}:</strong>
            ${new Date(session.created_at).toLocaleDateString()}
            </p>

            <p class="preview">
            ${session.feedback.substring(0, 150)}...
            </p>

            <p class="expand-hint">
            ${t('expand_hint')}
            </p>

            <div class="feedback-detail">
            ${marked.parse(session.feedback)}
            </div>
        `;

        item.onclick = () => {
            const detail = item.querySelector(".feedback-detail");
            const hint = item.querySelector(".expand-hint");

            detail.classList.toggle("expanded");

            hint.textContent = detail.classList.contains("expanded")
            ? t('collapse_hint')
            : t('expand_hint');
        };

        container.appendChild(item);
        });

    } catch (error) {
        console.error("Failed to load history:", error);
    }
}

async function loadStats() {
  showScreen('screen-stats');

  try {
    const res = await fetch("/stats");
    const data = await res.json();

    document.getElementById("stat-total").textContent =
      data.total_sessions;

    document.getElementById("stat-avg").textContent =
      data.average_score + "/10";

    document.getElementById("stat-best").textContent =
      data.best_category
        ? t('cat_' + data.best_category)
        : "–";

  } catch (error) {
    console.error("Failed to load stats:", error);
  }
}