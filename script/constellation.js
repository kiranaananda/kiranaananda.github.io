document.addEventListener("DOMContentLoaded", function () {
  const scatteredItems = document.querySelectorAll(".scattered-item");
  if (!scatteredItems.length) return;

  function updateParallax() {
    const windowCenter = window.innerHeight / 2;

    scatteredItems.forEach(function (item) {
      const speed = parseFloat(item.getAttribute("data-speed")) || 0;
      const rect = item.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowCenter;
      const translateY = distanceFromCenter * speed;

      item.style.transform = "translate3d(0, " + translateY + "px, 0)";
    });
  }

  window.addEventListener("scroll", function () {
    requestAnimationFrame(updateParallax);
  });

  updateParallax();
});
