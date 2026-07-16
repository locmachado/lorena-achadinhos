document.getElementById("whatsapp-button").addEventListener("click", () => {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
});
