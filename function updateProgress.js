const translations = {
  es: {
    title: "Juego General",
    progress: "Progreso general del juego: 275/529 (51.98%)",
    card1: "Novedades",
    card2: "Próxima actualización",
    card3: "Sneak Peeks Novedades",
    card4: "Redes Sociales",
    card5: "Transmisiones en Vivo",
    card6: "Galeria",
    card7: "Videos de Bilibili",
    card8: "????",
    card9: "????",
    card10 : "????",
    footer: "PVZ Fusion Web | Diseñado por Ai Senpai",
    blocked: "Proximamente.",
    card1Details: `
        <h3>Novedades</h3>
         <nav class="dropdown-menu">
       <ul>
         <li>
        <button class="dropdown-toggle">Super Editor de Niveles</button>
        <ul class="dropdown-submenu">
          <li>Super Level Editor ahora permite una personalización completa del contenido del nivel. Los jugadores pueden crear y jugar niveles locales o cargar niveles en línea de alta calidad.</li>
          <p></p>
          <li>Configuraciones básicas: personalice escenas de niveles, nombres, conteos de olas, etc., y plantas preestablecidas.</li>
          <p></p>
          <li>Configuración de modo: seleccione y habilite modos como Conveyor Belt, Yo zombie y Rompe Jarrones .También puedes establecer intervalos de oleada (temporizador por oleada), tiempos de reutilización de guantes y sugerencias de inicio.</li>
          <p></p>
          <li>Configuración de tarjeta: establezca el número de ranuras para tarjetas y selecciones de tarjetas fijas. Establece precios de cartas y tiempos de reutilización.</li>
          <p></p>
          <li>Condiciones de victoria: derrota a los zombis o cómete los cerebros como objetivo de finalización de nivel.</li>
          <p></p>
          <li>Configuración de los Dioses: Diseña tus propias rutas de mejora de plantas en el Modo Dioses y ajusta sus atributos.</li>
          <p></p>
          <li>Configuración avanzada de generación: ajusta con precisión los tipos y la cantidad de zombis generados en cada ola.</li>
          <p></p>
          <li>Configuración súper aleatoria: habilite la aleatorización de números, personalice el rango de parámetros como la velocidad y el tamaño de los zombies.</li>
          <p></p>
        </ul>
      </li>
              <button class="dropdown-toggle">Nuevas Plantas</button>
        <ul class="dropdown-submenu">
          <li>Fusiones básicas: jarrón dorado sorpresa, triple maceta, maceta hipno, repetidor de lumos, lumos partidos, lumos gatling, pimiento morrón, guisante apestoso, repetidor apestoso, guisante partido apestoso, guisante gatling apestoso, madera de canal y calabaza masticadora</li>
          <p></p>
          <li>Fusiones definitivas: Bamboreal (el nombre está sujeto a cambios), Alt de la antorcha magnate (aún sin nombre), Abeto Alt, Otra Alt (aún sin nombre) y reelaboración de Apocalipsis Titan .</li>
          <p></p>
        </ul>
      </li>
              <button class="dropdown-toggle">Nuevos Zombis</button>
        <ul class="dropdown-submenu">
          <li>Zombis básicos: Zombi Chrono Saltarin</li>
          <p></p>
          <li>Zombies Odisea: Crippler Disc (nombre sujeto a cambios), Alpha Asesino Hitman.</li>
        </ul>
      </li>
              <button class="dropdown-toggle">Nuevas Skins</button>
        <ul class="dropdown-submenu">
          <li>Electro Bunnion - Embrujado</li>
        </ul>
      </li>
              <button class="dropdown-toggle">¡Nuevos niveles!</button>
        <ul class="dropdown-submenu">
          <li>Se agregaron 3 nuevos niveles de Vase Breaker. Completar todos los niveles desbloquea un jarrón dorado sorpresa.</li>
          <p></p>
          <li>Se han agregado a los niveles el jarrón de obsidiana y el jarrón encantado.</li>
          <p></p>
          <li>Se agregó un minijuego: Buscaminas (el número de minas aumenta con la dificultad).</li>
          <p></p>
          <li>Se agregaron 3 nuevos niveles aleatorios: Destino.</li>
          <p></p>
        </ul>
      </li>
              <button class="dropdown-toggle">3.5</button>
        <ul class="dropdown-submenu">
          <li>Trabajando...</li>
          <li>En proceso...</li>
        </ul>
      </li>
              <button class="dropdown-toggle">3.5</button>
        <ul class="dropdown-submenu">
          <li>Trabajando...</li>
          <li>En proceso...</li>
        </ul>
      </li>
    `,
   card3Details: `
    <h3>Sneak Peeks</h3>
    <div class="card3Details">
        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Giraffe Shroom</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">[BF] Giraffe Shroom</h3>
                <div class="image-inner-container">
                    <img src="https://cdn.discordapp.com/attachments/1320444993101365381/1488928661255225404/SPOILER_image.png?ex=69d91c5f&is=69d7cadf&hm=be73e7eeca32c0e643963e46f3a03d072d12745b61609889163416f2c30019a1&" alt=" Giraffe Shroom">
                </div>
                <p>Descripción técnica de la novedad.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        <div class="dropdown-item">
            <button class="dropdown-toggle" onclick="toggleHorizontalMenu(this)">Elemento</button>
            <div class="dropdown-submenu">
                <h3 style="color: #00ccff;">Elemento</h3>
                <div class="image-inner-container">
                    <img src="badge_fusion.png" alt="Insignia">
                </div>
                <p>Detalles del elemento fusionado.</p>
            </div>
        </div>

        </div>
`,
    card5Details: `
      <h3>Streams Devs</h3>
      <div class="tables-grid">
        <div>
          <table>
            <tr><th>Transmisión</th><th>Descripción</th></tr>
            <tr><td>Stream A</td><td>Detalles de la transmisión en español...</td></tr>
            <tr><td>Stream B</td><td>Más información en español...</td></tr>
          </table>
        </div>
      </div>
    `,
    card6Details: `
    <h3>Galeria</h3>
    <div class="card6Details">
        <div class="bento-item main-story">
            <img src="assets/img/plantas.png" alt="Plantas">
            <div class="overlay">Plantas</div>
        </div>

        <div class="bento-item replay">
            <img src="assets/img/zombies.png" alt="Zombies">
            <div class="overlay">Zombies</div>
        </div>

        <div class="bento-item gallery">
            <img src="assets/img/zomboos.png" alt="Jefes">
            <div class="overlay">Jefes</div>
        </div>

        <div class="bento-item comics">
            <img src="assets/img/plantas_Odisea.png" alt="Plantas Odisea">
            <div class="overlay">Plantas Odisea</div>
        </div>

        <div class="bento-item">
            <img src="assets/img/zombies.png" alt="Zombies">
            <div class="overlay">Zombies</div>
        </div>
    </div>
`
  },

  en: {
    title: "General Game",
    progress: "General Game Progress: 275/529 (51.98%)",
    card1: "Updates",
    card2: "Next Update",
    card3: "Sneak Peeks News",
    card4: "Social Media",
    card5: "Streams Devs",
    card6: "????",
    card7: "Bilibili Videos",
    card8: "????",
    card9: "????",
    card10 : "????",
    footer: "PVZ Fusion Web | Designed by Ai Senpai",
    blocked: "Coming soon.",
    card1Details: `
      <h3>Update</h3>
      <div class="tables-grid">
        <div>
          <table>
            <tr><th>Feature</th><th>Description</th></tr>
            <tr><td>New character</td><td>Details of the current version...</td></tr>
            <tr><td>Balance</td><td>Skill adjustments...</td></tr>
            <tr><td>Preview</td><td><img src="preview.png" alt="Preview 3.5" class="table-image"></td></tr>
          </table>
        </div>
        <div>
          <table>
            <tr><th>Item</th><th>Description</th></tr>
            <tr><td>Example A</td><td>Text in English...</td></tr>
          </table>
        </div>
        <div>
          <table>
            <tr><th>Extra</th><th>Description</th></tr>
            <tr><td>Example B</td><td>Other text...</td></tr>
          </table>
        </div>
      </div>
    `,
    card3Details: `
     <h3>Sneak Peeks</h3>
    <div class="tables-grid">
    <div>
      <table>
        <tr><th>Feature</th><th>Description</th></tr>
        <tr><td>New character</td><td>Details of the current version...</td></tr>
        <tr><td>Balance</td><td>Skill adjustments...</td></tr>
        <tr><td>Preview</td><td><img src="preview.png" alt="Preview 3.5" class="table-image"></td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>Item</th><th>Description</th></tr>
        <tr><td>Example A</td><td>Text in English...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>Extra</th><th>Description</th></tr>
        <tr><td>Example B</td><td>Other text...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>Extra</th><th>Description</th></tr>
        <tr><td>Example B</td><td>Other text...</td></tr>
      </table>
    </div>
  </div>
`,
    card5Details: `
      <h3>Streams Devs</h3>
      <div class="tables-grid">
        <div>
          <table>
            <tr><th>Stream</th><th>Description</th></tr>
            <tr><td>Stream A</td><td>Details of the stream in English...</td></tr>
            <tr><td>Stream B</td><td>More information in English...</td></tr>
          </table>
        </div>
      </div>
    `
  },

  cn: {
    title: "游戏总览",
    progress: "S游戏总体进度: 275/529 (51.98%)",
    card1: "最新消息",
    card2: "下一次更新",
    card3: "抢先预览 最新消息",
    card4: "社交网络",
    card5: "开发组直播推流",
    card6: "????",
    card7: "哔哩哔哩视频",
    card8: "????",
    card9: "????",
    card10 : "????",
    footer: "PVZ Fusion Web | 由 Ai Senpai 设计",
    blocked: "内容已锁定。",
    card1Details: `
      <h3>更新</h3>
      <div class="tables-grid">
        <div>
          <table>
            <tr><th>特性</th><th>描述</th></tr>
            <tr><td>新角色</td><td>当前版本的详细信息...</td></tr>
            <tr><td>平衡性</td><td>技能调整...</td></tr>
            <tr><td>预览</td><td><img src="preview.png" alt="预览 3.5" class="table-image"></td></tr>
          </table>
        </div>
        <div>
          <table>
            <tr><th>项目</th><th>描述</th></tr>
            <tr><td>示例 A</td><td>中文文本...</td></tr>
          </table>
        </div>
        <div>
          <table>
            <tr><th>额外</th><th>描述</th></tr>
            <tr><td>示例 B</td><td>其他文本...</td></tr>
          </table>
        </div>
      </div>
    `,
    card3Details: `
     <h3>抢先预览</h3>
    <div class="tables-grid">
    <div>
      <table>
        <tr><th>特性</th><th>描述</th></tr>
        <tr><td>新角色</td><td>当前版本的详细信息...</td></tr>
        <tr><td>平衡</td><td>技能调整...</td></tr>
        <tr><td>预览</td><td><img src="preview.png" alt="预览 3.5" class="table-image"></td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>元素</th><th>描述</th></tr>
        <tr><td>示例 A</td><td>中文文本...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>额外</th><th>描述</th></tr>
        <tr><td>示例 B</td><td>其他文本...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>额外</th><th>描述</th></tr>
        <tr><td>示例 B</td><td>其他文本...</td></tr>
      </table>
    </div>
  </div>
`,
    card5Details: `
      <h3>开发组直播推流</h3>
      <div class="tables-grid">
        <div>
          <table>
            <tr><th>直播</th><th>描述</th></tr>
            <tr><td>直播 A</td><td>中文的直播详情...</td></tr>
            <tr><td>直播 B</td><td>更多中文信息...</td></tr>
          </table>
        </div>
      </div>
    `
  },

fr: {
  title: "Jeu Général",
  progress: "Progression générale du jeu: 275/529 (51.98%)",
  card1: "Nouveautés",
  card2: "Prochaine mise à jour",
  card3: "Sneak Peeks Nouveautés",
  card4: "Réseaux sociaux",
  card5: "Diffusions en direct",
  card6: "????",
  card7: "Vidéos Bilibili",
  card8: "????",
  card9: "????",
  card10 : "????",
  footer: "PVZ Fusion Web | Conçu par Ai Senpai",
  blocked: "Bientôt disponible.",
  card1Details: `
    <h3>Mise à jour</h3>
    <div class="tables-grid">
      <div>
        <table>
          <tr><th>Caractéristique</th><th>Description</th></tr>
          <tr><td>Nouveau personnage</td><td>Détails de la version actuelle...</td></tr>
          <tr><td>Équilibrage</td><td>Ajustements des compétences...</td></tr>
          <tr><td>Aperçu</td><td><img src="preview.png" alt="Aperçu 3.5" class="table-image"></td></tr>
        </table>
      </div>
      <div>
        <table>
          <tr><th>Élément</th><th>Description</th></tr>
          <tr><td>Exemple A</td><td>Texte en français...</td></tr>
        </table>
      </div>
      <div>
        <table>
          <tr><th>Supplément</th><th>Description</th></tr>
          <tr><td>Exemple B</td><td>Autre texte...</td></tr>
        </table>
      </div>
    </div>
  `,
  card3Details: `
  <h3>Aperçus</h3>
  <div class="tables-grid">
    <div>
      <table>
        <tr><th>Caractéristique</th><th>Description</th></tr>
        <tr><td>Nouveau personnage</td><td>Détails de la version actuelle...</td></tr>
        <tr><td>Équilibrage</td><td>Ajustements des compétences...</td></tr>
        <tr><td>Aperçu</td><td><img src="preview.png" alt="Aperçu 3.5" class="table-image"></td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>Élément</th><th>Description</th></tr>
        <tr><td>Exemple A</td><td>Texte en français...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>Extra</th><th>Description</th></tr>
        <tr><td>Exemple B</td><td>Autre texte...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>Extra</th><th>Description</th></tr>
        <tr><td>Exemple B</td><td>Autre texte...</td></tr>
      </table>
    </div>
  </div>
`,
  card5Details: `
    <h3>Streams Devs</h3>
    <div class="tables-grid">
      <div>
        <table>
          <tr><th>Diffusion</th><th>Description</th></tr>
          <tr><td>Stream A</td><td>Détails de la diffusion en français...</td></tr>
          <tr><td>Stream B</td><td>Plus d'informations en français...</td></tr>
        </table>
      </div>
    </div>
  `
  },

  kr: {
  title: "일반 게임",
  progress: "게임 전체 진행 상황: 275/529 (51.98%)",
  card1: "새로운 소식",
  card2: "다음 업데이트",
  card3: "스니크 피크 새로운 소식",
  card4: "소셜 미디어",
  card5: "개발자 스트리밍",
  card6: "????",
  card7: "비리비리 영상",
  card8: "????",
  card9: "????",
  card10 : "????",
  footer: "PVZ Fusion Web | Ai Senpai 디자인",
  blocked: "곧 공개됩니다.",
  card1Details: `
    <h3>업데이트</h3>
    <div class="tables-grid">
      <div>
        <table>
          <tr><th>특징</th><th>설명</th></tr>
          <tr><td>새로운 캐릭터</td><td>현재 버전의 세부 정보...</td></tr>
          <tr><td>밸런스</td><td>스킬 조정...</td></tr>
          <tr>
            <td>미리보기</td>
            <td><img src="preview.png" alt="미리보기 3.5" class="table-image"></td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <tr><th>항목</th><th>설명</th></tr>
          <tr><td>예시 A</td><td>한국어 텍스트...</td></tr>
        </table>
      </div>
      <div>
        <table>
          <tr><th>추가</th><th>설명</th></tr>
          <tr><td>예시 B</td><td>다른 텍스트...</td></tr>
        </table>
      </div>
    </div>
  `,
  card3Details: `
  <h3>스니크 피크</h3>
  <div class="tables-grid">
    <div>
      <table>
        <tr><th>특징</th><th>설명</th></tr>
        <tr><td>새로운 캐릭터</td><td>현재 버전의 세부 정보...</td></tr>
        <tr><td>밸런스</td><td>스킬 조정...</td></tr>
        <tr><td>미리보기</td><td><img src="preview.png" alt="미리보기 3.5" class="table-image"></td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>항목</th><th>설명</th></tr>
        <tr><td>예시 A</td><td>한국어 텍스트...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>추가</th><th>설명</th></tr>
        <tr><td>예시 B</td><td>다른 텍스트...</td></tr>
      </table>
    </div>
    <div>
      <table>
        <tr><th>추가</th><th>설명</th></tr>
        <tr><td>예시 B</td><td>다른 텍스트...</td></tr>
      </table>
    </div>
  </div>
`,
  card5Details: `
    <h3>개발자 스트리밍</h3>
    <div class="tables-grid">
      <div>
        <table>
          <tr><th>스트림</th><th>설명</th></tr>
          <tr><td>스트림 A</td><td>한국어 스트리밍 세부 정보...</td></tr>
          <tr><td>스트림 B</td><td>추가 한국어 정보...</td></tr>
        </table>
      </div>
    </div>
  `
}
};

