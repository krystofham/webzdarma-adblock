function removeLastTwoDivs() {
  const allDivs = Array.from(document.body.querySelectorAll(':scope > div'));
  const lastTwo = allDivs.slice(-2);

  lastTwo.forEach(function(div) {
    div.remove();
  });
}

removeLastTwoDivs();