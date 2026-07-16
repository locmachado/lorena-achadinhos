document.getElementById("current-year").textContent = new Date().getFullYear();

const whatsappButton = document.getElementById("whatsapp-button");

whatsappButton.addEventListener("click", () => {
  // Evento preparado para o Pixel da Meta.
  // Quando você tiver o ID do Pixel, o código-base será adicionado ao <head>.
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
});
