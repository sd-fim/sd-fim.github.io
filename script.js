const WHATSAPP_NUMBER = "905305152157";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".order-product").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "Ürünler";
    const message = `Merhaba SD fim, ${product} hakkında bilgi almak ve sipariş vermek istiyorum. Gramaj ve fiyat bilgisi paylaşabilir misiniz?`;
    openWhatsApp(message);
  });
});

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const product = document.getElementById("productSelect").value;
  const weight = document.getElementById("weight").value.trim();
  const quantity = document.getElementById("quantity").value;
  const extraMessage = document.getElementById("message").value.trim();

  let message = "Merhaba SD fim, sipariş/ürün bilgisi almak istiyorum.\n\n";
  if (name) message += `Ad: ${name}\n`;
  message += `Ürün: ${product}\n`;
  if (weight) message += `Gramaj: ${weight}\n`;
  message += `Adet: ${quantity || "1"}\n`;
  if (extraMessage) message += `Not: ${extraMessage}\n`;
  message += "\nFiyat ve teslimat bilgisi paylaşabilir misiniz?";

  openWhatsApp(message);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
