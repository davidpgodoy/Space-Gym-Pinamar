const fs = require('fs');

let css = fs.readFileSync('temp.css', 'utf8');
css = `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap');\n` + css;
fs.writeFileSync('src/index.css', css);

let html = fs.readFileSync('temp.html', 'utf8');
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

bodyContent = bodyContent.replace(/El Pinar/g, 'Pinamar');
bodyContent = bodyContent.replace(/EL PINAR/g, 'PINAMAR');
bodyContent = bodyContent.replace(/Ciudad de la Costa/g, 'Buenos Aires');
bodyContent = bodyContent.replace(/CIUDAD DE LA COSTA/g, 'BUENOS AIRES');
bodyContent = bodyContent.replace(/Canelones, Uruguay/g, 'Buenos Aires, Argentina');
bodyContent = bodyContent.replace(/UYU/g, 'ARS');
bodyContent = bodyContent.replace(/97wb8t/g, '33gzo6');
bodyContent = bodyContent.replace(/spacegympinar/g, 'spacegympinamar');

bodyContent = bodyContent.replace(/https:\/\/www\.google\.com\/maps\/embed\?[^"]+/, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50714.43635787682!2d-56.896864!3d-37.1147575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cb005e83889%3A0x67399434e70e2f5!2sPinamar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar');

bodyContent = bodyContent.replace(/class="/g, 'className="');
bodyContent = bodyContent.replace(/for="/g, 'htmlFor="');
bodyContent = bodyContent.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<input([^>]+[^\/])>/g, '<input$1 />');
bodyContent = bodyContent.replace(/<br>/g, '<br />');
bodyContent = bodyContent.replace(/<hr>/g, '<hr />');
bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
    let styleObj = {};
    p1.split(';').forEach(rule => {
        if (!rule.trim()) return;
        let [key, value] = rule.split(':');
        if (!key || !value) return;
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = value.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

bodyContent = bodyContent.replace(/stroke-width/g, 'strokeWidth');
bodyContent = bodyContent.replace(/stroke-linecap/g, 'strokeLinecap');
bodyContent = bodyContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
bodyContent = bodyContent.replace(/fill-rule/g, 'fillRule');
bodyContent = bodyContent.replace(/clip-rule/g, 'clipRule');

// Fix inline onerror handlers
bodyContent = bodyContent.replace(/onerror="[^"]+"/g, '');

const appTsx = `
import React, { useEffect } from 'react';

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
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('src/App.tsx', appTsx);
