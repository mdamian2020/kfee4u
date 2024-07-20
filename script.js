function showOptions(productType) {
  // Ascunde toate opțiunile
  document.querySelectorAll(".options").forEach(function (element) {
    element.style.display = "none";
  });

  // Afișează opțiunile pentru tipul de produs selectat
  document.getElementById("options-" + productType).style.display = "block";
}
