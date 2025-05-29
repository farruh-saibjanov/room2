document.addEventListener('DOMContentLoaded', () => {
  const sliderImages = [
    '/images/desktop-image-hero-1.jpg',
    '/images/desktop-image-hero-2.jpg',
    '/images/desktop-image-hero-3.jpg'
  ];
                
  let currentIndex = 0;

  const imageDiv = document.querySelector('.image-left');
  const buttons = document.querySelectorAll('.slider-btn');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (index === 0) {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
      } else {
        currentIndex = (currentIndex + 1) % sliderImages.length;
      }

      if (imageDiv instanceof HTMLElement) {
        imageDiv.style.backgroundImage = `url('${sliderImages[currentIndex]}')`;
      }
    });
  });
});
