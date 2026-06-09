// Emerald Kingdom Rescue Certificate Generator (HTML Canvas)

export function generateCertificate(playerName, score, lang = 'tr') {
  // Create a high-res canvas (double scale for crisp rendering/printing)
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 1200;
  const ctx = canvas.getContext('2d');

  // Translation configuration
  const t = {
    tr: {
      kingdom: "ZÜMRÜT KRALLIĞI",
      title: "KAHRAMANLIK VE MATEMATİK BAŞARI SERTİFİKASI",
      line1: "Bu onurlu belge, Lugubriya Krallığı'nın karanlık zindanlarını aşarak",
      line2: "Kral Recher'in kurduğu zorlu matematik bilmecelerini çözen,",
      line3: "ve üstün problem çözme yeteneğiyle Zümrüt Kraliçe Jayden'ı kurtaran,",
      line4: "krallığın en cesur matematik kaşifine takdim edilmiştir.",
      energy: `Kalan Sihirli Kalem Enerjisi: %${score}`,
      date: "Tarih",
      locale: "tr-TR",
      approved: "Sertifikayı Onaylayan:",
      queenTitle: "İdilya Kraliçesi",
      teamTitle: "Kurtarma Ekibi Arkadaşları:",
      team: "Aleks, Sam & Vanessa",
      queenName: "Kraliçe Jayden",
      filename: `kraliceyi-kurtarmak-sertifika-${playerName.replace(/\s+/g, '-').toLowerCase()}.png`
    },
    en: {
      kingdom: "EMERALD KINGDOM",
      title: "CERTIFICATE OF HEROISM & MATH ACHIEVEMENT",
      line1: "This honorable certificate is presented to the bravest math explorer",
      line2: "who ventured through the dark dungeons of the Kingdom of Lugubria,",
      line3: "solved the challenging mathematical puzzles of King Recher,",
      line4: "and rescued Queen Jayden with outstanding problem-solving skills.",
      energy: `Remaining Magic Pencil Energy: ${score}%`,
      date: "Date",
      locale: "en-US",
      approved: "Approved by:",
      queenTitle: "Queen of Idilya",
      teamTitle: "Rescue Team Companions:",
      team: "Alex, Sam & Vanessa",
      queenName: "Queen Jayden",
      filename: `rescue-queen-jayden-certificate-${playerName.replace(/\s+/g, '-').toLowerCase()}.png`
    },
    ru: {
      kingdom: "ИЗУМРУДНОЕ КОРОЛЕВСТВО",
      title: "СЕРТИФИКАТ ГЕРОИЗМА И МАТЕМАТИЧЕСКИХ ДОСТИЖЕНИЙ",
      line1: "Настоящий почетный сертификат вручается отважному исследователю,",
      line2: "который преодолел темные подземелья Королевства Лугубрия,",
      line3: "решил сложные математические загадки Короля Решера,",
      line4: "и освободил Королеву Джейден с помощью выдающегося ума.",
      energy: `Оставшаяся энергия волшебного карандаша: ${score}%`,
      date: "Дата",
      locale: "ru-RU",
      approved: "Утверждено:",
      queenTitle: "Королева Идилии",
      teamTitle: "Товарищи по команде:",
      team: "Алекс, Сэм и Ванесса",
      queenName: "Королева Джейден",
      filename: `rescue-queen-certificate-${playerName.replace(/\s+/g, '-').toLowerCase()}.png`
    }
  };

  const activeLang = t[lang] || t.tr;

  // Colors
  const darkNavy = '#090d16';
  const emerald = '#10b981';
  const gold = '#fbbf24';
  const cream = '#fef3c7';

  // 1. Background Fill
  ctx.fillStyle = darkNavy;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Inner Frame (Gold Border)
  ctx.strokeStyle = gold;
  ctx.lineWidth = 6;
  ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

  // 3. Double Frame (Emerald Border)
  ctx.strokeStyle = emerald;
  ctx.lineWidth = 14;
  ctx.strokeRect(70, 70, canvas.width - 140, canvas.height - 140);
  
  ctx.strokeStyle = gold;
  ctx.lineWidth = 2;
  ctx.strokeRect(95, 95, canvas.width - 190, canvas.height - 190);

  // 4. Corner Ornaments (Gold & Emerald Stars/Filigrees)
  drawCornerOrnament(ctx, 95, 95, gold, emerald);
  drawCornerOrnament(ctx, canvas.width - 95, 95, gold, emerald, true, false);
  drawCornerOrnament(ctx, 95, canvas.height - 95, gold, emerald, false, true);
  drawCornerOrnament(ctx, canvas.width - 95, canvas.height - 95, gold, emerald, true, true);

  // 5. Title / Header
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Ribbon/Banner behind header
  ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
  ctx.fillRect(200, 150, canvas.width - 400, 120);
  ctx.strokeStyle = gold;
  ctx.lineWidth = 2;
  ctx.strokeRect(200, 150, canvas.width - 400, 120);

  ctx.fillStyle = gold;
  ctx.font = 'bold 50px "Cinzel", "Playfair Display", "Georgia", serif';
  ctx.fillText(activeLang.kingdom, canvas.width / 2, 190);
  
  ctx.fillStyle = cream;
  ctx.font = 'letter-spacing: 0.1em; 28px "Montserrat", "Arial", sans-serif';
  ctx.fillText(activeLang.title, canvas.width / 2, 240);

  // 6. Certificate Text
  ctx.fillStyle = 'rgba(254, 243, 199, 0.9)';
  ctx.font = 'italic 28px "Georgia", serif';
  ctx.fillText(activeLang.line1, canvas.width / 2, 400);
  ctx.fillText(activeLang.line2, canvas.width / 2, 450);
  
  // 7. Player Name (Large & Elegant)
  ctx.fillStyle = gold;
  ctx.font = 'bold 75px "Playfair Display", "Times New Roman", serif';
  // Highlight name with an underline glow
  ctx.fillText(playerName.toUpperCase(), canvas.width / 2, 570);
  
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 350, 620);
  ctx.lineTo(canvas.width / 2 + 350, 620);
  ctx.stroke();

  // 8. Description continued
  ctx.fillStyle = 'rgba(254, 243, 199, 0.9)';
  ctx.font = 'italic 28px "Georgia", serif';
  ctx.fillText(activeLang.line3, canvas.width / 2, 690);
  ctx.fillText(activeLang.line4, canvas.width / 2, 740);

  // 9. Pencil Energy Score
  ctx.fillStyle = emerald;
  ctx.font = 'bold 32px "Montserrat", sans-serif';
  ctx.fillText(activeLang.energy, canvas.width / 2, 830);

  // 10. Date and Signatures
  // Left: Date
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(254, 243, 199, 0.7)';
  ctx.font = '24px "Montserrat", sans-serif';
  const today = new Date().toLocaleDateString(activeLang.locale, { day: 'numeric', month: 'long', year: 'numeric' });
  ctx.fillText(`${activeLang.date}: ${today}`, 200, 960);
  
  // Right: Signature of Queen
  ctx.textAlign = 'right';
  ctx.fillText(activeLang.approved, canvas.width - 200, 930);
  
  ctx.fillStyle = gold;
  ctx.font = 'bold 36px "Brush Script MT", "Caveat", "Playfair Display", italic, serif';
  ctx.fillText(activeLang.queenName, canvas.width - 200, 980);
  
  ctx.fillStyle = 'rgba(254, 243, 199, 0.5)';
  ctx.font = '18px "Montserrat", sans-serif';
  ctx.fillText(activeLang.queenTitle, canvas.width - 200, 1010);

  // Center Signature of the team
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(254, 243, 199, 0.7)';
  ctx.font = '24px "Montserrat", sans-serif';
  ctx.fillText(activeLang.teamTitle, canvas.width / 2, 930);
  ctx.fillStyle = cream;
  ctx.font = '26px "Georgia", serif';
  ctx.fillText(activeLang.team, canvas.width / 2, 975);

  // 11. Trigger Download
  const link = document.createElement('a');
  link.download = activeLang.filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function drawCornerOrnament(ctx, x, y, goldColor, emeraldColor, flipX = false, flipY = false) {
  ctx.save();
  ctx.translate(x, y);
  
  // Apply flips
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  ctx.scale(sx, sy);

  // Draw corner triangles/fans
  ctx.fillStyle = emeraldColor;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(80, 0);
  ctx.quadraticCurveTo(30, 30, 0, 80);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = goldColor;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(110, 0);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 110);
  ctx.stroke();

  // Little star at vertex
  ctx.fillStyle = goldColor;
  ctx.beginPath();
  ctx.arc(35, 35, 8, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
