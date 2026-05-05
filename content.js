function hideAfterFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  let el = footer.nextElementSibling;
  while (el) {
    el.style.display = "none";
    el = el.nextElementSibling;
  }
}

hideAfterFooter();
document.addEventListener("DOMContentLoaded", hideAfterFooter);