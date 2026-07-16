const button = document.getElementById("whatsapp-button");

button.addEventListener("click", () => {
  // Dispara o evento Lead quando o Pixel da Meta estiver instalado.
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
});
