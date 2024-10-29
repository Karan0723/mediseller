/*document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var modal = new bootstrap.Modal(document.getElementById('contactFormModal'));
        modal.show();
    }, 2000); 

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        };

  

        alert('Form submitted!');
        var modal = bootstrap.Modal.getInstance(document.getElementById('contactFormModal'));
        modal.hide();
    });
});*/ //POPUP FORM

// document
//   .getElementById("searchForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const searchQuery = document.getElementById("searchInput").value;

//     console.log("Search query:", searchQuery);

//   });

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none"; // Hide the preloader after loading
});

const offerCardsWrapper = document.querySelector(".offer-cards");
const offerCards = document.querySelectorAll(".offer-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const cardWidth = offerCards[0].clientWidth;
const totalCards = offerCards.length;

// Duplicate the cards for infinite loop effect
for (let i = 0; i < totalCards; i++) {
  let clone = offerCards[i].cloneNode(true);
  offerCardsWrapper.appendChild(clone);
}

// Auto slide function
function autoSlide() {
  currentIndex++;
  offerCardsWrapper.style.transition = "transform 0.5s ease";
  offerCardsWrapper.style.transform = `translateX(${
    -currentIndex * cardWidth
  }px)`;

  // If we reach the last duplicate card, reset to the original first card
  if (currentIndex >= totalCards) {
    setTimeout(() => {
      offerCardsWrapper.style.transition = "none";
      currentIndex = 0; // Reset to the real first card
      offerCardsWrapper.style.transform = `translateX(0px)`;
    }, 500); // Match transition time
  }
}

//  slider to auto-slide every 3 seconds
let autoSlideInterval = setInterval(autoSlide, 3000);

// Controls for next and prev buttons
nextBtn.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  autoSlide();
  autoSlideInterval = setInterval(autoSlide, 3000); // Restart interval
});

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1;
    offerCardsWrapper.style.transition = "none";
    offerCardsWrapper.style.transform = `translateX(${
      -currentIndex * cardWidth
    }px)`;
    setTimeout(() => {
      offerCardsWrapper.style.transition = "transform 0.5s ease";
    }, 50);
  }
  offerCardsWrapper.style.transform = `translateX(${
    -currentIndex * cardWidth
  }px)`;
  autoSlideInterval = setInterval(autoSlide, 3000); // Restart interval
});

// Brand section

const brandsWrapper = document.querySelector(".brands-wrapper");
const brandImages = document.querySelectorAll(".brand-image");
const brandCount = brandImages.length / 2; // Total brands (without duplicates)
let index = 0;

// Set the initial position for the wrapper
brandsWrapper.style.transform = `translateX(0px)`;

// Function to move the brands
function slideBrands() {
  index++;

  // Move to the left
  brandsWrapper.style.transition = "transform 0.5s linear"; // Enable transition
  brandsWrapper.style.transform = `translateX(${-index * (169 + 20)}px)`;

  // Reset the index when we reach the end
  if (index >= brandCount) {
    setTimeout(() => {
      index = 0; // Reset index to 0
      brandsWrapper.style.transition = "none";
      brandsWrapper.style.transform = `translateX(0px)`; // Reset position
    }, 500);
  }
}

// Automatically slide every 3 seconds
setInterval(slideBrands, 3000);





// Form

// Thank you popup
const popup = document.getElementById("popupForm");
const thankYouPopup = document.getElementById("thankYouPopup");
const closeBtn = document.getElementsByClassName("close-button");

// Show the popup after a delay
window.onload = function () {
  setTimeout(() => {
    popup.classList.add("show");
  }, 1000);
};

// Function to close popup
function closePopup(popupElement) {
  popupElement.classList.remove("show");
}

// Close buttons functionality
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    closePopup(popup);
    closePopup(thankYouPopup);
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === popup) {
    closePopup(popup);
  }
  if (event.target === thankYouPopup) {
    closePopup(thankYouPopup);
  }
};

// Handle form submission with Web3Forms
document.getElementById("contactForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);
  const apiUrl = "https://api.web3forms.com/submit";

  fetch(apiUrl, {
    method: "POST",
    body: formData,
    headers: {
      accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        closePopup(popup);
        thankYouPopup.classList.add("show"); // Show the thank-you popup
      } else {
        alert("Submission failed! Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was a problem with your submission. Please try again.");
    });
};





// Onclick Form 






// Animation

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
  });

  if (window.innerWidth <= 768) {
    // Set a breakpoint
    document.querySelectorAll("[data-aos]").forEach((el) => {
      el.setAttribute("data-aos", "fade-up"); // Change to a more mobile-friendly effect
    });
    AOS.refresh(); // Refresh to apply the changes
  }
});
