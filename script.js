/* =========================================================
   TRANSPORTES SE — CONFIGURACIÓN Y FUNCIONALIDADES
   Personaliza los datos reales de la empresa en CONFIG.
   ========================================================= */
const CONFIG = {
  companyName: "Transportes SE",
  nit: "[AGREGAR NIT]",
  whatsapp: "573143868847", // Reemplazar por número real: código país + número, sin + ni espacios.
  phone: "[AGREGAR TELÉFONO]",
  email: "[AGREGAR CORREO]",
  address: "[AGREGAR DIRECCIÓN REAL]",
  city: "[CIUDAD, DEPARTAMENTO]",
  hours: "24/7 Siempre disponibles para atenderte",
  // Escribe aquí la dirección real. Si queda vacía, el mapa seguirá como marcador.
  mapAddress: "",
  socials: { facebook: "", instagram: "", tiktok: "" }
};


/* =========================================================
   CARRUSEL RESPONSIVE PROFESIONAL
   Imágenes independientes para PC y celulares
   ========================================================= */

const heroOne = document.querySelector(".hero-image-one");
const heroTwo = document.querySelector(".hero-image-two");

const heroSlides = [
  {
    desktop: "https://xatimg.com/image/flFFAwu61k9W.jpg",
    mobile: "https://xatimg.com/image/96iNsyxC85xq.jpg"
  },
  {
    desktop: "https://xatimg.com/image/oAsJBAxinxgv.jpg",
    mobile: "https://xatimg.com/image/IV18rzxCDPxf.jpg"
  },
  {
    desktop: "https://xatimg.com/image/feJAx0iubfRq.jpg",
    mobile: "https://xatimg.com/image/BUkq0sRkdshd.jpg"
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
      "Nuestra empresa nace con el propósito de ofrecer soluciones de transporte especial de pasajeros en Colombia, identificando la necesidad de contar con servicios que combinen comodidad, puntualidad, seguridad y atención personalizada.",
      "Con el paso del tiempo, hemos orientado nuestros esfuerzos hacia la construcción de un servicio confiable, apoyándonos en vehículos modernos, conductores capacitados y una atención cercana a nuestros clientes.",
      "Nuestro compromiso es seguir creciendo, conectando destinos y brindando experiencias de viaje que permitan a cada pasajero disfrutar del camino con tranquilidad."
    ]
  },
  mision: {
    index: "02 — NUESTRA MISIÓN", title: "Mover personas con propósito.",
    paragraphs: [
      "Brindar un servicio de transporte de pasajeros seguro, cómodo y confiable, comprometidos con la satisfacción de nuestros clientes y el bienestar de quienes confían en nosotros. ",
      "Trabajamos con responsabilidad, calidad humana y dedicación, buscando mejorar continuamente nuestros servicios y contribuir al desarrollo del transporte en los Llanos Orientales y en Colombia."
    ]
  },
  vision: {
    index: "03 — NUESTRA VISIÓN", title: "Crecer conectando a Colombia.",
    paragraphs: [
      "Proyectamos un crecimiento sostenible, fortaleciendo nuestra flota vehicular e incorporando nuevas tecnologías para llegar cada vez más lejos y ofrecer mejores experiencias de viaje ",
      "Consolidarnos en el 2030 como una empresa llanera reconocida en el sector del transporte de pasajeros por la calidad de nuestros servicios, la confianza de nuestros clientes y el compromiso de nuestro equipo humano. "
    ]
  },
  objetivos: {
    index: "04 — NUESTROS OBJETIVOS", title: "Compromisos que guían cada recorrido.",
    objectives: [

      " Ofrecer una atención amable, oportuna y personalizada, garantizando experiencias satisfactorias para nuestros pasajeros.",

      "Promover condiciones de transporte seguras, responsables y confiables en cada recorrido.",

      "Ampliar progresivamente nuestra flota vehicular y nuestra capacidad operativa para llegar a nuevos destinos.",

      "Mejoramiento continuo: Incorporar herramientas tecnológicas, fortalecer nuestros procesos y mantener nuestros vehículos en óptimas condiciones.",

      "Construir relaciones basadas en el respeto, la honestidad y la responsabilidad con nuestros pasajeros, colaboradores y aliados.",

      "Sostenibilidad: Desarrollar una empresa sólida y sostenible, comprometida con el crecimiento económico, social y ambiental de nuestra región."
      
    
    ]
  }
};

// Catálogo editable: verifica año, capacidad y equipamiento con la flota real.
const VEHICLES = {
  duster: { brand:"Renault", model:"Duster", year:"2027", capacity:"4 pasajeros", image:"https://xatimg.com/image/XqQYrVjYlXHR.jpg", specs:["Aire acondicionado","Tracción 4x4","Equipaje: 3 maletas grandes o 4 pequeñas","Puerto de carga para celulares","Servicio premium"] },
  hilux: { brand:"Toyota", model:"Hilux", year:"2027", capacity:"4 pasajeros", image:"https://xatimg.com/image/IP9hvydvCCc3.jpg", specs:["Aire acondicionado","Tracción 4x4","Equipaje: 4 maletas grandes o 4 pequeñas","Puerto de carga para celulares","Platón para carga","Servicio premium"] },
  master: { brand:"Renault", model:"Master", year:"2027", capacity:"15 pasajeros", image:"https://xatimg.com/image/vkULhetbG4WP.jpg", specs:["Aire acondicionado","Equipaje: 8 maletas grandes o 15 pequeñas","Servicio premium"] },
  h1: { brand:"Hyundai", model:"H1", year:"2027", capacity:"7 pasajeros", image:"https://xatimg.com/image/mza3RMBucjci.jpg", specs:["Aire acondicionado","Equipaje: 4 maletas grandes o 6 pequeñas"] }
};

