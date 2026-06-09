// Translation dictionary for TR, EN, and RU languages
// Includes static UI elements, map nodes, puzzle texts (narratives, questions, hints, solutions, worksheets)

export const uiTranslations = {
  tr: {
    // Header
    "logo": "👑 KRALİÇEYİ KURTARMAK",
    "pencil-lbl": "Sihirli Kalem Gücü:",
    "chapter-lbl": "BÖLÜM",
    
    // Landing Screen (Hero)
    "mascot-name": "Monoculus Diyor ki:",
    "mascot-speech": "\"Selam Genç Matematik Kaşifi! Ben Monoculus. Kraliçe Jayden'ı kurtarmak için sihirli matematik maceramıza katılmaya hazır mısın? Sana yol boyunca rehberlik edeceğim!\"",
    "hero-title": "Matematiğin Sihirli Dünyasına Hoş Geldin!",
    "hero-subtitle": "Aleks, Sam ve Vanessa'nın gizemli dünyasına ortak ol. Kral Recher'in zindanlarında hapsedilen Kraliçe Jayden'ı kurtarmak için matematik bilmecelerini çöz, kapıları tek tek aç!",
    "btn-start": "Maceraya Başla ⚔️",
    "btn-teaser": "🎬 Tanıtım Videosunu İzle",
    "btn-teaser-again": "🎬 Tanıtım Videosunu Tekrar İzle",
    "btn-back-ill": "🖼️ Görsele Dön",
    "caption-showcase": "🏰 Lugubriya Krallığı ve Zümrüt Kraliçe'nin Dünyası",
    
    // About Vladimir Tumanov
    "about-title": "Kitap ve Yazar Hakkında",
    "about-p1": "<strong>Vladimir Tumanov</strong>'un dünya çapında çok sevilen <em>\"Kraliçeyi Kurtarmak\"</em> romanından uyarlanan bu interaktif oyunda, matematiğin büyülü dünyasını keşfedeceksin!",
    "about-p2": "Aleks, yolda bulduğu sihirli harita ve kalemle kendini Lugubriya Krallığı'nda bulur. Kral Recher'in zindanlarında esir tutulan Kraliçe Jayden'ı kurtarmanın tek yolu, her kapıdaki zorlu matematik bilmecelerini çözmektir. Zekanı kullan, kapıları aç ve bu heyecan verici maceranın kahramanı ol!",
    "author-badge": "✍️ Yazar: Vladimir Tumanov | 🏫 5. Sınıf Matematik Seviyesi",
    
    // Map screen
    "map-title": "LUGUBRİYA KRALLIĞI",
    "map-subtitle": "Zindan kapılarını açmak ve Kraliçeyi kurtarmak için parıldayan kuleleri seç!",
    "legend-locked": "Kilitli Zindan",
    "legend-active": "Aktif Görev",
    "legend-unlocked": "Açılmış Kapı",
    
    // Success Screen
    "success-title": "Kraliçe Jayden Kurtarıldı!",
    "success-text": "Harika bir iş çıkardın! Karşına çıkan tüm matematik bilmecelerini zekanla çözdün ve Zümrüt Kraliçe'yi özgürlüğüne kavuşturdun. İdilya Krallığı halkı sana minnettar!",
    "cert-instruct": "Sertifikana yazılacak ismini gir ve ödülünü indir:",
    "cert-placeholder": "İsmini Yaz...",
    "btn-download-cert": "🏆 Kahramanlık Belgesini İndir",
    "btn-play-again": "Macerayı Baştan Oyna 🔄",
    
    // Modal tabs & inputs
    "tab-interactive": "İnteraktif Görevler 🎮",
    "tab-worksheet": "Çalışma Kağıdı 📝",
    "label-answer": "Cevabın:",
    "input-placeholder": "Sayı...",
    "btn-hint": "💡 İpucu Al",
    "btn-submit": "Kapıyı Aç 🗝️",
    
    // Modal Worksheet Preview
    "ws-preview-mascot-speech": "\"Matematiği kağıt üzerinde modellemek zihnini açar! Bu zindan kapısına ait ders çalışma kağıdını indirip yazdırabilirsin!\"",
    "ws-preview-topic": "Konu Başlığı:",
    "ws-preview-outcome": "Kazanım Hedefi:",
    "ws-preview-q1": "Soru 1:",
    "ws-preview-q2": "Soru 2:",
    "btn-print-ws": "🖨️ Çalışma Kağıdını Yazdır / PDF Kaydet",
    
    // Printable PDF Worksheet
    "ws-print-title": "👑 KRALİÇEYİ KURTARMAK MATEMATİK ÇALIŞMA KAĞIDI",
    "ws-meta-name": "Öğrencinin Adı Soyadı: ________________________",
    "ws-meta-class": "Sınıfı / No: ______________",
    "ws-meta-date": "Tarih: _________________",
    "ws-print-topic-lbl": "Konu Başlığı:",
    "ws-print-outcome-lbl": "Öğrenme Kazanımı:",
    "ws-print-story-lbl": "Lugubriya Krallığı Hikayesi:",
    "ws-print-q1-lbl": "SORU 1:",
    "ws-print-q2-lbl": "SORU 2:",
    "ws-print-space-lbl": "✍️ Çözüm ve Çizim / Modelleme Alanı:",
    "ws-print-footer-note": "Zihnini kullan, zindan kapılarını aç ve Kraliçe Jayden'ı kurtar! | 5. Sınıf Matematik Macerası",
    
    // Tower Labels on SVG
    "node-1-text": "Sihirli Kalem",
    "node-2-text": "Lav Köprüsü",
    "node-3-text": "Zümrüt Kulesi",
    "node-4-text": "Muhafız Geçidi",
    "node-5-text": "Kamyon Karşılaşması",
    "node-6-text": "Gümüş Kuleler",
    "node-7-text": "Monoculus Soyu",
    "node-8-text": "Jayden",
    
    // Miscellaneous
    "status-locked": "Kilitli Bölge",
    "status-unlocked": "Kilidi Açıldı",
    "status-active": "Aktif Kapı",
    "recher-taunt": "Hahaha! Yanlış hesap! Zihniniz zindanlarımı aşmaya yetmiyor mu? Kaleminiz biraz daha kısaldı!",
    "correct-gate-all": "🎉 Harika! Tüm Görevler Tamamlandı, Kapı Açıldı!",
    "correct-task-next": "🎉 Doğru Cevap! Görev Çözüldü!",
    "btn-next-task": "Sonraki Göreve Geç ➔",
    "btn-go-queen": "Kraliçe'nin Yanına Git 👑",
    "btn-continue-map": "Haritada Devam Et ➔",
    "modal-completed": "Tamamlandı ✅",
    "modal-task-lbl": "Görev",
    
    // Visualizer Strings
    "vis-reverse-instruction": "Aşağıdaki boru hattında işlemleri ileri ve geri yönde simüle et:",
    "vis-reverse-btn-reverse": "Geriye Doğru Çalış (Ters İşlem)",
    "vis-reverse-btn-forward": "İleriye Doğru Çalış",
    "vis-reverse-explain-default": "İşlemleri tersine çevirmek ve geriye doğru akışı görmek için yukarıdaki butona tıkla!",
    "vis-reverse-explain-active": "<strong>Ters Akış Aktif:</strong><br>1. Sonuçtan {val1} çıkar: <span class=\"text-accent\">{eq1} = [Ortadaki Sayı]</span><br>2. Bulduğun ortadaki sayıyı {val2}'ye böl (veya çarp): <span class=\"text-accent\">[Ortadaki Sayı] {op} {val2} = [Başlangıç Sayısı]</span><br>Hesaplamaları yapıp cevabını aşağıya gir!",
    
    "vis-pattern-instruction": "Sayıların arasındaki farkları/katları görmek için soru işaretli yaylara tıkla:",
    "vis-pattern-explain-default": "Sayılar arasındaki artışları görmek için yukarıdaki soru işaretlerine tıklayabilirsin.",
    "vis-pattern-explain-step": "<strong>Örüntü Analizi:</strong> {text}",
    
    "vis-fraction-instruction": "Zümrüt kutusunu görselleştirmek için adımları çalıştır:",
    "vis-fraction-explain-default": "Vanessa'nın payını renklendirmek için 1. Adım butonuna tıkla.",
    "vis-fraction-btn-1": "1. Adım: Vanessa'nın Payı",
    "vis-fraction-btn-2": "2. Adım: Sam'in Payı",
    "vis-fraction-btn-3": "3. Adım: Geriye Kalanlar",
    
    "vis-scale-instruction": "Genç muhafızın yaşını (kutu değerini) sürgüyle kaydırarak teraziyi dengeye getir:",
    "vis-scale-slider-label": "Genç Muhafızın Yaşı",
    "vis-scale-explain-default": "Terazi şu an dengede değil. Sürgüyü oynatarak dengeyi kur!",
    "vis-scale-explain-balanced": "<span class=\"text-emerald\" style=\"font-weight:bold;\">Terazi Dengede!</span><br>Genç muhafızın yaşı (1 Kat) = <span class=\"text-gold\">{age}</span> bulundu.<br>Baş muhafızın yaşı ise bunun {factor} katı olduğuna göre, baş muhafızın yaşını hesapla!",
    "vis-scale-young-label": "Genç M. (1 Kat):",
    "vis-scale-lead-label": "Baş M. ({factor} Kat):",
    
    "vis-speed-instruction": "Kamyonların hareketini görmek için 'Kamyonları Çalıştır' butonuna tıkla:",
    "vis-speed-btn-run": "Kamyonları Çalıştır 🏁",
    "vis-speed-btn-reset": "Sıfırla 🔄",
    "vis-speed-meeting": "💥 Karşılaşma Noktası",
    "vis-speed-explain-default": "Kamyonları yola çıkarmak için butona tıkla!",
    "vis-speed-explain-active": "<strong>Karşılaşma Analizi:</strong><br>- Kamyonların yaklaşma hızı: <span class=\"text-accent\">{v1} + {v2} = {vsum} km/sa</span>.<br>- Karşılaşma süresi: {min} dakika ({frac} saat).<br>- Toplam yol: {vsum} × ({frac}) = <span class=\"text-emerald\" style=\"font-weight:bold;\">{ans} km</span>.<br>Cevabı hesaplayıp aşağıdaki kutuya girin!",
    
    "vis-towers-instruction": "Kulelerin yüksekliklerini görmek ve örüntüyü incelemek için aradaki soru işaretlerine tıkla:",
    "vis-towers-explain-default": "Farkları görmek için aradaki ? işaretlerine tıkla!",
    
    "vis-eyes-instruction": "3 Gözlü canavar sayısını ayarlayarak toplam göz sayısını {target} yapın:",
    "vis-eyes-monsters": "Toplam Canavar:",
    "vis-eyes-target": "Hedef Göz Sayısı:",
    "vis-eyes-current": "Şu Anki Göz:",
    "vis-eyes-label-3": "3 Gözlü Canavar Sayısı",
    "vis-eyes-explain-default": "Canavarların hepsi şu an 1 gözlü. 3 gözlü canavarların sayısını ayarlayarak toplam gözü {target} yapın!",
    "vis-eyes-explain-balanced": "<span class=\"text-emerald\" style=\"font-weight:bold;\">Tebrikler! Toplam Göz {target} Oldu!</span><br>- 3 Gözlü Canavar Sayısı = <span class=\"text-gold\">{three}</span><br>- 1 Gözlü Canavar Sayısı = <span class=\"text-gold\">{one}</span><br>Cevap olan 3 gözlü canavar sayısını aşağıdaki kutuya girin!",
    
    "vis-logic-instruction": "Sandıklardan birine tıklayarak mantıksal doğruluk durumlarını tablo üzerinden analiz et!",
    "vis-logic-red": "Kırmızı Sandık",
    "vis-logic-blue": "Mavi Sandık",
    "vis-logic-green": "Yeşil Sandık",
    "vis-logic-table-header-1": "Varsayılan Anahtar Konumu",
    "vis-logic-table-header-2": "Kırmızı Yazısı",
    "vis-logic-table-header-3": "Mavi Yazısı",
    "vis-logic-table-header-4": "Yeşil Yazısı",
    "vis-logic-table-header-5": "Doğru İfade Sayısı",
    "vis-logic-row-red": "Kırmızı'da ise",
    "vis-logic-row-blue": "Mavi'de ise",
    "vis-logic-row-green": "Yeşil'de ise",
    "vis-logic-cell-true": "DOĞRU",
    "vis-logic-cell-false": "YALAN",
    "vis-logic-cell-count": "{count} Doğru",
    "vis-logic-explain-default": "Sandıklardan birine tıklayarak mantıksal doğruluk durumlarını tablo üzerinden analiz et!"
  },
  en: {
    // Header
    "logo": "👑 ESCAPE THE QUEEN",
    "pencil-lbl": "Magic Pencil Energy:",
    "chapter-lbl": "CHAPTER",
    
    // Landing Screen (Hero)
    "mascot-name": "Monoculus Says:",
    "mascot-speech": "\"Hello Young Math Explorer! I am Monoculus. Are you ready to join our magical math adventure to rescue Queen Jayden? I will guide you along the way!\"",
    "hero-title": "Welcome to the Magic World of Math!",
    "hero-subtitle": "Join Alex, Sam, and Vanessa in their mysterious world. Solve mathematical puzzles to unlock the dungeon gates of King Recher one by one and rescue Queen Jayden!",
    "btn-start": "Start Adventure ⚔️",
    "btn-teaser": "🎬 Watch Teaser Video",
    "btn-teaser-again": "🎬 Watch Teaser Again",
    "btn-back-ill": "🖼️ Back to Illustration",
    "caption-showcase": "🏰 Kingdom of Lugubria & Emerald Queen's World",
    
    // About Vladimir Tumanov
    "about-title": "About the Book & Author",
    "about-p1": "In this interactive game adapted from **Vladimir Tumanov**'s globally beloved novel <em>\"Save the Queen\"</em>, you will explore the magical world of mathematics!",
    "about-p2": "Alex finds a magic map and pencil on the street, only to end up in the Kingdom of Lugubria. The only way to rescue Queen Jayden, held captive in King Recher's dungeons, is to solve the challenging math puzzles on each gate. Use your mind, unlock the gates, and become the hero of this exciting adventure!",
    "author-badge": "✍️ Author: Vladimir Tumanov | 🏫 5th Grade Mathematics Level",
    
    // Map screen
    "map-title": "KINGDOM OF LUGUBRIA",
    "map-subtitle": "Choose the glowing towers to unlock the dungeon gates and rescue the Queen!",
    "legend-locked": "Locked Dungeon",
    "legend-active": "Active Quest",
    "legend-unlocked": "Unlocked Gate",
    
    // Success Screen
    "success-title": "Queen Jayden Rescued!",
    "success-text": "You did an amazing job! You solved all the math puzzles with your intelligence and freed the Emerald Queen. The people of the Kingdom of Idilya are grateful to you!",
    "cert-instruct": "Enter your name for the certificate and download your reward:",
    "cert-placeholder": "Type your name...",
    "btn-download-cert": "🏆 Download Hero Certificate",
    "btn-play-again": "Play Adventure Again 🔄",
    
    // Modal tabs & inputs
    "tab-interactive": "Interactive Tasks 🎮",
    "tab-worksheet": "Worksheet 📝",
    "label-answer": "Your Answer:",
    "input-placeholder": "Number...",
    "btn-hint": "💡 Get Hint",
    "btn-submit": "Open Gate 🗝️",
    
    // Modal Worksheet Preview
    "ws-preview-mascot-speech": "\"Modeling math on paper broadens your mind! You can download and print the worksheet for this dungeon gate!\"",
    "ws-preview-topic": "Topic Title:",
    "ws-preview-outcome": "Learning Outcome:",
    "ws-preview-q1": "Question 1:",
    "ws-preview-q2": "Question 2:",
    "btn-print-ws": "🖨️ Print Worksheet / Save PDF",
    
    // Printable PDF Worksheet
    "ws-print-title": "👑 SAVE THE QUEEN MATHEMATICS WORKSHEET",
    "ws-meta-name": "Student's Full Name: ________________________",
    "ws-meta-class": "Class / No: ______________",
    "ws-meta-date": "Date: _________________",
    "ws-print-topic-lbl": "Topic Title:",
    "ws-print-outcome-lbl": "Learning Outcome:",
    "ws-print-story-lbl": "Lugubria Kingdom Story:",
    "ws-print-q1-lbl": "QUESTION 1:",
    "ws-print-q2-lbl": "QUESTION 2:",
    "ws-print-space-lbl": "✍️ Solution and Drawing / Modeling Area:",
    "ws-print-footer-note": "Use your mind, open the dungeon gates, and rescue Queen Jayden! | 5th Grade Math Adventure",
    
    // Tower Labels on SVG
    "node-1-text": "Magic Pencil",
    "node-2-text": "Lava Bridge",
    "node-3-text": "Emerald Tower",
    "node-4-text": "Guard Passage",
    "node-5-text": "Truck Encounter",
    "node-6-text": "Silver Towers",
    "node-7-text": "Monoculus Clan",
    "node-8-text": "Jayden",
    
    // Miscellaneous
    "status-locked": "Locked Zone",
    "status-unlocked": "Unlocked",
    "status-active": "Active Gate",
    "recher-taunt": "Hahaha! Wrong calculation! Is your mind not enough to pass my dungeons? Your pencil just got shorter!",
    "correct-gate-all": "🎉 Awesome! All tasks completed, the gate is open!",
    "correct-task-next": "🎉 Correct Answer! Task solved!",
    "btn-next-task": "Go to Next Task ➔",
    "btn-go-queen": "Go to the Queen 👑",
    "btn-continue-map": "Continue on Map ➔",
    "modal-completed": "Completed ✅",
    "modal-task-lbl": "Task",
    
    // Visualizer Strings
    "vis-reverse-instruction": "Simulate operations in forward and backward directions in the pipeline below:",
    "vis-reverse-btn-reverse": "Work Backward (Reverse Operation)",
    "vis-reverse-btn-forward": "Work Forward",
    "vis-reverse-explain-default": "Click the button above to reverse operations and see the backward flow!",
    "vis-reverse-explain-active": "<strong>Reverse Flow Active:</strong><br>1. Subtract {val1} from result: <span class=\"text-accent\">{eq1} = [Middle Number]</span><br>2. Divide (or multiply) the middle number by {val2}: <span class=\"text-accent\">[Middle Number] {op} {val2} = [Starting Number]</span><br>Calculate the numbers and enter your answer below!",
    
    "vis-pattern-instruction": "Click on the question mark arcs to see the differences/multiples between numbers:",
    "vis-pattern-explain-default": "Click on the question marks above to see the step increments.",
    "vis-pattern-explain-step": "<strong>Pattern Analysis:</strong> {text}",
    
    "vis-fraction-instruction": "Run steps to visualize the emerald box:",
    "vis-fraction-explain-default": "Click Step 1 to paint Vanessa's share.",
    "vis-fraction-btn-1": "Step 1: Vanessa's Share",
    "vis-fraction-btn-2": "Step 2: Sam's Share",
    "vis-fraction-btn-3": "Step 3: Remaining",
    
    "vis-scale-instruction": "Drag the slider to adjust the young guard's age and balance the scale:",
    "vis-scale-slider-label": "Young Guard's Age",
    "vis-scale-explain-default": "The scale is not balanced. Move the slider to find the balance!",
    "vis-scale-explain-balanced": "<span class=\"text-emerald\" style=\"font-weight:bold;\">Scale Balanced!</span><br>Young guard's age (1 Share) = <span class=\"text-gold\">{age}</span> found.<br>Since the lead guard's age is {factor} times this, calculate the lead guard's age!",
    "vis-scale-young-label": "Young G. (1 Share):",
    "vis-scale-lead-label": "Lead G. ({factor} Shares):",
    
    "vis-speed-instruction": "Click 'Run Trucks' to see the movement of the trucks:",
    "vis-speed-btn-run": "Run Trucks 🏁",
    "vis-speed-btn-reset": "Reset 🔄",
    "vis-speed-meeting": "💥 Meeting Point",
    "vis-speed-explain-default": "Click the button to send the trucks on their way!",
    "vis-speed-explain-active": "<strong>Encounter Analysis:</strong><br>- Speed of approach: <span class=\"text-accent\">{v1} + {v2} = {vsum} km/h</span>.<br>- Travel time: {min} minutes ({frac} hour).<br>- Total distance: {vsum} × ({frac}) = <span class=\"text-emerald\" style=\"font-weight:bold;\">{ans} km</span>.<br>Calculate the distance and enter it below!",
    
    "vis-towers-instruction": "Click on the question marks in between to see heights and analyze the pattern:",
    "vis-towers-explain-default": "Click on the ? marks in between to see the differences!",
    
    "vis-eyes-instruction": "Adjust the count of 3-eyed monsters to make the total eye count {target}:",
    "vis-eyes-monsters": "Total Monsters:",
    "vis-eyes-target": "Target Eye Count:",
    "vis-eyes-current": "Current Eyes:",
    "vis-eyes-label-3": "3-Eyed Monster Count",
    "vis-eyes-explain-default": "All monsters currently have 1 eye. Adjust the count of 3-eyed monsters to reach the target of {target} eyes!",
    "vis-eyes-explain-balanced": "<span class=\"text-emerald\" style=\"font-weight:bold;\">Congratulations! Total eyes is {target}!</span><br>- 3-Eyed Monster Count = <span class=\"text-gold\">{three}</span><br>- 1-Eyed Monster Count = <span class=\"text-gold\">{one}</span><br>Enter the count of 3-eyed monsters below!",
    
    "vis-logic-instruction": "Click on the chests assuming the location of the key to find the correct one:",
    "vis-logic-red": "Red Chest",
    "vis-logic-blue": "Blue Chest",
    "vis-logic-green": "Green Chest",
    "vis-logic-table-header-1": "Assumed Key Location",
    "vis-logic-table-header-2": "Red Inscription",
    "vis-logic-table-header-3": "Blue Inscription",
    "vis-logic-table-header-4": "Green Inscription",
    "vis-logic-table-header-5": "True Statements",
    "vis-logic-row-red": "If in Red",
    "vis-logic-row-blue": "If in Blue",
    "vis-logic-row-green": "If in Green",
    "vis-logic-cell-true": "TRUE",
    "vis-logic-cell-false": "LIE",
    "vis-logic-cell-count": "{count} True",
    "vis-logic-explain-default": "Click on a chest to analyze the logical truth values on the table!"
  },
  ru: {
    // Header
    "logo": "👑 СПАСТИ КОРОЛЕВУ",
    "pencil-lbl": "Энергия Карандаша:",
    "chapter-lbl": "ГЛАВА",
    
    // Landing Screen (Hero)
    "mascot-name": "Монокулус Говорит:",
    "mascot-speech": "\"Привет, юный математик! Я Монокулус. Готов ли ты отправиться в волшебное математическое приключение, чтобы спасти королеву Джейден? Я буду твоим проводником!\"",
    "hero-title": "Добро пожаловать в волшебный мир математики!",
    "hero-subtitle": "Присоединяйся к Алексу, Сэму и Ванессе в их загадочном мире. Решай математические загадки, чтобы открыть замки темниц Короля Решера один за другим!",
    "btn-start": "Начать Приключение ⚔️",
    "btn-teaser": "🎬 Смотреть Видео",
    "btn-teaser-again": "🎬 Смотреть Видео Сначала",
    "btn-back-ill": "🖼️ Вернуться к Картинке",
    "caption-showcase": "🏰 Королевство Лугубрия и мир Изумрудной Королевы",
    
    // About Vladimir Tumanov
    "about-title": "О книге и авторе",
    "about-p1": "В этой интерактивной игре, созданной по мотивам любимого во всем мире романа **Владимира Туманова** <em>«Королеву в заложники!»</em>, ты откроешь для себя волшебный мир математики!",
    "about-p2": "Алекс находит на улице волшебную карту и карандаш, после чего попадает в Королевство Лугубрия. Единственный способ спасти Королеву Джейден, томящуюся в темницах Короля Решера, — это решить сложные математические задачи у каждых ворот. Используй свой ум и стань героем приключения!",
    "author-badge": "✍️ Автор: Владимир Туманов | 🏫 Уровень математики 5 класса",
    
    // Map screen
    "map-title": "КОРОЛЕВСТВО ЛУГУБРИЯ",
    "map-subtitle": "Выбирай светящиеся башни, чтобы открыть ворота темницы и спасти Королеву!",
    "legend-locked": "Закрытая Башня",
    "legend-active": "Активный Квест",
    "legend-unlocked": "Открытые Ворота",
    
    // Success Screen
    "success-title": "Королева Джейден Спасена!",
    "success-text": "Ты проделал отличную работу! Ты решил все математические загадки с помощью своего ума и освободил Изумрудную Королеву. Жители Королевства Идилия бесконечно благодарны тебе!",
    "cert-instruct": "Введите свое имя для сертификата и скачайте награду:",
    "cert-placeholder": "Напишите имя...",
    "btn-download-cert": "🏆 Скачать Сертификат Героя",
    "btn-play-again": "Начать Приключение Заново 🔄",
    
    // Modal tabs & inputs
    "tab-interactive": "Интерактивные Задачи 🎮",
    "tab-worksheet": "Рабочий Лист 📝",
    "label-answer": "Твой Ответ:",
    "input-placeholder": "Число...",
    "btn-hint": "💡 Получить Подсказку",
    "btn-submit": "Открыть Ворота 🗝️",
    
    // Modal Worksheet Preview
    "ws-preview-mascot-speech": "\"Моделирование математики на бумаге развивает твой ум! Ты можешь скачать и распечатать рабочий лист для этих ворот!\"",
    "ws-preview-topic": "Тема Занятия:",
    "ws-preview-outcome": "Цель Обучения:",
    "ws-preview-q1": "Вопрос 1:",
    "ws-preview-q2": "Вопрос 2:",
    "btn-print-ws": "🖨️ Распечатать Лист / Сохранить PDF",
    
    // Printable PDF Worksheet
    "ws-print-title": "👑 РАБОЧИЙ ЛИСТ ПО МАТЕМАТИКЕ «СПАСТИ КОРОЛЕВУ»",
    "ws-meta-name": "Имя и Фамилия ученика: ________________________",
    "ws-meta-class": "Класс / №: ______________",
    "ws-meta-date": "Дата: _________________",
    "ws-print-topic-lbl": "Тема Занятия:",
    "ws-print-outcome-lbl": "Цель Обучения:",
    "ws-print-story-lbl": "История Королевства Лугубрия:",
    "ws-print-q1-lbl": "ВОПРОС 1:",
    "ws-print-q2-lbl": "ВОПРОС 2:",
    "ws-print-space-lbl": "✍️ Область для решений и чертежей / моделей:",
    "ws-print-footer-note": "Используй ум, открывай ворота подземелий и спаси Королеву Джейден! | Математика для 5 класса",
    
    // Tower Labels on SVG
    "node-1-text": "Карандаш",
    "node-2-text": "Лавовый Мост",
    "node-3-text": "Изумрудная Башня",
    "node-4-text": "Пост Охраны",
    "node-5-text": "Встреча Грузовиков",
    "node-6-text": "Серебряные Башни",
    "node-7-text": "Глаза Монстров",
    "node-8-text": "Джейден",
    
    // Miscellaneous
    "status-locked": "Закрытая Зона",
    "status-unlocked": "Открыто",
    "status-active": "Активные Ворота",
    "recher-taunt": "Ха-ха-ха! Неверный расчет! Разве твоего ума достаточно для моих темниц? Твой карандаш стал еще короче!",
    "correct-gate-all": "🎉 Отлично! Все задания выполнены, ворота открыты!",
    "correct-task-next": "🎉 Верный Ответ! Задача решена!",
    "btn-next-task": "Перейти к Следующему Заданию ➔",
    "btn-go-queen": "Идти к Королеве 👑",
    "btn-continue-map": "Продолжить на Карте ➔",
    "modal-completed": "Выполнено ✅",
    "modal-task-lbl": "Задача",
    
    // Visualizer Strings
    "vis-reverse-instruction": "Симулируйте операции в прямом и обратном направлении в конвейере ниже:",
    "vis-reverse-btn-reverse": "Обратный ход (Обратная операция)",
    "vis-reverse-btn-forward": "Прямой ход",
    "vis-reverse-explain-default": "Нажмите кнопку выше, чтобы обратить операции и увидеть обратный ход!",
    "vis-reverse-explain-active": "<strong>Обратный ход активен:</strong><br>1. Вычтите {val1} из результата: <span class=\"text-accent\">{eq1} = [Среднее Число]</span><br>2. Разделите (или умножьте) среднее число на {val2}: <span class=\"text-accent\">[Среднее Число] {op} {val2} = [Начальное Число]</span><br>Вычислите числа и введите ответ ниже!",
    
    "vis-pattern-instruction": "Нажмите на дуги с вопросами, чтобы увидеть разницу/отношения чисел:",
    "vis-pattern-explain-default": "Нажмите на знаки вопроса выше, чтобы увидеть шаги прогрессии.",
    "vis-pattern-explain-step": "<strong>Анализ последовательности:</strong> {text}",
    
    "vis-fraction-instruction": "Запустите шаги для визуализации изумрудов в коробке:",
    "vis-fraction-explain-default": "Нажмите Шаг 1, чтобы раскрасить долю Ванессы.",
    "vis-fraction-btn-1": "Шаг 1: Доля Ванессы",
    "vis-fraction-btn-2": "Шаг 2: Доля Сэма",
    "vis-fraction-btn-3": "Шаг 3: Остаток",
    
    "vis-scale-instruction": "Перемещайте ползунок, чтобы изменить возраст молодого стражника и сбалансировать весы:",
    "vis-scale-slider-label": "Возраст молодого стражника",
    "vis-scale-explain-default": "Весы разбалансированы. Перемещайте ползунок, чтобы найти равновесие!",
    "vis-scale-explain-balanced": "<span class=\"text-emerald\" style=\"font-weight:bold;\">Весы сбалансированы!</span><br>Возраст молодого стражника (1 Доля) = <span class=\"text-gold\">{age}</span>.<br>Поскольку возраст старшего стражника в {factor} раза больше, вычислите его возраст!",
    "vis-scale-young-label": "Молодой с. (1 Доля):",
    "vis-scale-lead-label": "Старший с. ({factor} Доли):",
    
    "vis-speed-instruction": "Нажмите 'Запустить грузовики', чтобы увидеть их движение:",
    "vis-speed-btn-run": "Запустить грузовики 🏁",
    "vis-speed-btn-reset": "Сбросить 🔄",
    "vis-speed-meeting": "💥 Точка Встречи",
    "vis-speed-explain-default": "Нажмите кнопку, чтобы отправить грузовики в путь!",
    "vis-speed-explain-active": "<strong>Анализ встречи:</strong><br>- Скорость сближения: <span class=\"text-accent\">{v1} + {v2} = {vsum} км/ч</span>.<br>- Время до встречи: {min} минут ({frac} часа).<br>- Общее расстояние: {vsum} × ({frac}) = <span class=\"text-emerald\" style=\"font-weight:bold;\">{ans} км</span>.<br>Вычислите расстояние и введите ответ!",
    
    "vis-towers-instruction": "Нажмите на знаки вопроса между башнями, чтобы увидеть высоту и узнать закономерность:",
    "vis-towers-explain-default": "Нажмите на ? между башнями, чтобы увидеть разницу высоты!",
    
    "vis-eyes-instruction": "Настройте количество 3-глазых монстров, чтобы получить общее число глаз {target}:",
    "vis-eyes-monsters": "Всего монстров:",
    "vis-eyes-target": "Целевое число глаз:",
    "vis-eyes-current": "Текущее число глаз:",
    "vis-eyes-label-3": "Кол-во 3-глазых монстров",
    "vis-eyes-explain-default": "Сейчас у всех монстров по 1 глазу. Измените количество 3-глазых монстров, чтобы получить в сумме {target} глаз!",
    "vis-eyes-explain-balanced": "<span class=\"text-emerald\" style=\"font-weight:bold;\">Поздравляем! Всего глаз: {target}!</span><br>- 3-глазых монстров = <span class=\"text-gold\">{three}</span><br>- 1-глазых монстров = <span class=\"text-gold\">{one}</span><br>Введите количество 3-глазых монстров ниже!",
    
    "vis-logic-instruction": "Нажимайте на сундуки, предполагая местонахождение ключа, чтобы найти верный:",
    "vis-logic-red": "Красный Сундук",
    "vis-logic-blue": "Синий Сундук",
    "vis-logic-green": "Зеленый Сундук",
    "vis-logic-table-header-1": "Предполагаемое место ключа",
    "vis-logic-table-header-2": "Надпись на Красном",
    "vis-logic-table-header-3": "Надпись на Синем",
    "vis-logic-table-header-4": "Надпись на Зеленом",
    "vis-logic-table-header-5": "Верных утверждений",
    "vis-logic-row-red": "Если в Красном",
    "vis-logic-row-blue": "Если в Синем",
    "vis-logic-row-green": "Если в Зеленом",
    "vis-logic-cell-true": "ИСТИНА",
    "vis-logic-cell-false": "ЛОЖЬ",
    "vis-logic-cell-count": "Верно: {count}",
    "vis-logic-explain-default": "Нажимайте на сундуки для анализа истинности высказываний на таблице!"
  }
};

