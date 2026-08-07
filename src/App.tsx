
import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  useEffect(() => {
    const o = document.getElementById("hamburger"),
          n = document.getElementById("nav-menu"),
          l = document.querySelectorAll(".nav-link");
    
    if (o && n) {
      o.addEventListener("click", () => {
        const t = o.getAttribute("aria-expanded") === "true";
        o.setAttribute("aria-expanded", String(!t));
        o.classList.toggle("active");
        n.classList.toggle("active");
        document.body.style.overflow = t ? "" : "hidden";
      });
      
      l.forEach(t => {
        t.addEventListener("click", () => {
          o.classList.remove("active");
          n.classList.remove("active");
          o.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }

    const c = document.getElementById("navbar");
    const e = () => {
      if (c) {
        window.scrollY > 50 ? c.classList.add("scrolled") : c.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", e);
    e();

    const r = document.querySelectorAll(".reveal-up");
    const a = new IntersectionObserver((t, i) => {
      t.forEach(s => {
        if (s.isIntersecting) {
          s.target.classList.add("active");
          i.unobserve(s.target);
        }
      });
    }, { root: null, rootMargin: "0px", threshold: .15 });
    
    r.forEach(t => { a.observe(t); });

    const m = document.querySelectorAll(".proof-number");
    let v = false;
    const b = (t, i, s, d) => {
      let u = null;
      const p = h => {
        if (!u) u = h;
        const L = Math.min((h - u) / d, 1);
        const y = 1 - Math.pow(1 - L, 4);
        let f = Math.floor(y * (s - i) + i);
        if (f >= 1e3) {
          t.innerHTML = f.toLocaleString("es-AR");
        } else {
          t.innerHTML = f;
        }
        if (L < 1) {
          window.requestAnimationFrame(p);
        } else {
          if (s >= 1e3) {
            t.innerHTML = s.toLocaleString("es-AR");
          } else {
            t.innerHTML = s;
          }
        }
      };
      window.requestAnimationFrame(p);
    };

    const g = document.querySelector(".social-proof");
    if (g && m.length > 0) {
      new IntersectionObserver(i => {
        if (i[0].isIntersecting && !v) {
          v = true;
          m.forEach(s => {
            const d = parseInt(s.getAttribute("data-target") || "0", 10);
            b(s, 0, d, 2e3);
          });
        }
      }, { threshold: .5 }).observe(g);
    }

    return () => {
      window.removeEventListener("scroll", e);
    };
  }, []);

  return (
    <>
      
    <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

    {/**/}
    <header className="navbar" id="navbar">
        <div className="container nav-container">
            <a href="#" className="logo-link" aria-label="Inicio">
                {/**/}
                <img />
            </a>
            
            <nav className="nav-menu" id="nav-menu">
                <ul className="nav-list">
                    <li><a href="#" className="nav-link">Inicio</a></li>
                    <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
                    <li><a href="#instalaciones" className="nav-link">Instalaciones</a></li>
                    <li><a href="#planes" className="nav-link">Planes</a></li>
                    <li><a href="#comunidad" className="nav-link">Comunidad</a></li>
                    <li><a href="#indumentaria" className="nav-link">Indumentaria</a></li>
                    <li><a href="#contacto" className="nav-link">Contacto</a></li>
                </ul>
            </nav>

            <div className="nav-actions">
                <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">UNITE AHORA</a>
                <button className="hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </div>
    </header>

    <main id="main-content">
        {/**/}
        <section className="hero" id="inicio">
            {/**/}
            <div className="hero-bg"></div>
            <div className="container hero-container">
                <div className="hero-content reveal-up">
                    <img />
                    <p className="eyebrow">PINAMAR, BUENOS AIRES</p>
                    <h1 className="hero-title">TU LUGAR EN <span className="text-accent">PINAMAR</span></h1>
                    <p className="hero-subtitle">Equipamiento profesional. Guía permanente. Comunidad real.</p>
                    <div className="hero-buttons">
                        <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">EMPEZÁ HOY</a>
                        <a href="#planes" className="btn btn-outline">VER PLANES</a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>

        {/**/}
        <section className="social-proof">
            <div className="container proof-container">
                <div className="proof-item">
                    <span className="proof-number" data-target="5000">0</span><span className="proof-plus">+</span>
                    <span className="proof-label">Seguidores en Instagram</span>
                </div>
                <div className="proof-item">
                    <span className="proof-number" data-target="30">0</span><span className="proof-plus">+</span>
                    <span className="proof-label">Máquinas profesionales</span>
                </div>
                <div className="proof-item">
                    <span className="proof-number" data-target="100">0</span><span className="proof-plus">%</span>
                    <span className="proof-label">Guía incluida</span>
                </div>
                <div className="proof-item">
                    <span className="proof-number" data-target="1">0</span>
                    <span className="proof-label">Comunidad</span>
                </div>
            </div>
        </section>

        {/**/}
        <section className="about section" id="nosotros">
            <div className="container about-container">
                <div className="about-text reveal-up">
                    <h2 className="section-title">NOSOTROS</h2>
                    <p className="about-copy">Somos Space Gym. Nacimos en Pinamar con una misión clara: crear un espacio donde entrenar sea una experiencia completa. No estás solo — tenés guía profesional desde el día uno.</p>
                    <blockquote className="pull-quote">JUNTOS SOMOS MÁS</blockquote>
                </div>
                <div className="about-images reveal-up" style={{"transitionDelay":"200ms"}}>
                    <div className="about-img-1">
                        <img src="https://space-gym-sand.vercel.app/assets/gallery-1-DifaMvcY.png" alt="Entrenamiento en Space Gym" style={{"width":"100%","height":"100%","objectFit":"cover","borderRadius":"8px"}} />
                    </div>
                    <div className="about-img-2">
                        <img src="https://space-gym-sand.vercel.app/assets/space-fest-BO8yvdjU.png" alt="Comunidad Space Gym" style={{"width":"100%","height":"100%","objectFit":"cover","borderRadius":"8px"}} />
                    </div>
                </div>
            </div>
        </section>

        {/**/}
        <section className="facilities section" id="instalaciones">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2 className="section-title">INSTALACIONES</h2>
                    <p className="section-intro">Equipamiento de primer nivel para que entrenes sin límites.</p>
                </div>
                
                <div className="gallery-grid">
                    <div className="gallery-item reveal-up">
                        <div className="placeholder-img gallery-img">
                            {/**/}
                            <span>Foto Zona de Fuerza</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>Zona de Fuerza</h3>
                        </div>
                    </div>
                    <div className="gallery-item reveal-up" style={{"transitionDelay":"100ms"}}>
                        <div className="placeholder-img gallery-img">
                            {/**/}
                            <span>Foto Área Funcional</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>Área Funcional</h3>
                        </div>
                    </div>
                    <div className="gallery-item reveal-up" style={{"transitionDelay":"200ms"}}>
                        <div className="placeholder-img gallery-img">
                            {/**/}
                            <span>Foto Espacio Cardio</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>Espacio Cardio</h3>
                        </div>
                    </div>
                    <div className="gallery-item reveal-up">
                        <div className="placeholder-img gallery-img">
                            {/**/}
                            <span>Foto Área de Estiramiento</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>Área de Estiramiento</h3>
                        </div>
                    </div>
                    <div className="gallery-item reveal-up" style={{"transitionDelay":"100ms"}}>
                        <div className="placeholder-img gallery-img">
                            {/**/}
                            <span>Foto Zona al Aire Libre</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>Zona al Aire Libre</h3>
                        </div>
                    </div>
                    <div className="gallery-item reveal-up" style={{"transitionDelay":"200ms"}}>
                        <div className="placeholder-img gallery-img">
                            {/**/}
                            <span>Foto Espacio de Eventos</span>
                        </div>
                        <div className="gallery-overlay">
                            <h3>Espacio de Eventos</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/**/}
        <section className="pricing section" id="planes">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2 className="section-title">ELEGÍ TU PLAN</h2>
                    <p className="section-intro">Todos los planes incluyen guía profesional permanente.</p>
                    <div className="urgency-banner">Cupos limitados para guía personalizada</div>
                </div>

                <div className="pricing-grid">
                    {/**/}
                    <div className="pricing-card reveal-up">
                        <h3 className="plan-name">Plan Básico</h3>
                        <div className="plan-price">$2.500 <span className="currency">ARS/mes</span></div>
                        <ul className="plan-features">
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Acceso libre</li>
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Guía profesional</li>
                        </ul>
                        <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-outline plan-btn">ELEGIR PLAN</a>
                    </div>

                    {/**/}
                    <div className="pricing-card popular reveal-up" style={{"transitionDelay":"100ms"}}>
                        <div className="popular-badge">⭐ MÁS POPULAR</div>
                        <h3 className="plan-name">Plan Full</h3>
                        <div className="plan-price">$3.500 <span className="currency">ARS/mes</span></div>
                        <ul className="plan-features">
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Acceso libre</li>
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Guía personalizada</li>
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Nutrición básica</li>
                        </ul>
                        <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-primary plan-btn">ELEGIR PLAN</a>
                    </div>

                    {/**/}
                    <div className="pricing-card reveal-up" style={{"transitionDelay":"200ms"}}>
                        <h3 className="plan-name">Plan Dúo</h3>
                        <div className="plan-price">$5.500 <span className="currency">ARS/mes</span></div>
                        <ul className="plan-features">
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 2 personas</li>
                            <li><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Todo incluido</li>
                        </ul>
                        <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-outline plan-btn">ELEGIR PLAN</a>
                    </div>
                </div>

                <div className="pricing-footer reveal-up">
                    <p>¿Tenés dudas? Escribinos por WhatsApp y te asesoramos.</p>
                </div>
            </div>
        </section>

        {/**/}
        <section className="community section" id="comunidad">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2 className="section-title">MÁS QUE UN GYM</h2>
                    <p className="section-intro">Eventos, cultura, comunidad. Esto es Space.</p>
                </div>

                <div className="community-grid">
                    <div className="placeholder-img ig-post reveal-up"><span>Space Fest</span></div>
                    <div className="placeholder-img ig-post reveal-up" style={{"transitionDelay":"100ms"}}><span>Culture Space Merch</span></div>
                    <div className="placeholder-img ig-post reveal-up" style={{"transitionDelay":"200ms"}}><span>Comunidad</span></div>
                    <div className="placeholder-img ig-post reveal-up"><span>Entrenamiento</span></div>
                    <div className="placeholder-img ig-post reveal-up" style={{"transitionDelay":"100ms"}}><span>Eventos</span></div>
                    <div className="placeholder-img ig-post reveal-up" style={{"transitionDelay":"200ms"}}><span>Equipo</span></div>
                </div>

                <div className="community-cta reveal-up">
                    <a href="https://instagram.com/spacegympinamar" target="_blank" rel="noopener noreferrer" className="btn btn-outline">SEGUINOS EN INSTAGRAM</a>
                </div>
            </div>
        </section>

        {/**/}
        <section className="merch section" id="indumentaria">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2 className="section-title">CULTURE SPACE</h2>
                    <p className="section-intro">Llevá la actitud de Space Gym a todos lados.</p>
                </div>

                <div className="merch-grid">
                    {/**/}
                    <div className="merch-card reveal-up">
                        <div className="placeholder-img merch-img">
                            <span>Remera Oversize</span>
                        </div>
                        <div className="merch-info">
                            <h3 className="merch-name">Remera Oversize Black</h3>
                            <div className="merch-price">$1.200 <span className="currency">ARS</span></div>
                            <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-outline plan-btn">COMPRAR</a>
                        </div>
                    </div>

                    {/**/}
                    <div className="merch-card reveal-up" style={{"transitionDelay":"100ms"}}>
                        <div className="placeholder-img merch-img">
                            <span>Buzo Canguro</span>
                        </div>
                        <div className="merch-info">
                            <h3 className="merch-name">Buzo Canguro Space</h3>
                            <div className="merch-price">$2.500 <span className="currency">ARS</span></div>
                            <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-outline plan-btn">COMPRAR</a>
                        </div>
                    </div>

                    {/**/}
                    <div className="merch-card reveal-up" style={{"transitionDelay":"200ms"}}>
                        <div className="placeholder-img merch-img">
                            <span>Musculosa</span>
                        </div>
                        <div className="merch-info">
                            <h3 className="merch-name">Musculosa Entrenamiento</h3>
                            <div className="merch-price">$900 <span className="currency">ARS</span></div>
                            <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-outline plan-btn">COMPRAR</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/**/}
        <section className="contact section" id="contacto">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2 className="section-title">¿LISTO PARA EMPEZAR?</h2>
                    <p className="section-intro">Escribinos por WhatsApp y arrancá esta semana.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info reveal-up">
                        <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            HABLAR POR WHATSAPP
                        </a>

                        <div className="info-block">
                            <h3>📍 Ubicación</h3>
                            <p>Pinamar, Buenos Aires<br />Buenos Aires, Argentina</p>
                        </div>

                        <div className="info-block">
                            <h3>🕐 Horarios</h3>
                            <p>Lunes a Viernes: 6:00–22:00<br />Sábados: 8:00–20:00</p>
                        </div>

                        <div className="info-block">
                            <h3>📱 Redes Sociales</h3>
                            <a href="https://instagram.com/spacegympinamar" target="_blank" rel="noopener noreferrer" className="social-link">@spacegympinamar</a>
                        </div>
                    </div>

                    <div className="contact-map reveal-up" style={{"transitionDelay":"200ms"}}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50714.43635787682!2d-56.896864!3d-37.1147575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cb005e83889%3A0x67399434e70e2f5!2sPinamar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
                            width="100%" 
                            height="100%" 
                            style={{"border":"0"}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Mapa de ubicación de Space Gym en Pinamar">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>

    {/**/}
    <footer className="footer">
        <div className="container footer-container">
            <div className="footer-brand">
                <img />
                <p className="footer-tagline">Space Gym — Tu lugar en Pinamar</p>
            </div>
            
            <div className="footer-links">
                <a href="#nosotros">Nosotros</a>
                <a href="#instalaciones">Instalaciones</a>
                <a href="#planes">Planes</a>
                <a href="#comunidad">Comunidad</a>
                <a href="#indumentaria">Indumentaria</a>
            </div>

            <div className="footer-social">
                <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
                <a href="https://instagram.com/spacegympinamar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 Space Gym. Todos los derechos reservados.</p>
        </div>
    </footer>

    {/**/}
    <a href="https://wa.link/33gzo6" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Contactar por WhatsApp">
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </a>

    <Analytics />

    </>
  );
}
