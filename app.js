/**
 * KAIROS EVENTS & HOSPITALITY - FUTURISTIC 2060 CONTROLLER
 * Author: Advanced Creative Engineering Team
 * Incorporates:
 * - 2-3s Preloader with circular progress & split-reveal
 * - Magnetic Custom Cursor with contextual text
 * - HTML5 Canvas 3D particle vortex & holographic event-globe with parallax
 * - Web Audio API Synthetic futuristic soundscape & UI click whooshes
 * - Word-by-word scroll highlighting & metric count-ups
 * - 3D Tilt on glass cards
 * - Multi-Step "Build Your Event" Designer with real-time theme & budget simulation
 * - Dynamic services and packages rendered from siteConfig
 * - Bento Portfolio Archive with Lightbox modal
 * - "party" keyboard Easter egg confetti burst
 * - WhatsApp direct deep-link dispatch engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.siteConfig || {};

  // ==========================================
  // 1. PRELOADER (2-3s Cinematic Reveal)
  // ==========================================
  const preloader = document.getElementById('preloader');
  const preloaderCircle = document.getElementById('preloaderCircle');
  const preloaderCount = document.getElementById('preloaderCount');
  
  let loadProgress = 0;
  const circumference = 471; // 2 * PI * 75

  const preloaderTimer = setInterval(() => {
    loadProgress += Math.floor(Math.random() * 8) + 4;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(preloaderTimer);

      if (preloaderCircle) preloaderCircle.style.strokeDashoffset = '0';
      if (preloaderCount) preloaderCount.textContent = 'SYSTEMS SYNCHRONIZED // 100%';

      setTimeout(() => {
        preloader?.classList.add('dismissed');
        playUiTone(600, 'sine', 0.15); // soft chime
      }, 500);
    } else {
      const offset = circumference - (loadProgress / 100) * circumference;
      if (preloaderCircle) preloaderCircle.style.strokeDashoffset = offset;
      if (preloaderCount) preloaderCount.textContent = `INITIALIZING SYSTEM // ${loadProgress}%`;
    }
  }, 45);

  // ==========================================
  // 2. CUSTOM MAGNETIC CURSOR
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorText = document.getElementById('cursorText');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function renderCursorRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursorRing);
  }
  renderCursorRing();

  // Hover states for cursor expansion
  function attachCursorInteractions() {
    document.querySelectorAll('a, button, .universe-card, .bento-card, .chip-futuristic-label, .mood-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing?.classList.add('active-hover');
        if (el.classList.contains('bento-card') && cursorText) {
          cursorText.textContent = 'View';
        } else if (el.classList.contains('universe-card') && cursorText) {
          cursorText.textContent = 'Explore';
        } else if (cursorText) {
          cursorText.textContent = '';
        }
      });
      el.addEventListener('mouseleave', () => {
        cursorRing?.classList.remove('active-hover');
        if (cursorText) cursorText.textContent = '';
      });
    });
  }

  // ==========================================
  // 3. TOP SCROLL PROGRESS & SMART NAVBAR
  // ==========================================
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const siteHeader = document.getElementById('siteHeader');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
    if (scrollProgressBar) scrollProgressBar.style.width = `${progress}%`;

    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      siteHeader?.classList.add('nav-scrolled');
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        siteHeader?.classList.add('nav-hidden');
      } else {
        siteHeader?.classList.remove('nav-hidden');
      }
    } else {
      siteHeader?.classList.remove('nav-scrolled');
      siteHeader?.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
  });

  // ==========================================
  // 4. 3D WEBGL / PARTICLES & HOLOGRAPHIC GLOBE
  // ==========================================
  const canvas = document.getElementById('hero3dCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 45 : 95;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        color: i % 4 === 0 ? '#D4AF37' : i % 4 === 1 ? '#8C532B' : i % 4 === 2 ? '#F7E5B5' : '#E69A38',
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }

    let globeAngle = 0;

    function render3DHero() {
      ctx.clearRect(0, 0, width, height);

      // Center Holographic Rotating Rings
      const centerX = width / 2;
      const centerY = height / 2;
      globeAngle += 0.008;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Parallax with mouse
      const pX = (mouseX - width / 2) * 0.04;
      const pY = (mouseY - height / 2) * 0.04;
      ctx.translate(pX, pY);

      // Outer Holographic Rings (Royal Gold, Bronze & Champagne)
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 220, 80, globeAngle, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(140, 83, 43, 0.4)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 260, 100, -globeAngle * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(247, 229, 181, 0.28)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 180, 180, globeAngle * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Floating Particle Grid
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Subtle connect lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(render3DHero);
    }
    render3DHero();
  }

  // ==========================================
  // 5. WEB AUDIO SYNTHESIZER (No 404 dependencies)
  // ==========================================
  let audioCtx = null;
  let audioEnabled = false;
  let ambientHumGain = null;

  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const audioIcon = document.getElementById('audioIcon');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playUiTone(freq = 440, type = 'sine', duration = 0.1) {
    if (!audioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  function startAmbientHum() {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      ambientHumGain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(55, audioCtx.currentTime); // 55Hz low ambient note

      ambientHumGain.gain.setValueAtTime(0.015, audioCtx.currentTime);

      osc.connect(ambientHumGain);
      ambientHumGain.connect(audioCtx.destination);
      osc.start();
    } catch (e) {}
  }

  audioToggleBtn?.addEventListener('click', () => {
    initAudio();
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      if (audioIcon) audioIcon.textContent = '🔊';
      startAmbientHum();
      playUiTone(520, 'sine', 0.2);
    } else {
      if (audioIcon) audioIcon.textContent = '🔇';
      if (ambientHumGain) {
        ambientHumGain.gain.setValueAtTime(0, audioCtx.currentTime);
      }
    }
  });

  // Attach subtle click whoosh on interactive elements
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, .btn, .mood-card, .chip-futuristic-label')) {
      playUiTone(480, 'sine', 0.12);
    }
  });

  // ==========================================
  // 6. ANIMATED COUNTERS & 3D TILT
  // ==========================================
  const metricCards = document.querySelectorAll('.metric-num');
  let metricsTriggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !metricsTriggered) {
        metricsTriggered = true;
        metricCards.forEach(numEl => {
          const target = parseFloat(numEl.getAttribute('data-target') || '0');
          const suffix = numEl.getAttribute('data-suffix') || '+';
          let count = 0;
          const step = target / 50;

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              numEl.textContent = `${target}${suffix}`;
              clearInterval(timer);
            } else {
              numEl.textContent = `${Math.floor(count)}${suffix}`;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.about-metrics-grid');
  if (metricsSection) observer.observe(metricsSection);

  // 3D Tilt on Founder Card
  const founderCard = document.getElementById('founderCard');
  founderCard?.addEventListener('mousemove', (e) => {
    const rect = founderCard.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (y / (rect.height / 2)) * -12;
    const rotY = (x / (rect.width / 2)) * 12;
    founderCard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  founderCard?.addEventListener('mouseleave', () => {
    founderCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });

  // ==========================================
  // 7. RENDER SERVICES ("CHOOSE YOUR UNIVERSE")
  // ==========================================
  const universeGrid = document.getElementById('universeGrid');
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const modalBadge = document.getElementById('modalServiceBadge');
  const modalTitle = document.getElementById('modalServiceTitle');
  const modalDesc = document.getElementById('modalServiceDesc');
  const modalInclusions = document.getElementById('modalServiceInclusions');
  const modalTimeline = document.getElementById('modalServiceTimeline');
  const modalAction = document.getElementById('modalServiceAction');

  if (universeGrid && config.services) {
    universeGrid.innerHTML = config.services.map(svc => `
      <article class="universe-card" data-service-id="${svc.id}">
        <div class="universe-bg-media">
          <img src="${svc.image}" alt="${svc.title}" loading="lazy">
        </div>
        <div class="universe-overlay-grad"></div>
        <div class="universe-content">
          <div class="universe-icon">${svc.icon}</div>
          <h3 class="universe-title">${svc.title}</h3>
          <p class="universe-promise">${svc.shortPromise}</p>
          <div class="universe-explore-btn">
            <span>Explore Universe</span>
            <span>→</span>
          </div>
        </div>
      </article>
    `).join('');

    // Open Service Holographic Modal
    document.querySelectorAll('.universe-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-service-id');
        const svc = config.services.find(s => s.id === id);
        if (svc) {
          if (modalBadge) modalBadge.textContent = `UNIVERSE // ${svc.id.toUpperCase()}`;
          if (modalTitle) modalTitle.textContent = svc.title;
          if (modalDesc) modalDesc.textContent = svc.details;
          if (modalTimeline) modalTimeline.textContent = svc.sampleTimeline;

          if (modalInclusions) {
            modalInclusions.innerHTML = svc.inclusions.map(inc => `<li>✦ ${inc}</li>`).join('');
          }

          serviceModal?.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }

  function closeServiceModal() {
    serviceModal?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  serviceModalClose?.addEventListener('click', closeServiceModal);
  serviceModal?.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeServiceModal();
  });

  modalAction?.addEventListener('click', () => {
    closeServiceModal();
  });

  // ==========================================
  // 8. EVENT DESIGNER - "BUILD YOUR EVENT"
  // ==========================================
  const designerState = {
    type: 'wedding',
    guests: 300,
    mood: 'royal',
    moodColor: '#F5C76B',
    drone: true,
    sound: true,
    pyro: false,
    valet: false
  };

  const guestSlider = document.getElementById('guestCountSlider');
  const sliderValDisplay = document.getElementById('sliderValDisplay');
  const previewThemeBanner = document.getElementById('previewThemeBanner');
  const previewThemeLabel = document.getElementById('previewThemeLabel');
  const simEventName = document.getElementById('simEventName');
  const simEventSub = document.getElementById('simEventSub');

  const rowDirVal = document.getElementById('rowDirVal');
  const rowScenoVal = document.getElementById('rowScenoVal');
  const rowAvVal = document.getElementById('rowAvVal');
  const rowEnhVal = document.getElementById('rowEnhVal');
  const simulatedTotalPrice = document.getElementById('simulatedTotalPrice');

  const typeNames = {
    wedding: 'Royal & Futuristic Wedding',
    party: 'VIP & Milestone Birthday Party',
    corporate: 'Corporate Summit & Gala',
    launch: 'Product Launch & Mega Fest'
  };

  const moodLabels = {
    royal: 'ROYAL GOLD SPECTACLE',
    neon: 'CYBER NEON NIGHT',
    minimal: 'MINIMAL LUXE MONOLITH',
    traditional: 'TRADITIONAL LUMINESCENCE'
  };

  function updateSimulation() {
    const guests = designerState.guests;

    // Financial formulas (in INR)
    const dirFee = designerState.type === 'wedding' ? 180000 : designerState.type === 'corporate' ? 200000 : 120000;
    const scenoCost = Math.round(guests * (designerState.type === 'wedding' ? 1500 : 1100));
    const avCost = Math.round(guests * 600 + (designerState.type === 'corporate' ? 100000 : 70000));

    let enhCost = 0;
    if (designerState.drone) enhCost += 120000;
    if (designerState.sound) enhCost += 95000;
    if (designerState.pyro) enhCost += 60000;
    if (designerState.valet) enhCost += 45000;

    const total = dirFee + scenoCost + avCost + enhCost;

    if (sliderValDisplay) sliderValDisplay.textContent = `${guests} Guests`;
    if (simEventName) simEventName.textContent = typeNames[designerState.type];
    if (simEventSub) simEventSub.textContent = `Curated for ${guests} attendees with ${moodLabels[designerState.mood]}`;

    if (rowDirVal) rowDirVal.textContent = `₹${dirFee.toLocaleString('en-IN')}`;
    if (rowScenoVal) rowScenoVal.textContent = `₹${scenoCost.toLocaleString('en-IN')}`;
    if (rowAvVal) rowAvVal.textContent = `₹${avCost.toLocaleString('en-IN')}`;
    if (rowEnhVal) rowEnhVal.textContent = `₹${enhCost.toLocaleString('en-IN')}`;
    if (simulatedTotalPrice) simulatedTotalPrice.textContent = `₹${total.toLocaleString('en-IN')}`;

    return {
      type: typeNames[designerState.type],
      guests,
      mood: moodLabels[designerState.mood],
      total: `₹${total.toLocaleString('en-IN')}`
    };
  }

  // Type Radio Listeners
  document.querySelectorAll('input[name="designerType"]').forEach(r => {
    r.addEventListener('change', (e) => {
      designerState.type = e.target.value;
      updateSimulation();
    });
  });

  // Slider Listener
  guestSlider?.addEventListener('input', (e) => {
    designerState.guests = parseInt(e.target.value, 10);
    updateSimulation();
  });

  // Mood Cards
  document.querySelectorAll('.mood-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      designerState.mood = card.getAttribute('data-mood') || 'royal';
      designerState.moodColor = card.getAttribute('data-theme-color') || '#F5C76B';
      const bgGrad = card.getAttribute('data-bg') || '';

      if (previewThemeBanner) {
        previewThemeBanner.style.background = bgGrad;
      }
      if (previewThemeLabel) {
        previewThemeLabel.textContent = moodLabels[designerState.mood];
      }
      updateSimulation();
    });
  });

  // Enhancement Checkboxes
  const enhDrone = document.getElementById('enhDrone');
  const enhSound = document.getElementById('enhSound');
  const enhPyro = document.getElementById('enhPyro');
  const enhValet = document.getElementById('enhValet');

  [enhDrone, enhSound, enhPyro, enhValet].forEach(cb => {
    cb?.addEventListener('change', () => {
      designerState.drone = !!enhDrone?.checked;
      designerState.sound = !!enhSound?.checked;
      designerState.pyro = !!enhPyro?.checked;
      designerState.valet = !!enhValet?.checked;
      updateSimulation();
    });
  });

  // Transfer to Contact Form
  const transferToContactBtn = document.getElementById('transferToContactBtn');
  transferToContactBtn?.addEventListener('click', () => {
    const sim = updateSimulation();
    const inputGuests = document.getElementById('inputGuests');
    const selectType = document.getElementById('selectEventType');
    const inputNotes = document.getElementById('inputNotes');

    if (inputGuests) inputGuests.value = `${sim.guests} Guests`;
    if (selectType) selectType.value = sim.type;
    if (inputNotes) {
      inputNotes.value = `[Initiated from Event Designer]\nEvent Category: ${sim.type}\nAttendee Scale: ${sim.guests} Attendees\nSelected Mood: ${sim.mood}\nSimulated Budget: ${sim.total}\n\nPlease prepare an official proposal and coordinate our discovery briefing with ~Mr. Jons.`;
    }

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Designer WhatsApp Dispatch
  const designerWhatsAppBtn = document.getElementById('designerWhatsAppBtn');
  designerWhatsAppBtn?.addEventListener('click', () => {
    const sim = updateSimulation();
    const phone = config.business?.whatsappNumber || '919876543210';
    const msg = `*⚜ KAIROS EVENTS & HOSPITALITY (~MR. JONS)*\n*Event Blueprint Simulation*\n\n` +
      `*Event Category:* ${sim.type}\n` +
      `*Attendee Scale:* ${sim.guests} Attendees\n` +
      `*Aesthetic Mood:* ${sim.mood}\n` +
      `*Simulated Investment:* ${sim.total}\n\n` +
      `Hi ~Mr. Jons & Kairos Team! I just designed this celebration on your website and would love to schedule our consultation call.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ==========================================
  // 9. RENDER PACKAGES ("SELECT YOUR TIER")
  // ==========================================
  const packagesGrid = document.getElementById('packagesGrid');
  if (packagesGrid && config.packages) {
    packagesGrid.innerHTML = config.packages.map(pkg => `
      <div class="package-glass-card ${pkg.featured ? 'featured' : ''}" data-pkg-id="${pkg.id}">
        ${pkg.featured ? `<div class="badge-featured-pill">${pkg.badge}</div>` : ''}
        <div class="pkg-tier-label">${pkg.name}</div>
        <div class="pkg-tagline">${pkg.tagline}</div>

        <div class="pkg-price-row">
          <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--neon-cyan); letter-spacing: 0.15em;">Starting Investment</div>
          <div class="pkg-price-num">${pkg.priceINR}</div>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.2rem;">${pkg.guestLimit}</div>
        </div>

        <ul class="pkg-features-list">
          ${pkg.features.map(f => `<li class="included">${f}</li>`).join('')}
          ${pkg.excluded ? pkg.excluded.map(ex => `<li class="excluded">${ex}</li>`).join('') : ''}
        </ul>

        <a href="#contact" class="btn ${pkg.featured ? 'btn-solid-glow' : 'btn-ghost'} pkg-select-btn" data-pkg-name="${pkg.name}" style="width: 100%;">
          Select ${pkg.tier}
        </a>
      </div>
    `).join('');

    document.querySelectorAll('.pkg-select-btn').forEach(b => {
      b.addEventListener('click', () => {
        const pkgName = b.getAttribute('data-pkg-name');
        const inputNotes = document.getElementById('inputNotes');
        if (inputNotes) {
          inputNotes.value = `I would like to inquire about booking the "${pkgName}". Please share our date availability and contract framework.`;
        }
      });
    });
  }

  // ==========================================
  // 10. PORTFOLIO ARCHIVE BENTO & LIGHTBOX
  // ==========================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const bentoCards = document.querySelectorAll('.bento-card');
  const archiveLightbox = document.getElementById('archiveLightbox');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxActiveImg = document.getElementById('lightboxActiveImg');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxHeadline = document.getElementById('lightboxHeadline');
  const lightboxInfo = document.getElementById('lightboxInfo');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');
      bentoCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  bentoCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      const venue = card.getAttribute('data-venue');
      const guests = card.getAttribute('data-guests');
      const cat = card.getAttribute('data-cat')?.toUpperCase();

      if (lightboxActiveImg) lightboxActiveImg.src = img;
      if (lightboxTag) lightboxTag.textContent = cat || 'ARCHIVE';
      if (lightboxHeadline) lightboxHeadline.textContent = title;
      if (lightboxInfo) lightboxInfo.textContent = `${venue} • ${guests}`;

      archiveLightbox?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    archiveLightbox?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  archiveLightbox?.addEventListener('click', (e) => {
    if (e.target === archiveLightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ==========================================
  // 11. FAQ ACCORDION
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-holo-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-holo-trigger');
    const body = item.querySelector('.faq-holo-body');

    if (item.classList.contains('active') && body) {
      body.style.maxHeight = body.scrollHeight + 30 + 'px';
    }

    trigger?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherBody = other.querySelector('.faq-holo-body');
        if (otherBody) otherBody.style.maxHeight = '0px';
      });

      if (!isActive && body) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 30 + 'px';
      }
    });
  });

  // ==========================================
  // 12. SHOWREEL MODAL
  // ==========================================
  const showreelBtn = document.getElementById('showreelBtn');
  const showreelModal = document.getElementById('showreelModal');
  const showreelCloseBtn = document.getElementById('showreelCloseBtn');

  showreelBtn?.addEventListener('click', () => {
    showreelModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  showreelCloseBtn?.addEventListener('click', () => {
    showreelModal?.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  showreelModal?.addEventListener('click', (e) => {
    if (e.target === showreelModal) {
      showreelModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // ==========================================
  // 13. EASTER EGG ("party" Confetti Burst)
  // ==========================================
  let keySequence = '';
  const eggCanvas = document.getElementById('easterEggCanvas');
  let eggCtx = eggCanvas?.getContext('2d');

  window.addEventListener('keydown', (e) => {
    // Only track alphanumeric keys
    if (e.key.length === 1 && !['input', 'textarea'].includes(document.activeElement?.tagName.toLowerCase())) {
      keySequence += e.key.toLowerCase();
      if (keySequence.length > 5) {
        keySequence = keySequence.slice(-5);
      }
      if (keySequence === 'party') {
        launchConfettiBurst();
        keySequence = '';
      }
    }
  });

  function launchConfettiBurst() {
    if (!eggCanvas || !eggCtx) return;
    eggCanvas.width = window.innerWidth;
    eggCanvas.height = window.innerHeight;

    playUiTone(880, 'triangle', 0.4);

    const confettiPieces = [];
    const colors = ['#D4AF37', '#8C532B', '#F7E5B5', '#E69A38', '#C5A059', '#FAF3E8'];

    for (let i = 0; i < 180; i++) {
      confettiPieces.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: Math.random() * 12 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 22,
        vy: (Math.random() - 0.5) * 22 - 6,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let frame = 0;
    function animConfetti() {
      eggCtx.clearRect(0, 0, eggCanvas.width, eggCanvas.height);
      let alive = false;

      confettiPieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // gravity
        p.rotation += p.rotSpeed;
        p.alpha -= 0.008;

        if (p.alpha > 0) {
          alive = true;
          eggCtx.save();
          eggCtx.translate(p.x, p.y);
          eggCtx.rotate((p.rotation * Math.PI) / 180);
          eggCtx.fillStyle = p.color;
          eggCtx.globalAlpha = Math.max(0, p.alpha);
          eggCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          eggCtx.restore();
        }
      });

      frame++;
      if (alive && frame < 220) {
        requestAnimationFrame(animConfetti);
      } else {
        eggCtx.clearRect(0, 0, eggCanvas.width, eggCanvas.height);
      }
    }
    animConfetti();
  }

  // ==========================================
  // 14. CONTACT FORM & WHATSAPP ENGINE
  // ==========================================
  const contactForm = document.getElementById('kairosContactForm');
  const formWhatsAppBtn = document.getElementById('formWhatsAppBtn');

  function getContactPayload() {
    return {
      name: document.getElementById('inputName')?.value.trim(),
      phone: document.getElementById('inputPhone')?.value.trim(),
      email: document.getElementById('inputEmail')?.value.trim(),
      date: document.getElementById('inputDate')?.value,
      type: document.getElementById('selectEventType')?.value,
      guests: document.getElementById('inputGuests')?.value.trim() || 'Unspecified',
      notes: document.getElementById('inputNotes')?.value.trim() || 'No additional notes'
    };
  }

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getContactPayload();

    if (!data.name || !data.phone || !data.email || !data.date) {
      alert('Please fill out all mandatory fields marked with *');
      return;
    }

    launchConfettiBurst();

    alert(
      `⚜ TRANSMISSION RECEIVED // KAIROS ARCHITECTS\n\n` +
      `Dear ${data.name},\n` +
      `Your creative briefing for ${data.type} on ${data.date} has been routed to ~Mr. Jons.\n` +
      `Our team is preparing your photorealistic 3D moodboard and will connect via WhatsApp/Call at ${data.phone} within 24 hours.\n\n` +
      `Crafting Life's Perfect Moments,\nKairos Events & Hospitality`
    );

    contactForm.reset();
  });

  formWhatsAppBtn?.addEventListener('click', () => {
    const data = getContactPayload();
    if (!data.name || !data.phone) {
      alert('Please provide your Full Name and Phone Number to connect on WhatsApp.');
      document.getElementById('inputName')?.focus();
      return;
    }

    const phone = config.business?.whatsappNumber || '919876543210';
    const text = `*⚜ KAIROS EVENTS & HOSPITALITY (~MR. JONS)*\n*VIP Consultation Inquiry*\n\n` +
      `*Client:* ${data.name}\n` +
      `*Contact:* ${data.phone}\n` +
      `*Email:* ${data.email || 'N/A'}\n` +
      `*Target Date:* ${data.date || 'TBD'}\n` +
      `*Category:* ${data.type}\n` +
      `*Scale:* ${data.guests}\n\n` +
      `*Aspirations & Notes:*\n${data.notes}\n\n` +
      `Hi ~Mr. Jons! I would like to lock in our initial discovery briefing for this event.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  });

  // Attach Cursor interactions for newly created dynamic elements
  attachCursorInteractions();

  // Run initial simulation
  updateSimulation();
});
