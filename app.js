"use strict";

// ---------- Danh mục & độ tuổi ----------
const CATS = {
  story:   { label: "Truyện kể",          icon: "📖", data: window.DATA_STORIES || [] },
  song:    { label: "Bài hát & Đồng dao", icon: "🎵", data: window.DATA_SONGS || [] },
  poem:    { label: "Thơ",                icon: "🌸", data: window.DATA_POEMS || [] },
  english: { label: "Tiếng Anh",          icon: "🔤", data: window.DATA_ENGLISH || [] },
  parent:  { label: "Dạy con",            icon: "💡", data: window.DATA_PARENTING || [] },
  health:  { label: "Sức khỏe",           icon: "🩺", data: window.DATA_HEALTH || [] },
};
const DONE_WORD = { story: "Đã kể", song: "Đã hát", poem: "Đã đọc", english: "Đã học", parent: "Đã áp dụng", health: "Đã làm" };
const AGES = { "2-3": "2–3 tuổi", "4-6": "4–6 tuổi", "7-10": "7–10 tuổi", all: "Mọi độ tuổi" };

// ---------- Lưu trữ ----------
const KEY = "beyeu.v1";
const state = Object.assign(
  { fav: {}, history: [], notes: {}, daily: {}, custom: [], settings: {} },
  JSON.parse(localStorage.getItem(KEY) || "{}")
);
state.settings = Object.assign({ name: "", theme: "", font: 17, age: "2-3" }, state.settings);
const save = () => localStorage.setItem(KEY, JSON.stringify(state));

// ---------- Tiện ích ----------
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
const pad = (n) => String(n).padStart(2, "0");
const dateKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fmtDate = (k) => { const [y, m, d] = k.split("-"); return `${d}/${m}/${y}`; };
function hash(str) { let h = 2166136261; for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }

function allItems() {
  const out = [];
  for (const [cat, c] of Object.entries(CATS)) for (const it of c.data) out.push({ ...it, cat });
  for (const it of state.custom) out.push({ ...it, custom: true });
  return out;
}
let ITEMS = allItems();
const byId = (id) => ITEMS.find((x) => x.id === id);
const age = () => state.settings.age;
const fitsAge = (it) => age() === "all" || !it.ages || it.ages.includes(age());
const itemsOf = (cat) => ITEMS.filter((x) => x.cat === cat && fitsAge(x));
const timesUsed = (id) => state.history.filter((h) => h.id === id);
const lastUsed = (id) => { const h = timesUsed(id); return h.length ? h[h.length - 1].date : ""; };

function toast(msg) {
  let t = $(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 1800);
}

// ---------- Phát âm tiếng Anh ----------
let enVoice = null;
function loadVoice() {
  const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  enVoice = vs.find((v) => v.lang === "en-US" && /female|samantha|google/i.test(v.name)) || vs.find((v) => v.lang === "en-US") || vs.find((v) => v.lang.startsWith("en")) || null;
}
if (window.speechSynthesis) { loadVoice(); speechSynthesis.onvoiceschanged = loadVoice; }
function say(text, slow) {
  if (!window.speechSynthesis) { toast("Thiết bị chưa hỗ trợ đọc tiếng Anh"); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)/g, ""));
  u.lang = "en-US"; u.rate = slow ? 0.6 : 0.85; if (enVoice) u.voice = enVoice;
  speechSynthesis.speak(u);
}
const sayBtn = (text, label = "🔊") => `<button class="say" data-say="${esc(text)}" onclick="event.preventDefault();event.stopPropagation();say(this.dataset.say)" title="Nghe phát âm">${label}</button>`;