let currentLang = "es";
let currentCardOpen = null;

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('title').textContent = t.title;
  document.getElementById('progress-text').textContent = t.progress;
  document.getElementById('card1').textContent = t.card1;
  document.getElementById('card2').textContent = t.card2;
  document.getElementById('card3').textContent = t.card3;
  document.getElementById('card4').textContent = t.card4;
  document.getElementById('card5').textContent = t.card5;
  document.getElementById('card6').textContent = t.card6;
  document.getElementById('card7').textContent = t.card7;
  document.getElementById('card8').textContent = t.card8;
  document.getElementById('footer').textContent = t.footer;

  if (currentCardOpen) {
    showCardContent(currentCardOpen);
  }
}

function showCardContent(cardId) {
  const t = translations[currentLang];
  let details = "";
  if (cardId === "card1") {
    details = t.card1Details;
  } else if (cardId === "card5") {
    details = t.card5Details;
  } else if (cardId === "card3") {
    details = t.card3Details;
  } else if (cardId === "card6") {
    details = t.card6Details;
  } else {
    details = `<h3>????</h3><p>${t.blocked}</p>`;
  }
  document.getElementById("card-details").innerHTML = details;
  document.getElementById("card-content").classList.remove("hidden");
  currentCardOpen = cardId;
}

function closeCardContent() {
  document.getElementById("card-content").classList.add("hidden");
  currentCardOpen = null;
}

// Este código engancha los botones dentro de card3Details
document.addEventListener('click', e => {
  if (e.target.classList.contains('dropdown-toggle')) {
    const submenu = e.target.nextElementSibling;
    if (submenu) {
      submenu.classList.toggle('open');
    }
  }
});

function scrollVideos(direction) {
  const slider = document.getElementById('videoSlider');
  const width = slider.offsetWidth; // Detecta el ancho actual del carrusel
  
  slider.scrollBy({
    left: direction * width,
    behavior: 'smooth'
  });
}
