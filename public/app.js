function setActive(el) {
  document.querySelectorAll(".sidebar-link").forEach(x => x.classList.remove("active"));
  el.classList.add("active");
}

function setLang(el) {
  document.querySelectorAll(".lang-tab").forEach(x => x.classList.remove("active"));
  el.classList.add("active");
}

function openEditor() {
  document.getElementById("editor-modal").style.display = "flex";
  runCode();
}

function closeEditor() {
  document.getElementById("editor-modal").style.display = "none";
}

function runCode() {
  const code = document.getElementById("code-editor").value;
  const frame = document.getElementById("result-frame");
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
}

document.getElementById("editor-modal").addEventListener("click", function(e) {
  if (e.target === this) closeEditor();
});


document.querySelectorAll('.sidebar-link').forEach(link => {
  if ((window.location.pathname === '/' && link.getAttribute('href') === '/index.html') || link.getAttribute('href') === window.location.pathname) {
    link.classList.add('active');
  }
});



// Simple page navigation
const pages = [
  '/',
  '/html-introduction.html',
  '/html-editors.html'
];

const current = window.location.pathname === '/' ? '/' : window.location.pathname;
const index = pages.indexOf(current) === -1 ? 0 : pages.indexOf(current);

document.querySelectorAll('.nav-pg-btn')[0]?.addEventListener('click', () => {
  if (index > 0) window.location.href = pages[index - 1];
});

document.querySelectorAll('.nav-pg-btn')[1]?.addEventListener('click', () => {
  if (index < pages.length - 1) window.location.href = pages[index + 1];
});



// Smooth navigation (no flicker)
document.querySelectorAll('a.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const url = this.getAttribute('href');
    fetch(url)
      .then(res => res.text())
      .then(html => {
        document.open();
        document.write(html);
        document.close();
      });
  });
});

