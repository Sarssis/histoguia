
const KEY='histoguia-v11-state', THEME='histoguia-v11-theme';
let state=JSON.parse(localStorage.getItem(KEY)||'{}');
let tab='home', filterPeriod='', query='';
const $=s=>document.querySelector(s);
const screen=$('#screen');

function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function status(e){return state[e.hc]?.status||'pending'}
function favorite(e){return !!state[e.hc]?.fav}
function setStatus(e,s){state[e.hc]={...(state[e.hc]||{}),status:s};save();render()}
function cycle(e){const s=status(e);setStatus(e,s==='pending'?'listening':s==='listening'?'done':'pending')}
function toggleFav(e){state[e.hc]={...(state[e.hc]||{}),fav:!favorite(e)};save();render()}
function url(e){return 'https://podcasts.apple.com/search?term='+encodeURIComponent('HistoCast '+e.hc.replace('HC','')+' '+e.title)}
function pri(n){return n===3?'Imprescindible':n===2?'Recomendable':'Opcional'}
function counts(){const done=EPISODES.filter(e=>status(e)==='done').length;const fav=EPISODES.filter(favorite).length;return {done,fav,total:EPISODES.length,pct:Math.round(done/EPISODES.length*100)}}
function nextEp(){return EPISODES.find(e=>status(e)!=='done')||EPISODES[0]}
function hero(){
 const c=counts(), n=nextEp();
 return `<section class="card hero"><div><p class="overline">Continuar</p><h2>${n.hc} · ${n.title}</h2><p class="meta">${n.period} · ${n.era}</p><div class="actions"><a class="primary" href="${url(n)}" target="_blank">Escuchar</a><button class="secondary" onclick="markNext()">Marcar escuchado</button></div></div><div class="ring"><svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="52"/><circle class="meter" style="stroke-dashoffset:${327-(c.pct/100)*327}" cx="60" cy="60" r="52"/></svg><b>${c.pct}%</b></div></section>
 <section class="grid3"><div class="stat"><b>${c.done}</b><span>Escuchados</span></div><div class="stat"><b>${c.total}</b><span>Episodios</span></div><div class="stat"><b>${c.fav}</b><span>Favoritos</span></div></section>`
}
window.markNext=()=>setStatus(nextEp(),'done');

function episodeCard(e){
 const s=status(e);
 return `<article class="episode ${s}"><button class="check" onclick="cycleById(${e.id})">${s==='done'?'✓':s==='listening'?'▶':''}</button><div><div class="topline"><span class="code">${String(e.id).padStart(2,'0')} · ${e.hc}</span><button class="star" onclick="favById(${e.id})">${favorite(e)?'★':'☆'}</button></div><h3>${e.title}</h3><p class="meta">${e.period} · ${e.era}</p><div class="tags"><span class="tag">${pri(e.priority)}</span><span class="tag">${e.type}</span></div><div class="row"><a class="mini" href="${url(e)}" target="_blank">Apple Podcasts</a><button class="mini" onclick="cycleById(${e.id})">${s==='done'?'Escuchado':s==='listening'?'Escuchando':'Pendiente'}</button></div></div></article>`
}
window.cycleById=id=>cycle(EPISODES.find(e=>e.id===id));
window.favById=id=>toggleFav(EPISODES.find(e=>e.id===id));

function filtered(list=EPISODES){
 let l=[...list];
 if(filterPeriod) l=l.filter(e=>e.period===filterPeriod);
 if(query) l=l.filter(e=>(e.hc+' '+e.title+' '+e.period+' '+e.era+' '+e.topic+' '+e.type).toLowerCase().includes(query.toLowerCase()));
 return l;
}
function searchBar(){
 const periods=[...new Set(EPISODES.map(e=>e.period))];
 return `<section class="search"><input id="q" placeholder="Buscar HC, personaje, batalla..." value="${query}"><select id="p"><option value="">Todas las épocas</option>${periods.map(p=>`<option ${p===filterPeriod?'selected':''}>${p}</option>`).join('')}</select></section>`
}
function bindSearch(){const q=$('#q'),p=$('#p'); if(q) q.oninput=e=>{query=e.target.value;render()}; if(p) p.onchange=e=>{filterPeriod=e.target.value;render()}}
function home(){
 const important=EPISODES.filter(e=>e.priority===3).slice(0,4);
 screen.innerHTML=hero()+`<div class="section-title"><div><h2>Ruta recomendada</h2><p>Empieza por los episodios imprescindibles.</p></div></div><section class="list">${important.map(episodeCard).join('')}</section>`;
}
function route(){
 screen.innerHTML=searchBar()+`<section class="list">${filtered().map(episodeCard).join('')||'<div class="empty">No hay episodios.</div>'}</section>`;
 bindSearch();
}
function explore(){
 const groups=[...new Set(EPISODES.map(e=>e.topic))].slice(0,18);
 screen.innerHTML=`<div class="section-title"><div><h2>Explorar</h2><p>Personajes, batallas, guerras y civilizaciones.</p></div></div><section class="list">${groups.map(g=>{const eps=EPISODES.filter(e=>e.topic===g);return `<button class="topic-card" onclick="openTopic('${g.replaceAll("'","\'")}')"><b>${g}</b><span>${eps.length} episodio${eps.length>1?'s':''} · ${eps[0].type}</span></button>`}).join('')}</section>`;
}
window.openTopic=g=>{query=g;filterPeriod='';tab='route';activateTab();render()}
function library(){
 const podcasts=['HistoCast','Roma Aeterna','SER Historia','Hardcore History','La Biblioteca Perdida'];
 screen.innerHTML=`<div class="section-title"><div><h2>Biblioteca</h2><p>Base preparada para añadir más fuentes.</p></div></div><section class="list">${podcasts.map((p,i)=>`<article class="period-card"><b>${p}</b><span>${i===0?EPISODES.length+' episodios cargados':'Pendiente de integrar'}</span></article>`).join('')}</section>`;
}
function progress(){
 const c=counts(), periods=[...new Set(EPISODES.map(e=>e.period))];
 screen.innerHTML=hero()+`<div class="section-title"><div><h2>Progreso por época</h2><p>Tu avance de escucha.</p></div></div><section class="list">${periods.map(p=>{const total=EPISODES.filter(e=>e.period===p).length, done=EPISODES.filter(e=>e.period===p&&status(e)==='done').length;return `<article class="period-card"><b>${p}</b><span>${done}/${total} escuchados · ${Math.round(done/total*100)}%</span></article>`}).join('')}</section>`;
}
function render(){ if(tab==='home')home(); if(tab==='route')route(); if(tab==='explore')explore(); if(tab==='library')library(); if(tab==='progress')progress(); }
function activateTab(){document.querySelectorAll('.bottom button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab))}
document.querySelectorAll('.bottom button').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;query='';filterPeriod='';activateTab();render()});
if(localStorage.getItem(THEME)==='light')document.documentElement.classList.add('light');
$('#themeBtn').onclick=()=>{document.documentElement.classList.toggle('light');localStorage.setItem(THEME,document.documentElement.classList.contains('light')?'light':'dark')};
render();
