function hideAds() {
  const ad1 = document.querySelector('[style*="width: 400px; height: auto; bottom: 5px; position: fixed"]');
  if (ad1) ad1.style.display = "none";

  const ad2 = document.querySelector('[style*="clear:both;width:100%;height:90px"]');
  if (ad2) ad2.style.display = "none";
}

// Spustit hned i po načtení stránky
hideAds();
document.addEventListener("DOMContentLoaded", hideAds);