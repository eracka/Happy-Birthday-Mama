// script.js

// When the document loads
document.addEventListener('DOMContentLoaded', () => {
  // Add a welcome alert
  alert("Welcome to Mama's Birthday Celebration! 🎂");

  // Get the surprise button element
  const surpriseButton = document.querySelector('.surprise-button');
  
  // Add click event to the button
  surpriseButton.addEventListener('click', () => {
      // Create new heart elements
      for (let i = 0; i < 20; i++) {
          createHeart();
      }
      
      // Update the button text
      surpriseButton.textContent = "You're Amazing! 💖";
      
      // Reset button text after 2 seconds
      setTimeout(() => {
          surpriseButton.textContent = "Click for a Surprise!";
      }, 2000);
  });

  // Function to create floating hearts
  function createHeart() {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'fixed';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = Math.random() * 100 + '%';
      heart.style.fontSize = Math.random() * 30 + 20 + 'px';
      heart.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out`;
      document.body.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => heart.remove(), 5000);
  }

  // Add this to the DOMContentLoaded event listener

// NEW IMAGE OVERLAY CODE
const imageOverlay = document.getElementById('imageOverlay');
const overlayImage = document.getElementById('overlayImage');
const closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', () => {
        overlayImage.src = image.src;
        imageOverlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', closeOverlay);
imageOverlay.addEventListener('click', closeOverlay);

overlayImage.addEventListener('click', (e) => {
    e.stopPropagation();
});

function closeOverlay() {
    imageOverlay.style.display = 'none';
    overlayImage.src = '';
}
});
