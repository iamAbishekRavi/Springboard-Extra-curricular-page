
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
  }
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Animated Cards

const activityCards = document.getElementsByClassName("activity-card");

for (let i = 0; i < activityCards.length; i++) {
  activityCards[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.05)";
    this.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  });

  activityCards[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.1)";
  });
}
