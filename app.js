/* ---------------------------------------------------- */
/* --------------- Particle JS Config ----------------- */
/* ---------------------------------------------------- */

particlesJS("particle-canvas", {
  "particles": {
    "number": {
      // Adjust for desired density. More particles = more computation. Start lower.
      "value": 250, // Adjusted slightly
      "density": {
        "enable": true,
        "value_area": 800 // Higher value = particles are more spread out
      }
    },
    "color": {
      "value": "#ffffff" // Color of the dots
    },
    "shape": {
      "type": "circle", // Can be "star", "edge", "triangle", "polygon"
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 1, // Opacity of dots - Adjusted slightly
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.6, // Slowed down opacity animation slightly
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 2.5, // Size of dots (keep small for 'tiny dots') - Adjusted slightly
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, // This creates the network connection effect
      "distance": 130, // How close particles need to be to link - Adjusted slightly
      "color": "#4db8ff", // Color of the connecting lines (matches accent)
      "opacity": 0.6, // Opacity of the lines (keep subtle) - Adjusted slightly
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.2, // Speed particles move around - Adjusted slightly
      "direction": "none", // Particles move in random directions
      "random": true,
      "straight": false,
      "out_mode": "out", // Particles leave the canvas boundaries
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas", // Interactions trigger within the canvas area
    "events": {
      "onhover": {
        "enable": true, // Enable mouse hover interaction
        "mode": "grab" // "grab", "repulse", "bubble"
      },
      "onclick": {
        "enable": true, // Enable click interaction
        "mode": "push" // "push" (adds particles), "remove", "bubble"
      },
      "resize": true // Recalculate particle positions on window resize
    },
    "modes": {
      "grab": {
        "distance": 150, // Increased grab distance slightly
        "line_opacity": 0.8 // Make grabbed lines slightly more visible
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100, // Adjusted repulse distance
        "duration": 0.4
      },
      "push": {
        "particles_nb": 3 // Reduced particles added on click slightly
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true // Adjusts particle density for high-DPI screens
});


/* ---------------------------------------------------- */
/* --------------- AOS Initialization ----------------- */
/* ---------------------------------------------------- */

AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


/* ---------------------------------------------------- */
/* ------------- Custom Functionality JS -------------- */
/* ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // --- Estimator Form Logic (Placeholder) ---
    const estimatorForm = document.getElementById('estimator-form');
    const estimateResultDiv = document.getElementById('estimate-result');

    if (estimatorForm) {
        estimatorForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // *** START: ADD YOUR ESTIMATION LOGIC HERE ***
            console.log('Estimator form submitted');
            // 1. Get values from form inputs:
            //    const size = document.getElementById('office-size').value;
            //    const drops = parseInt(document.getElementById('data-drops').value) || 0;
            //    const wifi = document.getElementById('wifi').value;
            //    const cameras = parseInt(document.getElementById('cameras').value) || 0;

            // 2. Implement your pricing logic based on these values
            //    let basePrice = 0;
            //    let dropPrice = drops * YOUR_PRICE_PER_DROP;
            //    // ... etc. for size, wifi, cameras ...
            //    let totalPrice = basePrice + dropPrice + ... ;
            let estimatedCost = "Calculation logic needed"; // Placeholder

            // 3. Display the result
            if (estimateResultDiv) {
                 // Example: Displaying a simple text result. You might want to format it better.
                 estimateResultDiv.innerHTML = `
                    <p><strong>Preliminary Estimate:</strong> ${estimatedCost}</p>
                    <p><small>Note: This is a rough estimate. Please contact us for a detailed quote.</small></p>
                `;
                estimateResultDiv.style.display = 'block'; // Make sure it's visible
            }
             // *** END: ESTIMATION LOGIC ***
        });
    }

    // --- Carousel Initialization (Placeholder) ---
    // If you add SwiperJS or Flickity, initialize them here.
    // Example for SwiperJS (make sure you've included Swiper's CSS/JS):
    /*
    const testimonialSwiper = new Swiper('.testimonial-carousel', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination', // Add pagination divs in HTML if needed
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // Add button divs in HTML if needed
            prevEl: '.swiper-button-prev',
        },
    });

    const portfolioSwiper = new Swiper('.portfolio-grid', { // Or a dedicated carousel container
        // Configuration for portfolio slider
        slidesPerView: 1,
        spaceBetween: 30,
         breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }
        // ... other options
    });
    */
   console.log('Website scripts loaded.');

});

// Add any other general JavaScript functionality here