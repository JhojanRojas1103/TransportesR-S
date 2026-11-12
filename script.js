/* =========================================================
   TRANSPORTES SE — CONFIGURACIÓN Y FUNCIONALIDADES
   Personaliza los datos reales de la empresa en CONFIG.
   ========================================================= */

const CONFIG = {
  companyName: "Transportes S&E",

  // Actualmente opera como persona natural.
  // No publicar un NIT que todavía no se ha confirmado.
  nit: "",

  // WhatsApp oficial: Colombia +57 y número móvil.
  whatsapp: "573143868847",

  // Número de contacto.
  phone: "314 386 8847",

  // Correo de contacto que aparece actualmente en tu HTML.
  email: "Sebastianramosbeltran86@gmail.com",

  // No existe establecimiento físico por ahora.
  address: "Atención virtual",

  city: "Villavicencio, Meta, Colombia",

  hours: "Estamos disponibles para atenderte las 24 horas, los 7 días de la semana.",

  // Sin oficina física, no mostramos una ubicación de establecimiento.
  mapAddress: "",

  // Agregar únicamente redes sociales oficiales.
  socials: {
    facebook: "",
    instagram: "https://www.instagram.com/sebastian_puerta_puerta_?exln=dXZhbXExdDByMTgy",
    tiktok: ""
  }
};

/* =========================================================
   CARRUSEL RESPONSIVE PROFESIONAL
   Imágenes independientes para PC y celulares
   ========================================================= */

const heroOne = document.querySelector(".hero-image-one");
const heroTwo = document.querySelector(".hero-image-two");

const heroSlides = [
  {
    desktop: "Imagenes/CarruselFotosPC1.jpg",
    mobile: "Imagenes/CarruselFotosCEL2.jpg"
  },
  {
    desktop: "Imagenes/CarruselFotosPC3.jpg",
    mobile: "Imagenes/CarruselFotosCEL4.jpg"
  },
  {
    desktop: "Imagenes/CarruselFotosPC5.jpg",
    mobile: "Imagenes/CarruselFotosCEL6.jpg"
  }
];

let currentSlide = 0;
let showingFirst = true;

// Detectar si el dispositivo es móvil
function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// Obtener la imagen correspondiente al dispositivo
function getHeroImage(slide) {
  return isMobile() ? slide.mobile : slide.desktop;
}

// Precargar imágenes
function preloadHeroImages() {
  heroSlides.forEach(slide => {
    [slide.desktop, slide.mobile].forEach(url => {
      const img = new Image();
      img.src = url;
    });
  });
}

// Mostrar primera imagen
function initializeHero() {

  if (!heroOne || !heroTwo || !heroSlides.length) return;

  preloadHeroImages();

  heroOne.style.backgroundImage =
    `url("${getHeroImage(heroSlides[0])}")`;

  heroOne.style.opacity = "1";
  heroTwo.style.opacity = "0";
}

// Cambiar imagen del carrusel
function changeHeroSlide() {

  if (!heroOne || !heroTwo) return;

  const nextSlide = (currentSlide + 1) % heroSlides.length;

  const activeLayer = showingFirst ? heroOne : heroTwo;
  const nextLayer = showingFirst ? heroTwo : heroOne;

  const imageUrl = getHeroImage(heroSlides[nextSlide]);

  const img = new Image();

  img.onload = () => {

    nextLayer.style.backgroundImage = `url("${imageUrl}")`;

    nextLayer.style.opacity = "1";
    activeLayer.style.opacity = "0";

    currentSlide = nextSlide;
    showingFirst = !showingFirst;

  };

  img.onerror = () => {
    console.error("No se pudo cargar la imagen:", imageUrl);
  };

  img.src = imageUrl;
}

// Inicializar carrusel
initializeHero();

// Cambiar cada 6 segundos
if (heroSlides.length > 1) {
  setInterval(changeHeroSlide, 6000);
}

// Actualizar imagen al cambiar tamaño de pantalla
window.addEventListener("resize", () => {

  if (!heroOne || !heroTwo) return;

  const activeLayer = showingFirst ? heroOne : heroTwo;

  activeLayer.style.backgroundImage =
    `url("${getHeroImage(heroSlides[currentSlide])}")`;

});


