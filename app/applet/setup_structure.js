const fs = require('fs');
const path = require('path');

// Create directories
if (!fs.existsSync('css')) fs.mkdirSync('css');
if (!fs.existsSync('js')) fs.mkdirSync('js');
if (!fs.existsSync('assets')) fs.mkdirSync('assets');

// 1. Process CSS
let css = fs.readFileSync('temp.css', 'utf8');
css = `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap');\n` + css;
fs.writeFileSync('css/style.css', css);

// 2. Process JS
let js = fs.readFileSync('temp.js', 'utf8');
fs.writeFileSync('js/main.js', js);

// 3. Process HTML
let html = fs.readFileSync('temp.html', 'utf8');

// Replace text
html = html.replace(/El Pinar/g, 'Pinamar');
html = html.replace(/EL PINAR/g, 'PINAMAR');
html = html.replace(/Ciudad de la Costa/g, 'Buenos Aires');
html = html.replace(/CIUDAD DE LA COSTA/g, 'BUENOS AIRES');
html = html.replace(/Canelones, Uruguay/g, 'Buenos Aires, Argentina');
html = html.replace(/UYU/g, 'ARS');
html = html.replace(/97wb8t/g, '33gzo6');
html = html.replace(/spacegympinar/g, 'spacegympinamar');

// Replace map iframe
html = html.replace(/https:\/\/www\.google\.com\/maps\/embed\?[^"]+/, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50714.43635787682!2d-56.896864!3d-37.1147575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cb005e83889%3A0x67399434e70e2f5!2sPinamar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar');

// Replace assets with absolute URLs to the original site for now, or keep them if they work
html = html.replace(/\/assets\//g, 'https://space-gym-sand.vercel.app/assets/');

// Replace CSS and JS links
html = html.replace(/<script type="module" crossorigin src="[^"]+"><\/script>/, '<script type="module" src="/js/main.js"></script>');
html = html.replace(/<link rel="stylesheet" crossorigin href="[^"]+">/, '<link rel="stylesheet" href="/css/style.css">');

// Write to index.html
fs.writeFileSync('index.html', html);

console.log('Structure updated successfully!');
