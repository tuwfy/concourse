/* =====================================================================
   Concourse · STAR benchmarking engine
   ---------------------------------------------------------------------
   Real Orlando, FL hotels (names, brands, submarkets, room counts) with
   modeled STR-style performance metrics. Performance figures (occupancy,
   ADR, RevPAR) are *representative estimates* built on public Orlando
   market patterns, they are not licensed STR/CoStar STAR data. The math,
   index methodology, seasonality and comp-set logic mirror a real STAR
   report so the workspace behaves exactly like the product would on live
   feeds. See methodology.html for the full note.
   ===================================================================== */

(function () {
  'use strict';

  // ---- Month labels (trailing 12 months ending Apr 2026) ------------------
  const MONTHS = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  // Orlando seasonality (index to annual mean ≈ 1.0). Spring break + summer
  // family travel + fall convention season are the peaks; Aug-Sep is the trough.
  // Arrays are ordered to match MONTHS above (May → Apr).
  const SEASON_OCC = [0.98, 1.05, 1.08, 0.90, 0.82, 1.00, 1.02, 0.92, 0.95, 1.05, 1.18, 1.08];
  const SEASON_ADR = [0.97, 1.02, 1.04, 0.92, 0.88, 1.02, 1.05, 1.00, 0.96, 1.08, 1.20, 1.06];

  // ---- Competitive sets ---------------------------------------------------
  const COMP_SETS = [
    { id: 'cs-conv',  name: 'Convention & Big-Box', area: 'Intl Drive / Convention Center' },
    { id: 'cs-lux',   name: 'Luxury Resort',        area: 'Grande Lakes / Bonnet Creek' },
    { id: 'cs-uo',    name: 'Universal Orlando',    area: 'Universal Resort campus' },
    { id: 'cs-idrive',name: 'Upscale I-Drive / SeaWorld', area: 'International Drive corridor' },
    { id: 'cs-lbv',   name: 'Lake Buena Vista / Disney Springs', area: 'Walt Disney World area' }
  ];

  // ---- Hotels -------------------------------------------------------------
  // occ = annual avg occupancy (0-1) · adr = annual avg daily rate ($)
  // rooms are real published counts. comp = competitive set id.
  const HOTELS = [
    // ,, Convention & Big-Box ,,
    { id: 'world-center', name: 'Orlando World Center Marriott',          brand: 'Marriott',       sub: 'Lake Buena Vista', klass: 'Upper Upscale', rooms: 2009, occ: 0.77, adr: 258, comp: 'cs-conv' },
    { id: 'gaylord',      name: 'Gaylord Palms Resort & Conv. Center',    brand: 'Gaylord',        sub: 'Kissimmee',        klass: 'Upper Upscale', rooms: 1718, occ: 0.75, adr: 264, comp: 'cs-conv' },
    { id: 'hyatt-reg',    name: 'Hyatt Regency Orlando',                  brand: 'Hyatt',          sub: 'International Dr',  klass: 'Upper Upscale', rooms: 1641, occ: 0.78, adr: 245, comp: 'cs-conv' },
    { id: 'rosen-shingle',name: 'Rosen Shingle Creek',                    brand: 'Rosen',          sub: 'Universal Blvd',   klass: 'Upper Upscale', rooms: 1501, occ: 0.74, adr: 219, comp: 'cs-conv' },
    { id: 'hilton-orl',   name: 'Hilton Orlando',                         brand: 'Hilton',         sub: 'Convention Center',klass: 'Upper Upscale', rooms: 1424, occ: 0.76, adr: 232, comp: 'cs-conv' },
    { id: 'caribe',       name: 'Caribe Royale Orlando',                  brand: 'Independent',    sub: 'Lake Buena Vista', klass: 'Upscale',       rooms: 1335, occ: 0.79, adr: 205, comp: 'cs-conv' },
    { id: 'rosen-centre', name: 'Rosen Centre Hotel',                     brand: 'Rosen',          sub: 'International Dr',  klass: 'Upscale',       rooms: 1334, occ: 0.73, adr: 198, comp: 'cs-conv' },
    { id: 'signia',       name: 'Signia by Hilton Orlando Bonnet Creek',  brand: 'Hilton',         sub: 'Bonnet Creek',     klass: 'Upper Upscale', rooms: 1009, occ: 0.76, adr: 271, comp: 'cs-conv' },
    { id: 'rosen-plaza',  name: 'Rosen Plaza Hotel',                      brand: 'Rosen',          sub: 'International Dr',  klass: 'Upscale',       rooms: 800,  occ: 0.75, adr: 179, comp: 'cs-conv' },

    // ,, Luxury Resort ,,
    { id: 'four-seasons', name: 'Four Seasons Resort Orlando at WDW',     brand: 'Four Seasons',   sub: 'Golden Oak',       klass: 'Luxury',        rooms: 444,  occ: 0.72, adr: 712, comp: 'cs-lux' },
    { id: 'ritz',         name: 'The Ritz-Carlton Orlando, Grande Lakes', brand: 'Ritz-Carlton',  sub: 'Grande Lakes',     klass: 'Luxury',        rooms: 582,  occ: 0.70, adr: 589, comp: 'cs-lux' },
    { id: 'waldorf',      name: 'Waldorf Astoria Orlando',                brand: 'Hilton',         sub: 'Bonnet Creek',     klass: 'Luxury',        rooms: 502,  occ: 0.71, adr: 498, comp: 'cs-lux' },
    { id: 'jw-grande',    name: 'JW Marriott Orlando, Grande Lakes',      brand: 'Marriott',       sub: 'Grande Lakes',     klass: 'Luxury',        rooms: 998,  occ: 0.74, adr: 449, comp: 'cs-lux' },

    // ,, Universal Orlando ,,
    { id: 'cabana-bay',   name: "Universal's Cabana Bay Beach Resort",    brand: 'Loews',          sub: 'Universal Resort', klass: 'Upscale',       rooms: 2200, occ: 0.87, adr: 184, comp: 'cs-uo' },
    { id: 'royal-pacific',name: "Loews Royal Pacific Resort",             brand: 'Loews',          sub: 'Universal Resort', klass: 'Upper Upscale', rooms: 1000, occ: 0.85, adr: 312, comp: 'cs-uo' },
    { id: 'sapphire',     name: 'Loews Sapphire Falls Resort',            brand: 'Loews',          sub: 'Universal Resort', klass: 'Upper Upscale', rooms: 1000, occ: 0.83, adr: 268, comp: 'cs-uo' },
    { id: 'portofino',    name: 'Loews Portofino Bay Hotel',              brand: 'Loews',          sub: 'Universal Resort', klass: 'Luxury',        rooms: 750,  occ: 0.84, adr: 389, comp: 'cs-uo' },
    { id: 'hard-rock',    name: 'Hard Rock Hotel at Universal Orlando',   brand: 'Loews',          sub: 'Universal Resort', klass: 'Upper Upscale', rooms: 650,  occ: 0.86, adr: 372, comp: 'cs-uo' },
    { id: 'aventura',     name: "Universal's Aventura Hotel",             brand: 'Loews',          sub: 'Universal Resort', klass: 'Upscale',       rooms: 600,  occ: 0.85, adr: 215, comp: 'cs-uo' },

    // ,, Upscale I-Drive / SeaWorld ,,
    { id: 'doubletree-sw',name: 'DoubleTree by Hilton Orlando at SeaWorld',brand: 'Hilton',        sub: 'SeaWorld',         klass: 'Upscale',       rooms: 1094, occ: 0.78, adr: 171, comp: 'cs-idrive' },
    { id: 'renaissance-sw',name:'Renaissance Orlando at SeaWorld',        brand: 'Marriott',       sub: 'SeaWorld',         klass: 'Upper Upscale', rooms: 781,  occ: 0.77, adr: 209, comp: 'cs-idrive' },
    { id: 'wyndham-id',   name: 'Wyndham Orlando Resort International Dr', brand: 'Wyndham',        sub: 'International Dr',  klass: 'Upscale',       rooms: 613,  occ: 0.74, adr: 149, comp: 'cs-idrive' },
    { id: 'drury',        name: 'Drury Plaza Hotel Orlando',              brand: 'Drury',          sub: 'Disney Springs',   klass: 'Upscale',       rooms: 238,  occ: 0.82, adr: 196, comp: 'cs-idrive' },
    { id: 'embassy-id',   name: 'Embassy Suites Orlando I-Drive Conv. Ctr',brand: 'Hilton',        sub: 'International Dr',  klass: 'Upscale',       rooms: 244,  occ: 0.80, adr: 188, comp: 'cs-idrive' },

    // ,, Lake Buena Vista / Disney Springs ,,
    { id: 'dolphin',      name: 'Walt Disney World Dolphin',              brand: 'Marriott',       sub: 'Disney Springs',   klass: 'Upper Upscale', rooms: 1514, occ: 0.80, adr: 289, comp: 'cs-lbv' },
    { id: 'palace',       name: 'Hilton Orlando Buena Vista Palace',      brand: 'Hilton',         sub: 'Disney Springs',   klass: 'Upper Upscale', rooms: 1011, occ: 0.78, adr: 224, comp: 'cs-lbv' },
    { id: 'hilton-lbv',   name: 'Hilton Orlando Lake Buena Vista',        brand: 'Hilton',         sub: 'Disney Springs',   klass: 'Upper Upscale', rooms: 814,  occ: 0.79, adr: 241, comp: 'cs-lbv' },
    { id: 'swan',         name: 'Walt Disney World Swan',                 brand: 'Marriott',       sub: 'Disney Springs',   klass: 'Upper Upscale', rooms: 758,  occ: 0.79, adr: 279, comp: 'cs-lbv' },
    { id: 'wyndham-lbv',  name: 'Wyndham Lake Buena Vista Resort',        brand: 'Wyndham',        sub: 'Disney Springs',   klass: 'Upscale',       rooms: 626,  occ: 0.76, adr: 169, comp: 'cs-lbv' },
    { id: 'b-resort',     name: 'B Resort & Spa Lake Buena Vista',        brand: 'Independent',    sub: 'Disney Springs',   klass: 'Upscale',       rooms: 394,  occ: 0.77, adr: 198, comp: 'cs-lbv' }
  ];

  // ---- Deterministic pseudo-random (so YoY numbers are stable per load) ----
  function seed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return ((h >>> 0) % 1000) / 1000; // 0..1
  }

  // Attach derived annual figures + a stable YoY profile to every hotel.
  HOTELS.forEach(h => {
    h.revpar = h.occ * h.adr;
    const r = seed(h.id);
    h.yoyAdr = +(2.0 + r * 5.5).toFixed(1);            // +2.0% .. +7.5%
    h.yoyOcc = +(-1.4 + seed(h.id + 'o') * 4.2).toFixed(1); // -1.4 .. +2.8 pts
    h.yoyRevpar = +(h.yoyAdr + h.yoyOcc * 1.25).toFixed(1); // blended
  });

  // ---- Monthly series for a single hotel ----------------------------------
  function monthly(h, metric) {
    const out = [];
    for (let i = 0; i < 12; i++) {
      const occ = Math.min(0.97, h.occ * SEASON_OCC[i]);
      const adr = h.adr * SEASON_ADR[i];
      if (metric === 'occ') out.push(occ * 100);
      else if (metric === 'adr') out.push(adr);
      else out.push(occ * adr); // revpar
    }
    return out;
  }

  // Room-weighted comp-set aggregate (EXCLUDING the subject, the STR way).
  function setMonthly(subject, metric) {
    const peers = HOTELS.filter(h => h.comp === subject.comp && h.id !== subject.id);
    const totalRooms = peers.reduce((s, h) => s + h.rooms, 0);
    const out = [];
    for (let i = 0; i < 12; i++) {
      let roomNights = 0, revenue = 0, occWeighted = 0;
      peers.forEach(h => {
        const occ = Math.min(0.97, h.occ * SEASON_OCC[i]);
        const adr = h.adr * SEASON_ADR[i];
        roomNights += occ * h.rooms;
        revenue += occ * h.rooms * adr;
        occWeighted += occ * h.rooms;
      });
      if (metric === 'occ') out.push((occWeighted / totalRooms) * 100);
      else if (metric === 'adr') out.push(revenue / roomNights);
      else out.push(revenue / (totalRooms)); // revpar = revenue / available rooms
    }
    return out;
  }

  // Annual comp-set aggregate (excluding subject) → for index + table.
  function setAnnual(subject) {
    const peers = HOTELS.filter(h => h.comp === subject.comp && h.id !== subject.id);
    const totalRooms = peers.reduce((s, h) => s + h.rooms, 0);
    let roomNights = 0, revenue = 0;
    peers.forEach(h => { roomNights += h.occ * h.rooms; revenue += h.occ * h.rooms * h.adr; });
    const occ = roomNights / totalRooms;
    const adr = revenue / roomNights;
    return { occ, adr, revpar: revenue / totalRooms };
  }

  // STR indices: 100 = parity with the comp set.
  function indices(subject) {
    const s = setAnnual(subject);
    return {
      mpi: (subject.occ / s.occ) * 100,
      ari: (subject.adr / s.adr) * 100,
      rgi: (subject.revpar / s.revpar) * 100
    };
  }

  // Rank by RevPAR within the full comp set (1 = top).
  function rank(subject) {
    const set = HOTELS.filter(h => h.comp === subject.comp).sort((a, b) => b.revpar - a.revpar);
    return { pos: set.findIndex(h => h.id === subject.id) + 1, total: set.length };
  }

  // Expose for the page + any future reuse.
  window.STAR = {
    MONTHS, COMP_SETS, HOTELS,
    monthly, setMonthly, setAnnual, indices, rank,
    get: id => HOTELS.find(h => h.id === id),
    compSet: id => COMP_SETS.find(c => c.id === id)
  };

  /* =====================================================================
     RENDERING (only runs if the benchmark workspace is on the page)
     ===================================================================== */
  const root = document.getElementById('starWorkspace');
  if (!root) return;

  const $ = id => document.getElementById(id);
  const usd = n => '$' + Math.round(n).toLocaleString('en-US');
  const pct = n => n.toFixed(1) + '%';
  const ordinal = n => { const s = ['th','st','nd','rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  let chartMetric = 'revpar';

  function indexClass(v) { return v >= 100 ? 'idx-up' : 'idx-down'; }
  function trendArrow(up) {
    return up
      ? '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 8 L5 3 L8 8"/></svg>'
      : '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 2 L5 7 L8 2"/></svg>';
  }

  // ---- Populate the subject selector, grouped by comp set ----
  function buildSelect() {
    const sel = $('subjectSelect');
    sel.innerHTML = COMP_SETS.map(cs => {
      const opts = HOTELS.filter(h => h.comp === cs.id)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(h => `<option value="${h.id}">${h.name}</option>`).join('');
      return `<optgroup label="${cs.name} · ${cs.area}">${opts}</optgroup>`;
    }).join('');
  }

  // ---- KPI + header + indices ----
  function renderHeader(h) {
    const cs = window.STAR.compSet(h.comp);
    $('subjectName').textContent = h.name;
    $('subjectMeta').textContent = `${h.sub} · ${h.rooms.toLocaleString()} rooms · ${h.klass} · ${h.brand}`;
    $('compName').textContent = `${cs.name} comp set · ${HOTELS.filter(x => x.comp === h.comp).length} properties`;

    $('kOcc').textContent = pct(h.occ * 100);
    $('kAdr').textContent = usd(h.adr);
    $('kRevpar').textContent = usd(h.revpar);

    setYoy('kOccYoY', h.yoyOcc, h.yoyOcc + ' pts');
    setYoy('kAdrYoY', h.yoyAdr, h.yoyAdr + '%');
    setYoy('kRevparYoY', h.yoyRevpar, h.yoyRevpar + '%');

    const rk = rank(h);
    $('kRank').innerHTML = `${ordinal(rk.pos)}<span class="of"> / ${rk.total}</span>`;
    $('kRankSub').textContent = 'RevPAR rank in set';
  }

  function setYoy(id, val, label) {
    const el = $(id);
    const up = val >= 0;
    el.className = 'trend' + (up ? '' : ' down');
    el.innerHTML = `${trendArrow(up)}${up ? '+' : ''}${label} YoY`;
  }

  function renderIndices(h) {
    const ix = indices(h);
    const set = HOTELS.filter(x => x.comp === h.comp);
    const occRank = set.slice().sort((a, b) => b.occ - a.occ).findIndex(x => x.id === h.id) + 1;
    const adrRank = set.slice().sort((a, b) => b.adr - a.adr).findIndex(x => x.id === h.id) + 1;
    const revRank = set.slice().sort((a, b) => b.revpar - a.revpar).findIndex(x => x.id === h.id) + 1;
    paintIndex('mpi', ix.mpi, occRank, set.length);
    paintIndex('ari', ix.ari, adrRank, set.length);
    paintIndex('rgi', ix.rgi, revRank, set.length);
  }

  function paintIndex(key, val, rk, total) {
    $(key).textContent = val.toFixed(1);
    $(key).className = 'idx-val ' + indexClass(val);
    // bar: 100 sits at center; clamp display range 70-130.
    const clamped = Math.max(70, Math.min(130, val));
    const left = ((clamped - 70) / 60) * 100;
    const bar = $(key + 'Bar');
    bar.style.left = left + '%';
    bar.className = 'idx-marker ' + indexClass(val);
    $(key + 'Rank').textContent = `${ordinal(rk)} of ${total} · ${val >= 100 ? 'above' : 'below'} comp set`;
  }

  // ---- SVG trend chart: subject vs comp set ----
  function renderChart(h) {
    const you = monthly(h, chartMetric);
    const comp = setMonthly(h, chartMetric);
    const W = 760, H = 280, padL = 52, padR = 16, padT = 18, padB = 30;
    const all = you.concat(comp);
    let min = Math.min(...all), max = Math.max(...all);
    const span = max - min || 1;
    min = min - span * 0.12; max = max + span * 0.12;
    const x = i => padL + (i / 11) * (W - padL - padR);
    const y = v => padT + (1 - (v - min) / (max - min)) * (H - padT - padB);
    const fmt = v => chartMetric === 'occ' ? Math.round(v) + '%' : '$' + Math.round(v);

    const path = arr => arr.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
    const area = arr => path(arr) + ` L${x(11).toFixed(1)} ${(H - padB).toFixed(1)} L${x(0).toFixed(1)} ${(H - padB).toFixed(1)} Z`;
    const dots = (arr, cls) => arr.map((v, i) => `<circle class="${cls}" cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="2.6"></circle>`).join('');

    // gridlines (4)
    let grid = '';
    for (let g = 0; g <= 4; g++) {
      const val = min + (g / 4) * (max - min);
      const gy = y(val);
      grid += `<line class="grid" x1="${padL}" y1="${gy.toFixed(1)}" x2="${W - padR}" y2="${gy.toFixed(1)}"></line>`;
      grid += `<text class="ytick" x="${padL - 8}" y="${(gy + 3.5).toFixed(1)}" text-anchor="end">${fmt(val)}</text>`;
    }
    const xlabels = MONTHS.map((m, i) => `<text class="xtick" x="${x(i).toFixed(1)}" y="${H - 8}" text-anchor="middle">${m}</text>`).join('');

    $('trendChart').innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" class="trend-svg" preserveAspectRatio="none" role="img" aria-label="Trend chart">
        ${grid}
        <path class="area-you" d="${area(you)}"></path>
        <path class="line-comp" d="${path(comp)}"></path>
        <path class="line-you" d="${path(you)}"></path>
        ${dots(comp, 'dot-comp')}
        ${dots(you, 'dot-you')}
        ${xlabels}
      </svg>`;

    const lbl = { occ: 'Occupancy', adr: 'ADR', revpar: 'RevPAR' }[chartMetric];
    $('trendCaption').textContent = `${lbl} · trailing 12 months · you vs. comp-set aggregate`;
  }

  // ---- Comp-set ranked table ----
  function renderTable(h) {
    const set = HOTELS.filter(x => x.comp === h.comp)
      .slice().sort((a, b) => b.revpar - a.revpar);
    const agg = setAnnual(h);
    const rows = set.map((x, i) => {
      const rgi = (x.revpar / aggExcl(x).revpar) * 100;
      const me = x.id === h.id;
      return `<tr class="${me ? 'is-you' : ''}">
        <td class="rk">${i + 1}</td>
        <td class="nm">${x.name}${me ? '<span class="you-pill">You</span>' : ''}<div class="nm-sub">${x.sub} · ${x.rooms.toLocaleString()} rms</div></td>
        <td>${pct(x.occ * 100)}</td>
        <td>${usd(x.adr)}</td>
        <td class="rp">${usd(x.revpar)}</td>
        <td class="${rgi >= 100 ? 'idx-up' : 'idx-down'}">${rgi.toFixed(1)}</td>
      </tr>`;
    }).join('');
    $('compBody').innerHTML = rows;
    $('compFootnote').textContent = `Comp-set aggregate: ${pct(agg.occ * 100)} occ · ${usd(agg.adr)} ADR · ${usd(agg.revpar)} RevPAR`;
  }
  // RGI for an arbitrary hotel vs its set-excluding-self
  function aggExcl(x) { return setAnnual(x); }

  // ---- Orchestrate ----
  function render(id) {
    const h = window.STAR.get(id);
    if (!h) return;
    renderHeader(h);
    renderIndices(h);
    renderChart(h);
    renderTable(h);
    root.dataset.current = id;
  }

  // ---- Events ----
  function init() {
    buildSelect();
    const sel = $('subjectSelect');
    sel.value = 'hilton-orl';
    render('hilton-orl');
    sel.addEventListener('change', () => render(sel.value));

    document.querySelectorAll('#trendTabs button').forEach(b => {
      b.addEventListener('click', () => {
        chartMetric = b.dataset.metric;
        document.querySelectorAll('#trendTabs button').forEach(x => x.classList.toggle('active', x === b));
        render(root.dataset.current);
      });
    });

    const exp = $('exportBtn');
    if (exp) exp.addEventListener('click', () => {
      if (window.toast) window.toast('STAR report ready · opening print view');
      setTimeout(() => window.print(), 500);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