// Textos de Quiénes somos: editables según la información oficial de la empresa.
const ABOUT = {
  historia: {
    index: "01 — NUESTRA HISTORIA", title: "Un camino construido con confianza.",
    paragraphs: [
      "Transportes S&E nace con el propósito de ofrecer soluciones de movilidad y transporte, identificando la necesidad de contar con servicios que combinen comodidad, puntualidad, seguridad y atención personalizada.",
      "Con el paso del tiempo, hemos orientado nuestros esfuerzos hacia la construcción de una propuesta de servicio confiable, apoyándonos en vehículos vinculados a una empresa habilitada, conductores y aliados comprometidos, y una atención cercana a nuestros clientes.",
      "Nuestro compromiso es seguir creciendo, conectando destinos y brindando experiencias de viaje que permitan a cada pasajero disfrutar del camino con tranquilidad."
    ]
  },
  mision: {
    index: "02 — NUESTRA MISIÓN", title: "Cada viaje, un compromiso con usted",
    paragraphs: [
      "Ofrecer y coordinar soluciones de movilidad y transporte que respondan a las necesidades de cada cliente, mediante una atención responsable, puntual y cercana, trabajando con aliados y empresas habilitadas cuando la naturaleza del servicio lo requiera. ",
      "Nos esforzamos por brindar una atención cálida y personalizada, construyendo relaciones duraderas con quienes nos eligen y contribuyendo al desarrollo de la movilidad en los Llanos Orientales y en Colombia."
    ]
  },
  vision: {
    index: "03 — NUESTRA VISIÓN", title: "Llegar más lejos, creciendo junto a nuestros clientes.",
    paragraphs: [
      "Para el año 2030, ser una marca llanera reconocida por sus soluciones de movilidad y transporte, destacándonos por la atención personalizada, el cumplimiento y la dedicación en cada servicio.",
      "Aspiramos a crecer de manera sostenible, ampliar nuestras oportunidades de servicio y fortalecer nuestras alianzas estratégicas, manteniendo siempre la esencia que nos caracteriza: estar cerca de las personas y acompañarlas en cada destino."
    ]
  },
  objetivos: {
    index: "04 — NUESTROS OBJETIVOS", title: "Crecer con compromiso, avanzar con responsabilidad.",
    objectives: [

      " Brindar un trato amable y oportuno, atendiendo las necesidades de cada cliente y procurando una experiencia agradable durante cada servicio.",

      " Cumplir con los compromisos adquiridos, promoviendo una atención responsable y un servicio que responda a las expectativas de nuestros clientes.",

      " Fortalecer progresivamente nuestra capacidad de coordinación y nuestras alianzas comerciales para ampliar las oportunidades de servicio hacia nuevos destinos.",

      " Optimizar nuestros procesos, incorporar herramientas tecnológicas y contribuir al seguimiento y adecuado mantenimiento de los vehículos vinculados a nuestra operación.",

      " Fomentar relaciones basadas en el respeto, la honestidad y la responsabilidad con nuestros clientes, colaboradores y aliados estratégicos.",
      
    
    ]
  }
};

// Catálogo editable: verifica año, capacidad y equipamiento con la flota real.
const VEHICLES = {
  duster: { brand:"Renault", model:"Duster", year:"2027", capacity:"4 pasajeros", image:"Imagenes/Duster.jpg", specs:["Aire acondicionado","Tracción 4x4","Equipaje: 3 maletas grandes o 4 pequeñas","Puerto de carga para celulares","Servicio premium"] },
  hilux: { brand:"Toyota", model:"Hilux", year:"2027", capacity:"4 pasajeros", image:"Imagenes/Toyota.jpg", specs:["Aire acondicionado","Tracción 4x4","Equipaje: 4 maletas grandes o 4 pequeñas","Puerto de carga para celulares","Platón para carga","Servicio premium"] },
  master: { brand:"Renault", model:"Master", year:"2027", capacity:"15 pasajeros", image:"Imagenes/Renault.jpg", specs:["Aire acondicionado","Equipaje: 8 maletas grandes o 15 pequeñas","Servicio premium"] },
  h1: { brand:"Hyundai", model:"H1", year:"2027", capacity:"7 pasajeros", image:"Imagenes/Hyundai.jpg", specs:["Aire acondicionado","Equipaje: 4 maletas grandes o 6 pequeñas"] }
};

const $ = (selector, parent=document) => parent.querySelector(selector);
const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];


const whatsappUrl = (message) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

function openWhatsApp(message) {
  const phone = String(CONFIG.whatsapp || "573143868847").replace(/\D/g, "");

  if (!/^\d{10,15}$/.test(phone)) {
    alert("Verifica el número de WhatsApp en CONFIG.whatsapp dentro de script.js.");
    return;
  }

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}



// =========================================
// PANTALLA DE BIENVENIDA AUTOMÁTICA
// =========================================

const welcome = $("#welcomeScreen");

