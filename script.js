// ======== CONFIGURAÇÃO DA CLÍNICA — EDITE SÓ ESTA PARTE ========
const CLINIC = {
  // Número de WhatsApp da clínica.
  waLink: "https://wa.me/5511948720466",
  instagram: "https://instagram.com/dralaissantiago",

  // Perfil no Google (Google Maps / Google Meu Negócio) — Dra. Laís Santiago Clínica Estética Avançada.
  google: {
    link: "https://www.google.com/maps?cid=4004059238541487019",
    rating: "5,0",
    totalReviews: "64 avaliações",
  },

  // Medição: preencha para ativar (ex: ga4Id "G-XXXXXXXXXX", metaPixelId "1234567890"). Vazio = desligado.
  analytics: { ga4Id: "", metaPixelId: "" },
};
// =================================================================

function wireGoogleReviews() {
  document.querySelectorAll("[data-google-rating]").forEach((el) => {
    el.textContent = CLINIC.google.rating;
  });
  document.querySelectorAll("[data-google-count]").forEach((el) => {
    el.textContent = CLINIC.google.totalReviews;
  });
  document.querySelectorAll("[data-google-link]").forEach((el) => {
    el.setAttribute("href", CLINIC.google.link);
  });
}

function loadAnalytics() {
  const { ga4Id, metaPixelId } = CLINIC.analytics;

  if (ga4Id) {
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
    document.head.appendChild(tag);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ga4Id);
  }

  if (metaPixelId) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", metaPixelId);
    window.fbq("track", "PageView");
  }
}

function trackWhatsApp(label) {
  if (window.gtag) window.gtag("event", "whatsapp_click", { event_label: label });
  if (window.fbq) window.fbq("track", "Contact");
}

function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `${CLINIC.waLink}?text=${encoded}`;
}

function wireCtaButtons() {
  document.querySelectorAll("[data-wa-cta]").forEach((el) => {
    el.setAttribute("href", buildWhatsAppLink(el.dataset.waCta));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.addEventListener("click", () => trackWhatsApp(el.dataset.waCta));
  });
}

function wireContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const servico = form.servico.value;
    const mensagem = form.mensagem.value.trim();

    const linhas = [
      `Olá! Meu nome é ${nome}.`,
      `Tenho interesse em: ${servico}.`,
      `Meu telefone para retorno: ${telefone}.`,
    ];
    if (mensagem) linhas.push(`Mensagem: ${mensagem}`);

    const texto = linhas.join("\n");
    trackWhatsApp("formulario");
    window.open(buildWhatsAppLink(texto), "_blank", "noopener");
  });
}

function wireCarousel() {
  document.querySelectorAll(".ba-carousel, .insta-carousel").forEach((box) => {
    const track = box.querySelector(".ba-grid, .insta-track");
    const step = (dir) => track.scrollBy({ left: dir * track.clientWidth, behavior: "smooth" });
    box.querySelector(".ba-prev").addEventListener("click", () => step(-1));
    box.querySelector(".ba-next").addEventListener("click", () => step(1));
  });
}

function wireLightbox() {
  const items = document.querySelectorAll(".ba-item");
  if (!items.length) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Imagem ampliada");
  const big = document.createElement("img");
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "lightbox-close";
  closeBtn.setAttribute("aria-label", "Fechar");
  closeBtn.textContent = "×";
  box.append(big, closeBtn);
  document.body.appendChild(box);

  let opener = null;
  const close = () => {
    box.hidden = true;
    if (opener) opener.focus();
  };
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      opener = item;
      big.src = img.src;
      big.alt = img.alt;
      box.hidden = false;
      closeBtn.focus();
    });
  });
  box.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
}

function wireMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

loadAnalytics();
wireCtaButtons();
wireContactForm();
wireLightbox();
wireMenu();
wireCarousel();
wireGoogleReviews();
