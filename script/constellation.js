<script>
  document.addEventListener("DOMContentLoaded", () => {
    const scatteredItems = document.querySelectorAll(".scattered-item");

    function updateParallax() {
      scatteredItems.forEach((item) => {
        const speed = parseFloat(item.getAttribute("data-speed")) || 0;
        const rect = item.getBoundingClientRect();
        const windowCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;

        // Calculate distance from center of the viewport
        const distanceFromCenter = elementCenter - windowCenter;

        // Move element based on its specific speed multiplier
        const translateY = distanceFromCenter * speed;

        item.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    }

    // Run on scroll
    window.addEventListener("scroll", () => {
      requestAnimationFrame(updateParallax);
    });

    // Run on initial load
    updateParallax();
  });
</script>
