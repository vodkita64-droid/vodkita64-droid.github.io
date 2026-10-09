const products = {
  ropa: [
    { id: "r1", name: "Heavyweight Tee", style: "Playera oversize", kind: "tee", images: ["o1", "o2", "o3", "o4", "o5", "o6", "o7", "o8"].map(image => `assets/ropa/oversize-${image}.jpeg`), price: 549, stock: 12, sizes: ["S", "M", "L", "XL"], color: "#e5ded2", accent: "#3c4039", description: "Playera oversize de caída amplia y hombro relajado. Su silueta cómoda funciona sola o en capas para un look urbano diario.", badge: "MÁS VENDIDA" },
    { id: "r2", name: "Club Hoodie", style: "Sudadera con capucha", kind: "hoodie", images: ["g1", "g2", "g3", "g4", "g5", "g6"].map(image => `assets/ropa/hoodie-${image}.jpeg`), price: 1099, stock: 8, sizes: ["S", "M", "L", "XL"], color: "#a5aa98", accent: "#33392f", description: "Sudadera con capucha de corte relajado, cierre frontal y bolsillos prácticos. Una capa cálida para completar tus outfits casuales.", badge: "ESENCIAL" },
    { id: "r3", name: "Daily Box Tee", style: "Playera boxy", kind: "tee", images: ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"].map(image => `assets/ropa/boxy-${image}.jpeg`), price: 599, stock: 10, sizes: ["S", "M", "L", "XL"], color: "#c7a28a", accent: "#f5ebdd", description: "Playera boxy de cuerpo amplio, hombros caídos y tela de apariencia pesada. Un básico con estructura para llevar con pantalón recto o cargo.", badge: "NUEVA" },
    { id: "r4", name: "Light Puffer", style: "Chamarra ligera", kind: "jacket", images: ["jacket-2.jpeg", "jacket-3.jpeg", "jacket-whatsapp.jpeg"].map(image => `assets/ropa/${image}`), price: 1299, stock: 6, sizes: ["S", "M", "L", "XL"], color: "#455d57", accent: "#e1c078", description: "Chamarra ligera acolchada con cierre frontal y bolsillos. Una capa cómoda para los días frescos sin perder movilidad.", badge: "EDICIÓN ESPECIAL" },
    { id: "r5", name: "Utility Cargo", style: "Pantalón cargo", kind: "pants", images: ["p1", "p2", "p3", "p4"].map(image => `assets/ropa/cargo-${image}.jpeg`), price: 1199, stock: 7, sizes: ["28", "30", "32", "34"], color: "#85846a", accent: "#d9d2bd", description: "Pantalón cargo de corte relajado con bolsillos amplios y funcionales. Combina con playeras oversize y tenis para un outfit urbano.", badge: "URBAN" },
    { id: "r6", name: "Sunday Crew", style: "Sudadera crewneck", kind: "hoodie", images: ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6"].map(image => `assets/ropa/crew-${image}.jpeg`), price: 999, stock: 9, sizes: ["S", "M", "L", "XL"], color: "#d5c8b5", accent: "#a7543e", description: "Sudadera crewneck de cuello redondo y silueta cómoda. Una prenda versátil para usar en casa o sumar una capa a tu look diario.", badge: "FAVORITA" },
    { id: "r8", name: "Studio Overshirt", style: "Sobrecamisa", kind: "jacket", images: ["s1", "s2", "s3", "s4", "s5"].map(image => `assets/ropa/overshirt-${image}.jpeg`), price: 1399, stock: 5, sizes: ["S", "M", "L", "XL"], color: "#9b735b", accent: "#ead9bf", description: "Sobrecamisa de silueta relajada con botones y bolsillos frontales. Úsala abierta sobre una playera o cerrada como camisa ligera.", badge: "ÚLTIMAS PIEZAS" }
  ],
  tenis: [
    { id: "t1", name: "Adidas Street", style: "Adidas", kind: "sneaker", images: ["ad1", "ad2", "ad3", "ad4"].map(image => `assets/tenis/adidas-${image}.jpeg`), price: 1499, stock: 7, sizes: ["25", "26", "27", "28", "29"], color: "#e7dfd1", accent: "#536356", description: "Tenis Adidas de silueta urbana, con varias vistas para apreciar sus detalles. Un par versátil para completar tus looks diarios.", badge: "ADIDAS" },
    { id: "t3", name: "Nike Court", style: "Nike", kind: "sneaker", images: ["nk1", "nk2", "nk3"].map(image => `assets/tenis/nike-${image}.jpeg`), price: 1099, stock: 10, sizes: ["24", "25", "26", "27", "28"], color: "#d0bca0", accent: "#3d4541", description: "Tenis Nike de estilo deportivo y cómodo, con una galería de sus diferentes ángulos y detalles.", badge: "NIKE" },
    { id: "t5", name: "Jordan Retro", style: "Jordan", kind: "sneaker", images: ["jo1", "jo2", "jo3", "jo4", "jo5"].map(image => `assets/tenis/jordan-${image}.jpeg`), price: 1699, stock: 4, sizes: ["25", "26", "27", "28", "29"], color: "#ad755d", accent: "#ead8bd", description: "Tenis Jordan de inspiración retro. Explora todas sus fotos y encuentra los detalles de esta silueta con carácter.", badge: "JORDAN" },
    { id: "t6", name: "Puma Runner", style: "Puma", kind: "sneaker", images: ["pu1", "pu2", "pu3"].map(image => `assets/tenis/puma-${image}.jpeg`), price: 1999, stock: 8, sizes: ["25", "26", "27", "28", "29"], color: "#d8d9d2", accent: "#748b83", description: "Tenis Puma de líneas dinámicas y diseño ligero. La galería muestra sus vistas para que los aprecies mejor.", badge: "PUMA" }
  ]
};

const peso = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
const app = document.querySelector("#app");
const views = [...document.querySelectorAll(".view")];
const grid = document.querySelector("#product-grid");
const showcase = document.querySelector("#showcase-track");
const productSearch = document.querySelector("#product-search");
const styleFilter = document.querySelector("#product-style-filter");
const productSort = document.querySelector("#product-sort");
const productCount = document.querySelector("#product-count");
const cartCount = document.querySelector("#cart-count");
const cartContent = document.querySelector("#cart-content");
const cartButton = document.querySelector(".cart-indicator");
const toast = document.querySelector("#toast");
const deliveryForm = document.querySelector("#delivery-form");
const paymentForm = document.querySelector("#payment-form");
let selectedProduct = null;
let activeCategory = "ropa";
let checkoutAddress = null;
const cartStorageKey = "visera-club-cart";
let toastTimer;

function announce(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 3000);
}

function loadCart() {
  try {
    const savedCart = localStorage.getItem(cartStorageKey);
    if (!savedCart) return [];
    const parsedCart = JSON.parse(savedCart);
    if (!Array.isArray(parsedCart)) throw new Error("El carrito guardado no tiene un formato válido.");
    return parsedCart.filter(item => {
      const product = findProduct(item.productId);
      const validItem = product
        && product.sizes.includes(item.size)
        && Number.isInteger(item.quantity)
        && item.quantity > 0
        && item.quantity <= product.stock;
      if (!validItem) announce("Se omitió un artículo guardado que ya no es válido.");
      return validItem;
    });
  } catch (error) {
    announce("No se pudo recuperar el carrito guardado. Puedes seguir usando la tienda.");
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  } catch (error) {
    announce("No se pudo guardar el carrito en este dispositivo. Seguirá disponible mientras no cierres esta pestaña.");
  }
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = count;
  cartButton.setAttribute("aria-label", `Abrir carrito, ${count} ${count === 1 ? "artículo" : "artículos"}`);
}

function getProductCartQuantity(productId) {
  return cart
    .filter(item => item.productId === productId)
    .reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return cart.reduce((total, item) => total + findProduct(item.productId).price * item.quantity, 0);
}

function normalizeLocation(value) {
  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-MX");
}

function isCashDeliveryAvailable(address) {
  const isMexico = normalizeLocation(address.country) === "mexico";
  const isMorelos = normalizeLocation(address.state) === "morelos";
  const allowedMunicipality = ["jiutepec", "cuernavaca", "emiliano zapata"]
    .includes(normalizeLocation(address.municipality));
  return isMexico && isMorelos && allowedMunicipality;
}

function getEstimatedDeliveryDate() {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 1);
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(deliveryDate);
}

