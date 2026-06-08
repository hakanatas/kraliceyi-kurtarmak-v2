// Mathematical Puzzles data and interactive visualizers for "Kraliçeyi Kurtarmak"
// 2 Tasks per gate (Total 10 tasks) - Answers are hidden from pre-solve visualizations
// Includes speechCorrect dynamic dialogue feedback objects
import { playClick } from './audio.js';
import gsap from 'gsap';

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
    title: "5. Kapı: Kamyon Karşılaşması (Hız ve Zaman)",
    chapter: "Kanyon Geçidi",
    character: "Sam",
    avatar: "👦",
    narrative: "Aleks ve arkadaşları kanyonun iki ucundan birbirlerine doğru hareket eden Recher'in yük kamyonlarını görürler. Kapıdaki yazıt şöyle der: 'Kanyonun iki ucundaki A ve B kalelerinden aynı anda hareket eden iki kamyonun hızları saatte 45 km ve 54 km'dir. Bu iki araç 20 dakika sonra karşılaştıklarına göre, iki kale arasındaki toplam mesafe kaç kilometredir?'",
    worksheet: {
      title: "Kamyon Karşılaşması (Hız ve Zaman)",
      topic: "Hız, Zaman ve Yol Problemleri",
      outcome: "Aynı anda birbirine doğru hareket eden iki nesnenin karşılaşma süresini ve toplam yolu hesaplar.",
      questions: [
        {
          id: 1,
          text: "Hızları saatte 60 km ve 80 km olan iki otomobil, aralarında 280 km mesafe olan iki şehirden aynı anda birbirlerine doğru yola çıkıyorlar. Bu araçlar kaç saat sonra karşılaşırlar? (Çözüm adımlarını yazınız.)",
          spaceType: "speed-truck-1"
        },
        {
          id: 2,
          text: "A ve B şehirlerinden aynı anda birbirine doğru hareket eden iki kamyonun hızları sırasıyla 50 km/sa ve 40 km/sa'dir. Bu araçlar yola çıktıktan 3 saat sonra karşılaştıklarına göre A ve B şehirleri arasındaki mesafe kaç kilometredir?",
          spaceType: "speed-truck-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: Kamyonlar saatte 45 km and 54 km hızlarla birbirine doğru gidiyor. 20 dakika sonra karşılaştıklarına göre, A ve B kaleleri arasındaki mesafe kaç kilometredir? (Hızları toplayıp saat cinsinden zamanla çarpın: 20 dakika = 1/3 saattir.)",
        hint: "İpucu: Kamyonlar birbirine doğru geldiği için hızlarını topla: 45 + 54 = 99 km/sa. Karşılaşma süresi 20 dakika, yani 1 saatin 3'te biridir (20/60 = 1/3 sa). Toplam hızı bu süreyle çarp.",
        solution: "Çözüm: Toplam hız = 45 + 54 = 99 km/sa. Süre = 20 dakika = 20/60 = 1/3 saattir. Yol = Hız * Zaman formülünden: Yol = 99 * (1/3) = 33 km olur.",
        answer: 33,
        speechCorrect: {
          avatar: "👦",
          name: "Sam",
          text: "Harika! Hızları birleştirip zamanla çarparak kanyonun genişliğini bulduk ve kamyonların karşılaşmasını simüle ettik. Şimdi kanyon köprüsünden geçebiliriz!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-speed">
              <p class="vis-instruction">Kamyonların hareketini görmek için 'Kamyonları Çalıştır' butonuna tıkla:</p>
              <div class="speed-road">
                <div class="speed-flag speed-flag--left">A Kalesi</div>
                <div class="speed-truck speed-truck--left" id="truck-l">🚚<span class="truck-label">45 km/sa</span></div>
                <div class="speed-truck speed-truck--right" id="truck-r">🚛<span class="truck-label">54 km/sa</span></div>
                <div class="speed-flag speed-flag--right">B Kalesi</div>
                <div class="meeting-point" id="meet-point" style="display:none;">💥 Karşılaşma Noktası (20. Dakika)</div>
              </div>
              <div class="vis-actions" style="margin-top: 1.5rem;">
                <button class="btn btn--secondary" id="btn-run-trucks">Kamyonları Çalıştır 🏁</button>
                <button class="btn btn--secondary" id="btn-reset-trucks" style="display:none;">Sıfırla 🔄</button>
              </div>
              <div class="speed-explain" id="speed-explain">Kamyonları yola çıkarmak için butona tıkla!</div>
            </div>
          `;

          const btnRun = container.querySelector('#btn-run-trucks');
          const btnReset = container.querySelector('#btn-reset-trucks');
          const truckL = container.querySelector('#truck-l');
          const truckR = container.querySelector('#truck-r');
          const meetPoint = container.querySelector('#meet-point');
          const explain = container.querySelector('#speed-explain');

          btnRun.addEventListener('click', () => {
            playClick();
            btnRun.style.display = 'none';
            btnReset.style.display = 'inline-block';
            
            gsap.to(truckL, { left: '42%', duration: 2, ease: 'power1.inOut' });
            gsap.to(truckR, { right: '53%', duration: 2, ease: 'power1.inOut', onComplete: () => {
              meetPoint.style.display = 'block';
              gsap.fromTo(meetPoint, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' });
              explain.innerHTML = `
                <strong>Karşılaşma Analizi:</strong><br>
                - Kamyonlar birbirine doğru hareket ettiği için saatteki yaklaşma hızları: <span class="text-accent">45 + 54 = 99 km</span>'dir.<br>
                - 20 dakika karşılaşma süresi, 1 saatin 3'te biridir (20/60 = 1/3 saat).<br>
                - Toplam yol: 99 × (1/3) = <span class="text-emerald" style="font-weight:bold;">33 km</span>.<br>
                Cevabı hesaplayıp aşağıdaki kutuya girin!
              `;
            } });
          });

          btnReset.addEventListener('click', () => {
            playClick();
            btnReset.style.display = 'none';
            btnRun.style.display = 'inline-block';
            meetPoint.style.display = 'none';
            gsap.set(truckL, { left: '10px' });
            gsap.set(truckR, { right: '10px' });
            explain.textContent = "Kamyonları yola çıkarmak için butona tıkla!";
          });
        }
      },
      {
        question: "2. Görev: Kanyonun diğer tarafındaki iki kamyonun hızları 50 km/sa ve 60 km/sa'dir. Karşılaşma süreleri yine 30 dakika (1/2 saat) olduğuna göre aralarındaki toplam mesafe kaç kilometredir?",
        hint: "İpucu: Hızları toplayıp (50 + 60 = 110 km/sa) süre olan 1/2 saat ile çarpın.",
        solution: "Çözüm: Hızlar toplamı = 50 + 60 = 110 km/sa. Süre = 30 dakika = 1/2 saat. Yol = 110 * 1/2 = 55 km olur.",
        answer: 55,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Hayır! Kanyon yolundaki kamyonları çarpmadan yönlendirdiniz... Ama önünüzdeki parıldayan gümüş kulelerin yükseklik kuralını çözemezsiniz!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-speed">
              <p class="vis-instruction">İkinci karşılaşma durumunu simüle et:</p>
              <div class="speed-road">
                <div class="speed-flag speed-flag--left">A Kalesi</div>
                <div class="speed-truck speed-truck--left" id="truck-l">🚚<span class="truck-label">50 km/sa</span></div>
                <div class="speed-truck speed-truck--right" id="truck-r">🚛<span class="truck-label">60 km/sa</span></div>
                <div class="speed-flag speed-flag--right">B Kalesi</div>
                <div class="meeting-point" id="meet-point" style="display:none;">💥 Karşılaşma Noktası (30. Dakika)</div>
              </div>
              <div class="vis-actions" style="margin-top: 1.5rem;">
                <button class="btn btn--secondary" id="btn-run-trucks">Kamyonları Çalıştır 🏁</button>
                <button class="btn btn--secondary" id="btn-reset-trucks" style="display:none;">Sıfırla 🔄</button>
              </div>
              <div class="speed-explain" id="speed-explain">Kamyonları çalıştırmak için butona tıkla!</div>
            </div>
          `;

          const btnRun = container.querySelector('#btn-run-trucks');
          const btnReset = container.querySelector('#btn-reset-trucks');
          const truckL = container.querySelector('#truck-l');
          const truckR = container.querySelector('#truck-r');
          const meetPoint = container.querySelector('#meet-point');
          const explain = container.querySelector('#speed-explain');

          btnRun.addEventListener('click', () => {
            playClick();
            btnRun.style.display = 'none';
            btnReset.style.display = 'inline-block';
            
            gsap.to(truckL, { left: '42%', duration: 2, ease: 'power1.inOut' });
            gsap.to(truckR, { right: '53%', duration: 2, ease: 'power1.inOut', onComplete: () => {
              meetPoint.style.display = 'block';
              gsap.fromTo(meetPoint, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' });
              explain.innerHTML = `
                <strong>Karşılaşma Analizi:</strong><br>
                - Kamyonlar birbirine doğru hareket ettiği için saatteki yaklaşma hızları: <span class="text-accent">50 + 60 = 110 km</span>'dir.<br>
                - 30 dakika karşılaşma süresi, 1 saatin yarısıdır (1/2 saat).<br>
                - Toplam yol: 110 × (1/2) = <span class="text-emerald" style="font-weight:bold;">55 km</span>.<br>
                Hesaplamayı yapıp cevabını aşağıya girin!
              `;
            } });
          });

          btnReset.addEventListener('click', () => {
            playClick();
            btnReset.style.display = 'none';
            btnRun.style.display = 'inline-block';
            meetPoint.style.display = 'none';
            gsap.set(truckL, { left: '10px' });
            gsap.set(truckR, { right: '10px' });
            explain.textContent = "Kamyonları çalıştırmak için butona tıkla!";
          });
        }
      }
    ]
  },
  {
    id: 6,
    title: "6. Kapı: Gümüş Kuleler (Yükseklik Örüntüleri)",
    chapter: "Kraliyet Bahçesi",
    character: "Vanessa",
    avatar: "👧",
    narrative: "Bahçede yan yana sıralanmış gümüş kuleler yükselmektedir. Vanessa kulelerin altındaki yazıyı okur: 'Kulelerin yükseklikleri belirli bir kurala göre sıralanmıştır. İlk kule 3 metre, ikinci kule 7 metre, üçüncü kule 11 metredir. Bu şekilde devam eden gümüş kulelerin 5. olanının yüksekliğini bularak kapıyı açın!'",
    worksheet: {
      title: "Gümüş Kuleler (Yükseklik Örüntüleri)",
      topic: "Sayı ve Şekil Örüntüleri",
      outcome: "Aritmetik olarak artan örüntülerde terimler arasındaki ilişkiyi bulur ve verilmeyen terimi hesaplar.",
      questions: [
        {
          id: 1,
          text: "Bir sayı örüntüsü 8'den başlayıp her adımda 6 artarak ilerlemektedir. Bu örüntünün 6. adımındaki sayı kaçtır? (Örüntüyü adım adım yazarak bulunuz.)",
          spaceType: "pattern-towers-1"
        },
        {
          id: 2,
          text: "Yükseklikleri sırasıyla 5 cm, 12 cm, 19 cm, 26 cm... şeklinde artan bir bitkinin 7. haftanın sonundaki boyu kaç santimetre olur?",
          spaceType: "pattern-towers-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: İlk kulesi 3 m, ikincisi 7 m, üçüncüsü 11 m olan gümüş kuleler örüntüsünde 5. kulenin yüksekliği kaç metredir?",
        hint: "İpucu: Örüntünün kuralını bul! Sayılar kaçar kaçar artıyor? 3, 7, 11... Her adımda 4 eklendiğini göreceksin. 4. ve 5. kulelerin yüksekliklerini bu kurala göre hesapla.",
        solution: "Çözüm: Kule yükseklikleri örüntüsü: 1. kule = 3m, 2. kule = 7m (+4), 3. kule = 11m (+4) şeklindedir. Kural: Her kule bir öncekinden 4 metre daha yüksektir. O halde: 4. kule = 11 + 4 = 15m, 5. kule = 15 + 4 = 19m olur.",
        answer: 19,
        speechCorrect: {
          avatar: "👧",
          name: "Vanessa",
          text: "Kulelerin yükseklik örüntüsünü çözdük! 5. kulenin tepesinden sihirli geçidin anahtarını aldım. Şimdi ikinci kulenin örüntüsüne geçelim!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-towers">
              <p class="vis-instruction">Kulelerin yüksekliklerini görmek ve örüntüyü incelemek için aradaki soru işaretlerine tıkla:</p>
              <div class="towers-row">
                <div class="tower-col" id="t-col-1" style="height: 50px;" data-height="3">
                  <div class="t-col-roof"></div><div class="t-col-body">3m</div>
                </div>
                <div class="tower-col-diff" id="t-diff-1">?</div>
                <div class="tower-col" id="t-col-2" style="height: 85px;" data-height="7">
                  <div class="t-col-roof"></div><div class="t-col-body">7m</div>
                </div>
                <div class="tower-col-diff" id="t-diff-2">?</div>
                <div class="tower-col" id="t-col-3" style="height: 120px;" data-height="11">
                  <div class="t-col-roof"></div><div class="t-col-body">11m</div>
                </div>
                <div class="tower-col-diff" id="t-diff-3">?</div>
                <div class="tower-col" id="t-col-4" style="height: 155px;" data-height="15">
                  <div class="t-col-roof"></div><div class="t-col-body">?</div>
                </div>
                <div class="tower-col-diff" id="t-diff-4">?</div>
                <div class="tower-col tower-col--target" id="t-col-5" style="height: 190px;" data-height="19">
                  <div class="t-col-roof"></div><div class="t-col-body">?</div>
                </div>
              </div>
              <div class="towers-explain" id="towers-explain">Farkları görmek için aradaki ? işaretlerine tıkla!</div>
            </div>
          `;

          const cols = container.querySelectorAll('.tower-col');
          const diffs = container.querySelectorAll('.tower-col-diff');
          const explain = container.querySelector('#towers-explain');

          diffs.forEach((diff, i) => {
            diff.addEventListener('click', () => {
              playClick();
              diff.textContent = "+4";
              diff.classList.add('tower-col-diff--active');
              
              if (i === 0) explain.innerHTML = "1. kule ile 2. kule arasındaki fark: <span class='text-accent'>4 metre</span>.";
              else if (i === 1) explain.innerHTML = "2. kule ile 3. kule arasındaki fark: <span class='text-accent'>4 metre</span>.";
              else if (i === 2) {
                cols[3].querySelector('.t-col-body').textContent = "15m";
                cols[3].classList.add('tower-col--revealed');
                explain.innerHTML = "Kurala göre 4. kulenin yüksekliği: 11 + 4 = <span class='text-accent'>15 metre</span> olur.";
              }
              else if (i === 3) {
                cols[4].querySelector('.t-col-body').textContent = "?";
                cols[4].classList.add('tower-col--revealed');
                explain.innerHTML = "Örüntü sürekli 4 metre artarak gidiyor. Bu durumda 5. kulenin yüksekliği kaç metre olmalıdır? Cevabını hesapla ve aşağıya gir!";
              }
            });
          });
        }
      },
      {
        question: "2. Görev: İkinci kule sırasındaki örüntü: 5, 12, 19, 26, [?] şeklindedir. Örüntüdeki 5. terim kaçtır?",
        hint: "İpucu: Farkları incele! 5'ten 12'ye artış kaç? 7 artış var. Örüntü 7'şer 7'şer artmaktadır. Son sayıya 7 ekle.",
        solution: "Çözüm: Artış miktarı: 12 - 5 = 7'dir. 19 - 12 = 7, 26 - 19 = 7'dir. Kural: Her sayı bir öncekinden 7 fazladır. O halde 5. terim: 26 + 7 = 33 olmalıdır.",
        answer: 33,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Olamaz! Gümüş kulelerin şifresini de çözdünüz... Ama karanlık mağaradaki tek gözlülerin mağara gözü sayacı sizi durduracak!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-towers">
              <p class="vis-instruction">İkinci örüntünün farklarını görmek için soru işaretlerine tıkla:</p>
              <div class="towers-row">
                <div class="tower-col" id="t-col-1" style="height: 50px;" data-height="5">
                  <div class="t-col-roof"></div><div class="t-col-body">5</div>
                </div>
                <div class="tower-col-diff" id="t-diff-1">?</div>
                <div class="tower-col" id="t-col-2" style="height: 85px;" data-height="12">
                  <div class="t-col-roof"></div><div class="t-col-body">12</div>
                </div>
                <div class="tower-col-diff" id="t-diff-2">?</div>
                <div class="tower-col" id="t-col-3" style="height: 120px;" data-height="19">
                  <div class="t-col-roof"></div><div class="t-col-body">19</div>
                </div>
                <div class="tower-col-diff" id="t-diff-3">?</div>
                <div class="tower-col" id="t-col-4" style="height: 155px;" data-height="26">
                  <div class="t-col-roof"></div><div class="t-col-body">26</div>
                </div>
                <div class="tower-col-diff" id="t-diff-4">?</div>
                <div class="tower-col tower-col--target" id="t-col-5" style="height: 190px;" data-height="33">
                  <div class="t-col-roof"></div><div class="t-col-body">?</div>
                </div>
              </div>
              <div class="towers-explain" id="towers-explain">Farkları görmek için aradaki ? işaretlerine tıkla!</div>
            </div>
          `;

          const cols = container.querySelectorAll('.tower-col');
          const diffs = container.querySelectorAll('.tower-col-diff');
          const explain = container.querySelector('#towers-explain');

          diffs.forEach((diff, i) => {
            diff.addEventListener('click', () => {
              playClick();
              diff.textContent = "+7";
              diff.classList.add('tower-col-diff--active');
              
              if (i === 0) explain.innerHTML = "5'ten 12'ye artış: <span class='text-accent'>7</span>.";
              else if (i === 1) explain.innerHTML = "12'den 19'a artış: <span class='text-accent'>7</span>.";
              else if (i === 2) explain.innerHTML = "19'dan 26'ya artış: <span class='text-accent'>7</span>.";
              else if (i === 3) {
                cols[4].querySelector('.t-col-body').textContent = "?";
                cols[4].classList.add('tower-col--revealed');
                explain.innerHTML = "Örüntü kuralı sürekli +7 şeklinde ilerliyor. 26'ya 7 ekleyerek 5. terimi hesapla ve gir!";
              }
            });
          });
        }
      }
    ]
  },
  {
    id: 7,
    title: "7. Kapı: Monoculus Soyu (Canavar Gözleri)",
    chapter: "Karanlık Mağara",
    character: "Monoculus",
    avatar: "👁️",
    narrative: "Aleks ve arkadaşlarının karşısına Monoculus'un arkadaşları çıkar. Bazıları tek gözlü, bazıları ise 3 gözlüdür. Monoculus fısıldar: 'Mağarada toplam 9 canavar arkadaşım var. Hepimizin toplam göz sayısı 17'dir. Acaba aramızda kaç tane 3 gözlü canavar vardır?'",
    worksheet: {
      title: "Monoculus Soyu (Göz Sayıları)",
      topic: "Dört İşlem Problemleri ve Modelleme",
      outcome: "İki farklı bilinmeyen barındıran problemleri varsayımda bulunma veya kutu modelleme yöntemiyle çözer.",
      questions: [
        {
          id: 1,
          text: "Bir çiftlikteki tavuk ve tavşanların toplam sayısı 15'tir. Bu hayvanların toplam ayak sayısı 44 olduğuna göre çiftlikte kaç tavşan vardır? (Hayvanları kutu modeli ile çizerek çözünüz.)",
          spaceType: "monster-eyes-1"
        },
        {
          id: 2,
          text: "20 soruluk bir sınavda her doğru cevap için 5 puan verilmekte, her yanlış cevap için ise 2 puan silinmektedir. Tüm soruları yanıtlayan bir öğrenci 58 puan aldığına göre kaç soruyu doğru yanıtlamıştır?",
          spaceType: "monster-eyes-2"
        }
      ]
    },
    tasks: [
      {
        question: "1. Görev: Toplamda 9 canavarın bulunduğu ve toplam göz sayısının 17 olduğu bu grupta, 3 gözlü canavarların sayısı kaçtır?",
        hint: "İpucu: Varsayımda bulun! Eğer canavarların hepsi 1 gözlü olsaydı toplam 9 * 1 = 9 göz olurdu. Kalan 17 - 9 = 8 gözü canavarlara ikişer ikişer dağıtarak (çünkü 3 gözlünün 1 gözlüye göre 2 fazla gözü vardır) kaç canavarın 3 gözlü olduğunu bul.",
        solution: "Çözüm: Hepsi 1 gözlü olsaydı: 9 * 1 = 9 göz olurdu. Gerçek göz sayısı 17 olduğuna göre fark: 17 - 9 = 8 gözdür. Her 3 gözlü canavarın 1 gözlüden 2 fazla gözü vardır. 8 / 2 = 4 canavar 3 gözlüdür. Kalan 9 - 4 = 5 canavar ise 1 gözlüdür. Kontrol edelim: (4 * 3) + (5 * 1) = 12 + 5 = 17 göz. Doğru!",
        answer: 4,
        speechCorrect: {
          avatar: "👁️",
          name: "Monoculus",
          text: "Harika! Benim soyumun göz bilmecesini çözdün. 3 gözlü kardeşlerim sana yolu gösterecek. Ama durun, mağarada ikinci bir canavar grubu daha var!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-eyes">
              <p class="vis-instruction">3 Gözlü canavar sayısını ayarlayarak toplam göz sayısını 17 yapın:</p>
              
              <div class="eyes-layout">
                <div class="eyes-summary-box">
                  <div class="sum-row">Toplam Canavar: <span class="sum-val">9</span></div>
                  <div class="sum-row">Hedef Göz Sayısı: <span class="sum-val text-accent" style="font-weight:bold;">17</span></div>
                  <div class="sum-row">Şu Anki Göz: <span class="sum-val" id="current-eyes-lbl">9</span></div>
                </div>
                
                <div class="eyes-controls">
                  <div class="control-group">
                    <label>3 Gözlü Canavar Sayısı (<span id="three-eyes-lbl" style="font-weight:bold; color:var(--color-gold);">0</span>):</label>
                    <div class="counter-buttons">
                      <button class="btn-count" id="btn-dec-3">-</button>
                      <button class="btn-count" id="btn-inc-3">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="monsters-grid" id="monsters-grid"></div>
              <div class="eyes-explain" id="eyes-explain">Canavarların hepsi şu an 1 gözlü (toplam 9 göz). 3 gözlü canavarların sayısını arttırarak toplam gözü 17 yapın!</div>
            </div>
          `;

          const btnInc = container.querySelector('#btn-inc-3');
          const btnDec = container.querySelector('#btn-dec-3');
          const threeLbl = container.querySelector('#three-eyes-lbl');
          const currentLbl = container.querySelector('#current-eyes-lbl');
          const grid = container.querySelector('#monsters-grid');
          const explain = container.querySelector('#eyes-explain');

          let threeCount = 0;
          const totalMonsters = 9;

          function updateMonsters() {
            threeLbl.textContent = threeCount;
            const oneCount = totalMonsters - threeCount;
            const currentEyes = (threeCount * 3) + (oneCount * 1);
            currentLbl.textContent = currentEyes;

            grid.innerHTML = '';
            for (let i = 0; i < totalMonsters; i++) {
              const monster = document.createElement('div');
              monster.className = 'monster-item';
              if (i < threeCount) {
                monster.classList.add('monster-item--three');
                monster.innerHTML = `👾<span class="m-eyes-badge">👁️👁️👁️</span>`;
              } else {
                monster.innerHTML = `👾<span class="m-eyes-badge">👁️</span>`;
              }
              grid.appendChild(monster);
            }

            if (currentEyes === 17) {
              currentLbl.className = 'sum-val text-emerald';
              currentLbl.style.fontWeight = 'bold';
              explain.innerHTML = `
                <span class="text-emerald" style="font-weight:bold;">Tebrikler! Toplam Göz 17 Oldu!</span><br>
                - 3 Gözlü Canavar Sayısı = <span class="text-gold">${threeCount}</span><br>
                - 1 Gözlü Canavar Sayısı = <span class="text-gold">${oneCount}</span><br>
                Cevap olan 3 gözlü canavar sayısını aşağıdaki kutuya girin!
              `;
            } else {
              currentLbl.className = 'sum-val';
              currentLbl.style.fontWeight = 'normal';
              explain.textContent = `Toplam Göz: ${currentEyes} (Hedef: 17). Canavarları ayarlamaya devam et.`;
            }
          }

          btnInc.addEventListener('click', () => {
            playClick();
            if (threeCount < totalMonsters) {
              threeCount++;
              updateMonsters();
            }
          });

          btnDec.addEventListener('click', () => {
            playClick();
            if (threeCount > 0) {
              threeCount--;
              updateMonsters();
            }
          });

          updateMonsters();
        }
      },
      {
        question: "2. Görev: Mağaranın diğer köşesindeki ikinci canavar grubunda toplam 8 canavar vardır. Hepsi ya tek gözlü ya da 3 gözlüdür. Toplam göz sayısı 14 olduğuna göre, 3 gözlü canavarların sayısı kaçtır?",
        hint: "İpucu: Varsayım yap! Tamamı tek gözlü olsaydı 8 * 1 = 8 göz olurdu. Kalan 14 - 8 = 6 gözü ikişer ikişer dağıtarak kaç tane 3 gözlü olduğunu bul.",
        solution: "Çözüm: Hepsi 1 gözlü olsaydı: 8 * 1 = 8 göz olurdu. Gerçek göz 14 ise fark: 14 - 8 = 6 gözdür. Her 3 gözlü için +2 göz eklendiğinden: 6 / 2 = 3 canavar 3 gözlüdür.",
        answer: 3,
        speechCorrect: {
          avatar: "👑",
          name: "Kral Recher",
          text: "Lanet olsun! Canavar mağarasından da geçtiniz... Ama Kraliçe Jayden'ı esir tuttuğum son kapıdaki sandık yalan/doğru mantık problemini asla çözemeyeceksiniz!"
        },
        renderVisualizer: (container) => {
          container.innerHTML = `
            <div class="vis-eyes">
              <p class="vis-instruction">3 Gözlü canavar sayısını ayarlayarak toplam göz sayısını 14 yapın:</p>
              
              <div class="eyes-layout">
                <div class="eyes-summary-box">
                  <div class="sum-row">Toplam Canavar: <span class="sum-val">8</span></div>
                  <div class="sum-row">Hedef Göz Sayısı: <span class="sum-val text-accent" style="font-weight:bold;">14</span></div>
                  <div class="sum-row">Şu Anki Göz: <span class="sum-val" id="current-eyes-lbl">8</span></div>
                </div>
                
                <div class="eyes-controls">
                  <div class="control-group">
                    <label>3 Gözlü Canavar Sayısı (<span id="three-eyes-lbl" style="font-weight:bold; color:var(--color-gold);">0</span>):</label>
                    <div class="counter-buttons">
                      <button class="btn-count" id="btn-dec-3">-</button>
                      <button class="btn-count" id="btn-inc-3">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="monsters-grid" id="monsters-grid"></div>
              <div class="eyes-explain" id="eyes-explain">Canavarların hepsi şu an 1 gözlü (toplam 8 göz). 3 gözlü canavarların sayısını ayarlayarak toplam gözü 14 yapın!</div>
            </div>
          `;

          const btnInc = container.querySelector('#btn-inc-3');
          const btnDec = container.querySelector('#btn-dec-3');
          const threeLbl = container.querySelector('#three-eyes-lbl');
          const currentLbl = container.querySelector('#current-eyes-lbl');
          const grid = container.querySelector('#monsters-grid');
          const explain = container.querySelector('#eyes-explain');

          let threeCount = 0;
          const totalMonsters = 8;

          function updateMonsters() {
            threeLbl.textContent = threeCount;
            const oneCount = totalMonsters - threeCount;
            const currentEyes = (threeCount * 3) + (oneCount * 1);
            currentLbl.textContent = currentEyes;

            grid.innerHTML = '';
            for (let i = 0; i < totalMonsters; i++) {
              const monster = document.createElement('div');
              monster.className = 'monster-item';
              if (i < threeCount) {
                monster.classList.add('monster-item--three');
                monster.innerHTML = `👾<span class="m-eyes-badge">👁️👁️👁️</span>`;
              } else {
                monster.innerHTML = `👾<span class="m-eyes-badge">👁️</span>`;
              }
              grid.appendChild(monster);
            }

            if (currentEyes === 14) {
              currentLbl.className = 'sum-val text-emerald';
              currentLbl.style.fontWeight = 'bold';
              explain.innerHTML = `
                <span class="text-emerald" style="font-weight:bold;">Tebrikler! Toplam Göz 14 Oldu!</span><br>
                - 3 Gözlü Canavar Sayısı = <span class="text-gold">${threeCount}</span><br>
                - 1 Gözlü Canavar Sayısı = <span class="text-gold">${oneCount}</span><br>
                Cevap olan 3 gözlü canavar sayısını aşağıdaki kutuya girin!
              `;
            } else {
              currentLbl.className = 'sum-val';
              currentLbl.style.fontWeight = 'normal';
              explain.textContent = `Toplam Göz: ${currentEyes} (Hedef: 14). Canavarları ayarlamaya devam et.`;
            }
          }

          btnInc.addEventListener('click', () => {
            playClick();
            if (threeCount < totalMonsters) {
              threeCount++;
              updateMonsters();
            }
          });

          btnDec.addEventListener('click', () => {
            playClick();
            if (threeCount > 0) {
              threeCount--;
              updateMonsters();
            }
          });

          updateMonsters();
        }
      }
    ]
  },
  {
    id: 8,
    title: "8. Kapı: Kraliçe'nin Zindanı (Mantık Matrisi)",
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
