const DB_BASE='https://raw.githubusercontent.com/Sarssis/histoguia-database/main/data/';
const KEY='histoguia-remote-v3', THEME='histoguia-theme';
let DATA={phases:[],subperiods:[],topics:[],episodes:[]};
let state=JSON.parse(localStorage.getItem(KEY)||'{}');
let tab='home';
const $=s=>document.querySelector(s), screen=$('#screen');

async function loadJSON(name){
  const url=DB_BASE+name+'.json?v=' + Date.now();
  const res=await fetch(url,{cache:'no-store'});
  if(!res.ok) throw new Error(name+' '+res.status);
  return await res.json();
}
async function init(){
  try{
    const [phases,subperiods,topics,episodes]=await Promise.all([
      loadJSON('phases'),loadJSON('subperiods'),loadJSON('topics'),loadJSON('episodes')
    ]);
    DATA={phases,subperiods,topics,episodes};
    render();
  }catch(e){
    screen.innerHTML=`<section class="card"><p class="overline">Error de conexión</p><h2>No puedo leer histoguia-database</h2><p class="meta">Revisa que el repositorio sea público y que existan data/phases.json, data/subperiods.json, data/topics.json y data/episodes.json.</p><p class="meta">${e.message}</p></section>`;
  }
}

const topicName=id=>DATA.topics.find(t=>t.id===id)?.name||id;
const subName=id=>DATA.subperiods.find(s=>s.id===id)?.name||id;
const phaseEpisodes=id=>DATA.episodes.filter(e=>e.phase_id===id);
const subEpisodes=id=>DATA.episodes.filter(e=>e.subperiod_id===id);
function links(e){return e.links||{apple:e.apple_url||'',spotify:e.spotify_url||'',ivoox:e.ivoox_url||'',youtube:e.youtube_url||'',web:e.web_url||''}}
function verified(e,p){return (e.verification&&e.verification[p]==='verified') || (!!links(e)[p] && !e.verification)}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function status(id){return state[id]?.status||'pending'}
function fav(id){return !!state[id]?.fav}
function setStatus(id,s){state[id]={...(state[id]||{}),status:s};save();render()}
function toggleFav(id){state[id]={...(state[id]||{}),fav:!fav(id)};save();render()}
function counts(){let total=DATA.episodes.length, d=DATA.episodes.filter(e=>status(e.id)==='done').length;return{total,d,pct:total?Math.round(d/total*100):0,f:DATA.episodes.filter(e=>fav(e.id)).length}}
function openPlatform(id,platform,url){state[id]={...(state[id]||{}),status: state[id]?.status==='done'?'done':'listening'};save();window.open(url,'_blank')}
function home(){let c=counts();screen.innerHTML=`<section class="card hero"><div><p class="overline">Conectado a histoguia-database</p><h2>La app ya lee la base remota</h2><p class="meta">Cada vez que actualicemos la base de datos en GitHub, Histoguía cargará el nuevo contenido.</p><div class="actions"><button class="primary" onclick="go('route')">Abrir ruta</button><button class="secondary" onclick="go('search')">Buscar</button></div></div></section><section class="stats"><div class="stat"><b>${DATA.phases.length}</b><span>Fases</span></div><div class="stat"><b>${DATA.episodes.length}</b><span>Episodios</span></div><div class="stat"><b>${c.pct}%</b><span>Completado</span></div></section><div class="section-title"><h2>Recomendado</h2><p class="meta">Episodios de mayor prioridad.</p></div><section class="grid">${DATA.episodes.filter(e=>e.priority===3).map(episodeCard).join('')||'<div class="empty">Sin episodios cargados.</div>'}</section>`}
function phaseCard(p){let eps=phaseEpisodes(p.id);let locked=eps.length===0?' locked':'';return `<button class="phase${locked}" onclick="${eps.length?`openPhase('${p.id}')`:''}"><b>${String(p.order).padStart(2,'0')} · ${p.name}</b><span>${p.date_range||''} · ${eps.length} episodios</span><p class="meta">${p.summary||''}</p></button>`}
function route(){screen.innerHTML=`<div class="section-title"><h2>La Gran Ruta</h2><p class="meta">Datos cargados desde histoguia-database.</p></div><section class="grid">${DATA.phases.map(phaseCard).join('')}</section>`}
window.openPhase=id=>{let p=DATA.phases.find(x=>x.id===id);let subs=DATA.subperiods.filter(s=>s.phase_id===id);screen.innerHTML=`<button class="mini back" onclick="render()">← Volver</button><section class="card"><p class="overline">${p.date_range||''}</p><h2>${p.name}</h2><p class="meta">${p.summary||''}</p></section><div class="section-title"><h2>Subperiodos</h2></div><section class="grid">${subs.map(subCard).join('')||'<div class="empty">Sin subperiodos.</div>'}</section>`;window.scrollTo(0,0)}
function subCard(s){let eps=subEpisodes(s.id);return `<button class="subperiod ${eps.length?'':'locked'}" onclick="${eps.length?`openSub('${s.id}')`:''}"><b>${s.order}. ${s.name}</b><span>${s.date_range||''} · ${eps.length} episodios</span><p class="meta">${s.summary||''}</p></button>`}
window.openSub=id=>{let s=DATA.subperiods.find(x=>x.id===id), eps=subEpisodes(id);screen.innerHTML=`<button class="mini back" onclick="openPhase('${s.phase_id}')">← Volver</button><section class="card"><p class="overline">${s.date_range||''}</p><h2>${s.name}</h2><p class="meta">${s.summary||''}</p></section><div class="section-title"><h2>Episodios</h2></div><section class="grid">${eps.map(episodeCard).join('')||'<div class="empty">Sin episodios aún.</div>'}</section>`;window.scrollTo(0,0)}
function episodeCard(e){let st=status(e.id);return `<article class="episode"><p class="overline">${e.podcast_name}${e.episode_code?` · ${e.episode_code}`:''}</p><h3>${e.title}</h3><p class="meta">${topicName(e.main_topic_id)}${e.duration?` · ${e.duration}`:''}</p><p>${e.summary||''}</p><div class="tags"><span class="tag ok">Enlaces verificados</span><span class="tag">Prioridad ${e.priority||'-'}</span>${st==='listening'?'<span class="tag warn">Escuchando</span>':''}${st==='done'?'<span class="tag ok">Escuchado</span>':''}</div><div class="row"><button class="primary" onclick="openEpisode('${e.id}')">Ver ficha</button><button class="secondary" onclick="setStatus('${e.id}','done')">Marcar escuchado</button></div></article>`}
window.openEpisode=id=>{let e=DATA.episodes.find(x=>x.id===id);screen.innerHTML=episodeDetail(e);window.scrollTo(0,0)}
function platformButton(e,name,key,cls){let url=links(e)[key];return verified(e,key)&&url?`<button class="platform ${cls}" onclick="openPlatform('${e.id}','${key}','${url}')">${name}</button>`:`<span class="platform disabled">${name} · pendiente</span>`}
function episodeDetail(e){return `<button class="mini back" onclick="render()">← Volver</button><section class="card"><p class="overline">${e.podcast_name}${e.episode_code?` · ${e.episode_code}`:''}</p><h2>${e.title}</h2><p class="meta">${topicName(e.main_topic_id)} · ${subName(e.subperiod_id)}${e.duration?` · ${e.duration}`:''}</p><div class="tags"><span class="tag ok">Base remota</span><span class="tag">Prioridad ${e.priority||'-'}</span><span class="tag">Estado: ${status(e.id)}</span></div><p>${e.summary||''}</p><div class="section-title"><h3>Qué aprenderás</h3></div><ul class="learn">${(e.learn||[]).map(x=>`<li>${x}</li>`).join('')||'<li>Ficha editorial pendiente de ampliar.</li>'}</ul><div class="section-title"><h3>Valoración editorial</h3></div><div class="score"><div><b>${'★'.repeat(e.priority||1)}</b><br><span class="small">Prioridad</span></div><div><b>${'★'.repeat(e.difficulty||1)}</b><br><span class="small">Dificultad</span></div><div><b>${'★'.repeat(e.depth||1)}</b><br><span class="small">Profundidad</span></div></div><div class="section-title"><h3>Escúchalo en</h3><p class="meta">Al abrir una plataforma, Histoguía lo marca como “escuchando”.</p></div><div class="links">${platformButton(e,'Apple Podcasts','apple','apple')}${platformButton(e,'Spotify','spotify','spotify')}${platformButton(e,'iVoox','ivoox','ivoox')}${platformButton(e,'YouTube','youtube','')}${platformButton(e,'Web','web','')}</div><div class="section-title"><h3>Relacionado</h3></div><div class="pills">${(e.related_topics||[]).map(x=>`<span class="pill">${x}</span>`).join('')||'<span class="pill">Pendiente</span>'}</div><div class="actions"><button class="secondary" onclick="toggleFav('${e.id}')">${fav(e.id)?'Quitar favorito':'Añadir favorito'}</button><button class="primary" onclick="setStatus('${e.id}','done')">Marcar escuchado</button><button class="secondary" onclick="setStatus('${e.id}','rewatch')">Reescuchar</button></div></section>`}
function search(){screen.innerHTML=`<input id="q" placeholder="Buscar: Neolítico, Atapuerca, iVoox..."><section id="results" class="grid">${DATA.episodes.map(episodeCard).join('')}</section>`;$('#q').oninput=ev=>{let q=ev.target.value.toLowerCase();let res=DATA.episodes.filter(e=>(e.title+' '+(e.summary||'')+' '+topicName(e.main_topic_id)+' '+e.podcast_name+' '+(e.related_topics||[]).join(' ')).toLowerCase().includes(q));$('#results').innerHTML=res.map(episodeCard).join('')||'<div class="empty">Sin resultados.</div>'}}
function progress(){let c=counts();let favs=DATA.episodes.filter(e=>fav(e.id));screen.innerHTML=`<section class="card"><p class="overline">Mi progreso</p><h2>${c.pct}% completado</h2><p class="meta">${c.d} de ${c.total} episodios escuchados. ${c.f} favoritos.</p></section><div class="section-title"><h2>Favoritos</h2></div><section class="grid">${favs.map(episodeCard).join('')||'<div class="empty">Sin favoritos aún.</div>'}</section>`}
function render(){if(tab==='home')home();if(tab==='route')route();if(tab==='search')search();if(tab==='progress')progress()}
window.go=t=>{tab=t;activate();render()}
function activate(){document.querySelectorAll('.bottom button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab))}
document.querySelectorAll('.bottom button').forEach(b=>b.onclick=()=>go(b.dataset.tab));
if(localStorage.getItem(THEME)==='light')document.documentElement.classList.add('light');
$('#themeBtn').onclick=()=>{document.documentElement.classList.toggle('light');localStorage.setItem(THEME,document.documentElement.classList.contains('light')?'light':'dark')};
init();