function addToCart(product, size, quantity) {
  const alreadyAdded = getProductCartQuantity(product.id);
  const available = product.stock - alreadyAdded;
  if (available <= 0) {
    announce("Ya agregaste todas las piezas disponibles de este producto.");
    return;
  }
  const addedQuantity = Math.min(quantity, available);
  const existingItem = cart.find(item => item.productId === product.id && item.size === size);
  if (existingItem) {
    existingItem.quantity += addedQuantity;
  } else {
    cart.push({ productId: product.id, size, quantity: addedQuantity });
  }
  saveCart();
  updateCartCount();
  announce(`${product.name} · ${size} agregado${addedQuantity > 1 ? `s (${addedQuantity})` : ""} al carrito.`);
  if (addedQuantity < quantity) announce(`Solo había ${available} pieza${available === 1 ? "" : "s"} disponible${available === 1 ? "" : "s"}; se agregó esa cantidad.`);
}

function renderCart() {
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <span class="empty-cart-symbol" aria-hidden="true">♧</span>
        <h2>Tu carrito está vacío</h2>
        <p>Cuando encuentres algo que te guste, aquí podrás revisar tu selección.</p>
        <button class="button button-dark" type="button" data-view="menu">Explorar la tienda <span aria-hidden="true">↗</span></button>
      </div>`;
    return;
  }

  const units = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = getCartTotal();
  const lines = cart.map((item, index) => {
    const product = findProduct(item.productId);
    return `
      <article class="cart-item">
        <img class="cart-item-image" src="${productImage(product)}" alt="Ilustración de ${product.name}">
        <div>
          <h2 class="cart-item-name">${product.name}</h2>
          <p class="cart-item-meta">${product.style} · Talla ${item.size}</p>
          <div class="cart-item-controls">
            <span class="quantity-control" aria-label="Cantidad de ${product.name}">
              <button type="button" data-cart-action="decrease" data-cart-index="${index}" aria-label="Quitar una unidad de ${product.name}">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-action="increase" data-cart-index="${index}" aria-label="Agregar una unidad de ${product.name}" ${getProductCartQuantity(product.id) >= product.stock ? "disabled" : ""}>+</button>
            </span>
            <button class="cart-remove" type="button" data-cart-action="remove" data-cart-index="${index}">Quitar</button>
          </div>
        </div>
        <span class="cart-item-price">${peso.format(product.price * item.quantity)}</span>
      </article>`;
  }).join("");

  cartContent.innerHTML = `
    <div class="cart-layout">
      <div class="cart-list">${lines}</div>
      <aside class="cart-summary">
        <h2>Resumen</h2>
        <div class="summary-row"><span>Artículos</span><span>${units}</span></div>
        <div class="summary-row"><span>Subtotal</span><span>${peso.format(subtotal)}</span></div>
        <div class="summary-row total"><span>Total estimado</span><span>${peso.format(subtotal)}</span></div>
        <button class="button button-dark checkout-start" type="button">Continuar <span aria-hidden="true">→</span></button>
        <p class="cart-disclaimer">Esta tienda es una demostración. No se realizan pagos ni pedidos reales.</p>
        <button class="clear-cart" type="button" data-cart-action="clear">Vaciar carrito</button>
      </aside>
    </div>`;
}

function renderPaymentSummary() {
  if (!checkoutAddress) return;
  document.querySelector("#payment-address-summary").textContent =
    `${checkoutAddress.street}, ${checkoutAddress.municipality}, ${checkoutAddress.state}, ${checkoutAddress.postalCode}, ${checkoutAddress.country}. ${checkoutAddress.description}`;
  document.querySelector("#payment-total").textContent = peso.format(getCartTotal());
  const cashOption = paymentForm.querySelector('[value="cash"]');
  const cashLabel = cashOption.closest(".payment-option");
  const cashNote = document.querySelector("#cash-payment-note");
  const cashAvailable = isCashDeliveryAvailable(checkoutAddress);
  cashOption.disabled = !cashAvailable;
  cashLabel.classList.toggle("payment-option-disabled", !cashAvailable);
  if (!cashAvailable && cashOption.checked) cashOption.checked = false;
  cashNote.textContent = cashAvailable
    ? `Disponible en ${checkoutAddress.municipality}. Entrega estimada: mañana (${getEstimatedDeliveryDate()}); pago en persona al recibir.`
    : "No disponible. El pago en efectivo solo se ofrece en México, estado de Morelos, en Jiutepec, Cuernavaca o Emiliano Zapata; puedes elegir tarjeta.";
}

function showCheckoutResult(method) {
  const isCard = method === "card";
  document.querySelector("#checkout-result-title").textContent = isCard ? "Pago no realizado" : "Efectivo disponible";
  document.querySelector("#checkout-result-message").textContent = isCard
    ? "No hay una pasarela de pago conectada, así que no podemos procesar la tarjeta. No pedimos datos bancarios ni NIP."
    : `Entrega estimada: mañana (${getEstimatedDeliveryDate()}). El pago sería en efectivo y en persona al recibir. Esto es una demostración; no se envió un pedido real.`;
  document.querySelector("#result-payment-method").textContent = isCard ? "Tarjeta (no procesada)" : "Efectivo al recibir";
  document.querySelector("#result-total").textContent = peso.format(getCartTotal());
  document.querySelector("#result-destination").textContent =
    `${checkoutAddress.municipality}, ${checkoutAddress.state}, ${checkoutAddress.country}`;
  showView("checkout-result");
}

function productImage(product, label = product.name) {
  if (product.images?.length) return product.images[0];
  const safeLabel = label.replace(/[&<>"']/g, "");
  let illustration;
  if (product.kind === "sneaker") {
    illustration = `
      <ellipse cx="220" cy="254" rx="142" ry="17" fill="#d6d2c8"/>
      <path d="M76 213c22-5 47-21 63-45l21-33c7-11 18-12 25-2l29 40c13 17 38 26 71 30l58 8c20 3 34 16 34 31v14H88c-18 0-28-10-26-24 1-9 6-16 14-19Z" fill="${product.color}" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>
      <path d="m167 137 12 55c25 8 66 11 99 10l-47-41-32-32c-8-8-20-5-25 8Z" fill="${product.color}" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>
      <path d="M65 239c76 9 217 9 313-1 3 8 1 17-7 23-12 8-33 12-59 12H88c-19 0-29-10-27-23 0-4 2-8 4-11Z" fill="#fffaf0" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>
      <path d="M173 165c12 9 25 12 41 13m-34-27c13 10 26 14 43 15m-31-28c13 10 26 15 43 16" fill="none" stroke="${product.accent}" stroke-width="6" stroke-linecap="round"/>
      <path d="M112 220c45-8 75-25 98-49m-80 57c39-2 74-13 102-33" fill="none" stroke="${product.accent}" stroke-width="3" opacity=".8"/>
      <path d="M100 247h30m22 0h30m22 0h30m22 0h30m22 0h30" stroke="#d1c9b8" stroke-width="2" stroke-linecap="round"/>`;
  } else if (product.kind === "pants") {
    illustration = `
      <ellipse cx="220" cy="267" rx="106" ry="13" fill="#d6d2c8"/>
      <path d="M150 76h140l-8 90 25 102c-23 13-50 10-72 2l-14-75-17 75c-22 8-49 11-72-2l27-102Z" fill="${product.color}" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>
      <path d="M150 76h140l-3 34H153Z" fill="${product.accent}" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>
      <path d="M220 110v82m-58-68h34v45h-37m93-45h-25v45h30" fill="none" stroke="#383b35" stroke-width="3" stroke-linejoin="round"/>
      <path d="M177 112v23m87-23v23m-31-27v13" stroke="#fffaf0" stroke-width="3" stroke-linecap="round"/>
      <path d="m136 256 56 3m31 0 62-3" stroke="${product.accent}" stroke-width="6" stroke-linecap="round"/>`;
  } else {
    const isHoodie = product.kind === "hoodie";
    const isJacket = product.kind === "jacket";
    illustration = `
      <ellipse cx="220" cy="267" rx="128" ry="14" fill="#d6d2c8"/>
      ${isHoodie ? `<path d="M178 91c2-22 17-38 42-38s40 16 42 38l-15 34h-54Z" fill="${product.accent}" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>` : ""}
      <path d="${isHoodie ? "M178 103 147 116l-43 51 24 21 27-25-8 99c48 14 126 14 174 0l-8-99 27 25 24-21-43-51-31-13-19 18h-54Z" : "M181 79 143 91l-48 64 31 25 28-31-9 113c48 15 122 15 170 0l-9-113 28 31 31-25-48-64-38-12-24 24h-54Z"}" fill="${product.color}" stroke="#383b35" stroke-width="4" stroke-linejoin="round"/>
      ${isJacket ? `<path d="M220 103v151m-80-94 34 3m92-3-34 3" stroke="${product.accent}" stroke-width="4" stroke-linecap="round"/><circle cx="220" cy="131" r="3" fill="#fffaf0"/><circle cx="220" cy="155" r="3" fill="#fffaf0"/><circle cx="220" cy="179" r="3" fill="#fffaf0"/>` : ""}
      ${isHoodie ? `<path d="M174 195c20-8 72-8 92 0v34c-25-7-67-7-92 0Z" fill="${product.accent}" opacity=".95"/><path d="M205 123v33m30-33v33" stroke="#f5efe4" stroke-width="3" stroke-linecap="round"/>` : ""}
      <path d="M168 245h104" stroke="${product.accent}" stroke-width="5" stroke-linecap="round"/>
      <path d="M153 106 125 151m182-45 28 45" stroke="${product.accent}" stroke-width="3" opacity=".8"/>`;
  }
  const hat = `
      <ellipse cx="218" cy="246" rx="129" ry="19" fill="#d5d1c7"/>
      <g transform="rotate(-5 220 174)">
        <path d="M105 184c7-64 48-108 107-111 58-2 99 40 113 105-56-8-145-3-220 6Z" fill="${product.color}"/>
        <path d="M104 181c66-15 166-15 226-1 22 5 38 14 40 24-61 33-166 34-228 11-23-9-36-20-38-34Z" fill="${product.color}"/>
        <path d="M330 182c18 2 32 10 40 22-18 11-39 17-64 19" fill="none" stroke="${product.accent}" stroke-width="5" stroke-linecap="round"/>
        <path d="M211 76c-4 28-4 62 1 94" fill="none" stroke="${product.accent}" stroke-width="3" opacity=".8"/>
        <path d="M125 145c25-31 53-47 83-51M298 145c-18-27-40-43-63-49" fill="none" stroke="${product.accent}" stroke-width="2" opacity=".55"/>
        <circle cx="211" cy="83" r="5" fill="${product.accent}"/>
        <path d="M172 164c25-5 52-6 79-5" fill="none" stroke="${product.accent}" stroke-width="4" stroke-linecap="round" opacity=".9"/>
        <path d="M132 212c45 13 107 17 161 11" fill="none" stroke="#ffffff" stroke-width="2" opacity=".3"/>
      </g>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 330" role="img" aria-label="${safeLabel}">
    <rect width="440" height="330" fill="#eeece5"/>
    <circle cx="355" cy="67" r="42" fill="#e4dfd2"/>
    ${product.kind ? illustration : hat}
    <text x="220" y="298" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" letter-spacing="3" fill="#77766f">${safeLabel.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showView(id) {
  views.forEach(view => { view.hidden = view.id !== `${id}-view`; });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCatalog(category) {
  activeCategory = category;
  const collection = products[category];
  const categoryName = { ropa: "Ropa", tenis: "Tenis" }[category];
  document.querySelector("#catalog-title").textContent = categoryName;
  document.querySelector("#catalog-description").textContent = `${collection.length} piezas para completar tu estilo. Precios en pesos mexicanos.`;
  styleFilter.innerHTML = `<option value="all">Todos los estilos</option>${[...new Set(collection.map(product => product.style))]
    .sort((a, b) => a.localeCompare(b, "es"))
    .map(style => `<option value="${style}">${style}</option>`).join("")}`;
  productSearch.value = "";
  styleFilter.value = "all";
  productSort.value = "featured";
  renderCatalogProducts();
  showView("catalog");
}

function renderCatalogProducts() {
  const collection = products[activeCategory];
  grid.dataset.category = activeCategory;
  const query = normalizeLocation(productSearch.value);
  const selectedStyle = styleFilter.value;
  const sort = productSort.value;
  const matchingProducts = collection.filter(product => {
    const searchableText = normalizeLocation(`${product.name} ${product.style} ${product.description} ${product.badge}`);
    return (selectedStyle === "all" || product.style === selectedStyle)
      && (!query || searchableText.includes(query));
  });

  if (sort === "price-asc") matchingProducts.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") matchingProducts.sort((a, b) => b.price - a.price);
  if (sort === "name") matchingProducts.sort((a, b) => a.name.localeCompare(b.name, "es"));

  const itemWord = activeCategory === "tenis"
    ? matchingProducts.length === 1 ? "par" : "pares"
    : matchingProducts.length === 1 ? "prenda" : "prendas";
  productCount.textContent = `${matchingProducts.length} ${itemWord} ${matchingProducts.length === 1 ? "disponible" : "disponibles"}`;
  if (matchingProducts.length === 0) {
    grid.innerHTML = `
      <div class="catalog-empty">
        <span aria-hidden="true">⌕</span>
        <h2>No encontramos ese producto</h2>
        <p>Prueba con otro nombre o cambia los filtros.</p>
        <button class="button button-outline" type="button" data-catalog-reset>Limpiar filtros</button>
      </div>`;
    return;
  }
  grid.innerHTML = matchingProducts.map(product => `
    <article class="product-card" tabindex="0" role="button" data-product="${product.id}" aria-label="Ver ${product.name}, ${peso.format(product.price)}">
      <div class="product-image-wrap product-image-wrap-gallery">
        <div class="product-image-gallery" style="--gallery-count: ${product.images?.length || 1}" aria-label="Todas las fotos de ${product.style}">
          ${product.images?.length
            ? product.images.map((image, index) => `<img class="product-image" src="${image}" alt="${product.style}, foto ${index + 1}">`).join("")
            : `<img class="product-image" src="${productImage(product)}" alt="${product.name}">`}
        </div>
        <span class="product-tag">${product.badge}</span>
      </div>
      <div class="product-info">
        <div><p class="product-name">${product.name}</p><p class="product-type">${product.style}</p></div>
        <span class="product-price">${peso.format(product.price)}</span>
      </div>
    </article>`).join("");
}

function findProduct(id) {
  return Object.values(products).flat().find(product => product.id === id);
}

function openDetail(product) {
  selectedProduct = product;
  const available = product.stock - getProductCartQuantity(product.id);
  const detail = document.querySelector("#product-detail");
  const gallery = product.images?.length > 1
    ? `<div class="detail-gallery" aria-label="Más imágenes de ${product.name}">${product.images.map((image, index) => `
      <button class="detail-thumbnail" type="button" data-gallery-image="${image}" aria-label="Ver imagen ${index + 1} de ${product.name}" aria-pressed="${index === 0}">
        <img src="${image}" alt="">
      </button>`).join("")}</div>`
    : "";
  detail.innerHTML = `
    <button class="text-button detail-back" type="button" data-view="catalog">← Volver a la colección</button>
    <div class="detail-layout">
      <div class="detail-media">
        <img class="detail-image" id="detail-main-image" src="${productImage(product)}" alt="${product.name}">
        ${gallery}
      </div>
      <div class="detail-copy">
        <p class="eyebrow">${product.badge} · ${product.style}</p>
        <h1>${product.name}</h1>
        <p class="detail-description">${product.description}</p>
        <div class="detail-price">${peso.format(product.price)}</div>
        <p class="detail-stock">${available > 0 ? `${available} piezas disponibles` : "Ya agregaste todas las piezas disponibles"}</p>
        <div class="detail-fields">
          <label>TALLA<select id="product-size">${product.sizes.map(size => `<option>${size}</option>`).join("")}</select></label>
          <label>CANTIDAD<select id="product-quantity">${Array.from({ length: available }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("")}</select></label>
        </div>
        <button class="button button-dark add-cart" type="button" ${available < 1 ? "disabled" : ""}>Agregar al carrito <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <button class="button button-outline detail-return" type="button" data-view="catalog">Volver</button>`;
  showView("detail");
}

function createShowcase() {
  const imagesToShow = [...products.ropa, ...products.tenis]
    .flatMap(product => product.images ?? [productImage(product)]);
  const columns = Array.from({ length: 4 }, (_, column) =>
    imagesToShow.filter((_, index) => index % 4 === column));
  showcase.innerHTML = Array.from({ length: 4 }, (_, column) => {
    const images = columns[column].map(image => `<img src="${image}" alt="">`).join("");
    return `<div class="showcase-column"><div class="showcase-sequence">${images}</div><div class="showcase-sequence" aria-hidden="true">${images}</div></div>`;
  }).join("");
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-view], [data-category], [data-product], [data-cart-action], [data-catalog-reset], [data-gallery-image], .add-cart, .checkout-start, #copy-link");
  if (!target) return;
  if (target.matches("[data-gallery-image]")) {
    document.querySelector("#detail-main-image").src = target.dataset.galleryImage;
    document.querySelectorAll(".detail-thumbnail").forEach(thumbnail => {
      thumbnail.setAttribute("aria-pressed", String(thumbnail === target));
    });
    return;
  }
  if (target.matches("[data-catalog-reset]")) {
    productSearch.value = "";
    styleFilter.value = "all";
    productSort.value = "featured";
    renderCatalogProducts();
    return;
  }
  if (target.id === "copy-link") {
    const input = document.querySelector("#share-link");
    const message = document.querySelector("#share-message");
    input.select();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(input.value)
        .then(() => { message.textContent = "Link copiado; ya puedes compartirlo para abrirlo desde otros dispositivos."; })
        .catch(() => { message.textContent = "Seleccionamos el enlace: cópialo manualmente. Para compartirlo, publica la página en internet."; });
    } else {
      const copied = document.execCommand("copy");
      message.textContent = copied
        ? "Link copiado; ya puedes compartirlo para abrirlo desde otros dispositivos."
        : "Seleccionamos el enlace: cópialo manualmente. Para compartirlo, publica la página en internet.";
    }
    return;
  }
  if (target.matches("[data-category]")) {
    openCatalog(target.dataset.category);
    return;
  }
  if (target.matches("[data-product]")) {
    const product = findProduct(target.dataset.product);
    if (product) openDetail(product);
    return;
  }
  if (target.matches("[data-cart-action]")) {
    const action = target.dataset.cartAction;
    if (action === "clear") {
      cart = [];
    } else {
      const index = Number(target.dataset.cartIndex);
      const item = cart[index];
      if (!item) return;
      if (action === "remove") {
        cart.splice(index, 1);
      } else if (action === "increase") {
        const product = findProduct(item.productId);
        if (getProductCartQuantity(product.id) >= product.stock) {
          announce("No hay más piezas disponibles de este producto.");
          return;
        }
        item.quantity += 1;
      } else if (action === "decrease") {
        if (item.quantity <= 1) {
          cart.splice(index, 1);
        } else {
          item.quantity -= 1;
        }
      }
    }
    saveCart();
    updateCartCount();
    renderCart();
    return;
  }
  if (target.matches(".checkout-start")) {
    if (cart.length === 0) {
      announce("Agrega al menos un producto antes de continuar.");
      return;
    }
    showView("delivery");
    return;
  }
  if (target.matches(".add-cart")) {
    const quantity = Number(document.querySelector("#product-quantity").value);
    const size = document.querySelector("#product-size").value;
    addToCart(selectedProduct, size, quantity);
    return;
  }
  const destination = target.dataset.view;
  if (destination === "cart") {
    renderCart();
    showView("cart");
  } else if (destination === "catalog" && selectedProduct) {
    openCatalog(activeCategory);
  } else if (destination) {
    showView(destination);
  }
});

