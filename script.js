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

function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `${CLINIC.waLink}?text=${encoded}`;
}

function wireCtaButtons() {
  document.querySelectorAll("[data-wa-cta]").forEach((el) => {
    el.setAttribute("href", buildWhatsAppLink(el.dataset.waCta));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
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
    window.open(buildWhatsAppLink(texto), "_blank", "noopener");
  });
}

wireCtaButtons();
wireContactForm();
wireGoogleReviews();
