const button = document.getElementById("whatsapp-button");
if (button) button.addEventListener("click", () => {
  if (typeof window.fbq === "function") window.fbq("track", "Lead");
});
