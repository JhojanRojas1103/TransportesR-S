# Rutas Colombia — sitio web corporativo

Sitio web responsive para una empresa de transporte especial de pasajeros en Colombia.

## Tecnologías
- HTML5: estructura y contenido semántico.
- CSS3: diseño responsive, animaciones y estados visuales.
- JavaScript vanilla: navegación, pestañas, modal, validación y WhatsApp.
- Google Fonts: Manrope y DM Sans.
- Fotografías: URLs de imágenes alojadas en Unsplash (requieren conexión a internet).

No requiere Node.js, compilación ni instalación de dependencias.

## Ejecutar localmente
1. Descomprime `rutas-colombia-web.zip`.
2. Abre la carpeta.
3. Ejecuta `index.html` en un navegador moderno.
4. Para una prueba más fiel, usa la extensión Live Server de Visual Studio Code y selecciona **Open with Live Server**.

## Estructura
```text
rutas-colombia-web/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── (coloca aquí tu logo y recursos locales)
```

## Personalización obligatoria antes de publicar
Abre `script.js` y modifica el objeto `CONFIG`:
- `companyName`: nombre comercial.
- `nit`: NIT real.
- `whatsapp`: número real en formato internacional, solo dígitos. Colombia: 57 + número.
- `phone`, `email`, `address`, `city`, `hours`.
- `mapAddress`: dirección real para activar el enlace de Google Maps.
- `socials`: enlaces oficiales de Facebook, Instagram y TikTok.

También reemplaza el texto provisional del nombre en `index.html` (busca `RUTAS COLOMBIA`) por el nombre definitivo. El nombre se repite en el header, bienvenida y footer.

### Logo y fotografías
- El monograma `RC` es provisional y está hecho con texto/CSS. Sustitúyelo por el logotipo oficial cuando esté disponible.
- Las imágenes están referenciadas por URL externa. Puedes descargarlas y guardarlas en `assets/` para tener control local de los recursos. Cambia las URLs `src` del HTML y las propiedades `image` del catálogo en `script.js`.
- Algunas fotografías son ilustrativas y no necesariamente muestran los modelos exactos solicitados. Antes de publicar, reemplázalas por fotos reales de la flota, especialmente las imágenes de Duster, Hilux, Master y H1.

## Funcionalidad del formulario
El formulario valida los campos del navegador y prepara un mensaje con los datos para WhatsApp. No envía datos a una base de datos ni a un servidor. El visitante debe confirmar el envío en WhatsApp. Si se requiere envío por correo o CRM, conecta un backend o servicio de formularios y agrega protección contra spam.

## Google Maps
`mapAddress` viene vacío para evitar inventar una ubicación. Al ingresar la dirección real, se activa el enlace **Cómo llegar** a Google Maps. Para un mapa embebido, se puede agregar un iframe de Google Maps usando la dirección real y, si corresponde, una API key propia.

## Publicación
### Netlify
1. Entra a https://app.netlify.com/
2. Crea una cuenta o inicia sesión.
3. Arrastra la carpeta del proyecto (o el ZIP descomprimido) al área de despliegue manual.
4. Netlify generará una URL pública.
5. Configura un dominio propio desde **Domain management** si lo tienes.

### Vercel
1. Sube la carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com/ e importa el repositorio.
3. Selecciona proyecto estático / Other; no necesitas build command.
4. Deja la carpeta raíz como directorio de publicación y despliega.

## Lista de revisión previa al lanzamiento
- [ ] Nombre y logo definitivos.
- [ ] NIT, teléfono, correo, dirección y horario verificados.
- [ ] Número de WhatsApp probado desde celular.
- [ ] Ubicación real agregada a `mapAddress`.
- [ ] Redes sociales y enlaces legales oficiales.
- [ ] Fotografías reales de destinos y vehículos revisadas/licenciadas.
- [ ] Capacidades, año y características confirmados con la flota real.
- [ ] Textos institucionales aprobados por la empresa.
- [ ] Prueba en Android, iPhone, tablet y escritorio.
- [ ] Aviso de privacidad y tratamiento de datos revisados antes de recolectar información.