// ---------- Gợi ý mỗi ngày (theo độ tuổi) ----------
// Ưu tiên mục chưa dùng và chưa được gợi ý 14 ngày gần đây; hết thì lấy mục lâu chưa dùng nhất.
const slot = (cat) => `${cat}@${age()}`;
function recentSuggested(cat, days = 14) {
  const keys = Object.keys(state.daily).sort().slice(-days);
  return new Set(keys.map((k) => state.daily[k][slot(cat)]).filter(Boolean));
}
function pickFor(cat, exclude = new Set(), seed = dateKey()) {
  const items = itemsOf(cat);
  if (!items.length) return null;
  const recent = recentSuggested(cat);
  let pool = items.filter((x) => !timesUsed(x.id).length && !recent.has(x.id) && !exclude.has(x.id));
  if (!pool.length) pool = items.filter((x) => !timesUsed(x.id).length && !exclude.has(x.id));
  if (!pool.length) {
    const sorted = items.filter((x) => !exclude.has(x.id)).sort((a, b) => lastUsed(a.id).localeCompare(lastUsed(b.id)));
    pool = sorted.slice(0, Math.max(1, Math.ceil(sorted.length / 3)));
  }
  if (!pool.length) pool = items;
  return pool[hash(seed + cat + age()) % pool.length].id;
}
function todayPicks() {
  const k = dateKey();
  state.daily[k] = state.daily[k] || {};
  let changed = false;
  const picks = {};
  for (const cat of Object.keys(CATS)) {
    const cur = state.daily[k][slot(cat)];
    if (!cur || !byId(cur) || !fitsAge(byId(cur))) { state.daily[k][slot(cat)] = pickFor(cat); changed = true; }
    picks[cat] = state.daily[k][slot(cat)];
  }
  const keys = Object.keys(state.daily).sort();
  if (keys.length > 120) { keys.slice(0, keys.length - 120).forEach((x) => delete state.daily[x]); changed = true; }
  if (changed) save();
  return picks;
}
function reroll(cat) {
  const k = dateKey(), cur = state.daily[k][slot(cat)];
  state.daily[k][slot(cat)] = pickFor(cat, new Set([cur]), k + Math.random());
  save(); render();
}

