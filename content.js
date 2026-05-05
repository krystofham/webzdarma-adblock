function removeAfterFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  let el = footer.nextElementSibling;
  while (el) {
    const next = el.nextElementSibling;
    el.remove();
    el = next;
  }
}

removeAfterFooter();
document.addEventListener("DOMContentLoaded", removeAfterFooter);