// TIEMPO DE DURACIÓN DE LA PRESENTACIÓN
const WELCOME_DURATION = 8000; // 8 segundos

function enterSite() {
    if (!welcome) return;

    welcome.classList.add("is-hidden");
}

// Desaparecer automáticamente
if (welcome) {
    setTimeout(enterSite, WELCOME_DURATION);
}

// HEADER: menú móvil y navegación.
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });

  $$(".nav-link", mainNav).forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = $$("main section[id]");
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    $$(".nav-link").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  }
}), { rootMargin:"-35% 0px -55% 0px" });
sections.forEach(section => navObserver.observe(section));

// SCROLL REVEAL: respeta prefers-reduced-motion.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
  }), { threshold:.12 });
  $$(".reveal").forEach(el => revealObserver.observe(el));
} else $$(".reveal").forEach(el => el.classList.add("visible"));


// QUIÉNES SOMOS: pestañas con contenido dinámico.
$$(".about-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const content = $("#aboutContent");
    const data = ABOUT[tab.dataset.tab];

    if (!content || !data) return;

    $$(".about-tab").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    content.style.animation = "none";
    void content.offsetWidth;
    content.style.animation = "";

    let body = `
      <span class="content-index">${data.index}</span>
      <h3>${data.title}</h3>
    `;

    if (data.paragraphs) {
      body += data.paragraphs.map(p => `<p>${p}</p>`).join("");
    }

    if (data.objectives) {
      body += `
        <ol class="objective-list">
          ${data.objectives.map(item => `<li>${item}</li>`).join("")}
        </ol>
      `;
    }

    content.innerHTML = body;
  });
});

 // VEHÍCULOS: ventanas modales con ficha técnica.
const modal = $("#vehicleModal");
const closeModalButton = $("#closeModal");
const modalTitle = $("#modalTitle");
const modalImage = $("#modalImage");
const modalSpecs = $("#modalSpecs");
const modalQuote = $("#modalQuote");

function closeModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

$$(".vehicle-more").forEach(button => {
  button.addEventListener("click", () => {
    const vehicle = VEHICLES[button.dataset.vehicle];

    if (!vehicle || !modal) return;

    if (modalTitle) {
      modalTitle.textContent = `${vehicle.brand} ${vehicle.model}`;
    }

    if (modalImage) {
      modalImage.style.backgroundImage = `url("${vehicle.image}")`;
    }

    if (modalSpecs) {
      modalSpecs.innerHTML = `
        <ul class="modal-specs">
          <li><b>Marca:</b> ${vehicle.brand}</li>
          <li><b>Modelo:</b> ${vehicle.model}</li>
          <li><b>Año:</b> ${vehicle.year}</li>
          <li><b>Capacidad:</b> ${vehicle.capacity}</li>
          ${vehicle.specs.map(s => `<li>${s}</li>`).join("")}
        </ul>`;
    }

    if (modalQuote) {
      modalQuote.onclick = () => openWhatsApp(
        `Hola, quisiera consultar disponibilidad del vehículo ${vehicle.brand} ${vehicle.model} (${vehicle.year}).`
      );
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  });
});

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
}

document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeChat(); } });

// DESTINOS Y SERVICIOS: preparan una conversación real en WhatsApp.
$$(".quote-destination").forEach(button => button.addEventListener("click", () => openWhatsApp(`Hola, estoy interesado en viajar a ${button.dataset.destination}. Quisiera conocer disponibilidad y tarifas.`)));
$$(".service-quote").forEach(button => button.addEventListener("click", () => openWhatsApp(`Hola, quisiera solicitar información sobre el servicio de ${button.dataset.service}.`)));

// CONTACTO: datos empresariales desde CONFIG.
const configMap = { nit:"nit", phone:"phone", email:"email", address:"address", city:"city", hours:"hours" };
$$("[data-config]").forEach(el => {
  const key = el.dataset.config; if (CONFIG[key]) el.textContent = CONFIG[key];
});
$$("[data-social]").forEach(link => {
  const url = CONFIG.socials[link.dataset.social];
  if (url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; }
  else { link.href = "#"; link.addEventListener("click", e => { e.preventDefault(); alert(`Agrega el enlace de ${link.dataset.social} en CONFIG.socials dentro de script.js.`); }); }
});

