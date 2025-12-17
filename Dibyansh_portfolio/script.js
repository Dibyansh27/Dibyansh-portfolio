// Replace lucide icon placeholders with SVG
if (typeof lucide !== 'undefined') lucide.replace();

// ---------- DATA (from your React code) ----------
const projects = [
  {
    title: "V.I.S.T.A",
    subtitle: "Virtual Interactive Speech & Text Assistant",
    category: "AR + AI",
    description:
      "A mobile-based AR application that brings AI-powered conversational avatars into the real world, enabling voice and text interaction with animated 3D characters.",
    why: "Traditional voice assistants lack presence and embodiment, while AR apps often lack intelligence. VISTA bridges AI conversation and spatial computing into one seamless experience.",
    role: [
      "Designed and developed the AR interaction system in Unity",
      "Integrated AI-based NLP using Groq API",
      "Implemented voice input (STT) via Android native bridge",
      "Integrated Coqui TTS for natural speech output",
      "Synced speech with lip-sync & gesture animations",
      "Optimized performance for mobile AR devices",
    ],
    features: [
      "Real-time voice & text conversation",
      "Animated 3D avatars placed in real environments",
      "Multi-avatar interaction",
      "Gesture-based control (scale, rotate, move)",
      "Low-latency AI responses",
    ],
    tech: [
      "Unity (AR Foundation, ARCore)",
      "C# & Java",
      "Groq API (NLP)",
      "Coqui TTS",
      "Mixamo",
      "Android SDK/NDK",
    ],
    metrics: [
      "Average FPS: 45–60",
      "Voice response latency: ~1.1s",
      "Usability score (SUS): 84.5 / 100",
    ],
    learned:
      "How to synchronize AI pipelines with real-time animation, performance optimization for mobile AR, and designing interaction that feels human, not robotic.",
    color: "linear-gradient(135deg,#7c3aed,#fb7185)",
    flag: true
  },
  {
    title: "AR Balloon Shooting Game",
    subtitle: "Augmented Reality Kids Game",
    category: "AR Gaming",
    description:
      "An AR-based shooting game where users pop virtual balloons in real-world environments using their mobile device.",
    focus: [
      "AR interaction design",
      "Game mechanics & timing",
      "User engagement in short play sessions",
    ],
    contribution: [
      "Unity AR integration",
      "Game logic & scoring system",
      "UI & feedback loops",
      "Performance testing",
    ],
    why: "This project strengthened my understanding of gamification, real-world interaction, and intuitive AR controls, especially for younger users.",
    color: "linear-gradient(135deg,#fb923c,#ef4444)"
  },
  {
    title: "3D Shooting Game",
    subtitle: "Unity Game Development",
    category: "Game Dev",
    description:
      "A traditional 3D shooting game built in Unity to strengthen fundamentals of game mechanics, physics, and UI systems.",
    skills: [
      "Player movement & shooting logic",
      "Enemy interaction",
      "UI integration",
      "Scene management",
    ],
    note: "This project laid the foundation for my later AR and AI-driven games.",
    color: "linear-gradient(135deg,#60a5fa,#06b6d4)"
  },
  {
    title: "Body Language Detector",
    subtitle: "ML + Computer Vision",
    category: "AI/ML",
    description:
      "A machine-learning-based system that detects and interprets body language cues using computer vision.",
    worked: [
      "ML model integration",
      "Feature extraction",
      "Real-time detection logic",
      "Understanding non-verbal behavior through data",
    ],
    note: "This project deepened my interest in human-computer interaction.",
    color: "linear-gradient(135deg,#a78bfa,#7c3aed)"
  },
];