// Dialogue correct statements (per task) translated
export const dialogueTranslations = {
  tr: {
    // Gate 1
    "1-0-name": "Aleks",
    "1-0-speech": "Harika! Birinci sayı makinesinin kuralını zihnimizle çözüp kalemin gücünü taklit ettik. Ama durun, Recher ikinci bir makineyi daha kilitledi!",
    "1-1-name": "Kral Recher",
    "1-1-speech": "Hayır! Olamaz! İlk zindan kapısının kilidini açtınız... Ama sevinmeyin, önünüzdeki lav nehrini ve sihirli köprü örüntülerini asla geçemeyeceksiniz!",
    // Gate 2
    "2-0-name": "Vanessa",
    "2-0-speech": "Buldum! Sütunların aralarındaki farklar ikiye katlanıyor! Köprünün ilk yarısını birleştirdik, şimdi ikinci örüntüye geçelim!",
    "2-1-name": "Kral Recher",
    "2-1-speech": "Nasıl olur?! Lav köprüsünü birleştirdiniz ve karşıya geçtiniz... Ama Zümrüt Kulesi'nin gizemli kesir koruyucuları sizi kulenin tepesinde durduracak!",
    // Gate 3
    "3-0-name": "Sam",
    "3-0-speech": "Harika! Çizdiğimiz kutu modeli sayesinde Vanessa ve benim paylarımı düşüp bütünü kurduk. Ama alevler ikinci bir kesir bilmecesi daha gösteriyor!",
    "3-1-name": "Kral Recher",
    "3-1-speech": "Kuleyi de mi aştınız?! İnanılmaz! Ama muhafız kışlasındaki baş muhafızımın terazi yaş katı bilmecesini çözmeniz mümkün değil!",
    // Gate 4
    "4-0-name": "Aleks",
    "4-0-speech": "Teraziyi dengeleyerek genç muhafızın yaşını bulduk ve baş muhafızın yaşını hesapladık! Nöbetçilerden biri çekildi ama diğeri hala yolu kapatıyor!",
    "4-1-name": "Kral Recher",
    "4-1-speech": "Kışla kapısı da mı açıldı?! Lanet olsun! Ama Kraliçenin hücresindeki yalan/doğru sandık kilidini asla çözemeyeceksiniz. O sandıklardan sadece biri doğru!",
    // Gate 5
    "5-0-name": "Sam",
    "5-0-speech": "Harika! Hızları birleştirip zamanla çarparak kanyonun genişliğini bulduk ve kamyonların karşılaşmasını simüle ettik. Şimdi kanyon köprüsünden geçebiliriz!",
    "5-1-name": "Kral Recher",
    "5-1-speech": "Hayır! Kanyon yolundaki kamyonları çarpmadan yönlendirdiniz... Ama önünüzdeki parıldayan gümüş kulelerin yükseklik kuralını çözemezsiniz!",
    // Gate 6
    "6-0-name": "Vanessa",
    "6-0-speech": "Kulelerin yükseklik örüntüsünü çözdük! 5. kulenin tepesinden sihirli geçidin anahtarını aldım. Şimdi ikinci kulenin örüntüsüne geçelim!",
    "6-1-name": "Kral Recher",
    "6-1-speech": "Nasıl olur?! Gümüş kulelerin şifresini de çözdünüz... Ama karanlık mağaradaki tek gözlülerin mağara gözü sayacı sizi durduracak!",
    // Gate 7
    "7-0-name": "Monoculus",
    "7-0-speech": "Harika! Benim soyumun göz bilmecesini çözdün. 3 gözlü kardeşlerim sana yolu gösterecek. Ama durun, mağarada ikinci bir canavar grubu daha var!",
    "7-1-name": "Kral Recher",
    "7-1-speech": "Lanet olsun! Canavar mağarasından da geçtiniz... Ama Kraliçe Jayden'ı esir tuttuğum son kapıdaki sandık yalan/doğru mantık problemini asla çözemeyeceksiniz!",
    // Gate 8
    "8-0-name": "Kraliçe Jayden",
    "8-0-speech": "Sevgili çocuklar, ilk sandık varsayımını başarıyla çürüttünüz! Şimdi Recher'in son bir kez değiştirdiği ikinci sandık bilmecesine geçelim!",
    "8-1-name": "Kraliçe Jayden",
    "8-1-speech": "Anahtar döndü ve son kilit açıldı! Kapı nihayet ardına kadar açılıyor. Gelin ve beni bu zindandan kurtarın!"
  },
  en: {
    // Gate 1
    "1-0-name": "Alex",
    "1-0-speech": "Excellent! We solved the first number machine rule in our minds, copying the pencil's power. But wait, Recher has locked a second machine!",
    "1-1-name": "King Recher",
    "1-1-speech": "No! It can't be! You unlocked the first dungeon gate... But do not celebrate yet, you will never pass the lava river and the magical bridge patterns ahead!",
    // Gate 2
    "2-0-name": "Vanessa",
    "2-0-speech": "I found it! The differences between the columns double each time! We bridged the first half, now let's solve the second pattern!",
    "2-1-name": "King Recher",
    "2-1-speech": "How?! You completed the lava bridge and crossed... But the mysterious fraction guardians of the Emerald Tower will halt you at the top!",
    // Gate 3
    "3-0-name": "Sam",
    "3-0-speech": "Great! Thanks to the box model we drew, we accounted for Vanessa's and my shares and calculated the whole. But the flames show a second fraction puzzle!",
    "3-1-name": "King Recher",
    "3-1-speech": "You passed the tower too?! Unbelievable! But you cannot solve the age-multiple scale balance puzzle of my lead guard at the barracks!",
    // Gate 4
    "4-0-name": "Alex",
    "4-0-speech": "By balancing the scale, we found the young guard's age and calculated the lead guard's age! One guard backed away, but the other still blocks the path!",
    "4-1-name": "King Recher",
    "4-1-speech": "Did the barracks gate open too?! Curse you! But you will never solve the chest truth/lie logic lock at the Queen's cell. Only one of those chests is correct!",
    // Gate 5
    "5-0-name": "Sam",
    "5-0-speech": "Great! By combining the speeds and multiplying by time, we found the width of the canyon and simulated the meeting. Now we can cross the canyon bridge!",
    "5-1-name": "King Recher",
    "5-1-speech": "No! You navigated the trucks in the canyon without a crash... But you will never crack the height pattern rule of the glowing silver towers in front of you!",
    // Gate 6
    "6-0-name": "Vanessa",
    "6-0-speech": "We solved the height pattern of the towers! I got the key to the magic passage from the top of the 5th tower. Now let's move to the second tower pattern!",
    "6-1-name": "King Recher",
    "6-1-speech": "What?! You solved the code of the silver towers too... But the eye counter of the one-eyed creatures in the dark cave will stop you!",
    // Gate 7
    "7-0-name": "Monoculus",
    "7-0-speech": "Awesome! You solved my clan's eye puzzle. My 3-eyed brothers will show you the path. But wait, there is a second monster group in the cave!",
    "7-1-name": "King Recher",
    "7-1-speech": "Dammit! You passed the monster cave too... But you will never solve the chest lie/truth logic puzzle at the final cell where I hold Queen Jayden!",
    // Gate 8
    "8-0-name": "Queen Jayden",
    "8-0-speech": "Dear children, you successfully debunked the first chest assumption! Now let's solve the second chest puzzle that Recher modified one last time!",
    "8-1-name": "Queen Jayden",
    "8-1-speech": "The key turned and the final lock opened! The door is finally wide open. Come and rescue me from this dungeon!"
  },
  ru: {
    // Gate 1
    "1-0-name": "Алекс",
    "1-0-speech": "Отлично! Мы разгадали правило первой числовой машины в уме, воссоздав силу карандаша. Но подождите, Решер заблокировал вторую машину!",
    "1-1-name": "Король Решер",
    "1-1-speech": "Нет! Этого не может быть! Вы открыли первые ворота... Но не радуйтесь раньше времени, вам никогда не пройти лавовую реку и узоры моста впереди!",
    // Gate 2
    "2-0-name": "Ванесса",
    "2-0-speech": "Я нашла! Разница между столбиками удваивается с каждым шагом! Первая половина моста готова, теперь решим вторую закономерность!",
    "2-1-name": "Король Решер",
    "2-1-speech": "Как?! Вы завершили лавовый мост и перешли его... Но таинственные хранители долей Изумрудной Башни остановят вас наверху!",
    // Gate 3
    "3-0-name": "Сэм",
    "3-0-speech": "Здорово! Благодаря коробчатой модели мы вычли доли Ванессы и мои, воссоздав целое. Но пламя показывает вторую задачу на дроби!",
    "3-1-name": "Король Решер",
    "3-1-speech": "Вы и башню прошли?! Невероятно! Но вам никогда не решить задачу баланса весов возраста стражников у казарм!",
    // Gate 4
    "4-0-name": "Алекс",
    "4-0-speech": "Сбалансировав весы, мы нашли возраст молодого стражника и вычислили возраст старшего! Один стражник отошел, но второй все еще преграждает путь!",
    "4-1-name": "Король Решер",
    "4-1-speech": "Ворота казармы тоже открылись?! Проклятье! Но вам никогда не открыть логический замок сундуков у Королевы. Лишь на одном написана правда!",
    // Gate 5
    "5-0-name": "Сэм",
    "5-0-speech": "Отлично! Объединив скорости и умножив на время, мы нашли ширину каньона и симулировали встречу. Теперь мы можем перейти мост каньона!",
    "5-1-name": "Король Решер",
    "5-1-speech": "Нет! Вы провели грузовики в каньоне без столкновения... Но вы никогда не разгадаете высоту мерцающих серебряных башен перед вами!",
    // Gate 6
    "6-0-name": "Ванесса",
    "6-0-speech": "Мы разгадали узор высоты башен! Я взяла ключ от волшебного прохода на вершине 5-й башни. Теперь перейдем ко второй последовательности!",
    "6-1-name": "Король Решер",
    "6-1-speech": "Что?! Вы разгадали код серебряных башен... Но счетчик глаз одноглазых существ в темной пещере вас точно остановит!",
    // Gate 7
    "7-0-name": "Монокулус",
    "7-0-speech": "Потрясающе! Вы решили загадку глаз моего клана. Мои 3-глазые братья укажут вам путь. Но подождите, в пещере есть вторая группа монстров!",
    "7-1-name": "Король Решер",
    "7-1-speech": "Черт возьми! Вы прошли и пещеру монстров... Но вы никогда не решите логическую загадку лжи и правды у камеры Королевы Джейден!",
    // Gate 8
    "8-0-name": "Королева Джейден",
    "8-0-speech": "Дорогие дети, вы успешно опровергли первое предположение о сундуках! Теперь давайте решим вторую загадку, измененную Решером!",
    "8-1-name": "Королева Джейден",
    "8-1-speech": "Ключ повернулся, и последний замок открылся! Дверь наконец распахнулась. Идите и спасите меня из этого подземелья!"
  }
};

