// Data
    const services = [
      { id: 'cardiology', name: 'Cardiology', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', description: 'Comprehensive cardiac care including diagnostics, interventional cardiology, and cardiac surgery.', features: ['ECG & Echo', 'Angiography', 'Bypass Surgery', 'Pacemaker'] },
      { id: 'neurology', name: 'Neurology', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', description: 'Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.', features: ['Brain Surgery', 'Stroke Care', 'Epilepsy Treatment', 'Spine Surgery'] },
      { id: 'orthopedics', name: 'Orthopedics', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', description: 'Complete bone and joint care including sports medicine, joint replacement, and trauma surgery.', features: ['Joint Replacement', 'Sports Medicine', 'Spine Care', 'Trauma Surgery'] },
      { id: 'pediatrics', name: 'Pediatrics', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', description: 'Comprehensive healthcare for infants, children, and adolescents in a child-friendly environment.', features: ['Well-Child Visits', 'Vaccinations', 'Pediatric Surgery', 'NICU'] },
      { id: 'oncology', name: 'Oncology', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', description: 'Advanced cancer care with a multidisciplinary approach using the latest therapies.', features: ['Chemotherapy', 'Radiation Therapy', 'Surgical Oncology', 'Immunotherapy'] },
      { id: 'gynecology', name: 'Gynecology', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', description: "Complete women's health services from adolescence through menopause.", features: ['Prenatal Care', 'Delivery Services', 'Gynecological Surgery', 'Fertility Treatment'] }
    ];

    const treatmentSpecialties = [
      { name: 'Cardiology', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', description: 'Expert care for heart failure, angioplasty, rhythm disorders, and preventive heart screening.', tags: ['ECG', 'Angiography', 'Heart Failure'] },
      { name: 'Obstetrics & Gynecology', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197', description: "Complete women's health services including high-risk pregnancy care, infertility, and menopause support.", tags: ['Prenatal Care', 'Infertility', 'Laparoscopy'] },
      { name: 'Neurosurgery', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707', description: 'Advanced procedures for brain tumors, spine disorders, trauma, and minimally invasive neuro surgery.', tags: ['Brain Tumor', 'Spine', 'Stroke Care'] },
      { name: 'Pediatrics', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197', description: 'Comprehensive child care from newborn services to adolescent growth and vaccination programs.', tags: ['NICU', 'Vaccination', 'Child Growth'] },
      { name: 'Pulmonary & Critical Care', icon: 'M20 7h-3a4 4 0 00-8 0H6m14 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m14 0a2 2 0 012 2z', description: 'ICU-led respiratory care for asthma, COPD, lung infections, and ventilator-assisted recovery.', tags: ['ICU', 'COPD', 'Ventilator'] },
      { name: 'Orthopedics & Joint Replacement', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517', description: 'Treatment for joint pain, sports injuries, fracture management, and advanced knee/hip replacement.', tags: ['Knee Replacement', 'Fracture', 'Sports Medicine'] },
      { name: 'Urological Services', icon: 'M5 12h14M12 5l7 7-7 7', description: 'Specialized care for kidney stones, urinary infections, prostate disorders, and endourology procedures.', tags: ['Kidney Stone', 'Prostate', 'Endourology'] },
      { name: 'ENT', icon: 'M12 2a4 4 0 014 4v2a4 4 0 11-8 0V6a4 4 0 014-4zM6 13a6 6 0 1112 0v1a6 6 0 11-12 0v-1z', description: 'Diagnosis and treatment for sinusitis, hearing loss, throat disorders, and head-neck care.', tags: ['Sinus', 'Hearing', 'Throat'] },
      { name: 'Nephrology', icon: 'M14 7a2 2 0 10-4 0v10a2 2 0 104 0V7z', description: 'Kidney disease management, dialysis planning, electrolyte balancing, and renal follow-up care.', tags: ['Dialysis', 'CKD', 'Renal Care'] },
      { name: 'Oncology', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944', description: 'Integrated cancer treatment with medical, surgical, and radiation oncology specialists.', tags: ['Chemotherapy', 'Radiation', 'Onco Surgery'] },
      { name: 'General & Laparoscopic Surgery', icon: 'M12 6v12m6-6H6', description: 'Minimally invasive surgery for gallbladder, appendix, hernia, and gastrointestinal conditions.', tags: ['Laparoscopy', 'Hernia', 'GI Surgery'] },
      { name: 'Dermatology', icon: 'M12 3c4 0 7 3 7 7s-3 11-7 11-7-7-7-11 3-7 7-7z', description: 'Clinical and cosmetic dermatology care for acne, eczema, allergies, and skin restoration.', tags: ['Acne', 'Eczema', 'Cosmetic Skin'] }
    ];

    const facilityHighlights = [
      { title: 'Advanced Diagnostics', icon: 'M9 17v-2a4 4 0 014-4h3', detail: 'MRI, CT, digital X-ray, 3D ultrasound, and pathology lab systems for fast and precise diagnosis.' },
      { title: '24/7 Emergency & Trauma', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', detail: 'Round-the-clock emergency team, triage workflow, trauma stabilization, and rapid specialist response.' },
      { title: 'Modular Operation Theatres', icon: 'M5 12h14M12 5v14', detail: 'Infection-controlled OTs with anesthesia support, minimally invasive surgery tools, and recovery bays.' },
      { title: 'Critical Care Units', icon: 'M3 12h4l2-4 4 8 2-4h6', detail: 'ICU and HDU beds with ventilator support, continuous monitoring, and dedicated intensivist supervision.' },
      { title: 'Cath Lab & Cardiac Suite', icon: 'M4 6h16M4 12h16M4 18h16', detail: 'Cardiac imaging and intervention setup for angiography, angioplasty, and emergency heart procedures.' },
      { title: 'Digital Patient Services', icon: 'M9.75 17L6 20.75M6 20.75h3.75M6 20.75V17m0-10.5h12a2.25 2.25 0 012.25 2.25v6.5A2.25 2.25 0 0118 17.5H6A2.25 2.25 0 013.75 15.25v-6.5A2.25 2.25 0 016 6.5z', detail: 'Online appointment flow, EMR-enabled departments, digital prescriptions, and integrated follow-up tracking.' }
    ];

    const doctors = [
      { id: 1, name: 'Dr. Rakesh Kumar', specialty: 'cardiology', title: 'Chief Cardiologist', experience: '20 years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop' },
      { id: 2, name: 'Dr. James Wilson', specialty: 'neurology', title: 'Neurologist', experience: '15 years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop' },
      { id: 3, name: 'Dr. Emily Chen', specialty: 'orthopedics', title: 'Orthopedic Surgeon', experience: '12 years', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop' },
      { id: 4, name: 'Dr. Michael Brown', specialty: 'pediatrics', title: 'Pediatric Specialist', experience: '18 years', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop' },
      { id: 5, name: 'Dr. Lisa Anderson', specialty: 'cardiology', title: 'Interventional Cardiologist', experience: '14 years', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop' },
      { id: 6, name: 'Dr. Robert Kim', specialty: 'neurology', title: 'Neurosurgeon', experience: '16 years', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop' },
      { id: 7, name: 'Dr. Jennifer Lee', specialty: 'pediatrics', title: 'Neonatologist', experience: '10 years', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop' },
      { id: 8, name: 'Dr. David Martinez', specialty: 'orthopedics', title: 'Sports Medicine', experience: '11 years', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop' },
      { id: 9, name: 'Dr. Anupam Singh', specialty: 'medicine', title: 'MD. Medicine', experience: '12 years', image: 'doctor_img/dr1.webp' },
      { id: 10, name: 'Dr. J. Kumar', specialty: 'pediatrics', title: 'MD. Pediatrics', experience: '9 years', image: 'doctor_img/dr2.webp' },
      { id: 11, name: 'Dr. Komal Goel', specialty: 'critical-care', title: 'MD. Critical Care', experience: '8 years', image: 'doctor_img/dr3.jpg' },
      { id: 12, name: 'Dr. Siddharth Anand', specialty: 'pulmonary-medicine', title: 'MD. Pulmonary Medicine', experience: '11 years', image: 'doctor_img/dr12.png' }
    ];

    const blogPosts = [
      { id: 1, title: 'Understanding Heart Health: Prevention Tips', excerpt: 'Learn about the key factors that contribute to heart health and discover practical tips.', category: 'Cardiology', date: 'Dec 15, 2024', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop' },
      { id: 2, title: 'The Importance of Regular Health Checkups', excerpt: 'Regular health checkups can detect problems early when they are easier to treat.', category: 'Preventive Care', date: 'Dec 12, 2024', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop' },
      { id: 3, title: 'Managing Stress for Better Mental Health', excerpt: 'Chronic stress can affect your physical health. Learn effective strategies.', category: 'Mental Health', date: 'Dec 10, 2024', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=250&fit=crop' },
      { id: 4, title: 'Nutrition Tips for a Healthy Lifestyle', excerpt: 'Good nutrition is the foundation of good health. Discover how to make better choices.', category: 'Nutrition', date: 'Dec 8, 2024', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop' }
    ];

    const testimonials = [
      { name: 'Sarah Johnson', role: 'Cardiac Patient', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', text: 'The care I received at Sushila Multispeciality Hospital was exceptional. The doctors were thorough, the nurses were compassionate.' },
      { name: 'Michael Chen', role: 'Orthopedic Patient', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', text: 'After my knee replacement surgery, the rehabilitation team helped me get back on my feet faster than expected.' },
      { name: 'Emily Rodriguez', role: 'Maternity Patient', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop', text: 'The maternity ward made the birth of my daughter a truly special experience. The staff went above and beyond.' }
    ];

    // DOM Elements
    const modal = document.getElementById('appointmentModal');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      renderHomeServices();
      renderTestimonials();
      renderServices();
      renderTreatments();
      renderFacilities();
      renderDoctors();
      renderBlog();
      initScrollReveal();
      animateCounters();
      setupThemeToggle();
    });

    // Navigation
    function navigateTo(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
      
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      document.querySelector(`.nav-link[data-nav="${pageId}"]`)?.classList.add('active');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(initScrollReveal, 100);
    }

    // Render Functions
    function renderHomeServices() {
      const grid = document.getElementById('homeServicesGrid');
      if(!grid) return;
      grid.innerHTML = services.slice(0, 3).map(s => createServiceCard(s)).join('');
    }

    function renderServices() {
      const grid = document.getElementById('servicesGrid');
      if(!grid) return;
      grid.innerHTML = services.map(s => createServiceCard(s)).join('');
    }

    function renderTreatments() {
      const grid = document.getElementById('treatmentsGrid');
      if(!grid) return;
      grid.innerHTML = treatmentSpecialties.map(t => `
        <div class="card reveal">
          <div class="service-icon">
            <svg style="width: 28px; height: 28px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${t.icon}"/></svg>
          </div>
          <h3 class="card-title">${t.name}</h3>
          <p class="card-text">${t.description}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
            ${t.tags.map(tag => `<span style="font-size: 0.75rem; padding: 0.25rem 0.75rem; background: rgba(13, 115, 119, 0.1); color: var(--primary); border-radius: 50px;">${tag}</span>`).join('')}
          </div>
          <button onclick="openModal()" class="card-link">Book Consultation</button>
        </div>
      `).join('');
    }

    function renderFacilities() {
      const grid = document.getElementById('facilityGrid');
      if(!grid) return;
      grid.innerHTML = facilityHighlights.map(f => `
        <div class="card reveal">
          <div class="service-icon">
            <svg style="width: 28px; height: 28px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${f.icon}"/></svg>
          </div>
          <h3 class="card-title">${f.title}</h3>
          <p class="card-text">${f.detail}</p>
        </div>
      `).join('');
    }

    function createServiceCard(s) {
      return `
        <div class="card reveal">
          <div class="service-icon">
            <svg style="width: 28px; height: 28px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"/></svg>
          </div>
          <h3 class="card-title">${s.name}</h3>
          <p class="card-text">${s.description}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
            ${s.features.map(f => `<span style="font-size: 0.75rem; padding: 0.25rem 0.75rem; background: rgba(13, 115, 119, 0.1); color: var(--primary); border-radius: 50px;">${f}</span>`).join('')}
          </div>
          <button onclick="openModal()" class="card-link">
            Book Consultation
            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      `;
    }

    function renderTestimonials() {
      const grid = document.getElementById('testimonialsGrid');
      if(!grid) return;
      grid.innerHTML = testimonials.map(t => `
        <div class="card testimonial-card reveal">
          <div class="testimonial-header">
            <img src="${t.image}" alt="${t.name}" class="testimonial-avatar">
            <div>
              <h4 class="testimonial-name">${t.name}</h4>
              <p class="testimonial-role">${t.role}</p>
            </div>
          </div>
          <p class="card-text">${t.text}</p>
          <div class="stars">
            ${Array(5).fill('<svg class="star" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
          </div>
        </div>
      `).join('');
    }

    function renderDoctors(filter = 'all') {
      const grid = document.getElementById('doctorsGrid');
      if(!grid) return;
      
      const filtered = filter === 'all' ? doctors : doctors.filter(d => d.specialty === filter);
      grid.innerHTML = filtered.map(d => `
        <div class="card doctor-card reveal">
          <div class="doctor-image-wrapper">
            <img src="${d.image}" alt="${d.name}" class="doctor-image">
            <div class="doctor-overlay">
              <h4>${d.name}</h4>
              <p>${d.title}</p>
            </div>
          </div>
          <div class="doctor-info">
            <h4 class="doctor-name">${d.name}</h4>
            <p class="doctor-specialty">${d.title}</p>
            <p class="doctor-exp">${d.experience} experience</p>
            <button onclick="openModal()" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.65rem; font-size: 0.85rem; background: rgba(13, 115, 119, 0.1); color: var(--primary);">Book Appointment</button>
          </div>
        </div>
      `).join('');
      setTimeout(initScrollReveal, 100);
    }

    function filterDoctors(specialty) {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.filter === specialty) btn.classList.add('active');
      });
      renderDoctors(specialty);
    }

    function renderBlog() {
      const grid = document.getElementById('blogGrid');
      if(!grid) return;
      grid.innerHTML = blogPosts.map(p => `
        <article class="card blog-card reveal">
          <div class="blog-image-wrapper" style="position: relative;">
            <img src="${p.image}" alt="${p.title}" class="blog-image">
            <span class="blog-category">${p.category}</span>
          </div>
          <div class="blog-content">
            <p class="blog-date">${p.date}</p>
            <h3 class="card-title">${p.title}</h3>
            <p class="card-text">${p.excerpt}</p>
            <a href="#" class="card-link">Read More <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
          </div>
        </article>
      `).join('');
    }

    // Modal
    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      mobileMenu.classList.add('open');
      overlay.classList.add('open');
    });

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      overlay.classList.remove('open');
    }

    overlay.addEventListener('click', closeMobileMenu);

    // Theme Toggle
    function setupThemeToggle() {
      const toggle = document.getElementById('themeToggle');
      const sun = toggle.querySelector('.sun-icon');
      const moon = toggle.querySelector('.moon-icon');
      
      const savedTheme = localStorage.getItem('theme');
      if(savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        sun.style.display = 'none';
        moon.style.display = 'block';
      }

      toggle.addEventListener('click', () => {
        const isDark = document.body.hasAttribute('data-theme');
        if(isDark) {
          document.body.removeAttribute('data-theme');
          localStorage.setItem('theme', 'light');
          sun.style.display = 'block';
          moon.style.display = 'none';
        } else {
          document.body.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          sun.style.display = 'none';
          moon.style.display = 'block';
        }
      });
    }

    // Scroll Reveal
    function initScrollReveal() {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) entry.target.classList.add('active');
        });
      }, { threshold: 0.1 });
      
      reveals.forEach(el => observer.observe(el));
    }

    // Counter Animation
    function animateCounters() {
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const step = target / 100;
        let current = 0;
        
        const observer = new IntersectionObserver((entries) => {
          if(entries[0].isIntersecting) {
            const update = () => {
              current += step;
              if(current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(update);
              } else {
                counter.textContent = target.toLocaleString() + '+';
              }
            };
            update();
            observer.disconnect();
          }
        });
        observer.observe(counter);
      });
    }

    // Form Logic
    document.getElementById('deptSelect')?.addEventListener('change', function() {
      const dept = this.value;
      const docSelect = document.getElementById('doctorSelect');
      const filtered = dept ? doctors.filter(d => d.specialty === dept) : doctors;
      docSelect.innerHTML = '<option value="">Any Available</option>' + 
        filtered.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
    });

    document.getElementById('appointmentForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Appointment request submitted! We will contact you shortly.');
      closeModal();
      this.reset();
    });

    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });

    // Close modal on escape
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        closeModal();
        closeMobileMenu();
      }
    });