// ---------- Hành động ----------
function markDone(id) {
  const k = dateKey();
  if (state.history.some((h) => h.id === id && h.date === k)) { toast("Hôm nay đã đánh dấu rồi"); return; }
  state.history.push({ id, date: k }); save(); toast("Đã lưu vào lịch sử ✓"); render();
}
function toggleFav(id) { if (state.fav[id]) delete state.fav[id]; else state.fav[id] = true; save(); render(); }
function streak() {
  const days = new Set(state.history.map((h) => h.date));
  let n = 0; const d = new Date();
  if (!days.has(dateKey(d))) d.setDate(d.getDate() - 1);
  while (days.has(dateKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function setAge(a) { state.settings.age = a; save(); currentTag = ""; render(); }

// ---------- Thẻ ----------
function snippet(it) {
  if (it.cat === "english" && it.words) return it.words.slice(0, 4).map(([en, vi]) => `${en} – ${vi}`).join(" · ");
  return (it.lesson || it.content || "").replace(/\s+/g, " ").slice(0, 160);
}
const ageLabel = (it) => it.ages ? "👶 " + it.ages.map((a) => a.replace("-", "–")).join(", ") + " tuổi" : "";
function badges(it) {
  const used = timesUsed(it.id).length;
  return [
    it.kind ? esc(it.kind) : "",
    it.duration ? `⏱ ${it.duration} phút` : "",
    it.who === "cả nhà" ? "👨‍👩‍👦 cả nhà" : "",
    ageLabel(it),
    used ? `<span class="done-badge">✓ ${DONE_WORD[it.cat]} ${used} lần</span>` : "",
    state.fav[it.id] ? `<span class="fav">★</span>` : "",
  ].filter(Boolean).join(" · ");
}
function card(it) {
  return `<a class="card c-${it.cat}" href="#item/${it.id}">
    <div class="kicker">${CATS[it.cat].icon} ${CATS[it.cat].label}${it.custom ? " · của tôi" : ""}</div>
    <h3>${esc(it.title)}</h3>
    <div class="snippet">${esc(snippet(it))}</div>
    <div class="row badges">${badges(it)}</div>
  </a>`;
}

// ---------- Các màn hình ----------
function viewToday() {
  const picks = todayPicks();
  const h = new Date().getHours();
  const part = h < 11 ? "buổi sáng" : h < 14 ? "buổi trưa" : h < 18 ? "buổi chiều" : "buổi tối";
  const name = state.settings.name ? ` cùng ${esc(state.settings.name)}` : "";
  const total = state.history.filter((x) => byId(x.id)?.cat === "story").length;
  const order = h >= 18 || h < 5 ? ["story", "song", "poem", "english", "parent", "health"] : ["english", "song", "poem", "story", "parent", "health"];
  const titles = { story: "Truyện hôm nay", song: "Hát / đồng dao hôm nay", poem: "Thơ hôm nay", english: "Tiếng Anh hôm nay", parent: "Bài học cho ba mẹ", health: "Mẹo sức khỏe hôm nay" };

  const cards = order.map((cat) => {
    const it = byId(picks[cat]); if (!it) return "";
    const extra = cat === "english" && it.words
      ? `<div class="word-chips">${it.words.slice(0, 4).map(([en, vi]) => `<span class="wchip">${sayBtn(en)} <b>${esc(en)}</b> ${esc(vi)}</span>`).join("")}</div>`
      : `<div class="snippet">${esc(snippet(it))}</div>`;
    return `<div class="card today-card c-${cat}">
      <div class="kicker">${CATS[cat].icon} ${titles[cat]}</div>
      <h3><a href="#item/${it.id}">${esc(it.title)}</a></h3>
      ${extra}
      <div class="badges">${badges(it)}</div>
      <div class="actions">
        <button class="primary" onclick="location.hash='#item/${it.id}'">Mở</button>
        <button onclick="markDone('${it.id}')">✓ ${DONE_WORD[cat]}</button>
        <button onclick="reroll('${cat}')" title="Gợi ý mục khác">🔄 Đổi</button>
      </div>
    </div>`;
  }).join("");

  const has = (x, ...tags) => tags.some((t) => (x.tags || []).includes(t));
  const bedtime = itemsOf("story").filter((x) => has(x, "đi ngủ", "buổi tối")).slice(0, 8);
  const active = itemsOf("story").filter((x) => has(x, "vận động")).concat(itemsOf("song").filter((x) => has(x, "vận động")));
  const folk = itemsOf("story").filter((x) => has(x, "truyện dân gian", "truyền thuyết"));
  const mini = (title, arr) => arr.length ? `<h2>${title}</h2><div class="mini-list">${arr.map((x) => `<a href="#item/${x.id}">${CATS[x.cat].icon} ${esc(x.title)}</a>`).join("")}</div>` : "";

  return `<div class="hello">
      <div><h1>Chào ${part}! 👋</h1><div class="muted">Hôm nay ${fmtDate(dateKey())} — gợi ý cho bé <b>${AGES[age()]}</b>${name}.</div></div>
      <div class="stats">
        <span class="stat">🔥 Chuỗi <b>${streak()}</b> ngày</span>
        <span class="stat">📖 Đã kể <b>${total}</b> lần</span>
        <span class="stat">★ Yêu thích <b>${Object.keys(state.fav).length}</b></span>
      </div>
    </div>
    <h2>Gợi ý hôm nay</h2>
    <div class="grid today-grid">${cards}</div>
    ${mini("🏃 Cho lúc bé đang chạy nhảy (vừa chơi vừa nghe)", active)}
    ${mini("🌙 Truyện cho giờ đi ngủ", bedtime)}
    ${mini("🏯 Truyện dân gian & truyền thuyết Việt Nam", folk)}`;
}

let currentTag = "";
function viewList(cat) {
  const items = itemsOf(cat);
  const tags = [...new Set(items.flatMap((x) => x.tags || []))].sort((a, b) => a.localeCompare(b, "vi"));
  const shown = currentTag ? items.filter((x) => (x.tags || []).includes(currentTag)) : items;
  const intro = cat === "english" ? `<p class="muted">Mỗi chủ đề có vài từ và câu ngắn để ba mẹ dùng xen vào sinh hoạt hằng ngày. Bấm 🔊 để nghe phát âm. Không cần dịch cả câu chuyện — chỉ cần lặp lại đều đặn.</p>` : "";
  return `<h1>${CATS[cat].icon} ${CATS[cat].label} <span class="muted" style="font-size:1rem">(${items.length} · ${AGES[age()]})</span></h1>
    ${intro}
    <div class="chips">
      <span class="tag ${currentTag ? "" : "active"}" onclick="setTag('')">Tất cả</span>
      ${tags.map((t) => `<span class="tag ${t === currentTag ? "active" : ""}" data-t="${esc(t)}" onclick="setTag(this.dataset.t)">${esc(t)}</span>`).join("")}
    </div>
    <div class="grid">${shown.map(card).join("") || `<div class="empty">Chưa có mục nào cho độ tuổi này. Thử chọn “Mọi độ tuổi”.</div>`}</div>`;
}
function setTag(t) { currentTag = t; render(); }

function englishBody(it) {
  const rows = (arr, cls) => `<table class="en-table ${cls}">${arr.map(([en, vi]) =>
    `<tr><td class="sb">${sayBtn(en)}</td><td class="en">${esc(en)}</td><td class="vi">${esc(vi)}</td></tr>`).join("")}</table>`;
  return `
    ${it.words ? `<h3>🔤 Từ vựng</h3>${rows(it.words, "words")}` : ""}
    ${it.phrases ? `<h3>💬 Câu giao tiếp dùng hằng ngày</h3>${rows(it.phrases, "phrases")}` : ""}
    ${it.song ? `<h3>🎵 ${esc(it.song.title)}</h3>
      <div class="lyrics">${esc(it.song.lyrics)}</div>
      <div class="toolbar">${sayBtn(it.song.lyrics.split("\n\n")[0], "🔊 Nghe đọc lời")}
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(it.song.title.replace(/\(.*\)/, "") + " nursery rhyme")}" target="_blank" rel="noopener"><button>▶ Nghe hát trên YouTube</button></a></div>` : ""}`;
}

function viewItem(id) {
  const it = byId(id);
  if (!it) return `<div class="empty">Không tìm thấy nội dung này.</div>`;
  const used = timesUsed(id);
  const list = (arr) => `<ul>${arr.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>`;
  const yt = it.youtube ? `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(it.youtube)}" target="_blank" rel="noopener"><button>▶ Nghe trên YouTube</button></a>` : "";
  const body = it.cat === "english" && it.words ? englishBody(it)
    : `<div class="body">${String(it.content || "").split(/\n\s*\n/).map((para) => `<p>${esc(para.trim())}</p>`).join("")}</div>`;
  const howtoTitle = it.cat === "english" ? "🎲 Cách dạy & trò chơi" : "🏃 Cách kể / chơi cùng bé";
  return `<a class="back" href="javascript:history.back()">← Quay lại</a>
  <article class="detail ${it.cat} c-${it.cat}" id="detail">
    <div class="meta">${CATS[it.cat].icon} <a href="#list/${it.cat}">${CATS[it.cat].label}</a>
      ${it.author ? `· ${esc(it.author)}` : ""} ${badges(it) ? "· " + badges(it) : ""}</div>
    <h1>${esc(it.title)}</h1>
    <div class="chips">${(it.tags || []).map((t) => `<span class="tag" data-t="${esc(t)}" onclick="goSearch(this.dataset.t)">${esc(t)}</span>`).join("")}</div>
    ${it.lesson ? `<div class="box"><h4>🌟 Bài học</h4>${esc(it.lesson)}</div>` : ""}
    ${body}
    ${it.howto ? `<div class="box"><h4>${howtoTitle}</h4>${esc(it.howto)}</div>` : ""}
    ${it.questions ? `<div class="box"><h4>💬 Hỏi bé để trò chuyện</h4>${list(it.questions)}</div>` : ""}
    ${it.tryToday ? `<div class="box"><h4>✅ Hôm nay thử</h4>${esc(it.tryToday)}</div>` : ""}
    ${it.action ? `<div class="box"><h4>✅ Việc nên làm hôm nay</h4>${esc(it.action)}</div>` : ""}
    <div class="toolbar">
      <button class="primary" onclick="markDone('${id}')">✓ ${DONE_WORD[it.cat]} hôm nay</button>
      <button class="${state.fav[id] ? "on" : ""}" onclick="toggleFav('${id}')">${state.fav[id] ? "★ Đã yêu thích" : "☆ Yêu thích"}</button>
      <button onclick="document.getElementById('detail').classList.toggle('reading')">🔍 Chữ to</button>
      ${yt}
      ${it.custom ? `<button onclick="deleteCustom('${id}')">🗑 Xóa mục này</button>` : ""}
    </div>
    <label for="note">📝 Ghi chú của ba mẹ (bé phản ứng thế nào, câu nói đáng yêu…)</label>
    <textarea id="note" placeholder="Ví dụ: Bé thích đoạn kéo củ cải, đòi kể 3 lần…">${esc(state.notes[id] || "")}</textarea>
    <div class="muted" style="margin-top:.5rem">${used.length ? `${DONE_WORD[it.cat]} ${used.length} lần: ${used.map((u) => fmtDate(u.date)).join(", ")}` : "Chưa dùng lần nào."}</div>
  </article>`;
}

function searchText(it) {
  const pairs = [...(it.words || []), ...(it.phrases || [])].flat().join(" ");
  return [it.content, it.howto, it.lesson, it.tryToday, it.action, (it.questions || []).join(" "), pairs, it.song?.lyrics].join(" ");
}
function viewSearch(q) {
  const terms = norm(q).split(/\s+/).filter(Boolean);
  const scored = ITEMS.filter(fitsAge).map((it) => {
    const title = norm(it.title), tags = norm((it.tags || []).join(" ") + " " + (it.kind || "") + " " + (it.author || ""));
    const body = norm(searchText(it));
    let score = 0;
    for (const t of terms) {
      if (title.includes(t)) score += 10; else if (tags.includes(t)) score += 5; else if (body.includes(t)) score += 1; else return null;
    }
    if (terms.length > 1 && (title + " " + tags + " " + body).includes(terms.join(" "))) score += 20;
    return { it, score };
  }).filter(Boolean).sort((a, b) => b.score - a.score);
  const groups = Object.keys(CATS).map((cat) => {
    const r = scored.filter((x) => x.it.cat === cat);
    return r.length ? `<h2>${CATS[cat].icon} ${CATS[cat].label} (${r.length})</h2><div class="grid">${r.map((x) => card(x.it)).join("")}</div>` : "";
  }).join("");
  const ageNote = age() !== "all" ? `<p class="muted">Đang lọc theo ${AGES[age()]}. <a href="javascript:setAge('all')">Tìm ở mọi độ tuổi</a></p>` : "";
  return `<h1>Kết quả cho “${esc(q)}”</h1>${ageNote}${groups || `<div class="empty">Không tìm thấy. Thử từ khác, ví dụ: ngủ, đánh răng, xe, sốt, ăn vạ, hello…</div>`}`;
}

function viewFav() {
  const items = ITEMS.filter((x) => state.fav[x.id]);
  return `<h1>★ Yêu thích</h1>${items.length ? `<div class="grid">${items.map(card).join("")}</div>` : `<div class="empty">Chưa có mục yêu thích. Bấm ☆ trong mỗi truyện để lưu lại.</div>`}`;
}

function viewHistory() {
  const rows = [...state.history].reverse().map((h) => {
    const it = byId(h.id); if (!it) return "";
    return `<li><span class="d">${fmtDate(h.date)}</span><span>${CATS[it.cat].icon} <a href="#item/${it.id}">${esc(it.title)}</a> <span class="muted">— ${DONE_WORD[it.cat]}</span></span></li>`;
  }).join("");
  const notes = Object.entries(state.notes).filter(([id, t]) => t && byId(id)).map(([id, t]) =>
    `<li><span class="d">${CATS[byId(id).cat].icon}</span><span><a href="#item/${id}">${esc(byId(id).title)}</a>: ${esc(t)}</span></li>`).join("");
  return `<h1>🗓 Lịch sử</h1>${rows ? `<ul class="hist">${rows}</ul>` : `<div class="empty">Chưa có gì. Mỗi lần kể xong, bấm “✓ Đã kể” để lưu lại.</div>`}
    ${notes ? `<h2>📝 Ghi chú của ba mẹ</h2><ul class="hist">${notes}</ul>` : ""}`;
}

function viewSettings() {
  const own = state.custom.map((it) => `<li><span class="d">${CATS[it.cat].icon}</span><a href="#item/${it.id}">${esc(it.title)}</a></li>`).join("");
  const ageOpts = Object.entries(AGES).map(([k, v]) => `<option value="${k}" ${k === age() ? "selected" : ""}>${v}</option>`).join("");
  return `<h1>⚙️ Cài đặt & thêm nội dung</h1>
  <div class="detail c-story">
    <label for="kidName">Tên/biệt danh của bé</label>
    <input type="text" id="kidName" value="${esc(state.settings.name)}" placeholder="Ví dụ: Bin">
    <div class="toolbar"><button class="primary" onclick="saveName()">Lưu tên</button></div>
  </div>
  <h2>➕ Thêm truyện / bài hát / mẹo của riêng nhà mình</h2>
  <div class="detail c-poem">
    <label for="cCat">Loại</label>
    <select id="cCat">${Object.entries(CATS).filter(([k]) => k !== "english").map(([k, c]) => `<option value="${k}">${c.icon} ${c.label}</option>`).join("")}</select>
    <label for="cAge">Độ tuổi phù hợp</label><select id="cAge">${ageOpts}</select>
    <label for="cTitle">Tên</label><input type="text" id="cTitle">
    <label for="cTags">Từ khóa (cách nhau bằng dấu phẩy)</label><input type="text" id="cTags" placeholder="buổi tối, đi ngủ">
    <label for="cContent">Nội dung</label><textarea id="cContent" style="min-height:180px"></textarea>
    <label for="cHow">Cách kể / gợi ý (không bắt buộc)</label><textarea id="cHow"></textarea>
    <div class="toolbar"><button class="primary" onclick="addCustom()">Thêm</button></div>
    ${own ? `<h2>Nội dung của tôi</h2><ul class="hist">${own}</ul>` : ""}
  </div>
  <h2>💾 Sao lưu</h2>
  <div class="detail c-health">
    <p class="muted">Yêu thích, lịch sử, ghi chú và nội dung tự thêm được lưu trên thiết bị này (máy tính và điện thoại lưu riêng). Dùng file sao lưu để chuyển dữ liệu giữa các máy.</p>
    <div class="toolbar">
      <button onclick="exportData()">⬇ Xuất file sao lưu</button>
      <button onclick="document.getElementById('imp').click()">⬆ Nhập file sao lưu</button>
      <input type="file" id="imp" accept=".json,application/json" hidden onchange="importData(this.files[0])">
    </div>
  </div>`;
}

// ---------- Cài đặt ----------
function saveName() { state.settings.name = $("#kidName").value.trim(); save(); toast("Đã lưu"); }
function addCustom() {
  const title = $("#cTitle").value.trim(), content = $("#cContent").value.trim();
  if (!title || !content) { toast("Cần nhập tên và nội dung"); return; }
  const a = $("#cAge").value;
  const it = {
    id: "c" + Date.now(), cat: $("#cCat").value, title, content,
    ages: a === "all" ? undefined : [a],
    tags: $("#cTags").value.split(",").map((s) => s.trim()).filter(Boolean),
    howto: $("#cHow").value.trim() || undefined,
  };
  state.custom.push(it); save(); ITEMS = allItems(); location.hash = "#item/" + it.id;
}
function deleteCustom(id) {
  if (!confirm("Xóa mục này?")) return;
  state.custom = state.custom.filter((x) => x.id !== id); delete state.fav[id]; delete state.notes[id];
  save(); ITEMS = allItems(); location.hash = "#settings";
}
function exportData() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
  a.download = `be-yeu-sao-luu-${dateKey()}.json`; a.click();
}
function importData(file) {
  if (!file) return;
  file.text().then((t) => {
    try {
      const d = JSON.parse(t);
      if (typeof d !== "object" || !Array.isArray(d.history)) throw new Error();
      if (!confirm("Thay toàn bộ dữ liệu hiện tại bằng file này?")) return;
      Object.assign(state, d); save(); ITEMS = allItems(); applySettings(); toast("Đã nhập dữ liệu"); render();
    } catch { toast("File không hợp lệ"); }
  });
}
function isDark() {
  const t = state.settings.theme, h = new Date().getHours();
  return t === "dark" || (t !== "light" && (h >= 19 || h < 6)); // mặc định: tự tối vào buổi tối
}
function applySettings() {
  document.body.classList.toggle("dark", isDark());
  $("#themeBtn").textContent = isDark() ? "☀️" : "🌙";
  document.documentElement.style.setProperty("--fs", (state.settings.font || 17) + "px");
  $("#ageSel").value = age();
}
function goSearch(q) { location.hash = "#search/" + encodeURIComponent(q); }

// ---------- Điều hướng ----------
function renderTabs(route) {
  const tabs = [["#today", "🏠 Hôm nay"], ...Object.entries(CATS).map(([k, c]) => [`#list/${k}`, `${c.icon} ${c.label}`]),
    ["#fav", "★ Yêu thích"], ["#history", "🗓 Lịch sử"], ["#settings", "⚙️"]];
  $("#tabs").innerHTML = tabs.map(([h, l]) => `<a href="${h}" class="${route.startsWith(h) ? "active" : ""}">${l}</a>`).join("");
  const active = $("#tabs a.active"); if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
}
let lastRoute = "";
function render() {
  const route = location.hash || "#today";
  const [name, arg] = route.slice(1).split("/");
  const scroll = route === lastRoute ? window.scrollY : 0;
  let html;
  if (name === "list" && CATS[arg]) html = viewList(arg);
  else if (name === "item") html = viewItem(arg);
  else if (name === "search") html = viewSearch(decodeURIComponent(arg || ""));
  else if (name === "fav") html = viewFav();
  else if (name === "history") html = viewHistory();
  else if (name === "settings") html = viewSettings();
  else html = viewToday();
  const tabRoute = name === "item" && byId(arg) ? `#list/${byId(arg).cat}` : route;
  renderTabs(tabRoute);
  $("#app").innerHTML = html;
  if (name !== "search") $("#searchInput").value = "";
  const note = $("#note");
  if (note) note.addEventListener("input", () => { state.notes[arg] = note.value; save(); });
  window.scrollTo(0, scroll);
  lastRoute = route;
}

window.addEventListener("hashchange", () => { if (!location.hash.startsWith("#list")) currentTag = ""; render(); });
$("#searchForm").addEventListener("submit", (e) => { e.preventDefault(); const q = $("#searchInput").value.trim(); if (q) goSearch(q); $("#searchInput").blur(); });
let searchTimer;
$("#searchInput").addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  const q = e.target.value.trim();
  if (q.length >= 2) searchTimer = setTimeout(() => { history.replaceState(null, "", "#search/" + encodeURIComponent(q)); render(); $("#searchInput").value = q; }, 300);
});
$("#ageSel").innerHTML = Object.entries(AGES).map(([k, v]) => `<option value="${k}">👶 ${v}</option>`).join("");
$("#ageSel").onchange = (e) => setAge(e.target.value);
$("#themeBtn").onclick = () => { state.settings.theme = isDark() ? "light" : "dark"; save(); applySettings(); };
$("#fontUp").onclick = () => { state.settings.font = Math.min(26, (state.settings.font || 17) + 1); save(); applySettings(); };
$("#fontDown").onclick = () => { state.settings.font = Math.max(13, (state.settings.font || 17) - 1); save(); applySettings(); };

applySettings();
render();

// PWA: cho phép cài lên màn hình chính và dùng offline (chỉ khi chạy qua http/https).
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
