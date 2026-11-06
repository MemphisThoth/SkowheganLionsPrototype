
document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".photo-card"));
  const lightbox = document.getElementById("lightbox");
  const image = lightbox.querySelector(".lightbox-image");
  const title = lightbox.querySelector(".lightbox-title");
  const description = lightbox.querySelector(".lightbox-description");

  const closeButton = lightbox.querySelector(".lightbox-close");
  const previousButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");

  let currentIndex = 0;

  function showPhoto(index) {
    currentIndex = (index + cards.length) % cards.length;

    const card = cards[currentIndex];

    image.src = card.dataset.full;
    image.alt = card.querySelector("img").alt;
    title.textContent = card.dataset.title;
    description.textContent = card.dataset.description || "";

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    image.src = "";
    document.body.style.overflow = "";
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => showPhoto(index));
  });

  closeButton.addEventListener("click", closeLightbox);

  previousButton.addEventListener("click", () => {
    showPhoto(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showPhoto(currentIndex + 1);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
    if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
  });
});