// MAPA: ubicación de la empresa.
if (CONFIG.mapAddress && CONFIG.mapAddress.trim()) {
  const map = $("#mapsLink");
  const mapPlaceholder = $(".map-placeholder");
  const mapTitle = $(".map-placeholder b");
  const mapDescription = $(".map-placeholder p");

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapAddress)}`;

  if (map) {
    map.href = mapUrl;
    map.classList.remove("disabled-link");
    map.target = "_blank";
    map.rel = "noopener noreferrer";
  }

  if (mapTitle) {
    mapTitle.textContent = "Ubicación de nuestra oficina";
  }

  if (mapDescription) {
    mapDescription.textContent = CONFIG.mapAddress;
  }

  if (mapPlaceholder) {
    mapPlaceholder.style.cursor = "pointer";

    mapPlaceholder.addEventListener("click", event => {
      if (event.target.closest("a")) return;
      window.open(mapUrl, "_blank", "noopener,noreferrer");
    });
  }
}

// FORMULARIO: valida los campos y abre WhatsApp; no simula un envío al servidor.



// FORMULARIO: valida campos y autorización de datos personales.
const quoteForm = $("#quoteForm");

if (quoteForm) {
  const authorizationCheckbox = quoteForm.querySelector(
    'input[name="data_authorization"]'
  );

  const submitButton = quoteForm.querySelector('button[type="submit"]');
  const consentFeedback = $("#consentFeedback");

  // Mantener el botón habilitado para que pueda mostrar la alerta.
  if (submitButton) {
    submitButton.disabled = false;
  }

  // Ocultar la alerta cuando se marque la casilla.
  if (authorizationCheckbox) {
    authorizationCheckbox.addEventListener("change", () => {
      if (authorizationCheckbox.checked && consentFeedback) {
        consentFeedback.classList.remove("show");
      }
    });
  }

  quoteForm.addEventListener("submit", event => {
    event.preventDefault();

    // Comprobar primero la autorización.
    if (!authorizationCheckbox || !authorizationCheckbox.checked) {

      if (consentFeedback) {
        consentFeedback.textContent =
          "Debes marcar la casilla de autorización de tratamiento de datos personales para continuar.";

        consentFeedback.classList.add("show");
      }

      alert(
        "¡Atención!\n\nDebes leer y marcar la casilla de autorización de tratamiento de datos personales antes de solicitar tu cotización."
      );

      if (authorizationCheckbox) {
        authorizationCheckbox.focus();
      }

      return;
    }

    // Validar los demás campos obligatorios.
    if (!quoteForm.reportValidity()) return;

    const data = Object.fromEntries(
      new FormData(quoteForm).entries()
    );

    const message = [
      "Hola, quisiera solicitar una cotización de transporte.",
      "",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Correo electrónico: ${data.email || "No especificado"}`,
      `Servicio: ${data.service}`,
      "",
      `Ciudad de origen: ${data.origin}`,
      `Ciudad de destino: ${data.destination}`,
      `Dirección de recogida: ${data.direccion}`,
      `Dirección de destino: ${data.destination_address}`,
      `Fecha del servicio: ${data.date}`,
      "",
      `Detalles adicionales: ${data.message || "No especificados"}`,
      "",
      "AUTORIZACIÓN DE TRATAMIENTO DE DATOS PERSONALES:",
      "Sí. Autorizo a Transportes S&E para recolectar y tratar mis datos personales con la finalidad de gestionar mi solicitud de cotización y contactarme sobre el servicio solicitado. Declaro que he leído la Política de Tratamiento de Datos Personales."
    ].join("\n");

    const formFeedback = $("#formFeedback");

    if (formFeedback) {
      formFeedback.textContent =
        "Abriendo WhatsApp. Revisa los datos y confirma el envío desde WhatsApp.";
    }

    openWhatsApp(message);
  });
}

// ASISTENTE FLOTANTE.
const chatPanel = $("#chatPanel");
const whatsappButton = $("#whatsappButton");
const closeChatButton = $("#closeChat");

function closeChat() {
  if (!chatPanel) return;

  chatPanel.classList.remove("open");
  chatPanel.setAttribute("aria-hidden", "true");

  if (whatsappButton) {
    whatsappButton.setAttribute("aria-expanded", "false");
  }
}

if (whatsappButton && chatPanel) {
  whatsappButton.addEventListener("click", () => {
    const opened = chatPanel.classList.toggle("open");

    chatPanel.setAttribute("aria-hidden", String(!opened));
    whatsappButton.setAttribute("aria-expanded", String(opened));
  });
}

if (closeChatButton) {
  closeChatButton.addEventListener("click", closeChat);
}

$$(".chat-option").forEach(button => {
  button.addEventListener("click", () => {
    openWhatsApp(button.dataset.chat);
  });
});


// FOOTER: año actualizado automáticamente.
const currentYearElement = $("#currentYear");

if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}