export const puzzleTranslations = {
  tr: {
    1: {
      title: "1. Kapı: Sihirli Kalem (Ters İşlem)",
      chapter: "Zindana Giriş",
      character: "Kral Recher",
      narrative: "Aleks ve arkadaşları zindanın ilk ağır demir kapısına ulaşırlar. Kapının üzerinde Recher'in alaycı sesi yankılanır: 'Sihirli kaleminize çok güvendiniz, ama o artık yok! Kraliçeyi kurtarmak istiyorsanız, zihninizi kullanmalısınız. Zindanın ilk kilidini açmak için iki sihirli sayı makinesinin de gizemini çözmelisin!'",
      worksheet: {
        title: "Sihirli Kalem (Ters İşlem)",
        topic: "Doğal Sayılarla İşlemler (Ters İşlem)",
        outcome: "Geriye doğru çalışma stratejisini kullanarak verilmeyen başlangıç değerini bulur.",
        q1: "Sihirli bir sayı makinesi, içine atılan bir sayıyı 4 ile çarpıp sonucuna 12 eklediğinde 60 elde ediyor. Bu makineye başlangıçta atılan sayı kaçtır?",
        q2: "Bir sayının yarısından 7 çıkarıldığında 8 elde ediliyor. Bu sayının başlangıçtaki değeri kaçtır?"
      },
      tasks: [
        {
          question: "1. Görev: Sihirli sayı makinesi bir sayıyı 3 ile çarpıp, sonucuna 5 eklediğinde 26 elde ediyor. Başlangıçtaki sayı kaçtır?",
          hint: "İpucu: Geriye doğru çalışma stratejisini kullan! Sonuçtan başlayıp geriye doğru git ve her işlemi tersine çevir. Toplamanın tersi çıkarma, çarpmanın tersi ise bölmedir.",
          solution: "Çözüm: Sonuç olan 26'dan geriye doğru gideriz. Son olarak 5 eklendiği için önce 5 çıkarırız: 26 - 5 = 21. Daha sonra 3 ile çarpıldığı için 21'i 3'e böleriz: 21 / 3 = 7. Başlangıçtaki sayı 7'dir!",
          speechCorrect: "Harika! Birinci sayı makinesinin kuralını zihnimizle çözüp kalemin gücünü taklit ettik. Ama durun, Recher ikinci bir makineyi daha kilitledi!"
        },
        {
          question: "2. Görev: İkinci sihirli makine bir sayıyı 2'ye bölüp, sonucuna 8 eklediğinde 15 elde ediyor. Başlangıçtaki sayı kaçtır?",
          hint: "İpucu: Geriye doğru çalış! 15'ten 8 çıkar, ardından bölmenin tersi olan çarpma işlemini uygula (çıkan sonucu 2 ile çarp).",
          solution: "Çözüm: Sonuç olan 15'ten geriye gideriz. 8 eklenmiş hali 15 ise eklenmemiş hali 15 - 8 = 7'dir. 2'ye bölündüğünde 7 çıkan sayı ise 7 * 2 = 14'tür.",
          speechCorrect: "Hayır! Olamaz! İlk zindan kapısının kilidini açtınız... Ama sevinmeyin, önünüzdeki lav nehrini ve sihirli köprü örüntülerini asla geçemeyeceksiniz!"
        }
      ]
    },
    2: {
      title: "2. Kapı: Lugubriya Köprüsü (Sayı Örüntüleri)",
      chapter: "Lav Nehri",
      character: "Vanessa",
      narrative: "Karşılarına altından lavların aktığı tehlikeli bir nehir çıkar. Vanessa köprünün üzerindeki taş sayı örüntülerini gösterir: 'Köprü taşlarının üzerindeki sayıların gizli kuralını bulmalıyız. İki köprü bölgesindeki örüntüyü de çözersek karşıya güvenle geçebiliriz!'",
      worksheet: {
        title: "Lugubriya Köprüsü (Sayı Örüntüleri)",
        topic: "Sayı Örüntüleri ve İlişkiler",
        outcome: "Belirli bir kurala göre artan veya azalan sayı örüntülerindeki ilişkileri keşfeder ve örüntüyü genişletir.",
        q1: "5, 11, 23, 47, [?] sayı örüntüsündeki artış kuralını açıklayarak soru işareti yerine gelmesi gereken sayıyı bulunuz.",
        q2: "1, 4, 16, 64, [?] sayı örüntüsündeki kuralı belirleyip soru işareti yerine gelmesi gereken sayıyı bulunuz."
      },
      tasks: [
        {
          question: "1. Görev: 3, 7, 15, 31, 63, [?] sayı örüntüsünde boş bırakılan yere hangi sayı gelmelidir?",
          hint: "İpucu: Sayıların arasındaki farkları incele! Farklar sırasıyla 4, 8, 16, 32 şeklinde ilerliyor. Bu artışların kuralını bulup son sayıya ekle.",
          solution: "Çözüm: Sayılar arasındaki artışlar: +4, +8, +16, +32'dir. Her artış miktarı öncekinin 2 katıdır. Sonraki artış 32 * 2 = 64 olmalıdır. 63 + 64 = 127 olur.",
          speechCorrect: "Buldum! Sütunların aralarındaki farklar ikiye katlanıyor! Köprünün ilk yarısını birleştirdik, şimdi ikinci örüntüye geçelim!"
        },
        {
          question: "2. Görev: Köprünün diğer yarısındaki örüntü: 2, 6, 18, 54, [?] şeklindedir. Boş bırakılan yere hangi sayı gelmelidir?",
          hint: "İpucu: Sayıların katlarını incele! Sayılar her adımda bir öncekinin kaç katı olarak artıyor? Bu çarpanı son sayıya uygula.",
          solution: "Çözüm: Sayılar arasındaki örüntü incelendiğinde her sayı bir öncekinin 3 katıdır: 2 * 3 = 6, 6 * 3 = 18, 18 * 3 = 54. O halde sonraki sayı: 54 * 3 = 162 olmalıdır.",
          speechCorrect: "Nasıl olur?! Lav köprüsünü birleştirdiniz ve karşıya geçtiniz... Ama Zümrüt Kulesi'nin gizemli kesir koruyucuları sizi kulenin tepesinde durduracak!"
        }
      ]
    },
    3: {
      title: "3. Kapı: Zümrüt Kulesi (Kesirler)",
      chapter: "Zümrüt Labirenti",
      character: "Sam",
      narrative: "Zümrüt Kulesi'nin kapısında yeşil alevlerle yazılmış bilmeceler belirir. Sam cebinden not defterini çıkarır: 'Vanessa ile paylaştığımız sihirli zümrütlerin kesir problemlerini çözersek kapı açılacak. Dikkatli şekil çizmeliyiz!'",
      worksheet: {
        title: "Zümrüt Kulesi (Kesir Problemleri)",
        topic: "Kesirlerle İşlemler ve Şekil Çizme",
        outcome: "Bir bütünün kesir kadarını hesaplar ve kalan parçalardan bütüne ulaşmak için şekil çizme stratejisini uygular.",
        q1: "30 sayısının 2/5'i ile 1/3'ünün toplamı kaçtır? (Bütünü modelleme kutularına ayırıp boyayarak çözünüz.)",
        q2: "Hakan cebindeki paranın 1/4'ünü harcıyor. Kalan parasının 1/3'ü ile kitap alıyor. Geriye 30 TL'si kaldığına göre başlangıçta kaç TL'si vardı? (Şekil çizerek kutu modeli oluşturunuz.)"
      },
      tasks: [
        {
          question: "1. Görev: Bir torbadaki sihirli zümrütlerin 1/3'ünü Vanessa alıyor. Kalan zümrütlerin 1/4'ünü Sam alıyor. Geriye 6 adet zümrüt kaldığına göre, başlangıçta kaç zümrüt vardı?",
          hint: "İpucu: Şekil çizme stratejisini kullan! Bütünü 12 eş parçaya bölünmüş kabul et. 1/3'ünü (4 parça) karala. Kalan 8 parçanın 1/4'ünü (2 parça) daha karala. Kalan parçaların zümrüt sayısına oranını hesapla.",
          solution: "Çözüm: Başlangıçtaki zümrütleri 12 kutu kabul edelim. Vanessa 1/3'ünü (4 kutu) alır, geriye 8 kutu kalır. Sam kalan 8 kutunun 1/4'ünü (2 kutu) alır, geriye 6 kutu kalır. Kalan 6 kutu 6 zümrüte eşitse, 1 kutu = 1 zümrüttür. Başlangıçta 12 kutu olduğundan toplam 12 zümrüt vardır.",
          speechCorrect: "Harika! Çizdiğimiz kutu modeli sayesinde Vanessa ve benim paylarımı düşüp bütünü kurduk. Ama alevler ikinci bir kesir bilmecesi daha gösteriyor!"
        },
        {
          question: "2. Görev: Torbadaki zümrütlerin 1/2'sini Vanessa alıyor. Kalan zümrütlerin 1/3'ünü Sam alıyor. Geriye 4 zümrüt kaldığına göre başlangıçta kaç zümrüt vardı?",
          hint: "İpucu: Yine 12 parçalık bir bütün çiz! Yarısını (6 parça) Vanessa'ya ver. Kalan 6 parçanın 1/3'ünü (2 parça) Sam'e ver. Kalan parça sayısını 4 zümrüte eşitle.",
          solution: "Çözüm: Bütün 12 kutu olsun. Yarısı (6 kutu) Vanessa'nın olur, 6 kutu kalır. Kalanın 1/3'ü (6 / 3 = 2 kutu) Sam'in olur, 4 kutu kalır. Kalan 4 kutu 4 zümrüte eşitse, 1 kutu = 1 zümrüttür. Toplam 12 kutu = 12 zümrüttür.",
          speechCorrect: "Kuleyi de mi aştınız?! İnanılmaz! Ama muhafız kışlasındaki baş muhafızımın terazi yaş katı bilmecesini çözmeniz mümkün değil!"
        }
      ]
    },
    4: {
      title: "4. Kapı: Muhafızların Geçidi (Yaş/Kat Modeli)",
      chapter: "Muhafız Kışlası",
      character: "Aleks",
      narrative: "Kraliçe'nin kulesinin önündeki iki muhafız yolu kapatmıştır. Aleks'e bakar ve kükrerler: 'Buradan geçmek için yaşlarımızın gizemini çözmelisin! İki farklı nöbetçi çiftinin bilmecelerini doğru yanıtla!'",
      worksheet: {
        title: "Muhafız Geçidi (Yaş/Kat Modeli)",
        topic: "Kat ve Yaş Problemleri (Kutu Modelleme)",
        outcome: "Bilinmeyen değerler arasındaki kat ilişkilerini kutu veya terazi modeli kullanarak görselleştirir ve çözer.",
        q1: "Elif'in ağırlığı Selin'in ağırlığının 2 katıdır. İkisinin ağırlıkları toplamı 72 kg olduğuna göre Elif kaç kilogramdır? (Kutu modeli çizerek gösteriniz.)",
        q2: "Bir babanın yaşı oğlunun yaşının 3 katından 4 fazla dır. İkisinin yaşları toplamı 44 olduğuna göre baba kaç yaşındadır? (Denklem modelini çizerek çözünüz.)"
      },
      tasks: [
        {
          question: "1. Görev: Baş muhafızın yaşı, genç muhafızın yaşının tam 3 katıdır. İkisinin yaşları toplamı 48 olduğuna göre baş muhafız kaç yaşındadır?",
          hint: "İpucu: Genç muhafızın yaşını 1 kat (1 kutu), baş muhafızın yaşını 3 kat (3 kutu) olarak modelle. Toplam 4 kat = 48 kg/yaş yapar. 1 katı bulup baş muhafızın 3 katını hesapla.",
          solution: "Çözüm: Genç muhafız = 1 kat, Baş muhafız = 3 kat. Toplam = 4 kat. 4 kat = 48 ise, 1 kat = 48 / 4 = 12 (Genç muhafızın yaşı). Baş muhafızın yaşı 3 kat olduğu için: 3 * 12 = 36'dır.",
          speechCorrect: "Teraziyi dengeleyerek genç muhafızın yaşını bulduk ve baş muhafızın yaşını hesapladık! Nöbetçilerden biri çekildi ama diğeri hala yolu kapatıyor!"
        },
        {
          question: "2. Görev: Diğer iki muhafızın bilmecesi: Baş muhafızın yaşı, genç muhafızın 2 katıdır. İkisinin yaşları toplamı 45 olduğuna göre baş muhafız kaç yaşındadır?",
          hint: "İpucu: Genç muhafız 1 kat (1 kutu), baş muhafız 2 kat (2 kutu) olur. Toplam 3 kat = 45. 1 katın değerini bulup baş muhafızın yaşını (2 katı) hesapla.",
          solution: "Çözüm: Genç muhafız = 1 kat, Baş muhafız = 2 kat. Toplam = 3 kat. 3 kat = 45 ise, 1 kat = 45 / 3 = 15 (Genç muhafızın yaşı). Baş muhafızın yaşı 2 kat olduğundan: 2 * 15 = 30'dur.",
          speechCorrect: "Kışla kapısı da mı açıldı?! Lanet olsun! Ama Kraliçenin hücresindeki yalan/doğru sandık kilidini asla çözemeyeceksiniz. O sandıklardan sadece biri doğru!"
        }
      ]
    },
    5: {
      title: "5. Kapı: Kamyon Karşılaşması (Hız ve Zaman)",
      chapter: "Kanyon Geçidi",
      character: "Sam",
      narrative: "Aleks ve arkadaşları kanyonun iki ucundan birbirlerine doğru hareket eden Recher'in yük kamyonlarını görürler. Kapıdaki yazıt şöyle der: 'Kanyonun iki ucundaki A ve B kalelerinden aynı anda hareket eden iki kamyonun hızları saatte 45 km ve 54 km'dir. Bu iki araç 20 dakika sonra karşılaştıklarına göre, iki kale arasındaki toplam mesafe kaç kilometredir?'",
      worksheet: {
        title: "Kamyon Karşılaşması (Hız ve Zaman)",
        topic: "Hız, Zaman ve Yol Problemleri",
        outcome: "Aynı anda birbirine doğru hareket eden iki nesnenin karşılaşma süresini ve toplam yolu hesaplar.",
        q1: "Hızları saatte 60 km ve 80 km olan iki otomobil, aralarında 280 km mesafe olan iki şehirden aynı anda birbirlerine doğru yola çıkıyorlar. Bu araçlar kaç saat sonra karşılaşırlar? (Çözüm adımlarını yazınız.)",
        q2: "A ve B şehirlerinden aynı anda birbirine doğru hareket eden iki kamyonun hızları sırasıyla 50 km/sa ve 40 km/sa'dir. Bu araçlar yola çıktıktan 3 saat sonra karşılaştıklarına göre A ve B şehirleri arasındaki mesafe kaç kilometredir?"
      },
      tasks: [
        {
          question: "1. Görev: Kamyonlar saatte 45 km and 54 km hızlarla birbirine doğru gidiyor. 20 dakika sonra karşılaştıklarına göre, A ve B kaleleri arasındaki mesafe kaç kilometredir? (Hızları toplayıp saat cinsinden zamanla çarpın: 20 dakika = 1/3 saattir.)",
          hint: "İpucu: Kamyonlar birbirine doğru geldiği için hızlarını topla: 45 + 54 = 99 km/sa. Karşılaşma süresi 20 dakika, yani 1 saatin 3'te biridir (20/60 = 1/3 sa). Toplam hızı bu süreyle çarp.",
          solution: "Çözüm: Toplam hız = 45 + 54 = 99 km/sa. Süre = 20 dakika = 20/60 = 1/3 saattir. Yol = Hız * Zaman formülünden: Yol = 99 * (1/3) = 33 km olur.",
          speechCorrect: "Harika! Hızları birleştirip zamanla çarparak kanyonun genişliğini bulduk ve kamyonların karşılaşmasını simüle ettik. Şimdi kanyon köprüsünden geçebiliriz!"
        },
        {
          question: "2. Görev: Kanyonun diğer tarafındaki iki kamyonun hızları 50 km/sa ve 60 km/sa'dir. Karşılaşma süreleri yine 30 dakika (1/2 saat) olduğuna göre aralarındaki toplam mesafe kaç kilometredir?",
          hint: "İpucu: Hızları toplayıp (50 + 60 = 110 km/sa) süre olan 1/2 saat ile çarpın.",
          solution: "Çözüm: Hızlar toplamı = 50 + 60 = 110 km/sa. Süre = 30 dakika = 1/2 saat. Yol = 110 * 1/2 = 55 km olur.",
          speechCorrect: "Hayır! Kanyon yolundaki kamyonları çarpmadan yönlendirdiniz... Ama önünüzdeki parıldayan gümüş kulelerin yükseklik kuralını çözemezsiniz!"
        }
      ]
    },
    6: {
      title: "6. Kapı: Gümüş Kuleler (Yükseklik Örüntüleri)",
      chapter: "Kraliyet Bahçesi",
      character: "Vanessa",
      narrative: "Bahçede yan yana sıralanmış gümüş kuleler yükselmektedir. Vanessa kulelerin altındaki yazıyı okur: 'Kulelerin yükseklikleri belirli bir kurala göre sıralanmıştır. İlk kule 3 metre, ikinci kule 7 metre, üçüncü kule 11 metredir. Bu şekilde devam eden gümüş kulelerin 5. olanının yüksekliğini bularak kapıyı açın!'",
      worksheet: {
        title: "Gümüş Kuleler (Yükseklik Örüntüleri)",
        topic: "Sayı ve Şekil Örüntüleri",
        outcome: "Aritmetik olarak artan örüntülerde terimler arasındaki ilişkiyi bulur ve verilmeyen terimi hesaplar.",
        q1: "Bir sayı örüntüsü 8'den başlayıp her adımda 6 artarak ilerlemektedir. Bu örüntünün 6. adımındaki sayı kaçtır? (Örüntüyü adım adım yazarak bulunuz.)",
        q2: "Yükseklikleri sırasıyla 5 cm, 12 cm, 19 cm, 26 cm... şeklinde artan bir bitkinin 7. haftanın sonundaki boyu kaç santimetre olur?"
      },
      tasks: [
        {
          question: "1. Görev: İlk kulesi 3 m, ikincisi 7 m, üçüncüsü 11 m olan gümüş kuleler örüntüsünde 5. kulenin yüksekliği kaç metredir?",
          hint: "İpucu: Örüntünün kuralını bul! Sayılar kaçar kaçar artıyor? 3, 7, 11... Her adımda 4 eklendiğini göreceksin. 4. ve 5. kulelerin yüksekliklerini bu kurala göre hesapla.",
          solution: "Çözüm: Kule yükseklikleri örüntüsü: 1. kule = 3m, 2. kule = 7m (+4), 3. kule = 11m (+4) şeklindedir. Kural: Her kule bir öncekinden 4 metre daha yüksektir. O halde: 4. kule = 11 + 4 = 15m, 5. kule = 15 + 4 = 19m olur.",
          speechCorrect: "Kulelerin yükseklik örüntüsünü çözdük! 5. kulenin tepesinden sihirli geçidin anahtarını aldım. Şimdi ikinci kulenin örüntüsüne geçelim!"
        },
        {
          question: "2. Görev: İkinci kule sırasındaki örüntü: 5, 12, 19, 26, [?] şeklindedir. Örüntüdeki 5. terim kaçtır?",
          hint: "İpucu: Farkları incele! 5'ten 12'ye artış kaç? 7 artış var. Örüntü 7'şer 7'şer artmaktadır. Son sayıya 7 ekle.",
          solution: "Çözüm: Artış miktarı: 12 - 5 = 7'dir. 19 - 12 = 7, 26 - 19 = 7'dir. Kural: Her sayı bir öncekinden 7 fazladır. O halde 5. terim: 26 + 7 = 33 olmalıdır.",
          speechCorrect: "Olamaz! Gümüş kulelerin şifresini de çözdünüz... Ama karanlık mağaradaki tek gözlülerin mağara gözü sayacı sizi durduracak!"
        }
      ]
    },
    7: {
      title: "7. Kapı: Monoculus Soyu (Canavar Gözleri)",
      chapter: "Karanlık Mağara",
      character: "Monoculus",
      narrative: "Aleks ve arkadaşlarının karşısına Monoculus'un arkadaşları çıkar. Bazıları tek gözlü, bazıları ise 3 gözlüdür. Monoculus fısıldar: 'Mağarada toplam 9 canavar arkadaşım var. Hepimizin toplam göz sayısı 17'dir. Acaba aramızda kaç tane 3 gözlü canavar vardır?'",
      worksheet: {
        title: "Monoculus Soyu (Göz Sayıları)",
        topic: "Dört İşlem Problemleri ve Modelleme",
        outcome: "İki farklı bilinmeyen barındıran problemleri varsayımda bulunma veya kutu modelleme yöntemiyle çözer.",
        q1: "Bir çiftlikteki tavuk ve tavşanların toplam sayısı 15'tir. Bu hayvanların toplam ayak sayısı 44 olduğuna göre çiftlikte kaç tavşan vardır? (Hayvanları kutu modeli ile çizerek çözünüz.)",
        q2: "20 soruluk bir sınavda her doğru cevap için 5 puan verilmekte, her yanlış cevap için ise 2 puan silinmektedir. Tüm soruları yanıtlayan bir öğrenci 58 puan aldığına göre kaç soruyu doğru yanıtlamıştır?"
      },
      tasks: [
        {
          question: "1. Görev: Toplamda 9 canavarın bulunduğu ve toplam göz sayısının 17 olduğu bu grupta, 3 gözlü canavarların sayısı kaçtır?",
          hint: "İpucu: Varsayımda bulun! Eğer canavarların hepsi 1 gözlü olsaydı toplam 9 * 1 = 9 göz olurdu. Kalan 17 - 9 = 8 gözü canavarlara ikişer ikişer dağıtarak (çünkü 3 gözlünün 1 gözlüye göre 2 fazla gözü vardır) kaç canavarın 3 gözlü olduğunu bul.",
          solution: "Çözüm: Hepsi 1 gözlü olsaydı: 9 * 1 = 9 göz olurdu. Gerçek göz sayısı 17 olduğuna göre fark: 17 - 9 = 8 gözdür. Her 3 gözlü canavarın 1 gözlüden 2 fazla gözü vardır. 8 / 2 = 4 canavar 3 gözlüdür. Kalan 9 - 4 = 5 canavar ise 1 gözlüdür. Kontrol edelim: (4 * 3) + (5 * 1) = 12 + 5 = 17 göz. Doğru!",
          speechCorrect: "Harika! Benim soyumun göz bilmecesini çözdün. 3 gözlü kardeşlerim sana yolu gösterecek. Ama durun, mağarada ikinci bir canavar grubu daha var!"
        },
        {
          question: "2. Görev: Mağaranın diğer köşesindeki ikinci canavar grubunda toplam 8 canavar vardır. Hepsi ya tek gözlü ya da 3 gözlüdür. Toplam göz sayısı 14 olduğuna göre, 3 gözlü canavarların sayısı kaçtır?",
          hint: "İpucu: Varsayım yap! Tamamı tek gözlü olsaydı 8 * 1 = 8 göz olurdu. Kalan 14 - 8 = 6 gözü ikişer ikişer dağıtarak kaç tane 3 gözlü olduğunu bul.",
          solution: "Çözüm: Hepsi 1 gözlü olsaydı: 8 * 1 = 8 göz olurdu. Gerçek göz 14 ise fark: 14 - 8 = 6 gözdür. Her 3 gözlü için +2 göz eklendiğinden: 6 / 2 = 3 canavar 3 gözlüdür.",
          speechCorrect: "Lanet olsun! Canavar mağarasından da geçtiniz... Ama Kraliçe Jayden'ı esir tuttuğum son kapıdaki sandık yalan/doğru mantık problemini asla çözemeyeceksiniz!"
        }
      ]
    },
    8: {
      title: "8. Kapı: Kraliçe'nin Zindanı (Mantık Matrisi)",
      chapter: "Büyük Salon",
      character: "Kraliçe Jayden",
      narrative: "Sonunda Kraliçe Jayden'ın hücresine ulaşırlar. Hücrenin önünde üç sandık durmaktadır. Kraliçe içeriden seslenir: 'Sevgili çocuklar, beni kurtaracak anahtarlar bu sandıklarda gizli. Sandıkların üstündeki ifadeleri mantıksal olarak analiz edip doğru anahtarları bulun!'",
      worksheet: {
        title: "Kraliçe'nin Zindanı (Mantık Matrisi)",
        topic: "Mantıksal Akıl Yürütme ve Çelişki",
        outcome: "Doğruluk/yalan durumlarına göre varsayımlarda bulunarak mantık matrisi oluşturur ve çelişkileri bulup problemi çözer.",
        q1: "Mert, Can ve Ali farklı renkte (Kırmızı, Mavi, Yeşil) kazaklar giymiştir:\n- Mert: 'Kırmızı kazağı ben giydim.'\n- Can: 'Ben mavi giymedim.'\n- Ali: 'Mert kırmızı giymedi.'\nEğer sadece bir kişi doğru söylüyorsa kim hangi rengi giymiştir? (Mantık tablosu oluşturup çelişkileri yazınız.)",
        q2: "A, B ve C kutularında sırasıyla altın, gümüş ve bronz anahtarlar saklıdır:\n- A Kutusu: 'Gümüş anahtar buradadır.'\n- B Kutusu: 'Bronz anahtar burada değildir.'\n- C Kutusu: 'Altın anahtar A kutusundadır.'\nEğer sadece tek bir ifade YALAN ise altın anahtar gerçekte hangi kutudadır?"
      },
      tasks: [
        {
          question: "1. Görev: Kırmızı, Mavi ve Yeşil sandıklar üzerindeki ifadeler:\nKırmızı: 'Anahtar bu sandıktadır.'\nMavi: 'Anahtar bu sandıkta değildir.'\nYeşil: 'Anahtar Kırmızı sandıkta değildir.'\nRecher sadece TEK BİR ifadenin doğru (diğer ikisinin yalan) olduğunu söylüyor. Anahtar hangi sandıktadır?",
          hint: "İpucu: Varsayımda bulunma stratejisini kullan! Sırasıyla anahtarın Kırmızıda, Mavide veya Yeşilde olduğunu varsay. Her durum için ifadelerin doğruluk değerlerini matris tablosundan incele.",
          solution: "Çözüm: Anahtar Mavi sandıkta olsun. Kırmızı ifadesi ('Anahtar kırmızıda') -> YALAN. Mavi ifadesi ('Anahtar mavide değil') -> YALAN. Yeşil ifadesi ('Anahtar kırmızıda değil') -> DOĞRU olur. Böylece sadece tek bir doğru ifade şartı (Yeşil) sağlanmış olur. Anahtar Mavi sandıktadır.",
          speechCorrect: "Sevgili çocuklar, ilk sandık varsayımını başarıyla çürüttünüz! Şimdi Recher'in son bir kez değiştirdiği ikinci sandık bilmecesine geçelim!"
        },
        {
          question: "2. Görev: Kraliçe'nin son bilmecesi:\nKırmızı: 'Anahtar Yeşil sandıktadır.'\nMavi: 'Anahtar bu sandıktadır (Mavi).'\nYeşil: 'Anahtar Mavi sandıkta değildir.'\nRecher bu kez ifadelerden sadece BİRİNİN YALAN (diğer ikisinin doğru) olduğunu söylüyor. Anahtar hangi sandıktadır?",
          hint: "İpucu: İpuçlarını tersine düşün! Sadece tek bir Yalan ifade barındıran (2 Doğru veren) satırı bulmak için sandıkları test et.",
          solution: "Çözüm: Anahtar Yeşil sandıkta olsun. Kırmızı ifadesi ('Anahtar yeşilde') -> DOĞRU. Mavi ifadesi ('Anahtar mavide') -> YALAN. Yeşil ifadesi ('Anahtar mavide değil') -> DOĞRU olur. Böylece sadece tek bir yalan (Mavi ifadesi) içeren durum sağlanmış olur. Anahtar Yeşil sandıktadır.",
          speechCorrect: "Anahtar döndü ve son kilit açıldı! Kapı nihayet ardına kadar açılıyor. Gelin ve beni bu zindandan kurtarın!"
        }
      ]
    }
  },
  en: {
    1: {
      title: "Gate 1: Magic Pencil (Reverse Operation)",
      chapter: "Entering the Dungeon",
      character: "King Recher",
      narrative: "Alex and his friends reach the first heavy iron gate of the dungeon. King Recher's mocking voice echoes above the gate: 'You trusted your magic pencil too much, but it is no more! If you want to rescue the Queen, you must use your mind. You must solve the mystery of both magic number machines to unlock the first dungeon gate!'",
      worksheet: {
        title: "Magic Pencil (Reverse Operation)",
        topic: "Operations with Natural Numbers (Reverse Operation)",
        outcome: "Finds the unknown starting value using the working backward strategy.",
        q1: "A magic number machine multiplies a number by 4 and adds 12 to the result to get 60. What number was initially put into this machine?",
        q2: "When 7 is subtracted from half of a number, 8 is obtained. What is the initial value of this number?"
      },
      tasks: [
        {
          question: "Task 1: A magic number machine multiplies a number by 3 and adds 5 to the result to get 26. What was the starting number?",
          hint: "Hint: Use the working backward strategy! Start from the result and work backward, reversing each operation. The reverse of addition is subtraction, and the reverse of multiplication is division.",
          solution: "Solution: We work backward from the result 26. Since 5 was added last, we first subtract 5: 26 - 5 = 21. Then, since it was multiplied by 3, we divide 21 by 3: 21 / 3 = 7. The starting number is 7!",
          speechCorrect: "Great! We solved the first number machine rule in our minds, copying the pencil's power. But wait, Recher has locked a second machine!"
        },
        {
          question: "Task 2: The second magic machine divides a number by 2 and adds 8 to the result to get 15. What was the starting number?",
          hint: "Hint: Work backward! Subtract 8 from 15, then apply the reverse of division which is multiplication (multiply the result by 2).",
          solution: "Solution: We work backward from the result 15. If the result after adding 8 is 15, then the value before addition is 15 - 8 = 7. The number that gives 7 when divided by 2 is 7 * 2 = 14.",
          speechCorrect: "No! It can't be! You unlocked the first dungeon gate... But do not celebrate yet, you will never pass the lava river and the magical bridge patterns ahead!"
        }
      ]
    },
    2: {
      title: "Gate 2: Lava Bridge (Number Patterns)",
      chapter: "Lava River",
      character: "Vanessa",
      narrative: "A dangerous river of flowing lava appears before them. Vanessa points out the number patterns on the bridge stones: 'We must find the hidden rule of the numbers on the bridge stones. If we solve the pattern in both bridge sections, we can cross safely!'",
      worksheet: {
        title: "Lugubria Bridge (Number Patterns)",
        topic: "Number Patterns and Relationships",
        outcome: "Discovers relations in increasing or decreasing number patterns according to a specific rule and extends the pattern.",
        q1: "Find the number that should replace the question mark in the number pattern 5, 11, 23, 47, [?], explaining its rule of increase.",
        q2: "Determine the rule in the number pattern 1, 4, 16, 64, [?] and find the number that should replace the question mark."
      },
      tasks: [
        {
          question: "Task 1: What number should fill the blank in the pattern: 3, 7, 15, 31, 63, [?]?",
          hint: "Hint: Look at the differences between the numbers! The differences are 4, 8, 16, 32. Find the rule of these increments and add it to the last number.",
          solution: "Solution: The increments between numbers are: +4, +8, +16, +32. Each increment is twice the previous one. The next increment should be 32 * 2 = 64. So 63 + 64 = 127.",
          speechCorrect: "I found it! The differences between the columns double each time! We bridged the first half, now let's solve the second pattern!"
        },
        {
          question: "Task 2: The pattern on the other half of the bridge is: 2, 6, 18, 54, [?]. Which number should fill the blank?",
          hint: "Hint: Check the multiples of the numbers! By how many times does each number increase compared to the previous one? Apply this factor to the last number.",
          solution: "Solution: Analyzing the pattern, each number is 3 times the previous one: 2 * 3 = 6, 6 * 3 = 18, 18 * 3 = 54. Therefore, the next number must be: 54 * 3 = 162.",
          speechCorrect: "How?! You completed the lava bridge and crossed... But the mysterious fraction guardians of the Emerald Tower will halt you at the top!"
        }
      ]
    },
    3: {
      title: "Gate 3: Emerald Tower (Fractions)",
      chapter: "Emerald Labyrinth",
      character: "Sam",
      narrative: "Riddles written in green flames appear on the door of the Emerald Tower. Sam takes out his notebook from his pocket: 'If we solve the fraction problems about the magic emeralds Vanessa and I shared, the door will open. We must draw diagrams carefully!'",
      worksheet: {
        title: "Emerald Tower (Fraction Problems)",
        topic: "Operations with Fractions and Diagram Drawing",
        outcome: "Calculates a fraction of a whole and applies a diagram-drawing strategy to find the whole from remaining parts.",
        q1: "What is the sum of 2/5 and 1/3 of 30? (Solve by dividing the whole into model boxes and coloring.)",
        q2: "Hakan spends 1/4 of his money. He buys a book with 1/3 of the remaining money. If he has 30 TL left, how much did he have initially? (Draw a box model diagram.)"
      },
      tasks: [
        {
          question: "Task 1: Vanessa takes 1/3 of the magic emeralds in a bag. Sam takes 1/4 of the remaining emeralds. If there are 6 emeralds left, how many emeralds were there initially?",
          hint: "Hint: Use the diagram-drawing strategy! Assume the whole is divided into 12 equal boxes. Shade 1/3 (4 boxes) for Vanessa. Then shade 1/4 of the remaining 8 boxes (2 boxes) for Sam. Relate the remaining boxes to the number of left emeralds.",
          solution: "Solution: Let's represent the initial emeralds as 12 boxes. Vanessa takes 1/3 (4 boxes), leaving 8 boxes. Sam takes 1/4 of the remaining 8 boxes (2 boxes), leaving 6 boxes. If the remaining 6 boxes equal 6 emeralds, then 1 box = 1 emerald. Since there are 12 boxes initially, there were 12 emeralds in total.",
          speechCorrect: "Great! Thanks to the box model we drew, we accounted for Vanessa's and my shares and calculated the whole. But the flames show a second fraction puzzle!"
        },
        {
          question: "Task 2: Vanessa takes 1/2 of the emeralds in the bag. Sam takes 1/3 of the remaining emeralds. If 4 emeralds are left, how many emeralds were there initially?",
          hint: "Hint: Draw a 12-box model again! Give half (6 boxes) to Vanessa. Give 1/3 of the remaining 6 boxes (2 boxes) to Sam. Equate the remaining boxes to 4 emeralds.",
          solution: "Solution: Let the whole be 12 boxes. Half of it (6 boxes) is Vanessa's, leaving 6 boxes. 1/3 of the remaining (6 / 3 = 2 boxes) goes to Sam, leaving 4 boxes. If the remaining 4 boxes equal 4 emeralds, then 1 box = 1 emerald. Total 12 boxes = 12 emeralds.",
          speechCorrect: "You passed the tower too?! Unbelievable! But you cannot solve the age-multiple scale balance puzzle of my lead guard at the barracks!"
        }
      ]
    },
    4: {
      title: "Gate 4: Guard Passage (Age/Multiple Model)",
      chapter: "Guard Barracks",
      character: "Alex",
      narrative: "Two guards block the path in front of the Queen's tower. They look at Alex and roar: 'To pass here, you must solve the mystery of our ages! Correctly answer the riddles of two different guard pairs!'",
      worksheet: {
        title: "Guard Passage (Age/Multiple Model)",
        topic: "Multiple and Age Problems (Box Modeling)",
        outcome: "Visualizes and solves multiple relationships between unknown values using a box or scale model.",
        q1: "Elif's weight is twice Selin's weight. If their total weight is 72 kg, how many kg is Elif? (Draw a box model.)",
        q2: "A father's age is 4 more than 3 times his son's age. If the sum of their ages is 44, how old is the father? (Draw a diagram and solve.)"
      },
      tasks: [
        {
          question: "Task 1: The lead guard's age is exactly 3 times the young guard's age. If the sum of their ages is 48, how old is the lead guard?",
          hint: "Hint: Model the young guard's age as 1 share (1 box) and the lead guard's age as 3 shares (3 boxes). Total 4 shares = 48. Find 1 share and multiply by 3 to calculate the lead guard's age.",
          solution: "Solution: Young guard = 1 share, Lead guard = 3 shares. Total = 4 shares. Since 4 shares = 48, 1 share = 48 / 4 = 12 (young guard's age). Since the lead guard is 3 shares: 3 * 12 = 36.",
          speechCorrect: "By balancing the scale, we found the young guard's age and calculated the lead guard's age! One guard backed away, but the other still blocks the path!"
        },
        {
          question: "Task 2: Riddle of the other two guards: The lead guard's age is twice the young guard's age. If the sum of their ages is 45, how old is the lead guard?",
          hint: "Hint: Young guard is 1 share (1 box), lead guard is 2 shares (2 boxes). Total 3 shares = 45. Find the value of 1 share and calculate the lead guard's age (2 shares).",
          solution: "Solution: Young guard = 1 share, Lead guard = 2 shares. Total = 3 shares. Since 3 shares = 45, 1 share = 45 / 3 = 15 (young guard's age). Lead guard's age is 2 shares: 2 * 15 = 30.",
          speechCorrect: "Did the barracks gate open too?! Curse you! But you will never solve the chest truth/lie logic lock at the Queen's cell. Only one of those chests is correct!"
        }
      ]
    },
    5: {
      title: "Gate 5: Truck Encounter (Speed & Time)",
      chapter: "Canyon Passage",
      character: "Sam",
      narrative: "Alex and his friends spot King Recher's cargo trucks moving towards each other from both ends of the canyon. The inscription on the gate reads: 'Two trucks start moving at the same time towards each other from castles A and B at opposite ends of the canyon. Their speeds are 45 km/h and 54 km/h. If they meet after 20 minutes, what is the total distance between the two castles in kilometers?'",
      worksheet: {
        title: "Truck Encounter (Speed & Time)",
        topic: "Speed, Time, and Distance Problems",
        outcome: "Calculates the meeting time and total distance for two objects moving towards each other simultaneously.",
        q1: "Two cars, with speeds of 60 km/h and 80 km/h, start moving towards each other from two cities 280 km apart. After how many hours will they meet? (Write down the solution steps.)",
        q2: "Two trucks start moving towards each other from cities A and B at speeds of 50 km/h and 40 km/h, respectively. If they meet 3 hours after setting off, what is the distance between cities A and B in kilometers?"
      },
      tasks: [
        {
          question: "Task 1: The trucks are traveling towards each other at speeds of 45 km/h and 54 km/h. If they meet 20 minutes later, what is the distance between castles A and B in km? (Add the speeds and multiply by the time in hours: 20 minutes = 1/3 hour.)",
          hint: "Hint: Since the trucks are moving towards each other, add their speeds: 45 + 54 = 99 km/h. The meeting time is 20 minutes, which is 1/3 of an hour (20/60 = 1/3 h). Multiply the combined speed by this time.",
          solution: "Solution: Combined speed = 45 + 54 = 99 km/h. Time = 20 minutes = 20/60 = 1/3 hour. Using the formula Distance = Speed * Time: Distance = 99 * (1/3) = 33 km.",
          speechCorrect: "Great! By combining the speeds and multiplying by time, we found the width of the canyon and simulated the meeting. Now we can cross the canyon bridge!"
        },
        {
          question: "Task 2: The speeds of two trucks on the other side of the canyon are 50 km/h and 60 km/h. If their meeting time is also 30 minutes (1/2 hour), what is the total distance between them in kilometers?",
          hint: "Hint: Add the speeds (50 + 60 = 110 km/h) and multiply by the time of 1/2 hour.",
          solution: "Solution: Combined speed = 50 + 60 = 110 km/h. Time = 30 minutes = 1/2 hour. Distance = 110 * 1/2 = 55 km.",
          speechCorrect: "No! You navigated the trucks in the canyon without a crash... But you will never crack the height pattern rule of the glowing silver towers in front of you!"
        }
      ]
    },
    6: {
      title: "Gate 6: Silver Towers (Height Patterns)",
      chapter: "Royal Garden",
      character: "Vanessa",
      narrative: "Silver towers stand lined up side by side in the garden. Vanessa reads the inscription under the towers: 'The heights of the towers are ordered according to a specific rule. The first tower is 3 meters, the second is 7 meters, the third is 11 meters. Open the gate by finding the height of the 5th silver tower in this sequence!'",
      worksheet: {
        title: "Silver Towers (Height Patterns)",
        topic: "Number and Geometric Patterns",
        outcome: "Finds the relation between terms in an arithmetically increasing pattern and calculates the missing term.",
        q1: "A number pattern starts at 8 and increases by 6 at each step. What is the number at the 6th step? (Find by writing down the pattern step by step.)",
        q2: "The height of a plant increases as 5 cm, 12 cm, 19 cm, 26 cm... What will its height be in centimeters at the end of the 7th week?"
      },
      tasks: [
        {
          question: "Task 1: In the silver towers pattern, with the first tower 3 m, second 7 m, and third 11 m, what is the height of the 5th tower in meters?",
          hint: "Hint: Find the rule of the pattern! By how much do the numbers increase? 3, 7, 11... You'll see 4 is added at each step. Calculate the heights of the 4th and 5th towers based on this rule.",
          solution: "Solution: Tower heights pattern: 1st tower = 3m, 2nd tower = 7m (+4), 3rd tower = 11m (+4). Rule: Each tower is 4 meters taller than the previous one. Therefore: 4th tower = 11 + 4 = 15m, 5th tower = 15 + 4 = 19m.",
          speechCorrect: "We solved the height pattern of the towers! I got the key to the magic passage from the top of the 5th tower. Now let's move to the second tower pattern!"
        },
        {
          question: "Task 2: The pattern in the second row of towers is: 5, 12, 19, 26, [?]. What is the 5th term in this pattern?",
          hint: "Hint: Analyze the differences! What is the increase from 5 to 12? It is 7. The pattern increases by 7s. Add 7 to the last number.",
          solution: "Solution: The increase is: 12 - 5 = 7. Similarly, 19 - 12 = 7, 26 - 19 = 7. Rule: Each number is 7 more than the previous one. Thus, the 5th term is: 26 + 7 = 33.",
          speechCorrect: "What?! You solved the code of the silver towers too... But the eye counter of the one-eyed creatures in the dark cave will stop you!"
        }
      ]
    },
    7: {
      title: "Gate 7: Monoculus Clan (Monster Eyes)",
      chapter: "Dark Cave",
      character: "Monoculus",
      narrative: "Alex and his friends encounter the companions of Monoculus. Some have 1 eye, while others have 3 eyes. Monoculus whispers: 'I have a total of 9 monster friends in this cave. Our total eye count is 17. How many 3-eyed monsters are there among us?'",
      worksheet: {
        title: "Monoculus Clan (Monster Eyes)",
        topic: "Four Operations and Modeling",
        outcome: "Solves problems containing two different unknowns using assumption or box-modeling methods.",
        q1: "The total number of chickens and rabbits on a farm is 15. If their total number of feet is 44, how many rabbits are there? (Solve by drawing a box model.)",
        q2: "In a 20-question test, 5 points are awarded for each correct answer, and 2 points are deducted for each incorrect answer. If a student who answered all questions scored 58 points, how many questions did they answer correctly?"
      },
      tasks: [
        {
          question: "Task 1: In this group of 9 monsters with a total eye count of 17, how many monsters have 3 eyes?",
          hint: "Hint: Make an assumption! If all monsters had only 1 eye, the total would be 9 * 1 = 9 eyes. Distribute the remaining 17 - 9 = 8 eyes in pairs of two (since a 3-eyed monster has 2 more eyes than a 1-eyed monster) to find how many monsters have 3 eyes.",
          solution: "Solution: Assume all are 1-eyed: 9 * 1 = 9 eyes. Since the actual count is 17, the difference is: 17 - 9 = 8 eyes. Each 3-eyed monster has 2 extra eyes compared to a 1-eyed monster. 8 / 2 = 4 monsters have 3 eyes. The remaining 9 - 4 = 5 monsters have 1 eye. Check: (4 * 3) + (5 * 1) = 12 + 5 = 17 eyes. Correct!",
          speechCorrect: "Awesome! You solved my clan's eye puzzle. My 3-eyed brothers will show you the path. But wait, there is a second monster group in the cave!"
        },
        {
          question: "Task 2: In the second monster group in another corner of the cave, there are 8 monsters in total. They all have either 1 eye or 3 eyes. If the total eye count is 14, how many monsters have 3 eyes?",
          hint: "Hint: Assume! If they were all 1-eyed, there would be 8 * 1 = 8 eyes. Distribute the remaining 14 - 8 = 6 eyes in pairs to find the number of 3-eyed monsters.",
          solution: "Solution: If all were 1-eyed: 8 * 1 = 8 eyes. Since actual count is 14, the difference is: 14 - 8 = 6 eyes. Since +2 eyes are added for each 3-eyed monster: 6 / 2 = 3 monsters have 3 eyes.",
          speechCorrect: "Dammit! You passed the monster cave too... But you will never solve the chest lie/truth logic puzzle at the final cell where I hold Queen Jayden!"
        }
      ]
    },
    8: {
      title: "Gate 8: Queen's Dungeon (Logic Matrix)",
      chapter: "Great Hall",
      character: "Queen Jayden",
      narrative: "Finally they reach the cell of Queen Jayden. Three chests stand in front of the cell. The Queen calls from inside: 'Dear children, the keys to rescue me are hidden in these chests. Logically analyze the statements on the chests and find the correct keys!'",
      worksheet: {
        title: "Queen's Dungeon (Logic Matrix)",
        topic: "Logical Reasoning and Contradiction",
        outcome: "Constructs a logic matrix based on truth/lie assumptions, identifies contradictions, and solves the problem.",
        q1: "Mert, Can, and Ali wore different colored sweaters (Red, Blue, Green):\n- Mert: 'I wore the red sweater.'\n- Can: 'I did not wear blue.'\n- Ali: 'Mert did not wear red.'\nIf only one person is telling the truth, who wore which color? (Draw a logic table.)",
        q2: "Gold, silver, and bronze keys are hidden in boxes A, B, and C respectively:\n- Box A: 'The silver key is here.'\n- Box B: 'The bronze key is not here.'\n- Box C: 'The gold key is in box A.'\nIf only one statement is a LIE, which box actually contains the gold key?"
      },
      tasks: [
        {
          question: "Task 1: The inscriptions on the Red, Blue, and Green chests are:\nRed: 'The key is in this chest.'\nBlue: 'The key is not in this chest.'\nGreen: 'The key is not in the Red chest.'\nRecher says that ONLY ONE statement is true (the other two are lies). Which chest is the key in?",
          hint: "Hint: Use the assumption strategy! Assume the key is in the Red, Blue, or Green chest one by one. Check the truth values of the statements for each case using the matrix table.",
          solution: "Solution: Assume the key is in the Blue chest. Red statement ('Key in red') -> LIE. Blue statement ('Key not in blue') -> LIE. Green statement ('Key not in red') -> TRUE. This satisfies the condition of having only one true statement (the Green chest's inscription). The key is in the Blue chest.",
          speechCorrect: "Dear children, you successfully debunked the first chest assumption! Now let's solve the second chest puzzle that Recher modified one last time!"
        },
        {
          question: "Task 2: The Queen's final puzzle:\nRed: 'The key is in the Green chest.'\nBlue: 'The key is in this chest (Blue).'\nGreen: 'The key is not in the Blue chest.'\nRecher says that this time ONLY ONE statement is a LIE (the other two are true). Which chest is the key in?",
          hint: "Hint: Think in reverse! Test the chests to find the row that yields only one lie (two truths).",
          solution: "Solution: Assume the key is in the Green chest. Red statement ('Key in green') -> TRUE. Blue statement ('Key in blue') -> LIE. Green statement ('Key not in blue') -> TRUE. This satisfies the condition of having only one lie (the Blue chest's inscription is false, while the others are true). The key is in the Green chest.",
          speechCorrect: "The key turned and the final lock opened! The door is finally wide open. Come and rescue me from this dungeon!"
        }
      ]
    }
  },
  ru: {
    1: {
      title: "Ворота 1: Волшебный Карандаш (Обратная Операция)",
      chapter: "Вход в Подземелье",
      character: "Король Решер",
      narrative: "Алекс и его друзья подходят к первой тяжелой железной двери подземелья. Над воротами раздается насмешливый голос Короля Решера: «Вы слишком верили в свой волшебный карандаш, но его больше нет! Если хотите спасти королеву, вам придется пораскинуть мозгами. Вы должны разгадать тайну обеих числовых машин, чтобы открыть первые ворота подземелья!»",
      worksheet: {
        title: "Волшебный Карандаш (Обратная Операция)",
        topic: "Операции с Натуральными Числами (Обратная Операция)",
        outcome: "Находит неизвестное начальное значение, используя стратегию обратного хода.",
        q1: "Волшебная числовая машина умножает введенное число на 4, затем прибавляет к результату 12 и получает 60. Какое число изначально ввели в эту машину?",
        q2: "Если из половины некоторого числа вычесть 7, получится 8. Каково начальное значение этого числа?"
      },
      tasks: [
        {
          question: "Задача 1: Волшебная числовая машина умножает число на 3 и прибавляет к результату 5, получая 26. Каково начальное число?",
          hint: "Подсказка: Используйте стратегию обратного хода! Начните с результата и идите назад, меняя каждую операцию на противоположную. Противоположность сложения — вычитание, а умножения — деление.",
          solution: "Решение: Двигаемся в обратном направлении от результата 26. Так как в конце прибавили 5, сначала вычитаем 5: 26 - 5 = 21. Затем, так как число умножили на 3, делим 21 на 3: 21 / 3 = 7. Начальное число — 7!",
          speechCorrect: "Отлично! Мы разгадали правило первой числовой машины в уме, воссоздав силу карандаша. Но подождите, Решер заблокировал вторую машину!"
        },
        {
          question: "Задача 2: Вторая волшебная машина делит число на 2 и прибавляет к результату 8, получая 15. Каково начальное число?",
          hint: "Подсказка: Работайте в обратном направлении! Вычтите 8 из 15, затем выполните операцию, противоположную делению (умножьте результат на 2).",
          solution: "Решение: Двигаемся назад от результата 15. Если после прибавления 8 получилось 15, то до сложения было 15 - 8 = 7. Число, которое при делении на 2 дает 7, это 7 * 2 = 14.",
          speechCorrect: "Нет! Этого не может быть! Вы открыли первые ворота... Но не радуйтесь раньше времени, вам никогда не пройти лавовую реку и узоры моста впереди!"
        }
      ]
    },
    2: {
      title: "Ворота 2: Мост Лугубрии (Числовые Последовательности)",
      chapter: "Лавовая Река",
      character: "Ванесса",
      narrative: "Перед ними появляется опасная река с текущей лавой. Ванесса указывает на числовые узоры на камнях моста: «Мы должны найти скрытое правило чисел на камнях моста. Если мы решим закономерность на обоих участках моста, мы сможем безопасно переправиться!»",
      worksheet: {
        title: "Мост Лугубрии (Числовые Последовательности)",
        topic: "Числовые Последовательности и Связи",
        outcome: "Обнаруживает связи в возрастающих или убывающих числовых последовательностях в соответствии с определенным правилом и продолжает последовательность.",
        q1: "Найдите число, которое должно заменить знак вопроса в числовой последовательности 5, 11, 23, 47, [?], объяснив правило возрастания.",
        q2: "Определите правило в числовой последовательности 1, 4, 16, 64, [?] и найдите число, которое должно заменить знак вопроса."
      },
      tasks: [
        {
          question: "Задача 1: Какое число должно стоять вместо знака вопроса в последовательности: 3, 7, 15, 31, 63, [?]?",
          hint: "Подсказка: Изучите разницу между числами! Разности составляют 4, 8, 16, 32. Найдите правило этих приращений и прибавьте его к последнему числу.",
          solution: "Решение: Разница между числами составляет: +4, +8, +16, +32. Каждое приращение вдвое больше предыдущего. Следующее приращение должно быть 32 * 2 = 64. Значит, 63 + 64 = 127.",
          speechCorrect: "Я нашла! Разница между столбиками удваивается с каждым шагом! Первая половина моста готова, теперь решим вторую закономерность!"
        },
        {
          question: "Задача 2: Узор на другой половине моста таков: 2, 6, 18, 54, [?]. Какое число должно заменить знак вопроса?",
          hint: "Подсказка: Проверьте множители чисел! Во сколько раз увеличивается каждое число по сравнению с предыдущим? Примените этот коэффициент к последнему числу.",
          solution: "Решение: При анализе последовательности видно, что каждое число в 3 раза больше предыдущего: 2 * 3 = 6, 6 * 3 = 18, 18 * 3 = 54. Следовательно, следующее число должно быть: 54 * 3 = 162.",
          speechCorrect: "Как?! Вы завершили лавовый мост и перешли его... Но таинственные хранители долей Изумрудной Башни остановят вас наверху!"
        }
      ]
    },
    3: {
      title: "Ворота 3: Изумрудная Башня (Дроби)",
      chapter: "Изумрудный Лабиринт",
      character: "Сэм",
      narrative: "На дверях Изумрудной Башни появляются загадки, написанные зеленым пламенем. Сэм достает из кармана блокнот: «Если мы решим задачи на дроби об изумрудах, которые мы разделили с Ванессой, дверь откроется. Мы должны внимательно начертить схему!»",
      worksheet: {
        title: "Изумрудная Башня (Задачи на Дроби)",
        topic: "Действия с Дробями и Моделирование",
        outcome: "Вычисляет часть от целого и применяет стратегию чертежа для нахождения целого по его оставшейся части.",
        q1: "Чему равна сумма 2/5 and 1/3 от 30? (Решите, разделив целое на смоделированные ячейки и закрасив их.)",
        q2: "Хакан тратит 1/4 своих денег. На 1/3 оставшихся денег он покупает книгу. Если у него осталось 30 лир, сколько денег у него было изначально? (Нарисуйте коробчатую модель.)"
      },
      tasks: [
        {
          question: "Задача 1: Ванесса берет 1/3 волшебных изумрудов из мешка. Сэм берет 1/4 оставшихся изумрудов. Если осталось 6 изумрудов, сколько их было изначально?",
          hint: "Подсказка: Используйте стратегию чертежа! Представьте целое как 12 одинаковых ячеек. Закрасьте 1/3 (4 ячейки) для Ванессы. Затем закрасьте 1/4 оставшихся 8 ячеек (2 ячейки) для Сэма. Соотнесите оставшиеся ячейки с числом изумрудов.",
          solution: "Решение: Представим начальное количество изумрудов в виде 12 ячеек. Ванесса берет 1/3 (4 ячейки), оставляя 8 ячеек. Сэм берет 1/4 оставшихся 8 ячеек (2 ячейки), оставляя 6 ячеек. Если оставшиеся 6 ячеек равны 6 изумрудам, то 1 ячейка = 1 изумруду. Так как изначально было 12 ячеек, всего было 12 изумрудов.",
          speechCorrect: "Здорово! Благодаря коробчатой модели мы вычли доли Ванессы и мои, воссоздав целое. Но пламя показывает вторую задачу на дроби!"
        },
        {
          question: "Задача 2: Ванесса берет 1/2 изумрудов из мешка. Сэм берет 1/3 оставшихся изумрудов. Если осталось 4 изумруда, сколько их было изначально?",
          hint: "Подсказка: Снова нарисуйте модель из 12 ячеек! Отдайте половину (6 ячеек) Ванессе. Отдайте 1/3 оставшихся 6 ячеек (2 ячейки) Сэму. Приравняйте оставшиеся ячейки к 4 изумрудам.",
          solution: "Решение: Пусть целое составляет 12 ячеек. Половина (6 ячеек) принадлежит Ванессе, остается 6 ячеек. 1/3 от оставшихся (6 / 3 = 2 ячейки) достается Сэму, остается 4 ячейки. Если оставшиеся 4 ячейки равны 4 изумрудам, то 1 ячейка = 1 изумруду. Итого 12 ячеек = 12 изумрудов.",
          speechCorrect: "Вы и башню прошли?! Невероятно! Но вам никогда не решить задачу баланса весов возраста стражников у казарм!"
        }
      ]
    },
    4: {
      title: "Ворота 4: Пост Охраны (Возраст и Доли)",
      chapter: "Казармы Охраны",
      character: "Алекс",
      narrative: "Два стражника преграждают путь перед башней Королевы. Они смотрят на Алекса и ревут: «Чтобы пройти здесь, ты должен разгадать тайну нашего возраста! Правильно ответь на загадки двух разных пар стражников!»",
      worksheet: {
        title: "Пост Охраны (Возраст и Доли)",
        topic: "Задачи на Возраст и Кратность (Моделирование)",
        outcome: "Визуализирует и решает соотношения кратности между неизвестными величинами с помощью коробчатой модели или модели весов.",
        q1: "Вес Элиф в 2 раза больше веса Селин. Если их общий вес составляет 72 кг, сколько весит Элиф? (Нарисуйте коробчатую модель.)",
        q2: "Возраст отца на 4 года больше, чем утроенный возраст его сына. Если сумма их возраста равна 44 годам, сколько лет отцу? (Нарисуйте схему.)"
      },
      tasks: [
        {
          question: "Задача 1: Возраст старшего стражника ровно в 3 раза больше возраста молодого. Если сумма их возраста равна 48 годам, сколько лет старшему стражнику?",
          hint: "Подсказка: Представьте возраст молодого стражника как 1 долю (1 ячейка), а старшего — как 3 доли (3 ячейки). Итого 4 доли = 48. Найдите 1 долю и умножьте на 3, чтобы получить возраст старшего стражника.",
          solution: "Решение: Молодой стражник = 1 доля, Старший = 3 доли. Всего = 4 доли. Так как 4 доли = 48, то 1 доля = 48 / 4 = 12 (возраст молодого стражника). Возраст старшего стражника составляет 3 доли: 3 * 12 = 36.",
          speechCorrect: "Сбалансировав весы, мы нашли возраст молодого стражника и вычислили возраст старшего! Один стражник отошел, но второй все еще преграждает путь!"
        },
        {
          question: "Задача 2: Загадка двух других стражников: Возраст старшего стражника в 2 раза больше возраста молодого. Если сумма их возраста равна 45 годам, сколько лет старшему стражнику?",
          hint: "Подсказка: Молодой стражник — 1 доля (1 ячейка), старший — 2 доли (2 ячейки). Всего 3 доли = 45. Найдите значение 1 доли и вычислите возраст старшего стражника (2 доли).",
          solution: "Решение: Молодой стражник = 1 доля, Старший = 2 доли. Всего = 3 доли. Так как 3 доли = 45, то 1 доля = 45 / 3 = 15 (возраст молодого стражника). Возраст старшего стражника — 2 доли: 2 * 15 = 30.",
          speechCorrect: "Ворота казармы тоже открылись?! Проклятье! Но вам никогда не открыть логический замок сундуков у Королевы. Лишь на одном написана правда!"
        }
      ]
    },
    5: {
      title: "Ворота 5: Встреча Грузовиков (Скорость и Время)",
      chapter: "Ущелье Каньона",
      character: "Сэм",
      narrative: "Алекс и его друзья замечают грузовики Решера, движущиеся навстречу друг другу с противоположных концов каньона. Надпись на воротах гласит: «Два грузовика одновременно выезжают навстречу друг другу из замков А и Б на концах каньона. Их скорости составляют 45 км/ч и 54 км/ч. Если они встретятся через 20 минут, каково расстояние между двумя замками в километрах?»",
      worksheet: {
        title: "Встреча Грузовиков (Скорость и Время)",
        topic: "Задачи на Скорость, Время и Расстояние",
        outcome: "Вычисляет время встречи и общее расстояние для двух объектов, одновременно движущихся навстречу друг другу.",
        q1: "Два автомобиля со скоростями 60 км/ч и 80 км/ч одновременно выезжают навстречу друг другу из двух городов, расстояние между которыми 280 км. Через сколько часов они встретятся? (Запишите решение.)",
        q2: "Из городов А и Б навстречу друг другу одновременно выезжают два грузовика со скоростями 50 км/ч и 40 км/ч соответственно. Если они встретились через 3 часа после начала движения, каково расстояние между городами в километрах?"
      },
      tasks: [
        {
          question: "Задача 1: Грузовики едут навстречу друг другу со скоростями 45 км/ч и 54 км/ч. Если они встретятся через 20 минут, каково расстояние между замками А и Б в километрах? (Сложите скорости и умножьте на время в часах: 20 минут = 1/3 часа.)",
          hint: "Подсказка: Так как грузовики движутся навстречу друг другу, сложите их скорости: 45 + 54 = 99 км/ч. Время встречи — 20 минут, то есть 1/3 часть часа (20/60 = 1/3 ч). Умножьте общую скорость на это время.",
          solution: "Решение: Общая скорость = 45 + 54 = 99 км/ч. Время = 20 минут = 20/60 = 1/3 часа. По формуле Путь = Скорость * Время: Путь = 99 * (1/3) = 33 км.",
          speechCorrect: "Отлично! Объединив скорости и умножив на время, мы нашли ширину каньона и симулировали встречу. Теперь мы можем перейти мост каньона!"
        },
        {
          question: "Задача 2: Скорости двух грузовиков на другой стороне каньона составляют 50 км/ч и 60 км/ч. Если время их встречи также составляет 30 минут (1/2 часа), каково общее расстояние между ними в километрах?",
          hint: "Подсказка: Сложите скорости (50 + 60 = 110 км/ч) и умножьте на время 1/2 часа.",
          solution: "Решение: Сумма скоростей = 50 + 60 = 110 км/ч. Время = 30 минут = 1/2 часа. Путь = 110 * 1/2 = 55 км.",
          speechCorrect: "Нет! Вы провели грузовики в каньоне без столкновения... Но вы никогда не разгадаете высоту мерцающих серебряных башен перед вами!"
        }
      ]
    },
    6: {
      title: "Ворота 6: Серебряные Башни (Закономерности Высоты)",
      chapter: "Королевский Сад",
      character: "Ванесса",
      narrative: "В саду в ряд выстроились серебряные башни. Ванесса читает надпись под ними: «Высота башен упорядочена по определенному правилу. Первая башня — 3 метра, вторая — 7 метров, третья — 11 метров. Откройте ворота, найдя высоту 5-й серебряной башни в этой последовательности!»",
      worksheet: {
        title: "Серебряные Башни (Закономерности Высоты)",
        topic: "Числовые и Геометрические Последовательности",
        outcome: "Находит связь между членами арифметически возрастающей последовательности и вычисляет пропущенный член.",
        q1: "Числовая последовательность начинается с 8 и увеличивается на 6 на каждом шаге. Какое число будет на 6-м шаге? (Найдите, расписав шаги.)",
        q2: "Высота растения увеличивается как 5 см, 12 см, 19 см, 26 см... Какой будет его высота в сантиметрах в конце 7-й недели?"
      },
      tasks: [
        {
          question: "Задача 1: В последовательности серебряных башен первая равна 3 м, вторая — 7 м, третья — 11 м. Какова высота 5-й башни в метрах?",
          hint: "Подсказка: Найдите правило последовательности! На сколько увеличиваются числа? 3, 7, 11... Вы увидите, что на каждом шаге прибавляется 4. Вычислите высоту 4-й и 5-й башен по этому правилу.",
          solution: "Решение: Высота башен: 1-я = 3м, 2-я = 7м (+4), 3-я = 11м (+4). Правило: Каждая башня на 4 метра выше предыдущей. Следовательно: 4-я башня = 11 + 4 = 15м, 5-я башня = 15 + 4 = 19м.",
          speechCorrect: "Мы разгадали узор высоты башен! Я взяла ключ от волшебного прохода на вершине 5-й башни. Теперь перейдем ко второй последовательности!"
        },
        {
          question: "Задача 2: Последовательность во втором ряду башен такова: 5, 12, 19, 26, [?]. Чему равен 5-й член этой последовательности?",
          hint: "Подсказка: Изучите разницу! Каково увеличение от 5 до 12? Оно равно 7. Последовательность увеличивается на 7. Прибавьте 7 к последнему числу.",
          solution: "Решение: Разность составляет: 12 - 5 = 7. Аналогично, 19 - 12 = 7, 26 - 19 = 7. Правило: Каждое число на 7 больше предыдущего. Таким образом, 5-й член равен: 26 + 7 = 33.",
          speechCorrect: "Что?! Вы разгадали код серебряных башен... Но счетчик глаз одноглазых существ в темной пещере вас точно остановит!"
        }
      ]
    },
    7: {
      title: "Ворота 7: Клан Монокулуса (Глаза Монстров)",
      chapter: "Темная Пещера",
      character: "Монокулус",
      narrative: "Алекс и его друзья встречают соплеменников Монокулуса. У одних по 1 глазу, у других — по 3 глаза. Монокулус шепчет: «В этой пещере всего 9 моих друзей-монстров. Наше общее количество глаз равно 17. Сколько среди нас 3-глазых монстров?»",
      worksheet: {
        title: "Клан Монокулуса (Глаза Монстров)",
        topic: "Арифметические Задачи и Моделирование",
        outcome: "Решает задачи с двумя неизвестными методом предположения или коробчатого моделирования.",
        q1: "Всего на ферме 15 кур и кроликов. Если их общее количество лап равно 44, сколько на ферме кроликов? (Решите с помощью чертежа.)",
        q2: "В тесте из 20 вопросов за каждый правильный ответ начисляется 5 баллов, а за каждый неправильный вычитается 2 балла. Если ученик, ответивший на все вопросы, набрал 58 баллов, на сколько вопросов он ответил правильно?"
      },
      tasks: [
        {
          question: "Задача 1: В этой группе из 9 монстров с общим числом глаз 17, сколько монстров имеют 3 глаза?",
          hint: "Подсказка: Сделайте предположение! Если бы у всех монстров было по 1 глазу, получилось бы 9 * 1 = 9 глаз. Распределите оставшиеся 17 - 9 = 8 глаз по парам (так как у 3-глазого монстра на 2 глаза больше, чем у 1-глазого), чтобы узнать количество 3-глазых.",
          solution: "Решение: Предположим, что все монстры 1-глазые: 9 * 1 = 9 глаз. Так как реальное число глаз 17, разница составляет: 17 - 9 = 8 глаз. У каждого 3-глазого монстра на 2 глаза больше. 8 / 2 = 4 монстра имеют 3 глаза. Остальные 9 - 4 = 5 монстров имеют 1 глаз. Проверим: (4 * 3) + (5 * 1) = 12 + 5 = 17 глаз. Верно!",
          speechCorrect: "Потрясающе! Вы решили загадку глаз моего клана. Мои 3-глазые братья укажут вам путь. Но подождите, в пещере есть вторая группа монстров!"
        },
        {
          question: "Задача 2: Во второй группе монстров в другом углу пещеры всего 8 монстров. У всех либо 1 глаз, либо 3 глаза. Если общее количество глаз равно 14, сколько монстров имеют 3 глаза?",
          hint: "Подсказка: Предположите! Если бы они все были 1-глазными, было бы 8 * 1 = 8 глаз. Распределите оставшиеся 14 - 8 = 6 глаз по парам, чтобы узнать число 3-глазых.",
          solution: "Решение: Если бы все были 1-глазными: 8 * 1 = 8 глаз. Разница составляет: 14 - 8 = 6 глаз. Так как за каждого 3-глазого добавляется +2 глаза: 6 / 2 = 3 монстра имеют 3 глаза.",
          speechCorrect: "Черт возьми! Вы прошли и пещеру монстров... Но вы никогда не решите логическую загадку лжи и правды у камеры Королевы Джейден!"
        }
      ]
    },
    8: {
      title: "Ворота 8: Темница Королевы (Логическая Матрица)",
      chapter: "Большой Зал",
      character: "Королева Джейден",
      narrative: "Наконец они добираются до камеры Королевы Джейден. Перед камерой стоят три сундука. Королева зовет изнутри: «Дорогие дети, ключи для моего спасения спрятаны в этих сундуках. Логически проанализируйте надписи на сундуках и найдите верные ключи!»",
      worksheet: {
        title: "Темница Королевы (Логическая Матрица)",
        topic: "Логические Рассуждения и Противоречия",
        outcome: "Строит логическую матрицу на основе предположений об истине/лжи, выявляет противоречия и решает задачу.",
        q1: "Мерт, Джан и Али надели свитера разного цвета (красный, синий, зеленый):\n- Мерт: «Я надел красный свитер».\n- Джан: «Я не надевал синий».\n- Али: «Мерт не надевал красный».\nЕсли правду говорит только один человек, кто какой цвет надел? (Составьте логическую таблицу.)",
        q2: "Золотой, серебряный и бронзовый ключи спрятаны в коробках А, Б и В соответственно:\n- Коробка А: «Серебряный ключ здесь».\n- Коробка Б: «Бронзовый ключ не здесь».\n- Коробка В: «Золотой ключ в коробке А».\nЕсли ложно только одно высказывание, в какой коробке золотой ключ?"
      },
      tasks: [
        {
          question: "Задача 1: Надписи на Красном, Синем и Зеленом сундуках гласят:\nКрасный: «Ключ в этом сундуке».\nСиний: «Ключ не в этом сундуке».\nЗеленый: «Ключ не в Красном сундуке».\nРешер говорит, что только ОДНО высказывание истинно (два других ложны). В каком сундуке ключ?",
          hint: "Подсказка: Используйте стратегию предположения! Предположите по очереди, что ключ находится в Красном, Синем или Зеленом сундуке. Проверьте истинность высказываний для каждого случая по таблице.",
          solution: "Решение: Предположим, что ключ находится в Синем сундуке. Надпись на Красном («Ключ в красном») -> ЛОЖЬ. Надпись на Синем («Ключ не в синем») -> ЛОЖЬ. Надпись на Зеленом («Ключ не в красном») -> ИСТИНА. Это удовлетворяет условию, что истинно только одно утверждение (надпись на Зеленом сундуке). Ключ находится в Синем сундуке.",
          speechCorrect: "Дорогие дети, вы успешно опровергли первое предположение о сундуках! Теперь давайте решим вторую загадку, измененную Решером!"
        },
        {
          question: "Задача 2: Последняя загадка Королевы:\nКрасный: «Ключ в Зеленом сундуке».\nСиний: «Ключ в этом сундуке (Синем)».\nЗеленый: «Ключ не в Синем сундуке».\nРешер говорит, что в этот раз только ОДНО высказывание ЛОЖНО (два других истинны). В каком сундуке ключ?",
          hint: "Подсказка: Думайте наоборот! Протестируйте сундуки, чтобы найти строку, которая дает только одну ложь (две истины).",
          solution: "Решение: Предположим, что ключ находится в Зеленом сундуке. Надпись на Красном («Ключ в зеленом») -> ИСТИНА. Надпись на Синем («Ключ в синем») -> ЛОЖЬ. Надпись на Зеленом («Ключ не в синем») -> ИСТИНА. Это удовлетворяет условию, что ложно только одно утверждение (надпись на Синем сундуке). Ключ находится в Зеленом сундуке.",
          speechCorrect: "Ключ повернулся, и последний замок открылся! Дверь наконец распахнулась. Идите и спасите меня из этого подземелья!"
        }
      ]
    }
  }
};

