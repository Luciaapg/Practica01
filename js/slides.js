// Selección de elementos del carrusel
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
let currentSlide = 0;

// Función para mostrar un slide específico
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Mover al siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mover al slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Agregar eventos a los botones
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Mostrar el slide inicial
showSlide(currentSlide);
