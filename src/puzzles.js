// Mathematical Puzzles data and interactive visualizers for "Kraliçeyi Kurtarmak"
// 2 Tasks per gate (Total 10 tasks) - Answers are hidden from pre-solve visualizations
// Includes speechCorrect dynamic dialogue feedback objects
import { playClick } from './audio.js';

export const puzzles = [
  {
    id: 1,
    title: "1. Kapı: Sihirli Kalem (Ters İşlem)",
    chapter: "Zindana Giriş",
    character: "Kral Recher",
    avatar: "👑",
    narrative: "Aleks ve arkadaşları zindanın ilk ağır demir kapısına ulaşırlar. Kapının üzerinde Recher'in alaycı sesi yankılanır: 'Sihirli kaleminize çok güvendiniz, ama o artık yok! Kraliçeyi kurtarmak istiyorsanız, zihninizi kullanmalısınız. Zindanın ilk kilidini açmak için iki sihirli sayı makinesinin de gizemini çözmelisin!'",
    worksheet: {
      title: "Sihirli Kalem (Ters İşlem)",
      topic: "Doğal Sayılarla İşlemler (Ters İşlem)",
      outcome: "Geriye doğru çalışma stratejisini kullanarak verilmeyen başlangıç değerini bulur.",
      questions: [
        {
          id: 1,
          text: "Sihirli bir sayı makinesi, içine atılan bir sayıyı 4 ile çarpıp sonucuna 12 eklediğinde 60 elde ediyor. Bu makineye başlangıçta atılan sayı kaçtır?",
          spaceType: "reverse-pipeline-1"
        },
        {
          id: 2,
          text: "Bir sayının yarısından 7 çıkarıldığında 8 elde ediliyor. Bu sayının başlangıçtaki değeri kaçtır?",
          spaceType: "reverse-pipeline-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: Sihirli sayı makinesi bir sayıyı 3 ile çarpıp, sonucuna 5 eklediğinde 26 elde ediyor. Başlangıçtaki sayı kaçtır?",
        hint: "İpucu: Geriye doğru çalışma stratejisini kullan! Sonuçtan başlayıp geriye doğru git ve her işlemi tersine çevir. Toplamanın tersi çıkarma, çarpmanın tersi ise bölmedir.",
        solution: "Çözüm: Sonuç olan 26'dan geriye doğru gideriz. Son olarak 5 eklendiği için önce 5 çıkarırız: 26 - 5 = 21. Daha sonra 3 ile çarpıldığı için 21'i 3'e böleriz: 21 / 3 = 7. Başlangıçtaki sayı 7'dir!",
        answer: 7,
        speechCorrect: {
          avatar: "👦",
          name: "Aleks",
          text: "Harika! Birinci sayı makinesinin kuralını zihnimizle çözüp kalemin gücünü taklit ettik. Ama durun, Recher ikinci bir makineyi daha kilitledi!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-reverse">
              <p class="vis-instruction">Aşağıdaki boru hattında işlemleri ileri ve geri yönde simüle et:</p>
              <div class="pipeline">
                <div class="pipe-node" id="node-start">?</div>
                <div class="pipe-link font-accent">× 3</div>
                <div class="pipe-node" id="node-mid">?</div>
                <div class="pipe-link font-accent">+ 5</div>
                <div class="pipe-node pipe-node--active">26</div>
              </div>
              <div class="vis-actions">
                <button class="btn btn--secondary" id="btn-reverse">Geriye Doğru Çalış (Ters İşlem)</button>
                <button class="btn btn--secondary" id="btn-forward" style="display:none;">İleriye Doğru Çalış</button>
              </div>
              <div class="pipeline-explain" id="pipe-explain">İşlemleri tersine çevirmek ve geriye doğru akışı görmek için yukarıdaki butona tıkla!</div>
            </div>
          `;

          const btnReverse = container.querySelector('#btn-reverse');
          const btnForward = container.querySelector('#btn-forward');
          const nodeStart = container.querySelector('#node-start');
          const nodeMid = container.querySelector('#node-mid');
          const pipeExplain = container.querySelector('#pipe-explain');
          const pipeline = container.querySelector('.pipeline');

          btnReverse.addEventListener('click', () => {
            playClick();
            pipeline.classList.add('pipeline--reversed');
            nodeMid.textContent = "?";
            nodeMid.classList.add('pipe-node--active');
            nodeStart.textContent = "?";
            nodeStart.classList.add('pipe-node--highlight');
            pipeExplain.innerHTML = `
              <strong>Ters Akış Aktif:</strong><br>
              1. Sonuçtan 5 çıkar: <span class="text-accent">26 - 5 = [Ortadaki Sayı]</span><br>
              2. Bulduğun ortadaki sayıyı 3'e böl: <span class="text-accent">[Ortadaki Sayı] / 3 = [Başlangıç Sayısı]</span><br>
              Hesaplamaları yapıp cevabını aşağıya gir!
            `;
            btnReverse.style.display = 'none';
            btnForward.style.display = 'inline-block';
          });

          btnForward.addEventListener('click', () => {
            playClick();
            pipeline.classList.remove('pipeline--reversed');
            nodeStart.textContent = "?";
            nodeStart.classList.remove('pipe-node--highlight');
            nodeMid.textContent = "?";
            nodeMid.classList.remove('pipe-node--active');
            pipeExplain.textContent = "İşlemleri tersine çevirmek ve geriye doğru akışı görmek için yukarıdaki butona tıkla!";
            btnForward.style.display = 'none';
            btnReverse.style.display = 'inline-block';
          });
        }
      },
      {
        question: "2. Görev: İkinci sihirli makine bir sayıyı 2'ye bölüp, sonucuna 8 eklediğinde 15 elde ediyor. Başlangıçtaki sayı kaçtır?",
        hint: "İpucu: Geriye doğru çalış! 15'ten 8 çıkar, ardından bölmenin tersi olan çarpma işlemini uygula (çıkan sonucu 2 ile çarp).",
        solution: "Çözüm: Sonuç olan 15'ten geriye gideriz. 8 eklenmiş hali 15 ise eklenmemiş hali 15 - 8 = 7'dir. 2'ye bölündüğünde 7 çıkan sayı ise 7 * 2 = 14'tür.",
        answer: 14,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Hayır! Olamaz! İlk zindan kapısının kilidini açtınız... Ama sevinmeyin, önünüzdeki lav nehrini ve sihirli köprü örüntülerini asla geçemeyeceksiniz!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-reverse">
              <p class="vis-instruction">İkinci makineyi incele ve ters akışı başlat:</p>
              <div class="pipeline">
                <div class="pipe-node" id="node-start">?</div>
                <div class="pipe-link font-accent">÷ 2</div>
                <div class="pipe-node" id="node-mid">?</div>
                <div class="pipe-link font-accent">+ 8</div>
                <div class="pipe-node pipe-node--active">15</div>
              </div>
              <div class="vis-actions">
                <button class="btn btn--secondary" id="btn-reverse">Geriye Doğru Çalış (Ters İşlem)</button>
                <button class="btn btn--secondary" id="btn-forward" style="display:none;">İleriye Doğru Çalış</button>
              </div>
              <div class="pipeline-explain" id="pipe-explain">Ters işlemleri görmek için yukarıdaki butona tıkla!</div>
            </div>
          `;

          const btnReverse = container.querySelector('#btn-reverse');
          const btnForward = container.querySelector('#btn-forward');
          const nodeStart = container.querySelector('#node-start');
          const nodeMid = container.querySelector('#node-mid');
          const pipeExplain = container.querySelector('#pipe-explain');
          const pipeline = container.querySelector('.pipeline');

          btnReverse.addEventListener('click', () => {
            playClick();
            pipeline.classList.add('pipeline--reversed');
            nodeMid.textContent = "?";
            nodeMid.classList.add('pipe-node--active');
            nodeStart.textContent = "?";
            nodeStart.classList.add('pipe-node--highlight');
            pipeExplain.innerHTML = `
              <strong>Ters Akış Aktif:</strong><br>
              1. Sonuçtan 8 çıkar: <span class="text-accent">15 - 8 = [Ortadaki Sayı]</span><br>
              2. Bölmenin tersi çarpmadır, sonucu 2 ile çarp: <span class="text-accent">[Ortadaki Sayı] × 2 = [Başlangıç Sayısı]</span><br>
              Zihninden hesaplayıp cevabını aşağıya yaz!
            `;
            btnReverse.style.display = 'none';
            btnForward.style.display = 'inline-block';
          });

          btnForward.addEventListener('click', () => {
            playClick();
            pipeline.classList.remove('pipeline--reversed');
            nodeStart.textContent = "?";
            nodeStart.classList.remove('pipe-node--highlight');
            nodeMid.textContent = "?";
            nodeMid.classList.remove('pipe-node--active');
            pipeExplain.textContent = "Ters işlemleri görmek için yukarıdaki butona tıkla!";
            btnForward.style.display = 'none';
            btnReverse.style.display = 'inline-block';
          });
        }
      }
    ]
  },
  {
    id: 2,
    title: "2. Kapı: Lugubriya Köprüsü (Örüntüler)",
    chapter: "Lav Nehri",
    character: "Vanessa",
    avatar: "👧",
    narrative: "Karşılarına altından lavların aktığı tehlikeli bir nehir çıkar. Vanessa köprünün üzerindeki taş sayı örüntülerini gösterir: 'Köprü taşlarının üzerindeki sayıların gizli kuralını bulmalıyız. İki köprü bölgesindeki örüntüyü de çözersek karşıya güvenle geçebiliriz!'",
    worksheet: {
      title: "Lugubriya Köprüsü (Sayı Örüntüleri)",
      topic: "Sayı Örüntüleri ve İlişkiler",
      outcome: "Belirli bir kurala göre artan veya azalan sayı örüntülerindeki ilişkileri keşfeder ve örüntüyü genişletir.",
      questions: [
        {
          id: 1,
          text: "5, 11, 23, 47, [?] sayı örüntüsündeki artış kuralını açıklayarak soru işareti yerine gelmesi gereken sayıyı bulunuz.",
          spaceType: "pattern-boxes-1"
        },
        {
          id: 2,
          text: "1, 4, 16, 64, [?] sayı örüntüsündeki kuralı belirleyip soru işareti yerine gelmesi gereken sayıyı bulunuz.",
          spaceType: "pattern-boxes-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: 3, 7, 15, 31, 63, [?] sayı örüntüsünde boş bırakılan yere hangi sayı gelmelidir?",
        hint: "İpucu: Sayıların arasındaki farkları incele! Farklar sırasıyla 4, 8, 16, 32 şeklinde ilerliyor. Bu artışların kuralını bulup son sayıya ekle.",
        solution: "Çözüm: Sayılar arasındaki artışlar: +4, +8, +16, +32'dir. Her artış miktarı öncekinin 2 katıdır. Sonraki artış 32 * 2 = 64 olmalıdır. 63 + 64 = 127 olur.",
        answer: 127,
        speechCorrect: {
          avatar: "👧",
          name: "Vanessa",
          text: "Buldum! Sütunların aralarındaki farklar ikiye katlanıyor! Köprünün ilk yarısını birleştirdik, şimdi ikinci örüntüye geçelim!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-pattern">
              <p class="vis-instruction">Sayıların arasındaki farkları görmek için soru işaretli yaylara tıkla:</p>
              <div class="pattern-sequence">
                <div class="seq-item"><div class="seq-block" style="height: 40px;">3</div></div>
                <div class="seq-diff" id="diff-1">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 60px;">7</div></div>
                <div class="seq-diff" id="diff-2">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 85px;">15</div></div>
                <div class="seq-diff" id="diff-3">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 115px;">31</div></div>
                <div class="seq-diff" id="diff-4">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 150px;">63</div></div>
                <div class="seq-diff seq-diff--glow" id="diff-5">?</div>
                <div class="seq-item"><div class="seq-block seq-block--target" style="height: 190px;" id="seq-target">?</div></div>
              </div>
              <div class="pattern-explain" id="pattern-explain">Sayılar arasındaki artışları görmek için yukarıdaki soru işaretlerine tıklayabilirsin.</div>
            </div>
          `;

          const diffs = [
            { el: container.querySelector('#diff-1'), val: "+4", text: "3'ten 7'ye: <span class='text-accent'>4 artış</span>." },
            { el: container.querySelector('#diff-2'), val: "+8", text: "7'den 15'e: <span class='text-accent'>8 artış</span> (4'ün 2 katı)." },
            { el: container.querySelector('#diff-3'), val: "+16", text: "15'ten 31'e: <span class='text-accent'>16 artış</span> (8'in 2 katı)." },
            { el: container.querySelector('#diff-4'), val: "+32", text: "31'den 63'e: <span class='text-accent'>32 artış</span> (16'nın 2 katı)." },
            { el: container.querySelector('#diff-5'), val: "?", text: "Farklar: 4, 8, 16, 32... Bir sonraki artış miktarı kaç olmalı? Bu artışı 63'e ekleyerek hedef sayıyı bul!" }
          ];

          const explain = container.querySelector('#pattern-explain');

          diffs.forEach((diff, index) => {
            diff.el.addEventListener('click', () => {
              playClick();
              diff.el.textContent = diff.val === "?" ? "?" : diff.val;
              if (diff.val !== "?") {
                diff.el.classList.add('seq-diff--active');
              }
              explain.innerHTML = `<strong>Örüntü Analizi:</strong> ${diff.text}`;
              
              if (index === 4) {
                diff.el.textContent = "+64";
                diff.el.classList.add('seq-diff--active');
              }
            });
          });
        }
      },
      {
        question: "2. Görev: Köprünün diğer yarısındaki örüntü: 2, 6, 18, 54, [?] şeklindedir. Boş bırakılan yere hangi sayı gelmelidir?",
        hint: "İpucu: Sayıların katlarını incele! Sayılar her adımda bir öncekinin kaç katı olarak artıyor? Bu çarpanı son sayıya uygula.",
        solution: "Çözüm: Sayılar arasındaki örüntü incelendiğinde her sayı bir öncekinin 3 katıdır: 2 * 3 = 6, 6 * 3 = 18, 18 * 3 = 54. O halde sonraki sayı: 54 * 3 = 162 olmalıdır.",
        answer: 162,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Nasıl olur?! Lav köprüsünü birleştirdiniz ve karşıya geçtiniz... Ama Zümrüt Kulesi'nin gizemli kesir koruyucuları sizi kulenin tepesinde durduracak!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-pattern">
              <p class="vis-instruction">Sayılar arasındaki çarpım ilişkilerini görmek için yaylara tıkla:</p>
              <div class="pattern-sequence">
                <div class="seq-item"><div class="seq-block" style="height: 40px;">2</div></div>
                <div class="seq-diff" id="diff-1">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 65px;">6</div></div>
                <div class="seq-diff" id="diff-2">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 100px;">18</div></div>
                <div class="seq-diff" id="diff-3">?</div>
                <div class="seq-item"><div class="seq-block" style="height: 140px;">54</div></div>
                <div class="seq-diff seq-diff--glow" id="diff-4">?</div>
                <div class="seq-item"><div class="seq-block seq-block--target" style="height: 190px;" id="seq-target">?</div></div>
              </div>
              <div class="pattern-explain" id="pattern-explain">Kat ilişkilerini görmek için yukarıdaki soru işaretlerine tıkla.</div>
            </div>
          `;

          const diffs = [
            { el: container.querySelector('#diff-1'), val: "×3", text: "2'den 6'ya: <span class='text-accent'>3 katı</span>." },
            { el: container.querySelector('#diff-2'), val: "×3", text: "6'dan 18'e: <span class='text-accent'>3 katı</span>." },
            { el: container.querySelector('#diff-3'), val: "×3", text: "18'den 54'e: <span class='text-accent'>3 katı</span>." },
            { el: container.querySelector('#diff-4'), val: "?", text: "Sayılar sürekli 3 katına çıkıyor. Son adımda hedefi bulmak için 54'ü kaçla çarpmalısın? Çarpımı hesaplayıp gir!" }
          ];

          const explain = container.querySelector('#pattern-explain');

          diffs.forEach((diff, index) => {
            diff.el.addEventListener('click', () => {
              playClick();
              if (diff.val !== "?") {
                diff.el.textContent = diff.val;
                diff.el.classList.add('seq-diff--active');
              }
              explain.innerHTML = `<strong>Örüntü Analizi:</strong> ${diff.text}`;
              
              if (index === 3) {
                diff.el.textContent = "×3";
                diff.el.classList.add('seq-diff--active');
              }
            });
          });
        }
      }
    ]
  },
  {
    id: 3,
    title: "3. Kapı: Zümrüt Kulesi (Kesirler)",
    chapter: "Zümrüt Labirenti",
    character: "Sam",
    avatar: "👦",
    narrative: "Zümrüt Kulesi'nin kapısında yeşil alevlerle yazılmış bilmeceler belirir. Sam cebinden not defterini çıkarır: 'Vanessa ile paylaştığımız sihirli zümrütlerin kesir problemlerini çözersek kapı açılacak. Dikkatli şekil çizmeliyiz!'",
    worksheet: {
      title: "Zümrüt Kulesi (Kesir Problemleri)",
      topic: "Kesirlerle İşlemler ve Şekil Çizme",
      outcome: "Bir bütünün kesir kadarını hesaplar ve kalan parçalardan bütüne ulaşmak için şekil çizme stratejisini uygular.",
      questions: [
        {
          id: 1,
          text: "30 sayısının 2/5'i ile 1/3'ünün toplamı kaçtır? (Bütünü modelleme kutularına ayırıp boyayarak çözünüz.)",
          spaceType: "fraction-grid-1"
        },
        {
          id: 2,
          text: "Hakan cebindeki paranın 1/4'ünü harcıyor. Kalan parasının 1/3'ü ile kitap alıyor. Geriye 30 TL'si kaldığına göre başlangıçta kaç TL'si vardı? (Şekil çizerek kutu modeli oluşturunuz.)",
          spaceType: "fraction-grid-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: Bir torbadaki sihirli zümrütlerin 1/3'ünü Vanessa alıyor. Kalan zümrütlerin 1/4'ünü Sam alıyor. Geriye 6 adet zümrüt kaldığına göre, başlangıçta kaç zümrüt vardı?",
        hint: "İpucu: Şekil çizme stratejisini kullan! Bütünü 12 eş parçaya bölünmüş kabul et. 1/3'ünü (4 parça) karala. Kalan 8 parçanın 1/4'ünü (2 parça) daha karala. Kalan parçaların zümrüt sayısına oranını hesapla.",
        solution: "Çözüm: Başlangıçtaki zümrütleri 12 kutu kabul edelim. Vanessa 1/3'ünü (4 kutu) alır, geriye 8 kutu kalır. Sam kalan 8 kutunun 1/4'ünü (2 kutu) alır, geriye 6 kutu kalır. Kalan 6 kutu 6 zümrüte eşitse, 1 kutu = 1 zümrüttür. Başlangıçta 12 kutu olduğundan toplam 12 zümrüt vardır.",
        answer: 12,
        speechCorrect: {
          avatar: "👦",
          name: "Sam",
          text: "Harika! Çizdiğimiz kutu modeli sayesinde Vanessa ve benim paylarımı düşüp bütünü kurduk. Ama alevler ikinci bir kesir bilmecesi daha gösteriyor!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-fraction">
              <p class="vis-instruction">Zümrüt kutusunu görselleştirmek için adımları çalıştır:</p>
              <div class="fraction-bar" id="fraction-bar"></div>
              <div class="vis-actions" style="margin-top: 1rem;">
                <button class="btn btn--secondary" id="btn-frac-1">1. Adım: Vanessa'nın Payı (1/3)</button>
                <button class="btn btn--secondary" id="btn-frac-2" style="display:none;">2. Adım: Sam'in Payı (Kalanın 1/4'ü)</button>
                <button class="btn btn--secondary" id="btn-frac-3" style="display:none;">3. Adım: Geriye Kalanlar (6 Zümrüt)</button>
              </div>
              <div class="fraction-explain" id="fraction-explain">Vanessa'nın payını renklendirmek için 1. Adım butonuna tıkla.</div>
            </div>
          `;

          const bar = container.querySelector('#fraction-bar');
          const explain = container.querySelector('#fraction-explain');
          const btn1 = container.querySelector('#btn-frac-1');
          const btn2 = container.querySelector('#btn-frac-2');
          const btn3 = container.querySelector('#btn-frac-3');

          for (let i = 0; i < 12; i++) {
            const block = document.createElement('div');
            block.className = 'fraction-block';
            block.innerHTML = `<span class="block-num">${i+1}</span>`;
            bar.appendChild(block);
          }

          btn1.addEventListener('click', () => {
            playClick();
            const blocks = bar.querySelectorAll('.fraction-block');
            for (let i = 0; i < 4; i++) {
              blocks[i].classList.add('fraction-block--vanessa');
              blocks[i].innerHTML = `V`;
            }
            explain.innerHTML = `
              <strong>Vanessa'nın Payı:</strong> Toplam 12 parçanın $1/3$'ü ($12 / 3 = 4$ parça) Vanessa'ya boyandı. Geriye boyanmamış <span class="text-accent">8 parça</span> kaldı.
            `;
            btn1.style.display = 'none';
            btn2.style.display = 'inline-block';
          });

          btn2.addEventListener('click', () => {
            playClick();
            const blocks = bar.querySelectorAll('.fraction-block');
            blocks[4].classList.add('fraction-block--sam'); blocks[4].innerHTML = `S`;
            blocks[5].classList.add('fraction-block--sam'); blocks[5].innerHTML = `S`;
            explain.innerHTML = `
              <strong>Sam'in Payı:</strong> Kalan 8 parçanın $1/4$'ü ($8 / 4 = 2$ parça) Sam'e boyandı. Geriye boyanmamış <span class="text-accent">6 parça</span> kaldı.
            `;
            btn2.style.display = 'none';
            btn3.style.display = 'inline-block';
          });

          btn3.addEventListener('click', () => {
            playClick();
            const blocks = bar.querySelectorAll('.fraction-block');
            for (let i = 6; i < 12; i++) {
              blocks[i].classList.add('fraction-block--emerald');
              blocks[i].innerHTML = `💎`;
            }
            explain.innerHTML = `
              <strong>Kalan Zümrütler:</strong> Geriye kalan 6 parçanın toplam değeri 6 zümrüte eşit olarak verilmiştir. <br>
              Buna göre 1 adet kutunun kaç zümrüte karşılık geldiğini bulup, toplam 12 kutunun kaç zümrüt edeceğini hesapla!
            `;
            btn3.style.display = 'none';
          });
        }
      },
      {
        question: "2. Görev: Torbadaki zümrütlerin 1/2'sini Vanessa alıyor. Kalan zümrütlerin 1/3'ünü Sam alıyor. Geriye 4 zümrüt kaldığına göre başlangıçta kaç zümrüt vardı?",
        hint: "İpucu: Yine 12 parçalık bir bütün çiz! Yarısını (6 parça) Vanessa'ya ver. Kalan 6 parçanın 1/3'ünü (2 parça) Sam'e ver. Kalan parça sayısını 4 zümrüte eşitle.",
        solution: "Çözüm: Bütün 12 kutu olsun. Yarısı (6 kutu) Vanessa'nın olur, 6 kutu kalır. Kalanın 1/3'ü (6 / 3 = 2 kutu) Sam'in olur, 4 kutu kalır. Kalan 4 kutu 4 zümrüte eşitse, 1 kutu = 1 zümrüttür. Toplam 12 kutu = 12 zümrüttür.",
        answer: 12,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Kuleyi de mi aştınız?! İnanılmaz! Ama muhafız kışlasındaki baş muhafızımın terazi yaş katı bilmecesini çözmeniz mümkün değil!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-fraction">
              <p class="vis-instruction">İkinci kesir problemini kutularla simüle et:</p>
              <div class="fraction-bar" id="fraction-bar"></div>
              <div class="vis-actions" style="margin-top: 1rem;">
                <button class="btn btn--secondary" id="btn-frac-1">1. Adım: Vanessa'nın Payı (1/2)</button>
                <button class="btn btn--secondary" id="btn-frac-2" style="display:none;">2. Adım: Sam'in Payı (Kalanın 1/3'ü)</button>
                <button class="btn btn--secondary" id="btn-frac-3" style="display:none;">3. Adım: Geriye Kalanlar (4 Zümrüt)</button>
              </div>
              <div class="fraction-explain" id="fraction-explain">Vanessa'nın payını renklendirmek için 1. Adım butonuna tıkla.</div>
            </div>
          `;

          const bar = container.querySelector('#fraction-bar');
          const explain = container.querySelector('#fraction-explain');
          const btn1 = container.querySelector('#btn-frac-1');
          const btn2 = container.querySelector('#btn-frac-2');
          const btn3 = container.querySelector('#btn-frac-3');

          for (let i = 0; i < 12; i++) {
            const block = document.createElement('div');
            block.className = 'fraction-block';
            block.innerHTML = `<span class="block-num">${i+1}</span>`;
            bar.appendChild(block);
          }

          btn1.addEventListener('click', () => {
            playClick();
            const blocks = bar.querySelectorAll('.fraction-block');
            for (let i = 0; i < 6; i++) {
              blocks[i].classList.add('fraction-block--vanessa');
              blocks[i].innerHTML = `V`;
            }
            explain.innerHTML = `
              <strong>Vanessa'nın Payı:</strong> Toplam 12 parçanın yarıya bölünmüş hali ($12 / 2 = 6$ parça) Vanessa'ya verildi. Geriye boyanmamış <span class="text-accent">6 parça</span> kaldı.
            `;
            btn1.style.display = 'none';
            btn2.style.display = 'inline-block';
          });

          btn2.addEventListener('click', () => {
            playClick();
            const blocks = bar.querySelectorAll('.fraction-block');
            blocks[6].classList.add('fraction-block--sam'); blocks[6].innerHTML = `S`;
            blocks[7].classList.add('fraction-block--sam'); blocks[7].innerHTML = `S`;
            explain.innerHTML = `
              <strong>Sam'in Payı:</strong> Kalan 6 parçanın $1/3$'ü ($6 / 3 = 2$ parça) Sam'e boyandı. Geriye boyanmamış <span class="text-accent">4 parça</span> kaldı.
            `;
            btn2.style.display = 'none';
            btn3.style.display = 'inline-block';
          });

          btn3.addEventListener('click', () => {
            playClick();
            const blocks = bar.querySelectorAll('.fraction-block');
            for (let i = 8; i < 12; i++) {
              blocks[i].classList.add('fraction-block--emerald');
              blocks[i].innerHTML = `💎`;
            }
            explain.innerHTML = `
              <strong>Kalan Zümrütler:</strong> Geriye kalan 4 kutunun değeri soruda 4 zümrüt olarak belirtilmiştir. <br>
              Buna göre 1 kutunun değerini bulup, torbadaki toplam 12 kutunun karşılığını hesapla!
            `;
            btn3.style.display = 'none';
          });
        }
      }
    ]
  },
  {
    id: 4,
    title: "4. Kapı: Muhafızların Geçidi (Yaş/Kat Modeli)",
    chapter: "Muhafız Kışlası",
    character: "Aleks",
    avatar: "👦",
    narrative: "Kraliçe'nin kulesinin önündeki iki muhafız yolu kapatmıştır. Aleks'e bakar ve kükrerler: 'Buradan geçmek için yaşlarımızın gizemini çözmelisin! İki farklı nöbetçi çiftinin bilmecelerini doğru yanıtla!'",
    worksheet: {
      title: "Muhafız Geçidi (Yaş/Kat Modeli)",
      topic: "Kat ve Yaş Problemleri (Kutu Modelleme)",
      outcome: "Bilinmeyen değerler arasındaki kat ilişkilerini kutu veya terazi modeli kullanarak görselleştirir ve çözer.",
      questions: [
        {
          id: 1,
          text: "Elif'in ağırlığı Selin'in ağırlığının 2 katıdır. İkisinin ağırlıkları toplamı 72 kg olduğuna göre Elif kaç kilogramdır? (Kutu modeli çizerek gösteriniz.)",
          spaceType: "scale-balance-1"
        },
        {
          id: 2,
          text: "Bir babanın yaşı oğlunun yaşının 3 katından 4 fazladır. İkisinin yaşları toplamı 44 olduğuna göre baba kaç yaşındadır? (Denklem modelini çizerek çözünüz.)",
          spaceType: "scale-balance-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: Baş muhafızın yaşı, genç muhafızın yaşının tam 3 katıdır. İkisinin yaşları toplamı 48 olduğuna göre baş muhafız kaç yaşındadır?",
        hint: "İpucu: Genç muhafızın yaşını 1 kat (1 kutu), baş muhafızın yaşını 3 kat (3 kutu) olarak modelle. Toplam 4 kat = 48 kg/yaş yapar. 1 katı bulup baş muhafızın 3 katını hesapla.",
        solution: "Çözüm: Genç muhafız = 1 kat, Baş muhafız = 3 kat. Toplam = 4 kat. 4 kat = 48 ise, 1 kat = 48 / 4 = 12 (Genç muhafızın yaşı). Baş muhafızın yaşı 3 kat olduğu için: 3 * 12 = 36'dır.",
        answer: 36,
        speechCorrect: {
          avatar: "👦",
          name: "Aleks",
          text: "Teraziyi dengeleyerek genç muhafızın yaşını bulduk ve baş muhafızın yaşını hesapladık! Nöbetçilerden biri çekildi ama diğeri hala yolu kapatıyor!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-scale">
              <p class="vis-instruction">Genç muhafızın yaşını (kutu değerini) sürgüyle kaydırarak teraziyi dengeye getir:</p>
              
              <div class="scale-container">
                <div class="scale-beam" id="scale-beam">
                  <div class="scale-pan scale-pan--left" id="pan-left">
                    <div class="pan-contents" id="left-contents"></div>
                  </div>
                  <div class="scale-pan scale-pan--right" id="pan-right">
                    <div class="pan-contents">
                      <div class="weight-block">48</div>
                    </div>
                  </div>
                </div>
                <div class="scale-base"></div>
              </div>
              
              <div class="scale-control">
                <label for="scale-slider">Genç Muhafızın Yaşı (<span class="text-gold" style="font-weight:bold;" id="slider-val">10</span>):</label>
                <input type="range" id="scale-slider" min="5" max="20" value="10" step="1" style="width:100%; max-width: 300px;">
              </div>
              
              <div class="scale-explain" id="scale-explain">Terazi şu an dengede değil. Genç muhafızın yaşını değiştirerek toplam ağırlığı 48 yap!</div>
            </div>
          `;

          const slider = container.querySelector('#scale-slider');
          const sliderVal = container.querySelector('#slider-val');
          const beam = container.querySelector('#scale-beam');
          const leftContents = container.querySelector('#left-contents');
          const explain = container.querySelector('#scale-explain');

          function updateScale() {
            const val = parseInt(slider.value);
            sliderVal.textContent = val;
            
            leftContents.innerHTML = `
              <div class="pan-row"><span class="block-lbl">Genç M. (1 Kat):</span> <div class="scale-box scale-box--young">${val}</div></div>
              <div class="pan-row"><span class="block-lbl">Baş M. (3 Kat):</span> 
                <div class="scale-box scale-box--lead">${val}</div>
                <div class="scale-box scale-box--lead">${val}</div>
                <div class="scale-box scale-box--lead">${val}</div>
              </div>
            `;

            const totalLeft = val * 4;
            const targetRight = 48;
            const diff = totalLeft - targetRight;
            const maxTilt = 15;
            let tilt = (diff / targetRight) * maxTilt * 2;
            if (tilt > maxTilt) tilt = maxTilt;
            if (tilt < -maxTilt) tilt = -maxTilt;
            
            beam.style.transform = `rotate(${tilt}deg)`;
            
            const panLeft = container.querySelector('#pan-left');
            const panRight = container.querySelector('#pan-right');
            panLeft.style.transform = `rotate(${-tilt}deg)`;
            panRight.style.transform = `rotate(${-tilt}deg)`;

            if (totalLeft === targetRight) {
              beam.classList.add('scale-beam--balanced');
              explain.innerHTML = `
                <span class="text-emerald" style="font-weight:bold;">Terazi Dengede!</span><br>
                Genç muhafızın yaşı (1 Kat) = <span class="text-gold">12</span> bulundu.<br>
                Baş muhafızın yaşı ise bunun <span class="text-gold">3 katı (3 Kat)</span> olduğuna göre, baş muhafızın yaşını hesapla!
              `;
            } else {
              beam.classList.remove('scale-beam--balanced');
              const status = diff > 0 ? "Ağır Geldi" : "Hafif Geldi";
              explain.innerHTML = `
                Sol Taraf Toplamı: <span class="text-accent">${totalLeft}</span> (Hedef: 48). Sol Taraf <strong>${status}</strong>.<br>
                Dengeyi bulmak için kaydırıcıyı oynat!
              `;
            }
          }

          slider.addEventListener('input', () => {
            if (Math.random() > 0.6) playClick();
            updateScale();
          });
          
          updateScale();
        }
      },
      {
        question: "2. Görev: Diğer iki muhafızın bilmecesi: Baş muhafızın yaşı, genç muhafızın 2 katıdır. İkisinin yaşları toplamı 45 olduğuna göre baş muhafız kaç yaşındadır?",
        hint: "İpucu: Genç muhafız 1 kat (1 kutu), baş muhafız 2 kat (2 kutu) olur. Toplam 3 kat = 45. 1 katın değerini bulup baş muhafızın yaşını (2 katı) hesapla.",
        solution: "Çözüm: Genç muhafız = 1 kat, Baş muhafız = 2 kat. Toplam = 3 kat. 3 kat = 45 ise, 1 kat = 45 / 3 = 15 (Genç muhafızın yaşı). Baş muhafızın yaşı 2 kat olduğundan: 2 * 15 = 30'dur.",
        answer: 30,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Kışla kapısı da mı açıldı?! Lanet olsun! Ama Kraliçenin hücresindeki yalan/doğru sandık kilidini asla çözemeyeceksiniz. O sandıklardan sadece biri doğru!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-scale">
              <p class="vis-instruction">Genç muhafızın yaşını (kutu değerini) kaydırarak toplam ağırlığı 45 yap:</p>
              
              <div class="scale-container">
                <div class="scale-beam" id="scale-beam">
                  <div class="scale-pan scale-pan--left" id="pan-left">
                    <div class="pan-contents" id="left-contents"></div>
                  </div>
                  <div class="scale-pan scale-pan--right" id="pan-right">
                    <div class="pan-contents">
                      <div class="weight-block">45</div>
                    </div>
                  </div>
                </div>
                <div class="scale-base"></div>
              </div>
              
              <div class="scale-control">
                <label for="scale-slider">Genç Muhafızın Yaşı (<span class="text-gold" style="font-weight:bold;" id="slider-val">10</span>):</label>
                <input type="range" id="scale-slider" min="5" max="25" value="10" step="1" style="width:100%; max-width: 300px;">
              </div>
              
              <div class="scale-explain">Terazi şu an dengede değil. Sürgüyü oynatarak dengeyi kur!</div>
            </div>
          `;

          const slider = container.querySelector('#scale-slider');
          const sliderVal = container.querySelector('#slider-val');
          const beam = container.querySelector('#scale-beam');
          const leftContents = container.querySelector('#left-contents');
          const explain = container.querySelector('.scale-explain');

          function updateScale() {
            const val = parseInt(slider.value);
            sliderVal.textContent = val;
            
            leftContents.innerHTML = `
              <div class="pan-row"><span class="block-lbl">Genç M. (1 Kat):</span> <div class="scale-box scale-box--young">${val}</div></div>
              <div class="pan-row"><span class="block-lbl">Baş M. (2 Kat):</span> 
                <div class="scale-box scale-box--lead">${val}</div>
                <div class="scale-box scale-box--lead">${val}</div>
              </div>
            `;

            const totalLeft = val * 3;
            const targetRight = 45;
            const diff = totalLeft - targetRight;
            const maxTilt = 15;
            let tilt = (diff / targetRight) * maxTilt * 2;
            if (tilt > maxTilt) tilt = maxTilt;
            if (tilt < -maxTilt) tilt = -maxTilt;
            
            beam.style.transform = `rotate(${tilt}deg)`;
            
            const panLeft = container.querySelector('#pan-left');
            const panRight = container.querySelector('#pan-right');
            panLeft.style.transform = `rotate(${-tilt}deg)`;
            panRight.style.transform = `rotate(${-tilt}deg)`;

            if (totalLeft === targetRight) {
              beam.classList.add('scale-beam--balanced');
              explain.innerHTML = `
                <span class="text-emerald" style="font-weight:bold;">Terazi Dengede!</span><br>
                Genç muhafızın yaşı (1 Kat) = <span class="text-gold">15</span> bulundu.<br>
                Baş muhafızın yaşı ise bunun <span class="text-gold">2 katı (2 Kat)</span> olduğuna göre, baş muhafızın yaşını hesapla!
              `;
            } else {
              beam.classList.remove('scale-beam--balanced');
              const status = diff > 0 ? "Ağır Geldi" : "Hafif Geldi";
              explain.innerHTML = `
                Sol Taraf Toplamı: <span class="text-accent">${totalLeft}</span> (Hedef: 45). Sol Taraf <strong>${status}</strong>.<br>
                Dengeyi bulmak için kaydırıcıyı oynat!
              `;
            }
          }

          slider.addEventListener('input', () => {
            if (Math.random() > 0.6) playClick();
            updateScale();
          });
          
          updateScale();
        }
      }
    ]
  },
  {
    id: 5,
    title: "5. Kapı: Kraliçe'nin Zindanı (Mantık Matrisi)",
    chapter: "Büyük Salon",
    character: "Kraliçe Jayden",
    avatar: "🧝‍♀️",
    narrative: "Sonunda Kraliçe Jayden'ın hücresine ulaşırlar. Hücrenin önünde üç sandık durmaktadır. Kraliçe içeriden seslenir: 'Sevgili çocuklar, beni kurtaracak anahtarlar bu sandıklarda gizli. Sandıkların üstündeki ifadeleri mantıksal olarak analiz edip doğru anahtarları bulun!'",
    worksheet: {
      title: "Kraliçe'nin Zindanı (Mantık Matrisi)",
      topic: "Mantıksal Akıl Yürütme ve Çelişki",
      outcome: "Doğruluk/yalan durumlarına göre varsayımlarda bulunarak mantık matrisi oluşturur ve çelişkileri bulup problemi çözer.",
      questions: [
        {
          id: 1,
          text: "Mert, Can ve Ali farklı renkte (Kırmızı, Mavi, Yeşil) kazaklar giymiştir:\n- Mert: 'Kırmızı kazağı ben giydim.'\n- Can: 'Ben mavi giymedim.'\n- Ali: 'Mert kırmızı giymedi.'\nEğer sadece bir kişi doğru söylüyorsa kim hangi rengi giymiştir? (Mantık tablosu oluşturup çelişkileri yazınız.)",
          spaceType: "logic-matrix-1"
        },
        {
          id: 2,
          text: "A, B ve C kutularında sırasıyla altın, gümüş ve bronz anahtarlar saklıdır:\n- A Kutusu: 'Gümüş anahtar buradadır.'\n- B Kutusu: 'Bronz anahtar burada değildir.'\n- C Kutusu: 'Altın anahtar A kutusundadır.'\nEğer sadece tek bir ifade YALAN ise altın anahtar gerçekte hangi kutudadır?",
          spaceType: "logic-matrix-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: Kırmızı, Mavi ve Yeşil sandıklar üzerindeki ifadeler:\nKırmızı: 'Anahtar bu sandıktadır.'\nMavi: 'Anahtar bu sandıkta değildir.'\nYeşil: 'Anahtar Kırmızı sandıkta değildir.'\nRecher sadece TEK BİR ifadenin doğru (diğer ikisinin yalan) olduğunu söylüyor. Anahtar hangi sandıktadır?",
        hint: "İpucu: Varsayımda bulunma stratejisini kullan! Sırasıyla anahtarın Kırmızıda, Mavide veya Yeşilde olduğunu varsay. Her durum için ifadelerin doğruluk değerlerini matris tablosundan incele.",
        solution: "Çözüm: Anahtar Mavi sandıkta olsun. Kırmızı ifadesi ('Anahtar kırmızıda') -> YALAN. Mavi ifadesi ('Anahtar mavide değil') -> YALAN. Yeşil ifadesi ('Anahtar kırmızıda değil') -> DOĞRU olur. Böylece sadece tek bir doğru ifade şartı (Yeşil) sağlanmış olur. Anahtar Mavi sandıktadır.",
        answer: "Mavi",
        speechCorrect: {
          avatar: "🧝‍♀️",
          name: "Kraliçe Jayden",
          text: "Sevgili çocuklar, ilk sandık varsayımını başarıyla çürüttünüz! Şimdi Recher'in son bir kez değiştirdiği ikinci sandık bilmecesine geçelim!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-logic">
              <p class="vis-instruction">Anahtarın hangi kutuda olduğunu varsayarak sandıklara tıkla ve sadece TEK BİR DOĞRU ifade üreten sandığı bul:</p>
              <div class="chests-row">
                <div class="chest-card" id="chest-red" data-chest="Red">
                  <div class="chest-icon">🟥</div>
                  <div class="chest-title">Kırmızı Sandık</div>
                  <div class="chest-statement font-handwritten">"Anahtar bu sandıktadır."</div>
                </div>
                <div class="chest-card" id="chest-blue" data-chest="Blue">
                  <div class="chest-icon">🟦</div>
                  <div class="chest-title">Mavi Sandık</div>
                  <div class="chest-statement font-handwritten">"Anahtar bu sandıkta değildir."</div>
                </div>
                <div class="chest-card" id="chest-green" data-chest="Green">
                  <div class="chest-icon">🟩</div>
                  <div class="chest-title">Yeşil Sandık</div>
                  <div class="chest-statement font-handwritten">"Anahtar Kırmızı sandıkta değildir."</div>
                </div>
              </div>
              
              <div class="logic-table-wrapper">
                <table class="logic-table">
                  <thead>
                    <tr>
                      <th>Varsayılan Anahtar Konumu</th>
                      <th>Kırmızı Yazısı</th>
                      <th>Mavi Yazısı</th>
                      <th>Yeşil Yazısı</th>
                      <th>Doğru İfade Sayısı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="row-assume-red">
                      <td>Kırmızı'da ise</td>
                      <td class="cell-status" id="s-red-red">-</td>
                      <td class="cell-status" id="s-red-blue">-</td>
                      <td class="cell-status" id="s-red-green">-</td>
                      <td class="cell-count" id="c-red">-</td>
                    </tr>
                    <tr id="row-assume-blue">
                      <td>Mavi'de ise</td>
                      <td class="cell-status" id="s-blue-red">-</td>
                      <td class="cell-status" id="s-blue-blue">-</td>
                      <td class="cell-status" id="s-blue-green">-</td>
                      <td class="cell-count" id="c-blue">-</td>
                    </tr>
                    <tr id="row-assume-green">
                      <td>Yeşil'de ise</td>
                      <td class="cell-status" id="s-green-red">-</td>
                      <td class="cell-status" id="s-green-blue">-</td>
                      <td class="cell-status" id="s-green-green">-</td>
                      <td class="cell-count" id="c-green">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="logic-explain" id="logic-explain">Sandıklardan birine tıklayarak mantıksal doğruluk durumlarını tablo üzerinden analiz et!</div>
            </div>
          `;

          const chests = container.querySelectorAll('.chest-card');
          const explain = container.querySelector('#logic-explain');

          const data = {
            Red: {
              row: container.querySelector('#row-assume-red'),
              statuses: {
                red: { el: container.querySelector('#s-red-red'), isTrue: true },
                blue: { el: container.querySelector('#s-red-blue'), isTrue: true },
                green: { el: container.querySelector('#s-red-green'), isTrue: false }
              },
              countEl: container.querySelector('#c-red'),
              explainText: "<strong>Kırmızı Sandık Varsayımı:</strong> Kırmızı ifadesi DOĞRU ve Mavi ifadesi DOĞRU olur (2 Doğru). Bu durum Recher'in 'sadece tek bir doğru ifade var' kuralına uyuyor mu? Tabloyu kontrol et!"
            },
            Blue: {
              row: container.querySelector('#row-assume-blue'),
              statuses: {
                red: { el: container.querySelector('#s-blue-red'), isTrue: false },
                blue: { el: container.querySelector('#s-blue-blue'), isTrue: false },
                green: { el: container.querySelector('#s-blue-green'), isTrue: true }
              },
              countEl: container.querySelector('#c-blue'),
              explainText: "<strong>Mavi Sandık Varsayımı:</strong> Kırmızı ifadesi YALAN, Mavi ifadesi YALAN ve Yeşil ifadesi DOĞRU olur. Tablodaki Doğru sayısı sütununu incele!"
            },
            Green: {
              row: container.querySelector('#row-assume-green'),
              statuses: {
                red: { el: container.querySelector('#s-green-red'), isTrue: false },
                blue: { el: container.querySelector('#s-green-blue'), isTrue: true },
                green: { el: container.querySelector('#s-green-green'), isTrue: true }
              },
              countEl: container.querySelector('#c-green'),
              explainText: "<strong>Yeşil Sandık Varsayımı:</strong> Mavi ifadesi DOĞRU ve Yeşil ifadesi DOĞRU olur (2 Doğru). Bu satırı da tablodan incele!"
            }
          };

          chests.forEach(chest => {
            chest.addEventListener('click', () => {
              playClick();
              chests.forEach(c => c.classList.remove('chest-card--active'));
              Object.values(data).forEach(d => d.row.classList.remove('row-assume--active'));
              
              const val = chest.getAttribute('data-chest');
              chest.classList.add('chest-card--active');
              
              const currentData = data[val];
              currentData.row.classList.add('row-assume--active');
              
              let trueCount = 0;
              Object.keys(currentData.statuses).forEach(key => {
                const stat = currentData.statuses[key];
                stat.el.textContent = stat.isTrue ? "DOĞRU" : "YALAN";
                stat.el.className = `cell-status ${stat.isTrue ? 'cell-status--true' : 'cell-status--false'}`;
                if (stat.isTrue) trueCount++;
              });
              
              currentData.countEl.textContent = `${trueCount} Doğru`;
              currentData.countEl.className = `cell-count ${trueCount === 1 ? 'cell-count--valid' : 'cell-count--invalid'}`;
              
              explain.innerHTML = currentData.explainText;
            });
          });
        }
      },
      {
        question: "2. Görev: Kraliçe'nin son bilmecesi:\nKırmızı: 'Anahtar Yeşil sandıktadır.'\nMavi: 'Anahtar bu sandıktadır (Mavi).'\nYeşil: 'Anahtar Mavi sandıkta değildir.'\nRecher bu kez ifadelerden sadece BİRİNİN YALAN (diğer ikisinin doğru) olduğunu söylüyor. Anahtar hangi sandıktadır?",
        hint: "İpucu: İpuçlarını tersine düşün! Sadece tek bir Yalan ifade barındıran (2 Doğru veren) satırı bulmak için sandıkları test et.",
        solution: "Çözüm: Anahtar Yeşil sandıkta olsun. Kırmızı ifadesi ('Anahtar yeşilde') -> DOĞRU. Mavi ifadesi ('Anahtar mavide') -> YALAN. Yeşil ifadesi ('Anahtar mavide değil') -> DOĞRU olur. Böylece sadece tek bir yalan (Mavi ifadesi) içeren durum sağlanmış olur. Anahtar Yeşil sandıktadır.",
        answer: "Yeşil",
        speechCorrect: {
          avatar: "🧝‍♀️",
          name: "Kraliçe Jayden",
          text: "Anahtar döndü ve son kilit açıldı! Kapı nihayet ardına kadar açılıyor. Gelin ve beni bu zindandan kurtarın!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-logic">
              <p class="vis-instruction">Anahtarın konumunu simüle ederek tablodan sadece TEK BİR YALAN (2 Doğru) üreten sandığı belirle:</p>
              <div class="chests-row">
                <div class="chest-card" id="chest-red" data-chest="Red">
                  <div class="chest-icon">🟥</div>
                  <div class="chest-title">Kırmızı Sandık</div>
                  <div class="chest-statement font-handwritten">"Anahtar Yeşil sandıktadır."</div>
                </div>
                <div class="chest-card" id="chest-blue" data-chest="Blue">
                  <div class="chest-icon">🟦</div>
                  <div class="chest-title">Mavi Sandık</div>
                  <div class="chest-statement font-handwritten">"Anahtar bu sandıktadır."</div>
                </div>
                <div class="chest-card" id="chest-green" data-chest="Green">
                  <div class="chest-icon">🟩</div>
                  <div class="chest-title">Yeşil Sandık</div>
                  <div class="chest-statement font-handwritten">"Anahtar Mavi sandıkta değildir."</div>
                </div>
              </div>
              
              <div class="logic-table-wrapper">
                <table class="logic-table">
                  <thead>
                    <tr>
                      <th>Varsayılan Anahtar Konumu</th>
                      <th>Kırmızı Yazısı</th>
                      <th>Mavi Yazısı</th>
                      <th>Yeşil Yazısı</th>
                      <th>Doğru İfade Sayısı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="row-assume-red">
                      <td>Kırmızı'da ise</td>
                      <td class="cell-status" id="s-red-red">-</td>
                      <td class="cell-status" id="s-red-blue">-</td>
                      <td class="cell-status" id="s-red-green">-</td>
                      <td class="cell-count" id="c-red">-</td>
                    </tr>
                    <tr id="row-assume-blue">
                      <td>Mavi'de ise</td>
                      <td class="cell-status" id="s-blue-red">-</td>
                      <td class="cell-status" id="s-blue-blue">-</td>
                      <td class="cell-status" id="s-blue-green">-</td>
                      <td class="cell-count" id="c-blue">-</td>
                    </tr>
                    <tr id="row-assume-green">
                      <td>Yeşil'de ise</td>
                      <td class="cell-status" id="s-green-red">-</td>
                      <td class="cell-status" id="s-green-blue">-</td>
                      <td class="cell-status" id="s-green-green">-</td>
                      <td class="cell-count" id="c-green">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="logic-explain" id="logic-explain">Kutuları test etmek için sandıklardan birine tıkla!</div>
            </div>
          `;

          const chests = container.querySelectorAll('.chest-card');
          const explain = container.querySelector('#logic-explain');

          const data = {
            Red: {
              row: container.querySelector('#row-assume-red'),
              statuses: {
                red: { el: container.querySelector('#s-red-red'), isTrue: false },
                blue: { el: container.querySelector('#s-red-blue'), isTrue: false },
                green: { el: container.querySelector('#s-red-green'), isTrue: true }
              },
              countEl: container.querySelector('#c-red'),
              explainText: "<strong>Kırmızı Sandık Varsayımı:</strong> Kırmızı ifadesi YALAN, Mavi ifadesi YALAN, Yeşil ifadesi DOĞRU olur (1 Doğru, 2 Yalan). Yani 2 Yalan ifade oluşur. Kuralı sağlar mı?"
            },
            Blue: {
              row: container.querySelector('#row-assume-blue'),
              statuses: {
                red: { el: container.querySelector('#s-blue-red'), isTrue: false },
                blue: { el: container.querySelector('#s-blue-blue'), isTrue: true },
                green: { el: container.querySelector('#s-blue-green'), isTrue: false }
              },
              countEl: container.querySelector('#c-blue'),
              explainText: "<strong>Mavi Sandık Varsayımı:</strong> Kırmızı ifadesi YALAN, Mavi ifadesi DOĞRU, Yeşil ifadesi YALAN olur (1 Doğru, 2 Yalan). Burada da 2 Yalan ifade vardır."
            },
            Green: {
              row: container.querySelector('#row-assume-green'),
              statuses: {
                red: { el: container.querySelector('#s-green-red'), isTrue: true },
                blue: { el: container.querySelector('#s-green-blue'), isTrue: false },
                green: { el: container.querySelector('#s-green-green'), isTrue: true }
              },
              countEl: container.querySelector('#c-green'),
              explainText: "<strong>Yeşil Sandık Varsayımı:</strong> Kırmızı ifadesi DOĞRU, Mavi ifadesi YALAN, Yeşil ifadesi DOĞRU olur (2 Doğru, 1 Yalan). Yani sadece tek bir Yalan ifade vardır! Tablodaki satırı kontrol et!"
            }
          };

          chests.forEach(chest => {
            chest.addEventListener('click', () => {
              playClick();
              chests.forEach(c => c.classList.remove('chest-card--active'));
              Object.values(data).forEach(d => d.row.classList.remove('row-assume--active'));
              
              const val = chest.getAttribute('data-chest');
              chest.classList.add('chest-card--active');
              
              const currentData = data[val];
              currentData.row.classList.add('row-assume--active');
              
              let trueCount = 0;
              Object.keys(currentData.statuses).forEach(key => {
                const stat = currentData.statuses[key];
                stat.el.textContent = stat.isTrue ? "DOĞRU" : "YALAN";
                stat.el.className = `cell-status ${stat.isTrue ? 'cell-status--true' : 'cell-status--false'}`;
                if (stat.isTrue) trueCount++;
              });
              
              currentData.countEl.textContent = `${trueCount} Doğru`;
              currentData.countEl.className = `cell-count ${trueCount === 2 ? 'cell-count--valid' : 'cell-count--invalid'}`;
              
              explain.innerHTML = currentData.explainText;
            });
          });
        }
      }
    ]
  }
];