const $ = (selector, parent=document) => parent.querySelector(selector);
const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];
const whatsappUrl = (message) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
function openWhatsApp(message) {
  if (!CONFIG.whatsapp || CONFIG.whatsapp === "573000000000" || CONFIG.whatsapp.includes("[")) {
    alert("Antes de usar WhatsApp, configura el número real en CONFIG.whatsapp dentro de script.js.");
    return;
  }
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

// PANTALLA DE BIENVENIDA
const welcome = $("#welcomeScreen");
function enterSite() {
  welcome.classList.add("is-hidden");
  sessionStorage.setItem("rutasWelcomeSeen", "yes");
}
if (sessionStorage.getItem("rutasWelcomeSeen") === "yes") welcome.classList.add("is-hidden");
$("#enterSite").addEventListener("click", enterSite);

// HEADER: menú móvil y navegación.
const menuToggle = $("#menuToggle"), mainNav = $("#mainNav");
menuToggle.addEventListener("click", () => {
  const opened = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});
$$(".nav-link").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false");
}));
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
$$(".about-tab").forEach(tab => tab.addEventListener("click", () => {
  $$(".about-tab").forEach(item => { item.classList.remove("active"); item.setAttribute("aria-selected","false"); });
  tab.classList.add("active"); tab.setAttribute("aria-selected","true");
  const data = ABOUT[tab.dataset.tab], content = $("#aboutContent");
  content.style.animation = "none"; void content.offsetWidth; content.style.animation = "";
  let body = `<span class="content-index">${data.index}</span><h3>${data.title}</h3>`;
  if (data.paragraphs) body += data.paragraphs.map(p => `<p>${p}</p>`).join("");
  if (data.objectives) body += `<ol class="objective-list">${data.objectives.map(item => `<li>${item}</li>`).join("")}</ol>`;
  content.innerHTML = body;
}));

// VEHÍCULOS: ventanas modales con ficha técnica.
const modal = $("#vehicleModal");
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.classList.remove("no-scroll"); }
$$(".vehicle-more").forEach(button => button.addEventListener("click", () => {
  
const vehicle = VEHICLES[button.dataset.vehicle]; if (!vehicle) return;
  $("#modalTitle").textContent = `${vehicle.brand} ${vehicle.model}`;
  $("#modalImage").style.backgroundImage = `url("${vehicle.image}")`;
  $("#modalSpecs").innerHTML = `<ul class="modal-specs"><li><b>Marca:</b> ${vehicle.brand}</li><li><b>Modelo:</b> ${vehicle.model}</li><li><b>Año:</b> ${vehicle.year}</li><li><b>Capacidad:</b> ${vehicle.capacity}</li>${vehicle.specs.map(s => `<li>${s}</li>`).join("")}</ul>`;
  $("#modalQuote").onclick = () => openWhatsApp(`Hola, quisiera consultar disponibilidad del vehículo ${vehicle.brand} ${vehicle.model} (${vehicle.year}).`);
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("no-scroll");
}));
$("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
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
if (CONFIG.mapAddress) {
  const map = $("#mapsLink"); map.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapAddress)}`;
  map.classList.remove("disabled-link");
  $(".map-placeholder b").textContent = "Ubicación de nuestra oficina";
  $(".map-placeholder p").textContent = CONFIG.mapAddress;
  // Mapa embebido solo se habilita cuando se ingresa una dirección real.
  $(".map-placeholder").style.cursor = "pointer";
  $(".map-placeholder").addEventListener("click", () => window.open(map.href, "_blank", "noopener,noreferrer"));
}

// FORMULARIO: valida los campos y abre WhatsApp; no simula un envío al servidor.
$("#quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  const message = [
    "Hola, quisiera solicitar una cotización de transporte.",
    `Nombre: ${data.name}`, `Teléfono: ${data.phone}`, `Correo: ${data.email}`,
    `Servicio: ${data.service}`, `Origen: ${data.origin}`, `Destino: ${data.destination}`,
    `Fecha: ${data.date}`, `Detalles: ${data.message || "No especificados"}`
  ].join("\n");
  $("#formFeedback").textContent = "Abriendo WhatsApp. Revisa los datos y confirma el envío desde la aplicación.";
  openWhatsApp(message);
});

// ASISTENTE FLOTANTE.
const chatPanel = $("#chatPanel");
function closeChat() { chatPanel.classList.remove("open"); chatPanel.setAttribute("aria-hidden","true"); }
$("#whatsappButton").addEventListener("click", () => {
  const opened = chatPanel.classList.toggle("open"); chatPanel.setAttribute("aria-hidden",String(!opened));
});
$("#closeChat").addEventListener("click", closeChat);
$$(".chat-option").forEach(button => button.addEventListener("click", () => openWhatsApp(button.dataset.chat)));

// FOOTER: año actualizado automáticamente.
$("#currentYear").textContent = new Date().getFullYear();
$$(".legal-placeholder").forEach(link => link.addEventListener("click", e => {
  e.preventDefault(); alert("Agrega aquí la página o documento legal oficial de la empresa antes de publicar.");
}));