productSearch.addEventListener("input", renderCatalogProducts);
styleFilter.addEventListener("change", renderCatalogProducts);
productSort.addEventListener("change", renderCatalogProducts);

deliveryForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(deliveryForm);
  checkoutAddress = {
    country: formData.get("country").trim(),
    state: formData.get("state").trim(),
    street: formData.get("street").trim(),
    municipality: formData.get("municipality").trim(),
    postalCode: formData.get("postalCode").trim(),
    description: formData.get("description").trim()
  };
  renderPaymentSummary();
  showView("payment");
});

paymentForm.addEventListener("submit", event => {
  event.preventDefault();
  const method = new FormData(paymentForm).get("paymentMethod");
  if ((method !== "card" && method !== "cash") || !checkoutAddress || cart.length === 0) {
    announce("Revisa tu dirección, carrito y forma de pago para continuar.");
    showView(cart.length === 0 ? "cart" : "delivery");
    return;
  }
  if (method === "cash" && !isCashDeliveryAvailable(checkoutAddress)) {
    renderPaymentSummary();
    announce("El efectivo solo está disponible en México, Morelos, Jiutepec, Cuernavaca o Emiliano Zapata. Elige tarjeta para continuar.");
    return;
  }
  showCheckoutResult(method);
});

document.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".product-card")) {
    event.preventDefault();
    const product = findProduct(event.target.dataset.product);
    if (product) openDetail(product);
  }
});

const shareUrl = "https://vodkita64-droid.github.io/";
document.querySelector("#share-link").value = shareUrl;
updateCartCount();
createShowcase();
const requestedCategory = new URLSearchParams(window.location.search).get("categoria");
if (Object.hasOwn(products, requestedCategory)) {
  openCatalog(requestedCategory);
}
