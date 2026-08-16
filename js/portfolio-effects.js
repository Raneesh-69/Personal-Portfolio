/* RANEESH PORTFOLIO — BOOT + AI JOURNEY
   The boot experience is preserved. The old Neural Core has been removed.
   AI Journey is a lightweight scroll-reactive background storytelling layer. */
(function(){
  "use strict";
  if(window.__RANEESH_PORTFOLIO_EFFECTS_V8__) return;
  window.__RANEESH_PORTFOLIO_EFFECTS_V8__=true;

  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const smooth=t=>t*t*(3-2*t);
  const lerp=(a,b,t)=>a+(b-a)*t;
  const C={coral:[242,108,79],pink:[232,93,151],violet:[124,77,255],blue:[56,145,218],ink:[38,40,52]};
  const rgba=(name,a=1)=>{const c=C[name]||C.coral;return `rgba(${c[0]},${c[1]},${c[2]},${a})`;};
  const S={loader:null,loaderCanvas:null,loaderCtx:null,loaderStart:0,loaderReady:false,loaderDone:false,loaderRAF:0,journey:null,ctx:null,w:0,h:0,dpr:1,scroll:0,targetScroll:0,t:0,raf:0,sections:[],stage:""};

  function init(){
    createLoader();
    createJourney();
    bindJourney();
    resizeJourney();
    refreshJourneySections();
    startJourney();
    startLoader();
  }

/* ------------------------------ LOADER ------------------------------ */
  function shouldShowLoader(){
    const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
    if(page!=="index.html" && page!=="") return false;
    try {
      if(sessionStorage.getItem("raneeshPortfolioBootedV7")==="1") return false;
    } catch(e){}
    return true;
  }

  function createLoader(){
    if(!shouldShowLoader()) return;
    let el=document.getElementById("portfolioBootV5");
    if(el){S.loader=el;S.loaderCanvas=el.querySelector("canvas");S.loaderCtx=S.loaderCanvas?.getContext("2d");return;}
    el=document.createElement("div");
    el.id="portfolioBootV5";
    el.className="portfolio-boot-v5";
    el.setAttribute("aria-hidden","true");
    el.innerHTML=`
      <div class="boot5-grid"></div>
      <div class="boot5-glow boot5-glow-a"></div>
      <div class="boot5-glow boot5-glow-b"></div>

      <header class="boot5-header">
        <div class="boot5-brand"><span class="boot5-live"></span>RANEESH <em>// AI PORTFOLIO</em></div>
        <div class="boot5-code">SYSTEM 01 <i>•</i> BUILD 2026</div>
      </header>

      <div class="boot5-left-telemetry">
        <span>NEURAL SYSTEM</span>
        <b data-boot-state>BOOTING</b>
        <small>PORTFOLIO ENGINE</small>
        <small>VISUAL CORE / 01</small>
      </div>

      <div class="boot5-right-telemetry">
        <div><span>CORE</span><b data-metric-core>00%</b></div>
        <div><span>NETWORK</span><b data-metric-network>00%</b></div>
        <div><span>CONTENT</span><b data-metric-content>00%</b></div>
      </div>

      <div class="boot5-stage">
        <canvas class="boot5-canvas"></canvas>
        <div class="boot5-orbit boot5-orbit-a"></div>
        <div class="boot5-orbit boot5-orbit-b"></div>
        <div class="boot5-orbit boot5-orbit-c"></div>
        <div class="boot5-center"><span>AI</span><i></i></div>
        <div class="boot5-tech t1"><img src="img/python.png" alt=""><span>PYTHON</span></div>
        <div class="boot5-tech t2"><img src="img/javascript (1).png" alt=""><span>JAVASCRIPT</span></div>
        <div class="boot5-tech t3"><img src="img/git (2).png" alt=""><span>GIT</span></div>
        <div class="boot5-tech t4"><img src="img/github (7).png" alt=""><span>GITHUB</span></div>
        <div class="boot5-tech t5"><img src="img/ml.png" alt=""><span>MACHINE LEARNING</span></div>
        <div class="boot5-tech t6"><img src="img/computer-vision.png" alt=""><span>COMPUTER VISION</span></div>
      </div>

      <main class="boot5-copy">
        <div class="boot5-eyebrow"><span data-boot-index>01 / 09</span><b data-boot-phase>INITIALIZING PORTFOLIO</b><strong data-boot-pct>00%</strong></div>
        <h1>NEURAL <span>INTELLIGENCE</span><br><small>IS COMING ONLINE</small></h1>
        <p data-boot-detail>Preparing the visual intelligence system...</p>

        <div class="boot5-progress">
          <div class="boot5-progress-head"><span>INITIALIZATION SEQUENCE</span><b data-boot-pct2>00%</b></div>
          <div class="boot5-rail"><i data-boot-rail></i><b data-boot-dot></b></div>
          <div class="boot5-ticks"><span>CORE</span><span>NETWORK</span><span>PROJECTS</span><span>SKILLS</span><span>READY</span></div>
        </div>

        <div class="boot5-sequence">
          <span class="done" data-seq="0">01&nbsp; CORE FORMATION</span>
          <span data-seq="1">02&nbsp; NETWORK LINK</span>
          <span data-seq="2">03&nbsp; PROJECT INDEX</span>
          <span data-seq="3">04&nbsp; SKILL MATRIX</span>
          <span data-seq="4">05&nbsp; INTERFACE READY</span>
        </div>
      </main>

      <footer class="boot5-footer">
        <span>AI / ML • DATA • SOFTWARE</span>
        <span data-boot-footer>ESTABLISHING CONNECTIONS...</span>
        <span>SCROLL TO EXPLORE</span>
      </footer>
    `;
    document.body.insertBefore(el,document.body.firstChild);
    S.loader=el;S.loaderCanvas=el.querySelector("canvas");S.loaderCtx=S.loaderCanvas.getContext("2d");
    document.documentElement.classList.add("boot-v5-lock");
  }

  function startLoader(){
    if(!S.loader||S.loaderDone)return;
    S.loaderStart=performance.now();
    S.loaderReady=document.readyState==="complete";
    window.addEventListener("load",()=>{S.loaderReady=true;},{once:true});
    loaderResize();
    if(reduce){setTimeout(()=>finishLoader(true),900);return;}
    S.loaderRAF=requestAnimationFrame(loaderLoop);
  }

  function loaderResize(){
    if(!S.loaderCanvas||!S.loaderCtx)return;
    const d=Math.min(devicePixelRatio||1,1.5),r=S.loaderCanvas.getBoundingClientRect();
    S.loaderCanvas.width=Math.max(1,Math.floor(r.width*d));
    S.loaderCanvas.height=Math.max(1,Math.floor(r.height*d));
    S.loaderCtx.setTransform(d,0,0,d,0,0);
  }

  function loaderLoop(now){
    if(S.loaderDone)return;
    S.loaderRAF=requestAnimationFrame(loaderLoop);
    const elapsed=now-S.loaderStart;
    const visual=clamp(elapsed/5200);
    const progress=clamp(Math.min(visual,S.loaderReady?1:.94));
    drawLoader(progress,elapsed/1000);

    const phases=[
      ["INITIALIZING PORTFOLIO","Preparing the visual intelligence system..."],
      ["FORMING NEURAL CORE","Assembling the central intelligence layer..."],
      ["CONNECTING TECHNOLOGIES","Linking the tools and systems in the stack..."],
      ["INDEXING PROJECTS","Preparing featured work and project pathways..."],
      ["MAPPING SKILLS","Organizing the technical knowledge network..."],
      ["SYNCHRONIZING INTERFACE","Aligning the portfolio experience..."],
      ["CALIBRATING VISUAL CORE","Bringing the neural system into focus..."],
      ["FINAL SYSTEM CHECK","Everything is almost ready..."],
      ["SYSTEM READY","Entering Raneesh's portfolio..."]
    ];
    const idx=Math.min(8,Math.floor(progress*9));
    const [title,detail]=phases[idx];
    const q=(sel)=>S.loader.querySelector(sel);
    q("[data-boot-phase]").textContent=title;
    q("[data-boot-detail]").textContent=detail;
    q("[data-boot-index]").textContent=`${String(idx+1).padStart(2,"0")} / 09`;
    q("[data-boot-pct]").textContent=`${Math.round(progress*100).toString().padStart(2,"0")}%`;
    q("[data-boot-pct2]").textContent=`${Math.round(progress*100)}%`;
    q("[data-boot-rail]").style.transform=`scaleX(${progress})`;
    q("[data-boot-dot]").style.left=`${progress*100}%`;
    q("[data-boot-state]").textContent=progress>.92?"READY":"BOOTING";
    q("[data-metric-core]").textContent=`${Math.round(clamp(progress*1.15)*100)}%`;
    q("[data-metric-network]").textContent=`${Math.round(clamp((progress-.12)/.88)*100)}%`;
    q("[data-metric-content]").textContent=`${Math.round(clamp((progress-.32)/.68)*100)}%`;
    q("[data-boot-footer]").textContent=idx>=8?"SYSTEM READY • ENTERING...":idx>=6?"CALIBRATING VISUAL CORE...":"ESTABLISHING CONNECTIONS...";
    S.loader.querySelectorAll("[data-seq]").forEach((x,i)=>x.classList.toggle("done",progress>(i+.7)/5.5));

    if(progress>=.995&&S.loaderReady&&elapsed>4800)finishLoader(false);
  }

  function drawLoader(p,t){
    const c=S.loaderCtx,can=S.loaderCanvas;if(!c||!can)return;
    const r=can.getBoundingClientRect(),w=r.width,h=r.height;
    c.clearRect(0,0,w,h);
    const cx=w*.5,cy=h*.43,base=Math.min(w,h)*.16;
    const field=c.createRadialGradient(cx,cy,0,cx,cy,base*3.4);
    field.addColorStop(0,rgba("coral",.15));field.addColorStop(.3,rgba("pink",.07));field.addColorStop(.65,rgba("violet",.035));field.addColorStop(1,"rgba(255,255,255,0)");
    c.fillStyle=field;c.fillRect(0,0,w,h);

    const open=smooth(clamp(p*1.18));
    // radial spokes
    for(let i=0;i<28;i++){
      const a=i*Math.PI*2/28+t*(i%2?.018:-.012);
      const inner=base*(.18+open*.15),outer=base*(.7+open*(1.3+(i%4)*.12));
      const x1=cx+Math.cos(a)*inner,y1=cy+Math.sin(a)*inner;
      const x2=cx+Math.cos(a)*outer,y2=cy+Math.sin(a)*outer;
      c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);
      c.strokeStyle=rgba(i%3===0?"coral":i%3===1?"violet":"blue",.08+open*.10);c.lineWidth=i%5===0?1.2:.6;c.stroke();
      c.beginPath();c.arc(x2,y2,i%5===0?2.1:1.1,0,Math.PI*2);
      c.fillStyle=rgba(i%3===0?"coral":i%3===1?"violet":"blue",.25+open*.5);c.fill();
    }
    // moving packets
    for(let i=0;i<12;i++){
      const a=i*Math.PI*2/12+t*(.05+(i%3)*.012);
      const rr=base*(.3+((t*.25+i/12)%1)*(1.2+open*1.2));
      const x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr*.72;
      c.beginPath();c.arc(x,y,1.4+(i%3)*.45,0,Math.PI*2);c.fillStyle=rgba(i%2?"blue":"coral",.7);c.fill();
    }
    // calibration rings
    for(let i=0;i<4;i++){
      c.save();c.translate(cx,cy);c.rotate(t*(i%2?-0.12:0.08));
      c.beginPath();c.arc(0,0,base*(.7+i*.26),-Math.PI/2,-Math.PI/2+Math.PI*2*(p*(1-i*.08)));
      c.strokeStyle=rgba(i===0?"coral":i===1?"pink":i===2?"violet":"blue",.16+open*.13);
      c.lineWidth=i===0?1.4:.7;c.setLineDash(i%2?[3,8]:[10,7]);c.stroke();c.restore();
    }
    // center lattice
    const rr=base*(.42+open*.18);
    c.save();c.translate(cx,cy);c.rotate(t*.2);
    c.beginPath();for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4,x=Math.cos(a)*rr,y=Math.sin(a)*rr;i?c.lineTo(x,y):c.moveTo(x,y);}c.closePath();
    c.strokeStyle=rgba("violet",.28);c.lineWidth=1;c.stroke();c.restore();
  }

  function finishLoader(reduced){
    if(S.loaderDone)return;
    S.loaderDone=true;
    try { sessionStorage.setItem("raneeshPortfolioBootedV7","1"); } catch(e) {}cancelAnimationFrame(S.loaderRAF);
    document.documentElement.classList.remove("boot-v5-lock");
    if(reduced){S.loader.classList.add("is-done");setTimeout(()=>S.loader?.remove(),300);return;}
    S.loader.classList.add("is-ready");
    setTimeout(()=>{S.loader.classList.add("is-done");setTimeout(()=>S.loader?.remove(),850);},1050);
  }


  /* ------------------------------ AI JOURNEY / DATA PIPELINE ------------------------------ */
  function pageKey(){
    const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
    if(page==="about.html") return "about";
    if(page==="projects.html") return "projects";
    if(page==="certifications.html") return "certifications";
    if(page==="pricing.html") return "pricing";
    return "home";
  }

  function createJourney(){
    if(document.querySelector(".ai-journey-bg")) return;
    const key=pageKey();
    const configs={
      home:{eyebrow:"AI JOURNEY", title:"DATA → INTELLIGENCE → IMPACT", nodes:["PROFILE","ANALYSIS","PROJECTS","TECH STACK","VALIDATION","DEPLOY"], labels:["INPUT","PROFILE","MODEL","BUILD","VERIFY","LIVE"]},
      about:{eyebrow:"PROFILE PIPELINE", title:"PERSON → THINKING → BUILDING", nodes:["INTRO","JOURNEY","FOCUS","MINDSET","DIRECTION","CONNECT"], labels:["START","STORY","FOCUS","MINDSET","VISION","NEXT"]},
      projects:{eyebrow:"PROJECT ENGINE", title:"IDEA → MODEL → PRODUCT", nodes:["DISCOVER","DESIGN","BUILD","TEST","DEPLOY","IMPACT"], labels:["IDEA","PLAN","BUILD","TEST","SHIP","LIVE"]},
      certifications:{eyebrow:"LEARNING PIPELINE", title:"LEARN → PRACTICE → VERIFY", nodes:["LEARN","TRAIN","APPLY","VALIDATE","CERTIFY","ADVANCE"], labels:["LEARN","TRAIN","APPLY","CHECK","PROOF","NEXT"]},
      pricing:{eyebrow:"BUILD PIPELINE", title:"PLAN → BUILD → DELIVER", nodes:["PLAN","SCOPE","BUILD","REFINE","SHIP","SUPPORT"], labels:["PLAN","SCOPE","BUILD","REFINE","SHIP","LIVE"]}
    };
    const cfg=configs[key]||configs.home;
    const labels=cfg.nodes.map((n,i)=>`<g class="jp-node" data-node="${i}"><circle class="jp-node-core" cx="${120+i*152}" cy="${500-(i%2)*105}" r="${i===2?9:7}"/><circle class="jp-node-ring" cx="${120+i*152}" cy="${500-(i%2)*105}" r="${i===2?24:19}"/><text x="${120+i*152}" y="${500-(i%2)*105-31}">${n}</text><text class="jp-node-sub" x="${120+i*152}" y="${500-(i%2)*105+40}">${cfg.labels[i]}</text></g>`).join("");
    const host=document.createElement("div");
    host.className="ai-journey-bg ai-pipeline-bg";
    host.dataset.page=key;
    host.setAttribute("aria-hidden","true");
    host.innerHTML=`
      <div class="pipeline-grid"></div>
      <div class="pipeline-halo halo-a"></div><div class="pipeline-halo halo-b"></div><div class="pipeline-halo halo-c"></div>
      <div class="pipeline-scanline"></div>
      <svg class="pipeline-svg" viewBox="0 0 1000 720" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pipelineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#f26c4f"/><stop offset=".34" stop-color="#e85d97"/><stop offset=".68" stop-color="#7c4dff"/><stop offset="1" stop-color="#3891da"/>
          </linearGradient>
          <filter id="pipelineSoftGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="pipelineTinyGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path class="pipeline-route-shadow" d="M120 500 C220 560 275 360 355 395 S470 590 510 395 S660 250 728 395 S860 540 900 235"/>
        <path class="pipeline-route" d="M120 500 C220 560 275 360 355 395 S470 590 510 395 S660 250 728 395 S860 540 900 235"/>
        <path class="pipeline-route-progress" pathLength="1" d="M120 500 C220 560 275 360 355 395 S470 590 510 395 S660 250 728 395 S860 540 900 235"/>
        <g class="pipeline-secondary">
          <path d="M355 395 C290 250 225 190 120 165"/><path d="M355 395 C290 510 190 590 95 610"/>
          <path d="M510 395 C590 190 680 135 805 120"/><path d="M510 395 C620 520 730 565 905 570"/>
          <path d="M728 395 C790 280 850 220 955 190"/><path d="M728 395 C805 470 870 490 965 500"/>
        </g>
        <g class="pipeline-node-group">${labels}</g>
      </svg>
      <div class="pipeline-packet packet-1"></div><div class="pipeline-packet packet-2"></div><div class="pipeline-packet packet-3"></div><div class="pipeline-packet packet-4"></div>
      <div class="pipeline-hud">
        <div class="pipeline-hud-top"><span><i></i>${cfg.eyebrow}</span><b data-pipeline-pct>00%</b></div>
        <strong>${cfg.title}</strong>
        <div class="pipeline-hud-line"><i data-pipeline-bar></i></div>
        <div class="pipeline-hud-bottom"><span data-pipeline-stage>${cfg.nodes[0]}</span><em>SCROLL-SYNCED</em></div>
      </div>
      <div class="pipeline-mini"><span>FLOW</span><b data-pipeline-mini>ACTIVE</b><i></i></div>
    `;
    document.body.insertBefore(host,document.body.firstChild);
    S.journey=host;
    S.ctx=host.querySelector(".pipeline-svg");
  }

  function bindJourney(){
    window.addEventListener("scroll",()=>{S.targetScroll=window.scrollY||0;},{passive:true});
    document.addEventListener("visibilitychange",()=>{if(!document.hidden) S.targetScroll=window.scrollY||0;});
    window.addEventListener("resize",resizeJourney,{passive:true});
  }

  function resizeJourney(){S.w=innerWidth;S.h=innerHeight;S.dpr=Math.min(devicePixelRatio||1,1.5);refreshJourneySections();}

  function refreshJourneySections(){
    const key=pageKey();
    const selectors={
      home:[["#hero","PROFILE"],["#featured-work","PROJECTS"],[".skills","TECH STACK"],["#connectMe","DEPLOY"]],
      about:[[".About-section","INTRO"],[".contact-section","CONNECT"]],
      projects:[[".project-section","PROJECT ENGINE"],[".contact-section","DEPLOY"]],
      certifications:[[".project-section","CERTIFICATIONS"],[".contact-section","NEXT"]],
      pricing:[[".pricing-plans","BUILD"],[".contact-section","SUPPORT"]]
    };
    const arr=(selectors[key]||selectors.home).map(([sel,name])=>[document.querySelector(sel),name]).filter(x=>x[0]);
    S.sections=arr.map(([el,name])=>{const r=el.getBoundingClientRect();return {name,top:r.top+window.scrollY,height:r.height};});
  }

  function startJourney(){
    S.targetScroll=window.scrollY||0;
    if(S.raf) return;
    const loop=now=>{
      S.raf=requestAnimationFrame(loop);
      if(document.hidden) return;
      S.t=now*.001;
      S.scroll+=(S.targetScroll-S.scroll)*.09;
      renderJourney();
    };
    S.raf=requestAnimationFrame(loop);
  }

  function getStage(){
    const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    const p=clamp(S.scroll/max);
    const focus=S.scroll+innerHeight*.48;
    let best=S.sections[0]?.name||"START",dist=Infinity;
    S.sections.forEach(o=>{const d=Math.abs((o.top+Math.min(o.height*.28,innerHeight*.28))-focus);if(d<dist){dist=d;best=o.name;}});
    return {p,best};
  }

  function renderJourney(){
    if(!S.journey)return;
    const {p,best}=getStage();
    const eased=smooth(p);
    S.journey.style.setProperty("--pipeline-progress",eased.toFixed(4));
    S.journey.style.setProperty("--pipeline-time",S.t.toFixed(3));
    const path=S.journey.querySelector(".pipeline-route-progress");
    if(path) path.style.strokeDashoffset=(1-eased).toFixed(4);
    const bar=S.journey.querySelector("[data-pipeline-bar]"); if(bar) bar.style.transform=`scaleX(${eased})`;
    const pct=S.journey.querySelector("[data-pipeline-pct]"); if(pct)pct.textContent=String(Math.round(eased*100)).padStart(2,"0")+"%";
    const stage=S.journey.querySelector("[data-pipeline-stage]"); if(stage)stage.textContent=best;
    const mini=S.journey.querySelector("[data-pipeline-mini]"); if(mini)mini.textContent=p<.98?"ACTIVE":"READY";
    const nodes=S.journey.querySelectorAll(".jp-node");
    const n=nodes.length;
    nodes.forEach((node,i)=>{
      const threshold=i/(n-1||1);
      const active=clamp((eased-threshold+.18)/.18);
      node.style.setProperty("--node-active",active.toFixed(3));
      node.classList.toggle("is-active",eased>=threshold-.02);
      node.style.transform=`translate3d(0,${Math.sin(S.t*1.2+i)*3*(.3+active*.7)}px,0)`;
    });
    ["packet-1","packet-2","packet-3","packet-4"].forEach((cl,i)=>{
      const q=S.journey.querySelector("."+cl); if(q) q.style.setProperty("--packet",((eased*(1.15+i*.13)+S.t*(.055+i*.018))%1).toFixed(3));
    });
    S.journey.dataset.stageIndex=String(Math.min(n-1,Math.floor(eased*n)));
    S.journey.dataset.stage=best;
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true}); else init();
})();