// ---------- RENDER PROJECTS ----------
function renderProjects(){
  const container = document.getElementById('projectsContainer');
  container.innerHTML = '';
  projects.forEach((p, idx) => {
    const pr = document.createElement('div');
    pr.className = 'project-row card';

    const left = document.createElement('div');
    left.className = 'project-left';
    left.style.background = p.color;
    left.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;color:white">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" fill="white"></path></svg>
                      </div>`;

    const body = document.createElement('div');
    body.className = 'project-body';

    let html = `<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <h3 style="margin:0">${p.title}</h3>
                  ${p.flag ? '<span style="background:rgba(255,223,100,0.12);padding:6px 10px;border-radius:999px;font-size:12px;color:#f59e0b">FLAGSHIP</span>' : ''}
                </div>
                <div style="color:var(--accent-purple);margin-top:6px">${p.subtitle}</div>
                <div style="margin-top:8px"><span class="chip">${p.category}</span></div>
                <p style="color:var(--sub);margin-top:12px">${p.description}</p>`;

    if(p.why){
      html += `<div style="margin-top:12px;padding:12px;border-radius:10px;background:rgba(159,122,234,0.06);border:1px solid rgba(159,122,234,0.08)">
                <strong style="color:var(--accent-purple)">Why I built this</strong>
                <div style="color:var(--sub);margin-top:8px">${p.why}</div>
              </div>`;
    }

    if(p.role){
      html += `<div style="margin-top:12px"><strong>What I did</strong><ul style="margin:8px 0 0;padding-left:18px;color:var(--sub)">${p.role.map(r=>`<li>${r}</li>`).join('')}</ul></div>`;
    }

    if(p.features){
      html += `<div style="margin-top:12px"><strong>Key Features</strong><div class="features">${p.features.map(f=>`<span class="feature">${f}</span>`).join('')}</div></div>`;
    }

    if(p.tech){
      html += `<div style="margin-top:12px"><strong>Tech Stack</strong><div style="margin-top:8px">${p.tech.map(t=>`<span class="chip" style="margin-right:6px">${t}</span>`).join('')}</div></div>`;
    }

    if(p.metrics){
      html += `<div style="margin-top:12px"><strong>Performance & Results</strong>
                <div class="grid-3">${p.metrics.map(m=>{
                  const parts = m.split(':');
                  return `<div class="metric"><div style="color:var(--sub);font-size:13px">${parts[0]}</div><div style="font-weight:700;color:var(--accent-purple);margin-top:6px">${parts[1] ? parts[1].trim() : ''}</div></div>`;
                }).join('')}</div></div>`;
    }

    if(p.learned){
      html += `<div style="margin-top:12px;padding:10px;border-radius:10px;background:rgba(255,255,255,0.02)"><strong style="color:var(--accent-purple)">What I learned</strong><div style="color:var(--sub);margin-top:6px">${p.learned}</div></div>`;
    }

    if(p.focus){
      html += `<div style="margin-top:12px"><strong>Focus Areas</strong><div style="margin-top:8px">${p.focus.map(f=>`<span class="feature">${f}</span>`).join('')}</div></div>`;
    }

    if(p.contribution){
      html += `<div style="margin-top:12px"><strong>My Contribution</strong><ul style="margin:8px 0 0;padding-left:18px;color:var(--sub)">${p.contribution.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    }

    if(p.skills){
      html += `<div style="margin-top:12px"><strong>Skills Demonstrated</strong><div style="margin-top:8px">${p.skills.map(s=>`<span class="chip" style="margin-right:6px">${s}</span>`).join('')}</div></div>`;
    }

    if(p.worked){
      html += `<div style="margin-top:12px"><strong>What I Worked On</strong><ul style="margin:8px 0 0;padding-left:18px;color:var(--sub)">${p.worked.map(w=>`<li>${w}</li>`).join('')}</ul></div>`;
    }

    if(p.note){
      html += `<div style="margin-top:8px;color:var(--sub);font-style:italic">${p.note}</div>`;
    }

    body.innerHTML = html;
    pr.appendChild(left);
    pr.appendChild(body);
    container.appendChild(pr);
  });

  // replace icons inside the container
  if (typeof lucide !== 'undefined') lucide.replace();
}

// ---------- NAV / PAGES ----------
const pages = ['home','start','builds','skills','credentials','journey','contact'];
let currentPage = 'home';

function showPage(id){
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if(el) el.style.display = (p === id) ? '' : 'none';
  });
  // update nav active state
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.id === id);
  });
  document.querySelectorAll('.mobile-nav-btn').forEach(btn=>{
    btn.style.fontWeight = (btn.dataset.id === id) ? '700' : '400';
  });
  currentPage = id;
  window.scrollTo(0,0);
}

// attach nav handlers
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> showPage(btn.dataset.id));
});
document.querySelectorAll('.mobile-nav-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    showPage(btn.dataset.id);
    toggleMobileMenu(false);
  });
});

// buttons inside pages that navigate
document.querySelectorAll('[data-id]').forEach(el=>{
  el.addEventListener('click', (e)=>{
    const dest = el.getAttribute('data-id');
    if(dest) showPage(dest);
  });
});

// brand click -> home
document.getElementById('brand').addEventListener('click', ()=> showPage('home'));

// mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
mobileToggle.addEventListener('click', ()=> toggleMobileMenu());
function toggleMobileMenu(force){
  const isHidden = mobileMenu.classList.contains('hidden');
  if(force === false) mobileMenu.classList.add('hidden');
  else mobileMenu.classList.toggle('hidden', !isHidden);
}

// initial render
renderProjects();
// refresh lucide icons after dynamic render
if (typeof lucide !== 'undefined') lucide.replace();
